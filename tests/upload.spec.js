const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('File Upload', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/upload.html');
  });

  test('file upload successfully', async ({ page }) => {
    const filePath = path.resolve(__dirname, 'sample.txt');
    await page.setInputFiles('#fileInput', filePath);
    await page.click('button[type="submit"]');
    await page.waitForSelector('#uploadMessage', { state: 'visible' });
    await expect(page.locator('#uploadMessage')).toBeVisible();
  });
});
