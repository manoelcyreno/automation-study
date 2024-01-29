const base = require('@playwright/test');
const { HomePageLocators } = require('../pageObject/HomePageLocators');
const { SuccessPageLocators } = require('../pageObject/SuccessPageLocators');

// Extend base test by providing "HomePageLocators" and "SuccessPageLocators".
exports.test = base.test.extend({
  hpl: async ({ page }, use) => {
   
    // Set up the fixture.
    const hpl = new HomePageLocators(page);

    // Use the fixture value in the test.
    await use(hpl);
  },

  spl: async ({ page }, use) => {

    // Set up the fixture.
    const spl = new SuccessPageLocators(page);

    // Use the fixture value in the test.
    await use(spl);
  },
});
exports.expect = base.expect;