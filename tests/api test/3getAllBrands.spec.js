import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test('Get All Brands List ', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/brandsList');

  expect(response.status()).toBe(200);

  const responseBody = JSON.parse(await response.body());

  console.log(responseBody)
});

test('Put All Brands List ', async ({ request }) => {
  const response = await request.put('https://automationexercise.com/api/brandsList');
  const responseBody = JSON.parse(await response.text());

  console.log(responseBody)
  console.log(response.status())
  expect(responseBody.message).toBe('This request method is not supported.')
});