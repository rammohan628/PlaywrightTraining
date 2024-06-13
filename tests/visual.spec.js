const { test, expect } = require('@playwright/test');

test.describe('Visual Comparisons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('compare screenshots', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('homepage.png');
  });
});
