import { test, expect } from "@playwright/test"

test.beforeEach('Homepage', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com');
});

test('Search Product', async ({ page }) => {
  await page.locator('a[href="/products"]').click();

  if (page.url().includes('#google_vignette')) {
    await page.goto('https://automationexercise.com/products');
  }

  const productPage = page.getByRole('heading', { name: /All Products/i });
  await expect(productPage).toBeVisible();

  await page.locator('#search_product').fill('top');
  await page.locator('#submit_search').click();

  const searchedPage = page.getByRole('heading', { name: /Searched Products/i });
  await expect(searchedPage).toBeVisible();

  const products = await page.locator('.col-sm-4').all();

  for (const product of products) {
    await expect(product).toBeVisible();
  }
});