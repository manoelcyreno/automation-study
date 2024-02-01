const { expect } = require('@playwright/test');
const { HomePageLocators } = require('../locators/HomePageLocators');

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.hpl = new HomePageLocators(page);

    this.id = page.locator(this.hpl.getFieldID());
    this.password = page.locator(this.hpl.getFieldPassword());
  }

  async fillMandatoryFields(id, password) {
    await this.id.fill(id)
    await this.password.fill(password)
  } 
  
}