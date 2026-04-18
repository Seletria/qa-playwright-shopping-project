import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test('Get All Products List ', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/productsList');
  expect(response.status()).toBe(200);

  const responseBody = JSON.parse(await response.text());
  expect(responseBody.products.length).toBeGreaterThan(0);

  console.log(responseBody.products[0].name);
});

test('post request', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/productsList');
  const responseBody = JSON.parse(await response.text());

  console.log("API Yanıtı:", responseBody);

  expect(responseBody.message).toBe("This request method is not supported.");
});



