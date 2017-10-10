#! /usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable */

/**
 * This script fetches your github milestones and writes them into the file provided as the first argument.
 *
 * This script was written as an MVP and so does not have all the robust features built in.
 * A summary of work left to do can be found below.
 *
 * TODO: when we have lots of milestones, we'll need to handle multiple pages
 * TODO: gracefully handle different response status codes
 * TODO: handle hung servers with a timeout
 **/

const https = require('https');
const fs = require('fs');

const outFileName = getOutFileNameFromArgs();

const noTokenError = `
ERROR: the environment variable 'GITHUB_TOKEN' is unset.
Please export this variable with the value of a personal access token.
Your token will need to have at least the 'public_repo' scope.
You can find more info about creating tokens in Github's help docs.

https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
`;

const token = getTokenFromEnv();

function createQuery(cursorStart) {
  const after = cursorStart ? `after:"${cursorStart}", ` : '';
  return `
    query {
      repository(owner:"mineral-ui", name:"mineral-ui") {
        issues(first:200, ${after}labels:["website", "component"]) {
          edges {
            node {
              closed
              number
              title
              url
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `;
}

function requestPage(post_data) {
  return new Promise((resolve, reject) => {
    const post_options = {
      hostname: 'api.github.com',
      path: '/graphql',
      method: 'POST',
      headers: {
        authorization: `bearer ${token}`,
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'content-length': post_data.length,
        'user-agent': 'curl'
      }
    };

    const post_req = https.request(post_options, res => {
      res.setEncoding('utf8');
      let response = '';
      res.on('data', chunk => {
        response += chunk;
      });
      res.on('end', () => {
        resolve(response);
      });
    });

    post_req.on('error', e => {
      reject('problem with request:' + e.message);
    });

    post_req.write(post_data);
    post_req.end();
  });
}
const re_data = JSON.stringify({ query: createQuery(cursor) });
requestPage(re_data)
  .then(response => {
    // let parsed_response;
    // try {
    //   parsed_response = JSON.parse(response);
    // } catch (e) {
    //   reject('unable to parse response as JSON: ' + response);
    // }
    // const newData = parsed_response;
    // const { endCursor, hasNextPage } = parsed_response.data.repository.issues.pageInfo;

    // resolve({data: newData, cursor: endCursor});
    console.log('SUCCESS');
    console.log('DATA:', data);
    console.log('CURSOR:', cursor);
    process.exit();
  })
  .catch(reason => {
    console.log('FAILURE');
    console.log('REASON:', reason);
    process.exit(1);
  });

// fs.writeFile(outFileName, getFileContents(data), err => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(`wrote milestone data to ${outFileName}!`);
//   process.exit();
// });

function getTokenFromEnv() {
  const token = process.env.GITHUB_TOKEN;
  if (undefined === token) {
    console.log(noTokenError);
    process.exit(1);
  }
  return token;
}

function getOutFileNameFromArgs() {
  const outFileName = process.argv[2];
  if (undefined === outFileName) {
    console.log(
      'ERROR: expected an output file to be specified as the first argument, but none was given.'
    );
    process.exit(1);
  }
  return outFileName;
}

function getFileContents(parsed_response) {
  const preamble = '/* eslint-disable prettier/prettier */';
  const rest = 'export default ' + JSON.stringify(parsed_response, null, 2);
  return preamble + '\n' + rest;
}
