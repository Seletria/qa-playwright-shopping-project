import { test, expect } from "@playwright/test"

test.beforeEach('Homepage', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com');
});

test('Logout User', async ({ page }) => {
  const signInBtn = page.locator('.shop-menu').getByText(" Signup / Login");
  await signInBtn.click();

  const signInPage = page.getByRole('heading', { name: /Login to your account/i });
  await expect(signInPage).toBeVisible();

  await page.locator('[data-qa="login-email"]').fill('meli1@gmail.com');
  await page.locator('[data-qa="login-password"]').fill('123456');

  const loginBtn = page.locator('[data-qa="login-button"]');
  await loginBtn.click();

  await expect(page.locator('.fa-user')).toBeVisible();

  await page.locator('a[href="/logout"]').click();
  await expect(signInPage).toBeVisible();

});