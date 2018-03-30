#! /usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const Mustache = require('mustache');
const camelCase = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');
const prettyBytes = require('pretty-bytes');
const SVGO = require('svgo');
const { DEBUG } = process.env;

const MATERIAL_ICONS_SVG_DIR = path.join(
  __dirname,
  '../node_modules/material-design-icons'
);
const MINERAL_ICONS_SVG_DIR = path.join(__dirname, '../svg');

const ICON_COMPONENTS_DIR = path.join(__dirname, '../../../src/library/Icon');
const COMPONENTS_DIR = path.join(__dirname, '../src');
const TEMPLATES_DIR = path.join(__dirname, '../templates');
const COMPONENT_TEMPLATE_PATH = path.join(TEMPLATES_DIR, 'Icon.template.js');
const INDEX_TEMPLATE_PATH = path.join(TEMPLATES_DIR, 'index.template.js');

const REGEX_SVG_TAGS = /<svg.*?>(.*?)<\/svg>/;
const REGEX_MATERIAL_ICONS_SVG_NAME = /ic_(.*?)_24px.svg/;
const REGEX_MINERAL_ICONS_SVG_NAME = /(.*?).svg/;

// Icons used interally by mineral-ui components
const internalMineralIcons = [
  'IconArrowDropdownDown',
  'IconArrowDropdownUp',
  'IconCheckBoxCheck',
  'IconCheckBoxIndeterminate',
  'IconDanger',
  'IconDangerSimple',
  'IconExpandLess',
  'IconExpandMore',
  'IconMoreHoriz',
  'IconRadioButtonCheck',
  'IconSuccess',
  'IconSuccessSimple',
  'IconWarning',
  'IconWarningSimple'
];

// A subset of icons should be mirrored for RTL languages
// http://google.github.io/material-design-icons/#icons-in-rtl
const mirroredIcons = [
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
        fn: (item) => {
          if (item.isElem()) {
            item.eachAttr((attr) => (attr.name = camelCase(attr.name)));
          }
        }
      }
    }
  ]
});

function optimizeSvg(componentName, fileContent) {
  return svgo.optimize(fileContent).then(
    ({ data: optimizedContent }) => {
      if (DEBUG) {
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

      return optimizedContent;
    },
    (err) => {
      console.error(`${componentName}: ${err}`);
    }
  );
}

async function buildIcons() {
  const materialSvgFiles = glob.sync(
    path.join(MATERIAL_ICONS_SVG_DIR, '*/svg/production/*_24px.svg'),
    {
      ignore: [
        '**/notification/svg/production/ic_rv_hookup_24px.svg', // miscategorized duplicate
        '**/alert/svg/production/ic_warning_24px.svg' // prefer mineral warning icon
      ]
    }
  );
  const mineralSvgFiles = glob.sync(
    path.join(MINERAL_ICONS_SVG_DIR, '*/*.svg')
  );
  const svgFiles = [...materialSvgFiles, ...mineralSvgFiles];

  const template = await fs.readFile(COMPONENT_TEMPLATE_PATH, 'utf8');
  Mustache.parse(template);

  const componentPromises = svgFiles.map((svgFile) =>
    generateComponent(template, svgFile)
  );

  const components = await Promise.all(componentPromises);
  components.sort(
    (a, b) =>
      a.componentName > b.componentName
        ? 1
        : b.componentName > a.componentName ? -1 : 0
  );

  return Promise.all([
    generateIndex(components),
    copyInternalMineralIcons(components)
  ]);
}

async function generateComponent(template, svgFilePath) {
  const fileContent = await fs.readFile(svgFilePath, 'utf8');
  const componentInfo = generateComponentInfo(svgFilePath);
  const { componentCategory, componentFilePath, componentName } = componentInfo;
  const optimizedContent = await optimizeSvg(componentName, fileContent);

  const componentContent = Mustache.render(template, {
    componentCategory,
    componentName,
    rtl: mirroredIcons.includes(componentName) ? 'true' : 'false',
    svgChildren: optimizedContent.replace(REGEX_SVG_TAGS, '$1')
  });

  // Write icon component file
  await fs.ensureFile(componentFilePath);
  await fs.writeFile(componentFilePath, componentContent);

  return componentInfo;
}

function generateComponentInfo(svgFilePath) {
  const isMaterialSvg = svgFilePath.includes('material-design-icons');
  const filePathArray = svgFilePath.split('/');
  const fileName = path.basename(svgFilePath);

  if (isMaterialSvg) {
    const svgName = fileName.replace(REGEX_MATERIAL_ICONS_SVG_NAME, '$1');
    const componentName = `Icon${upperFirst(camelCase(svgName))}`;
    const componentFileName = `${componentName}.js`;
    const componentCategory =
      filePathArray[filePathArray.indexOf('material-design-icons') + 1];

    const componentFilePath = svgFilePath
      .replace('/svg/production', '')
      .replace(MATERIAL_ICONS_SVG_DIR, COMPONENTS_DIR)
      .replace(`/${componentCategory}`, '')
      .replace(fileName, componentFileName);

    return {
      componentCategory,
      componentFilePath,
      componentName
    };
  } else {
    const svgName = fileName.replace(REGEX_MINERAL_ICONS_SVG_NAME, '$1');
    const componentName = `Icon${upperFirst(camelCase(svgName))}`;
    const componentFileName = `${componentName}.js`;
    const componentCategory = filePathArray[filePathArray.length - 2];
    const componentFilePath = svgFilePath
      .replace(MINERAL_ICONS_SVG_DIR, COMPONENTS_DIR)
      .replace(`/${componentCategory}`, '')
      .replace(fileName, componentFileName);

    return {
      componentCategory,
      componentFilePath,
      componentName
    };
  }
}

async function generateIndex(components) {
  const template = await fs.readFile(INDEX_TEMPLATE_PATH, 'utf8');
  Mustache.parse(template);

  const content = Mustache.render(template, { components });
  const filePath = path.join(COMPONENTS_DIR, 'index.js');

  return fs.writeFile(filePath, content);
}

function copyInternalMineralIcons(components) {
  const promises = internalMineralIcons.map((icon) => {
    const { componentFilePath: src } = components.find(
      (component) => component.componentName === icon
    );
    const dest = src.replace(COMPONENTS_DIR, ICON_COMPONENTS_DIR);
    return fs.copy(src, dest);
  });

  return Promise.all(promises);
}

(async () => {
  try {
    console.log('Building icons...');
    console.time('Done');

    await buildIcons();

    if (DEBUG) {
      console.log(`Total bytes saved: ${prettyBytes(totalBytesSaved)}`);
    }

    console.timeEnd('Done');
  } catch (err) {
    console.error(err.stack);
    process.exit(1);
  }
})();
