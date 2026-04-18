import { test, expect } from "@playwright/test"

test.beforeEach('Homepage', async ({ page }) => {
  await page.goto('http://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com');
});

test('Register user', async ({ page }) => {
  const signUpBtn = page.locator('.shop-menu').getByText(" Signup / Login");
  await signUpBtn.click();

  const signUpPage = page.getByRole('heading', { name: /Login to your account/i });
  await expect(signUpPage).toBeVisible();

  const userName = 'Joe'
  await page.locator('[data-qa="signup-name"]').fill(`${userName}`)

  await page.locator('[data-qa="signup-email"]').fill('joee4234@gmail.com');

  await page.getByRole('button', { name: 'Signup' }).click();

  const informationPage = page.getByRole('heading', { name: /Enter Account Information/i });
  await expect(informationPage).toBeVisible();

  await page.locator('#id_gender1').click();

  await page.locator('#password').fill('123456');

  const days = await page.locator('#days');
  const months = await page.locator('#months');
  const years = await page.locator('#years');

  await days?.selectOption('14');
  await months?.selectOption('6');
  await years?.selectOption('2020');

  await page.locator('#newsletter').click();
  await page.locator('#optin').click();

  await page.locator('#first_name').fill('Joe');
  await page.locator('#last_name').fill('Lololo');
  await page.locator('#company').fill('Own Company');
  await page.locator('#address1').fill('LA, street 3, building 20/B');
  await page.locator('#address2').fill('floor 2 apartment 5');

  const country = await page.locator('#country');
  await country?.selectOption('United States');

  await page.locator('#state').fill('California');
  await page.locator('#city').fill('ABD');
  await page.locator('#city').fill('ABD');
  await page.locator('#zipcode').fill('121231');
  await page.locator('#mobile_number').fill('1111111111');

  await page.locator('[data-qa="create-account"]').click();

  const accountCreatedPage = page.getByRole('heading', { name: /Account Created!/i });
  await expect(accountCreatedPage).toBeVisible();

  await page.locator('[data-qa="continue-button"]').click();

  await expect(page).toHaveURL(/automationexercise/);
  await expect(page.locator('.fa-user')).toBeVisible();

  await page.locator('a[href="/delete_account"]').click();

  const accountDeletedPage = page.getByRole('heading', { name: /Account Deleted/i });
  await expect(accountDeletedPage).toBeVisible();
  await page.locator('[data-qa="continue-button"]').click();

})