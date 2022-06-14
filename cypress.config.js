const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "qe_interview_task",
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    specPattern: "src/**/*.cy.{js,jsx}",
    supportFile: "cypress/support/component.js",
  },
  e2e: {
    baseUrl: 'http://localhost:7401',
    viewportHeight: 1000,
    viewportWidth: 1280,
  }
});
