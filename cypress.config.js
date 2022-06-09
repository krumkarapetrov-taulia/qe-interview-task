const { defineConfig } = require('cypress')
const { devServer } = require("@cypress/react/plugins/react-scripts");

module.exports = defineConfig({
  projectId: "qe_interview_task",
  component: {
    devServer,
    specPattern: "src/**/*.cy.{js,jsx}",
    supportFile: "cypress/support/component.js",
    // setupNodeEvents(on, config) {
    //   codeCoverageTask(on, config);
    //   return config;
    // },
  },
  e2e: {
    baseUrl: 'http://localhost:7401',
    viewportHeight: 1000,
    viewportWidth: 1280,
  }
});

// {
//   "chromeWebSecurity": false,
//   "defaultCommandTimeout": 35000,
//   "ignoreTestFiles": ["*.hot-update.js", "ResetPassword.js"],
//   "pageLoadTimeout": 35000,
//   "requestTimeout": 35000,
//   "viewportHeight": 660,
//   "viewportWidth": 1200
// }

// import path from "path";
// import _ from "lodash";
// import axios from "axios";
// import dotenv from "dotenv";
// import Promise from "bluebird";
// import { percyHealthCheck } from "@percy/cypress/task";
// import codeCoverageTask from "@cypress/code-coverage/task";
// import { defineConfig } from "cypress";
// import "@cypress/instrument-cra";
// const { devServer } = require("@cypress/react/plugins/react-scripts");

// dotenv.config({ path: ".env.local" });
// dotenv.config();

// const awsConfig = require(path.join(__dirname, "./aws-exports-es5.js"));

// module.exports = defineConfig({
//   projectId: "7s5okt",
//   env: {
//     apiUrl: "http://localhost:3001",
//     mobileViewportWidthBreakpoint: 414,
//     coverage: false,
//     codeCoverage: {
//       url: "http://localhost:3001/__coverage__",
//       exclude: "cypress/**/*.*",
//     },
//     defaultPassword: process.env.SEED_DEFAULT_USER_PASSWORD,
//     paginationPageSize: process.env.PAGINATION_PAGE_SIZE,

//     // Auth0
//     auth0_username: process.env.AUTH0_USERNAME,
//     auth0_password: process.env.AUTH0_PASSWORD,
//     auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
//     auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
//     auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
//     auth0_client_id: process.env.REACT_APP_AUTH0_CLIENTID,
//     auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
//     auth_token_name: process.env.REACT_APP_AUTH_TOKEN_NAME,

//     // Okta
//     okta_username: process.env.OKTA_USERNAME,
//     okta_password: process.env.OKTA_PASSWORD,
//     okta_domain: process.env.REACT_APP_OKTA_DOMAIN,
//     okta_client_id: process.env.REACT_APP_OKTA_CLIENTID,

//     // Amazon Cognito
//     cognito_username: process.env.AWS_COGNITO_USERNAME,
//     cognito_password: process.env.AWS_COGNITO_PASSWORD,
//     awsConfig: awsConfig.default,

//     // Google
//     googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
//     googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
//     googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
//   },
//   component: {
//     devServer,
//     specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
//     supportFile: "cypress/support/component.ts",
//     setupNodeEvents(on, config) {
//       codeCoverageTask(on, config);
//       return config;
//     },
//   },
//   e2e: {
//     baseUrl: "http://localhost:3000",
//     specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
//     supportFile: "cypress/support/e2e.ts",
//     viewportHeight: 1000,
//     viewportWidth: 1280,
//     setupNodeEvents(on, config) {
//       const testDataApiEndpoint = `${config.env.apiUrl}/testData`;

//       const queryDatabase = ({ entity, query }, callback) => {
//         const fetchData = async (attrs) => {
//           const { data } = await axios.get(`${testDataApiEndpoint}/${entity}`);
//           return callback(data, attrs);
//         };

//         return Array.isArray(query) ? Promise.map(query, fetchData) : fetchData(query);
//       };

//       on("task", {
//         percyHealthCheck,
//         async "db:seed"() {
//           // seed database with test data
//           const { data } = await axios.post(`${testDataApiEndpoint}/seed`);
//           return data;
//         },

//         // fetch test data from a database (MySQL, PostgreSQL, etc...)
//         "filter:database"(queryPayload) {
//           return queryDatabase(queryPayload, (data, attrs) => _.filter(data.results, attrs));
//         },
//         "find:database"(queryPayload) {
//           return queryDatabase(queryPayload, (data, attrs) => _.find(data.results, attrs));
//         },
//       });

//       codeCoverageTask(on, config);
//       return config;
//     },
//   },
// });
