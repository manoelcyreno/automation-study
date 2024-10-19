/* eslint-disable no-undef */
const { allureCypress } = require('allure-cypress/reporter')
const { defineConfig } = require('cypress')
const { tagify } = require('cypress-tags')

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', tagify(config))
      allureCypress(on, config, {
        resultsDir: "allure-results",
      })
    },

    // Place where we have the functional tests
    specPattern: 'cypress/tests/**/*.cy.js',

    // Place where we have the support tests
    supportFile: 'cypress/support/e2e.js',

    // Timeouts
    // Command Timeout
    defaultCommandTimeout: 5000,
    // Test Timeout
    execTimeout: 60000,
    // Page load timeout
    pageLoadTimeout: 60000,

    // Retry in case of failure
    retries: 0,
  },
})
