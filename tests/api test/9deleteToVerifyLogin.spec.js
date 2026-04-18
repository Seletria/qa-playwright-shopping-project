import { test, expect } from '@playwright/test'

test('Post to verify login with valid details', async ({ request }) => {
  const response = await request.delete('https://automationexercise.com/api/verifyLogin');

  const responseBody = JSON.parse(await response.text());
  expect(responseBody.message).toBe('This request method is not supported.');
});