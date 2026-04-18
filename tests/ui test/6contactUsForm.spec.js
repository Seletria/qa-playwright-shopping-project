import { test, expect } from "@playwright/test"

test.beforeEach('Homepage', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com');
});

test('Contact Us Form', async ({ page }) => {
  await page.locator('a[href="/contact_us"]').click();

  const contactPage = page.getByRole('heading', { name: /Get In Touch/i });
  await expect(contactPage).toBeVisible();

  await page.locator('[data-qa="name"]').fill('Meli');
  await page.locator('[data-qa="email"]').fill('meli1@gmail.com');
  await page.locator('[data-qa="subject"]').fill('Awesome page');
  await page.locator('[data-qa="message"]').fill('Awesome page, thx.');

  await page.locator('[data-qa="submit-button"]').click();

});