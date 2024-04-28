const { defineConfig } = require("cypress");
const { tagify } = require('cypress-tags');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
    videoOnFailOnly: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config));
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    supportFile: "cypress/support/e2e.js",

    // Place where we have the functional tests
    specPattern: 'cypress/functional/tests/*.js',

    // Command timeout
    defaultCommandTimeout: 10000,

    // Test timeout and Page load timeout
    execTimeout: 10000,
    pageLoadTimeout: 60000,

    // Retry in case of failure
    retries: 1
  },
});
