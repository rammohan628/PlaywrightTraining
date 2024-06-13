const { test, expect } = require('@playwright/test');

test.describe('Form Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/form.html');
  });

  test('submit form successfully', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.click('button[type="submit"]');
    await page.waitForSelector('#successMessage', { state: 'visible' });
    await expect(page.locator('#successMessage')).toBeVisible();
  });

  test('form validation', async ({ page }) => {
    await page.fill('#email', 'not-an-email');
    await page.click('button[type="submit"]');
    // Add assertion for form validation error (e.g., check for error message)
  });
});
