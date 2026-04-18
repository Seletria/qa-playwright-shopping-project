import { test, expect } from '@playwright/test'

test('PUT METHOD To Update User Account', async ({ request }) => {
  const response = await request.put('https://automationexercise.com/api/updateAccount', {
    form: {
      name: 'Mahmut',
      email: 'mahmut129@gmail.com',
      password: '1234567',
      title: 'Mr',
      birth_date: '13',
      birth_month: 'June',
      birth_year: '1986',
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
  console.log(responseBody);
  expect(responseBody.message).toBe('User updated!');
});

test('Get user account detail by email', async ({ request }) => {
  const response = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
    params: {
      email: 'mahmut129@gmail.com'
    }
  })
  const body = await response.json();
  console.log(body);
})