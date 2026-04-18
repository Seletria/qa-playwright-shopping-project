import { test, expect } from '@playwright/test'

test('Post to verify login with valid details', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      email: 'meli1@gmail.com',
      password: 123456,
    }
  });

  const responseBody = await JSON.parse(await response.text());
  expect(responseBody.message).toBe('User exists!')
});

test('POST To Verify Login without email parameter', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      password: 123456,
    }
  });

  const responseBody = await JSON.parse(await response.text());
  expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.')
});