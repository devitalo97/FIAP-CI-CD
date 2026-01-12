import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/fiap-ci-cd/);
});

test('has heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Vite + React' })).toBeVisible();
});

test('counter increments', async ({ page }) => {
    await page.goto('/');

    const button = page.getByRole('button', { name: /count is/ });
    await expect(button).toHaveText('count is 0');

    await button.click();
    await expect(button).toHaveText('count is 1');
});
