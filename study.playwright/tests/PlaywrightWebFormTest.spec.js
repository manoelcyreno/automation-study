// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Playwright Web Form Test Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
  
  });

  test('Submit Web Form Page With Success', async ({ page }) => {
    
    //TODO

  });

  test('Validate If Disable Input Is Disabled', async ({ page }) => {
    
    const disabledElement = page.locator('input[name="my-disabled"]');

    await expect(disabledElement).toBeDisabled();

  });

  test('Validate If Readonly Input Can Not Be Editable', async ({ page }) => {
    
    const readyOnlyElement = page.locator('input[name="my-readonly"]');

    await expect(readyOnlyElement).toHaveAttribute('readonly','');

  });

  test('Validate If Web Form Page Is Accessible With Success', async ({ page }) => {
    
    let expectedMessage = "Web form";
  
    await expect(page).toHaveTitle(expectedMessage);
  
  });
  
});