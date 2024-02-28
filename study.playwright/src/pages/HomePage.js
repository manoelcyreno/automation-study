const { expect } = require('@playwright/test');
const { HomePageLocators } = require('../locators/HomePageLocators');

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.homePageLocator = new HomePageLocators(page);

    this.fieldDate = page.locator(this.homePageLocator.getFieldDate());
    this.fieldId = page.locator(this.homePageLocator.getFieldID());
    this.fieldPassword = page.locator(this.homePageLocator.getFieldPassword());
    this.fieldTextarea = page.locator(this.homePageLocator.getFieldTextarea());
    
    this.selectElement = page.locator(this.homePageLocator.getSelectElement());
  
    this.buttonSubmit = page.locator(this.homePageLocator.getSubmitButton());
  }

  async fillDate(date) {
    await this.fieldDate.fill(date);
  }

  async fillId(id) {
    await this.fieldId.fill(id);
  }

  async fillPassword(password) {
    await this.fieldPassword.fill(password);
  }

  async fillTextarea(text) {
    await this.fieldTextarea.fill(text);
  } 

  async uncheck(locator) {
    await this.page.uncheck(locator);
  }

  async check(locator) {
    await this.page.check(locator);
  }

  async clickSubmit() {
    await this.buttonSubmit.click();
  }
}