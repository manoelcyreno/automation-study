const baseConfig = require('./cypress.base.config')

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,

    //default links about test environments
    //Selenium E2E test
    baseUrlE2E: 'https://www.selenium.dev/selenium/web/web-form.html',
  },
}
