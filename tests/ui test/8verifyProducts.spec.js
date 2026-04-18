import { test, expect } from "@playwright/test"

test.beforeEach('Homepage', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com');
});

test('Verify All Products and product detail page', async ({ page }) => {
  await page.locator('a[href="/products"]').click();

  if (page.url().includes('#google_vignette')) {
    await page.goto('https://automationexercise.com/products');
  }

  const productPage = page.getByRole('heading', { name: /All Products/i });
  await expect(productPage).toBeVisible();

  await page.locator('a[href="/product_details/1"]').first().click();

  const productInfo = page.locator('.product-information');
  await expect(productInfo.locator('h2')).toBeVisible();
  await expect(productInfo.getByText('Category:')).toBeVisible();
  await expect(productInfo.locator('span >> text=Rs.')).toBeVisible();
  await expect(productInfo.getByText('Availability:')).toBeVisible();
  await expect(productInfo.getByText('Condition:')).toBeVisible();
  await expect(productInfo.getByText('Brand:')).toBeVisible();

})