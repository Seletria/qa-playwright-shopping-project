import { test, expect } from "@playwright/test"

test.beforeEach('Homepage', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com');
});

test('Register User with existing email', async ({ page }) => {
  const signInBtn = page.locator('.shop-menu').getByText(" Signup / Login");
  await signInBtn.click();

  const signInPage = page.getByRole('heading', { name: /Login to your account/i });
  await expect(signInPage).toBeVisible();

  const userName = 'Meli'
  await page.locator('[data-qa="signup-name"]').fill(`${userName}`)
  await page.locator('[data-qa="signup-email"]').fill('meli1@gmail.com');

  await page.getByRole('button', { name: 'Signup' }).click();
  const loginBtn = page.locator('[data-qa="login-button"]');
  await loginBtn.click();

  const errorMessage = page.locator('p[style*="color: red"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText(/Email Address already exist!/i);
});