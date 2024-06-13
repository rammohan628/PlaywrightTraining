const { test, expect } = require('@playwright/test');

test.describe('Keyboard Events', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/keyboard.html');
  });

  test('type in input field', async ({ page }) => {
    const inputField = page.locator('#inputField');
    await inputField.click();
    await page.keyboard.type('Playwright Test');
    await expect(inputField).toHaveValue('Playwright Test');
  });
});
