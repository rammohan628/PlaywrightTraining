const { test, expect } = require('@playwright/test');

test.describe('Data Table Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/table.html');
  });

  test('verify table content', async ({ page }) => {
    const rows = page.locator('#dataTable tbody tr');
    await expect(rows).toHaveCount(2);
    await expect(rows.nth(0).locator('td').nth(0)).toHaveText('John Doe');
    await expect(rows.nth(0).locator('td').nth(1)).toHaveText('30');
    await expect(rows.nth(1).locator('td').nth(0)).toHaveText('Jane Smith');
    await expect(rows.nth(1).locator('td').nth(1)).toHaveText('25');
  });
});
