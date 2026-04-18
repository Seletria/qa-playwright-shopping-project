import { test, expect } from '@playwright/test'

test('Post to verify login with valid details', async ({ request }) => {
  const response = await request.post('https://automationexercise.com/api/createAccount', {
    form: {
      name: 'Mahmut',
      email: 'mahmut325@gmail.com',
      password: '1234567',
      title: 'Mr',
      birth_date: '12',
      birth_month: 'June',
      birth_year: '1985',
      firstname: 'Mahmut',
      lastname: 'Sal',
      company: 'Yok',
      address1: 'esfsdfsf',
      address2: 'ddasdss dsd asdd',
      country: 'Turkey',
      zipcode: '242342',
      state: 'Wgds',
      city: 'Van',
      mobile_number: '13124235432334'
    }
  });

  const responseBody = JSON.parse(await response.text());
  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toBe('User created!');
});

test('Delete to verify login with valid details', async ({ request }) => {
  const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
    form: {
      email: 'mahmut325@gmail.com',
      password: 1234567
    }
  })

  const responseBody = JSON.parse(await response.text());
  console.log(responseBody)
  expect(responseBody.message).toBe('Account deleted!')
})