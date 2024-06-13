const { test, expect } = require('@playwright/test');

test.describe('Alerts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/alerts.html');
  });

  test('handle alert', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('This is an alert!');
      dialog.accept();
    });
    await page.click('button');
  });
});
