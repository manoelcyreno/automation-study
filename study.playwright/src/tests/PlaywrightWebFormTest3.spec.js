// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { HomePageLocators } = require('../locators/HomePageLocators');
const { SuccessPageLocators } = require('../locators/SuccessPageLocators');
const { HomePage } = require('../pages/HomePage');

test.describe('Playwright Web Form Test Suite3', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.WEB_URL);
  });

  test('Submit Web Form Page With Success3', {tag: "@critical"}, async ({ page }) => {
    const homePageLocator = new HomePageLocators();
    const successPageLocator = new SuccessPageLocators();  
    const homePage = new HomePage(page);

    await homePage.fillId('id')
    await homePage.fillPassword('password');
    await homePage.fillTextarea('very big big big big big big big big big big big big big big big big big big text');
    await homePage.fillDate('08/21/1988');

    await page.selectOption(homePageLocator.getSelectElement(), 'Two');

    await homePage.uncheck(homePageLocator.getCheckbox1());
    await homePage.check(homePageLocator.getCheckbox1());
    await homePage.check(homePageLocator.getRadioButton2());

    await homePage.clickSubmit();

    const expectedMessage = "Web form - target page";
    const pageTitle = await page.title();

    expect(pageTitle).toBe(expectedMessage);
  });

  test('Validate If Disable Input Is Disabled3', {tag: "@medium"}, async ({ page }) => {
    const homePageLocator = new HomePageLocators();

    const isDisabledAttribute = await page.locator(homePageLocator.getDisabledElement()).getAttribute('disabled') !== null;

    expect(isDisabledAttribute).toBeTruthy();
  });

  test('Validate If Readonly Input Can Not Be Editable3', {tag: "@high"}, async ({ page }) => {
    const homePageLocator = new HomePageLocators();
    
    const readOnlyAttribute = await page.locator(homePageLocator.getReadOnlyElement()).getAttribute('readonly') !== null;

    expect(readOnlyAttribute).toBeTruthy();
  });

  test('Validate If Web Form Page Is Accessible With Success3', {tag: "@medium"}, async ({ page }) => {
    const expectedMessage = "Web form";
    const pageTitle = await page.title();

    expect(pageTitle).toBe(expectedMessage);
  });
});

