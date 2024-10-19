const SuccessPageLocators = require('../locators/SuccessPageLocators');

class SuccessPage {
  constructor(page) {
    this.page = page;
    this.successPageLocator = new SuccessPageLocators(page);
  }

  async isVisible(text) {
    const isVisible = await this.page.locator(this.successPageLocator.getMessage()).locator(`text=${text}`).isVisible();
    
    return isVisible;
  }

}

module.exports = SuccessPage;