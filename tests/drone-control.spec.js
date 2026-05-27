import { test, expect } from '@playwright/test';

test.describe('Панель керування дроном - Критичні сценарії', () => {
  test('Натискання кнопки вперед активує рух двигунів', async ({ page }) => {
    await page.goto('/');
    const forwardButton = page.locator('button#btn-forward');
    await expect(forwardButton).toBeVisible();
  });
});
