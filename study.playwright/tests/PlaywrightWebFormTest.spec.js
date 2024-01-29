const { test, expect } = require('@playwright/test');

test.describe('Playwright Web Form Test Suite', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.selenium.dev/selenium/web/web-form.html');
    });

  test('Submit Web Form Page With Success', async ({ page }) => {
    
    await page.fill('#my-text-id', 'Testing a text field');
    await page.fill('input[name="my-password"]', 'passwordField');
    await page.fill('textarea[name="my-textarea"]', 'Testing a text area field Testing a text area field Testing a text area field Testing a text area field Testing a text area field');

    await page.locator('select').selectOption({ label: 'Two' });

    await page.locator('#my-check-1').uncheck();
    await page.locator('#my-check-2').check();
    await page.locator('#my-radio-2').check();

    await page.fill('input[name="my-date"]', '08/21/1988');

    await page.locator('button').click();

    const expectedMessage = "Received!";
    expect(await page.textContent('#message')).toContain(expectedMessage);

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