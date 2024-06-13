const { test, expect } = require('@playwright/test');

test.describe('IFrames', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/iframe.html');
  });

  test('handle iframe', async ({ page }) => {
    const frame = await page.frame({ url: /.*iframe_content.html/ });
    await expect(frame.locator('#content')).toHaveText('This is inside an iframe');
  });
});
