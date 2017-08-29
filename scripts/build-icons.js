#! /usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs-extra');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const glob = require('glob');
const path = require('path');
const Mustache = require('mustache');
const camelCase = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');
const prettyBytes = require('pretty-bytes');
const SVGO = require('svgo');
const { VERBOSE } = process.env;

const SVG_DIR = path.join(__dirname, '../node_modules/material-design-icons');
const SVG_GLOB = '**/production/*_24px.svg';
const ICON_SRC_DIR = path.join(__dirname, '../src/components/Icon');
const ICON_COMPONENTS_DIR = ICON_SRC_DIR;
const ICON_COMPONENT_TEMPLATE_PATH = path.join(
  ICON_SRC_DIR,
  'templates/Icon.template.js'
);
const ICON_INDEX_TEMPLATE_PATH = path.join(
  ICON_SRC_DIR,
  'templates/index.template.js'
);
const ICON_CATEGORY_TEMPLATE_PATH = path.join(
  ICON_SRC_DIR,
  'templates/Category.template.js'
);
const ICON_CATEGORY_INDEX_TEMPLATE_PATH = path.join(
  ICON_SRC_DIR,
  'templates/CategoryIndex.template.js'
);

const REGEX_SVG_TAGS = /<svg .*?>(.*?)<\/svg>/;
const REGEX_SVG_NAME = /ic_(.*?)_24px.svg/;

// A subset of icons should be mirrored for RTL languages
// http://google.github.io/material-design-icons/#icons-in-rtl
const rtl = [
  'IconArrowBack',
  'IconArrowBackIos',
  'IconArrowForward',
  'IconArrowForwardIos',
  'IconArrowLeft',
  'IconArrowRight',
  'IconAssignment',
  'IconAssignmentReturn',
  'IconBackspace',
  'IconBatteryUnknown',
  'IconCallMade',
  'IconCallMerge',
  'IconCallMissed',
  'IconCallMissedOutgoing',
  'IconCallReceived',
  'IconCallSplit',
  'IconChevronLeft',
  'IconChevronRight',
  'IconChromeReaderMode',
  'IconDeviceUnknown',
  'IconDvr',
  'IconEventNote',
  'IconFeaturedPlayList',
  'IconFeaturedVideo',
  'IconFirstPage',
  'IconFlightLand',
  'IconFlightTakeoff',
  'IconFormatIndentDecrease',
  'IconFormatIndentIncrease',
  'IconFormatListBulleted',
  'IconForward',
  'IconFunctions',
  'IconHelp',
  'IconHelpOutline',
  'IconInput',
  'IconKeyboardBackspace',
  'IconKeyboardTab',
  'IconLabel',
  'IconLabelImportant',
  'IconLabelOutline',
  'IconLastPage',
  'IconLaunch',
  'IconList',
  'IconLiveHelp',
  'IconMobileScreenShare',
  'IconMultilineChart',
  'IconNavigateBefore',
  'IconNavigateNext',
  'IconNextWeek',
  'IconNote',
  'IconOpenInNew',
  'IconPlaylistAdd',
  'IconQueueMusic',
  'IconRedo',
  'IconReply',
  'IconReplyAll',
  'IconScreenShare',
  'IconSend',
  'IconShortText',
  'IconShowChart',
  'IconSort',
  'IconStarHalf',
  'IconSubject',
  'IconTrendingFlat',
  'IconToc',
  'IconTrendingDown',
  'IconTrendingUp',
  'IconUndo',
  'IconViewList',
  'IconViewQuilt',
  'IconWrapText'
];

let totalBytesSaved = 0;

const svgo = new SVGO({
  plugins: [
    { convertPathData: true },
    { mergePaths: true },
    { removeAttrs: { attrs: 'fill' } },
    { removeDimensions: true },
    { removeXMLNS: true },
    {
      // Custom SVGO plugin to camelCase attributes for React
      camelCaseAttributes: {
        name: 'camelCaseAttributes',
        params: {},
        type: 'perItem',
        fn: item => {
          if (item.isElem()) {
            item.eachAttr(attr => (attr.name = camelCase(attr.name)));
          }
        }
      }
    }
  ]
});

function buildIcons() {
  const svgFiles = glob.sync(path.join(SVG_DIR, SVG_GLOB));

  return readFile(ICON_COMPONENT_TEMPLATE_PATH, 'utf8').then(template => {
    Mustache.parse(template);

    // Process svg files
    const promises = svgFiles.map(file => generateComponent(template, file));
    return Promise.all(promises).then(components => {
      components = dedupeComponents(components);
      return Promise.all([
        generateIndex(components),
        generateCategories(components)
      ]);
    });
  });
}

