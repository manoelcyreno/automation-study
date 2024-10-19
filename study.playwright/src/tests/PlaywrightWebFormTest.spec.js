// @ts-nocheck
const { test, expect } = require('@playwright/test');
const HomePage = require('../pageObject/HomePage');
const SuccessPage = require('../pageObject/SuccessPage');
const Utils = require('../utils/Utils');

test.describe('Playwright Web Form Test Suite', () => {
  
  const utils = new Utils();
  let formsData;
  let homePage;
  let successPage;

  test.beforeAll(async () => {
    // Load the data
    formsData = utils.readJsonFile('src/test-data/forms.input.json');
  });

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    successPage = new SuccessPage(page);

    await page.goto(process.env.WEB_URL);
  });

  test('Submit Web Form Page With Success', {tag: "@critical"}, async ({ page }) => {
    await homePage.fill_Id(formsData.id)
    await homePage.fill_Password(formsData.password);
    await homePage.fill_Textarea(formsData.bigText);
    await homePage.fill_Date(formsData.date);
    await homePage.select_Element('Two');
    await homePage.uncheck_Element('Checkbox1');
    await homePage.check_Element('Checkbox2');
    await homePage.check_Element('RadioButton2');
    await homePage.click_Submit();

    const expectedMessage = "Received!"
    expect(await successPage.isVisible(expectedMessage)).toBeTruthy();
  });


  test('Validate If Disable Input Is Disabled', {tag: "@medium"}, async ({ page }) => {
    const homePage = new HomePage(page);
    
    const isDisabledAttribute = await homePage.getElement_Status('DisabledInput', 'disabled');

    expect(isDisabledAttribute).toBeTruthy();
  });

  test('Validate If Readonly Input Can Not Be Editable', {tag: "@high"}, async ({ page }) => {
    const homePage = new HomePage(page);
    
    const readOnlyAttribute = await homePage.getElement_Status('ReadonlyInput', 'readonly');

    expect(readOnlyAttribute).toBeTruthy();
  });

  test('Validate If Web Form Page Is Accessible With Success', {tag: "@medium"}, async ({ page }) => {
    const expectedMessage = "Web form";
    const pageTitle = await page.title();

    expect(pageTitle).toBe(expectedMessage);
  });

});