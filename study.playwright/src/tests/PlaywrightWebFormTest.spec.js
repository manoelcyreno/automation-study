// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { HomePageLocators } = require('../locators/HomePageLocators');
import SuccessPageLocators from '../locators/SuccessPageLocators';
const { HomePage } = require('../pageObject/home.page');


test.describe('Playwright Web Form Test Suite', () => {

  let hpl;
  let spl;
  
  test.beforeEach(async ({ page }) => {
    hpl = new HomePageLocators();
    spl = new SuccessPageLocators();

    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  });

  test('Submit Web Form Page With Success', async ({ page }) => {
    const homePage = new HomePage(page);
   
    /*
    await page.fill(hpl.getFieldID(),'small text');
    await page.fill(hpl.getFieldPassword(), "passwordField");
    */

    await homePage.fillMandatoryFields('id', 'password');

    await page.fill(hpl.getFieldTextarea(), 'very big big big text');

    await page.selectOption(hpl.getSelectElement(), 'Two');

    await page.uncheck(hpl.getCheckbox1());
    await page.check(hpl.getCheckbox2());
    await page.check(hpl.getRadioButton2());

    await page.fill(hpl.getFieldDate(), "08/21/1988");

    await page.click(hpl.getSubmitButton());

    const expectedMessage = "Received!";

    const messageElement = await page.waitForSelector(spl.getMessage());
    const messageText = await page.evaluate(element => element.textContent, messageElement);
    
    await expect(messageText.trim()).toBe(expectedMessage);
  });

  test('Validate If Disable Input Is Disabled', async ({ page }) => {
    const isDisabledAttribute = await page.locator(hpl.getDisabledElement()).getAttribute('disabled') !== null;

    await expect(isDisabledAttribute).toBeTruthy();
  });

  test('Validate If Readonly Input Can Not Be Editable', async ({ page }) => {
    const readOnlyAttribute = await page.locator(hpl.getReadOnlyElement()).getAttribute('readonly') !== null;

    await expect(readOnlyAttribute).toBeTruthy();});

  test('Validate If Web Form Page Is Accessible With Success', async ({ page }) => {
    const expectedMessage = "Web form";
    const pageTitle = await page.title();

    await expect(pageTitle).toBe(expectedMessage);
  });
});