// Dedupe icons that exist in multiple categories
function dedupeComponents(components) {
  const keys = [];
  return components.filter(component => {
    const { componentName } = component;
    if (keys.indexOf(componentName) === -1) {
      keys.push(componentName);
      return component;
    }
  });
}

function generateComponent(template, filePath) {
  return readFile(filePath, 'utf8').then(fileContent => {
    const componentInfo = generateComponentInfo(filePath);
    const { componentFilePath, componentName } = componentInfo;

    return new Promise((resolve, reject) => {
      svgo.optimize(fileContent, ({ data: optimizedContent, error: err }) => {
        if (err) return reject(`${componentName}: ${err}`);

        resolve(optimizedContent);
      });
    }).then(optimizedContent => {
      if (VERBOSE) {
        // Gather optimization metrics for logging
        const bytesSaved = fileContent.length - optimizedContent.length;
        const percentSaved = bytesSaved / fileContent.length * 100;
        totalBytesSaved += bytesSaved;
        console.log(
          `· ${componentName}: saved ${prettyBytes(bytesSaved)} [${Math.round(
            percentSaved
          )} %]`
        );
      }

      const componentContent = Mustache.render(template, {
        componentName,
        rtl: rtl.includes(componentName) ? 'true' : 'false',
        svgChildren: optimizedContent.replace(REGEX_SVG_TAGS, '$1')
      });

      // Write icon component file
      return fs
        .ensureFile(componentFilePath)
        .then(() => writeFile(componentFilePath, componentContent))
        .then(() => componentInfo);
    });
  });
}

function generateComponentInfo(filePath) {
  const filePathArray = filePath.split('/');
  const fileName = path.basename(filePath);
  const svgName = fileName.replace(REGEX_SVG_NAME, '$1');
  const componentName = `Icon${upperFirst(camelCase(svgName))}`;
  const componentFileName = `${componentName}.js`;
  const componentCategory =
    filePathArray[filePathArray.indexOf('material-design-icons') + 1];

  const componentFilePath = filePath
    .replace('/svg/production', '')
    .replace(SVG_DIR, ICON_COMPONENTS_DIR)
    .replace(`/${componentCategory}`, '')
    .replace(fileName, componentFileName);

  return {
    componentCategory,
    componentFilePath,
    componentName
  };
}

function generateIndex(components) {
  return readFile(ICON_INDEX_TEMPLATE_PATH, 'utf8').then(template => {
    const indexContent = Mustache.render(template, { components });
    const indexFilePath = path.join(ICON_SRC_DIR, 'index.js');

    return writeFile(indexFilePath, indexContent);
  });
}

function generateCategories(components) {
  return readFile(ICON_CATEGORY_TEMPLATE_PATH, 'utf8').then(template => {
    Mustache.parse(template);

    const categories = [
      ...new Set(components.map(component => component.componentCategory))
    ];

    generateCategoryIndex(categories).then(() => {
      const promises = categories.map(categoryName =>
        generateCategory(template, categoryName, components)
      );
      return Promise.all(promises);
    });
  });
}

function generateCategory(template, categoryName, components) {
  const componentInfo = components.reduce((acc, component) => {
    if (component.componentCategory === categoryName) {
      acc.push({
        componentCategory: categoryName,
        componentName: component.componentName
      });
    }

    return acc;
  }, []);

  const componentName = `${upperFirst(categoryName)}Icons`;
  const categoryContent = Mustache.render(template, {
    componentName,
    componentCategory: categoryName,
    components: componentInfo
  });

  const categoryFileName = `${componentName}.js`;
  const categoryFilePath = path.join(
    __dirname,
    '../src/website/app/demos/Icon/components/categories',
    categoryFileName
  );

  // Write category file
  return fs.ensureFile(categoryFilePath).then(() => {
    return writeFile(categoryFilePath, categoryContent);
  });
}

function generateCategoryIndex(categories) {
  return readFile(ICON_CATEGORY_INDEX_TEMPLATE_PATH, 'utf8').then(template => {
    const categoryComponentNames = categories.map(
      category => `${upperFirst(category)}Icons`
    );
    const categoryIndexContent = Mustache.render(template, {
      components: categoryComponentNames
    });
    const categoryIndexFilePath = path.join(
      __dirname,
      '../src/website/app/demos/Icon/components/CategoryIndex.js'
    );

    // Write category index file
    return fs.ensureFile(categoryIndexFilePath).then(() => {
      return writeFile(categoryIndexFilePath, categoryIndexContent);
    });
  });
}

console.log('Building icons...');
console.time('Done');

buildIcons()
  .then(() => {
    if (VERBOSE) {
      console.log(`Total bytes saved: ${prettyBytes(totalBytesSaved)}`);
    }

    console.timeEnd('Done');
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
