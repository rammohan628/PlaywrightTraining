const { test, expect } = require('@playwright/test');

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/login.html');
  });

  test('successful login', async ({ page }) => {
    await page.fill('#username', 'user');
    await page.fill('#password', 'password');
    await page.click('button[type="submit"]');
    // Add assertion for successful login (e.g., check for URL or element on landing page)
  });

  test('failed login', async ({ page }) => {
    await page.fill('#username', 'wrongUser');
    await page.fill('#password', 'wrongPassword');
    await page.click('button[type="submit"]');
    await page.waitForSelector('#error', { state: 'visible' });
    await expect(page.locator('#error')).toBeVisible();
  });
});
