const { test, expect } = require('@playwright/test');

test.describe('API Data Page', () => {
  test.beforeEach(async ({ page }) => {
    // Mock the API response
    await page.route('https://jsonplaceholder.typicode.com/users/1', route => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        }),
      });
    });

    // Navigate to the page
    await page.goto('http://localhost:3000/api.html');
  });

  test('verify API data', async ({ page }) => {
    // Wait for the data to be displayed
    await page.waitForSelector('#apiData');
    
    // Verify the content of the API data
    const content = await page.textContent('#apiData');
    expect(content).toContain('"name": "Leanne Graham"');
    expect(content).toContain('"username": "Bret"');
    expect(content).toContain('"email": "Sincere@april.biz"');
  });
});
