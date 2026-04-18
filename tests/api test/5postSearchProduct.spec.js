import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test('Post search product', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/searchProduct', {
    form: {
      search_product: 'top',
    }
  });

  const responseBody = JSON.parse(await response.text());
  console.log(responseBody);
});

test('Post search product without parameter', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/searchProduct');

  const responseBody = JSON.parse(await response.text());
  expect(responseBody.responseCode).toBe(400)
  console.log(responseBody);
});