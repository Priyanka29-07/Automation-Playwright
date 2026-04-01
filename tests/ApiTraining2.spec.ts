import { test, expect } from '@playwright/test';

const BASE_URL = 'https://dummyjson.com/users/add';

test.describe('DummyJSON - Add User API', () => {

  // ---------------------------------------------------------
  // TEST 1: Add User - Request 1
  // ---------------------------------------------------------
  test('Add User - Request 1', async ({ request }) => {

    const payload = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25
    };

    const response = await request.post(BASE_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    });

    // ✅ Status code validation
    expect(response.status()).toBe(200);

    // ✅ Response body validation
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.firstName).toBe(payload.firstName);
    expect(responseBody.lastName).toBe(payload.lastName);
    expect(responseBody.age).toBe(payload.age);
  });

  // ---------------------------------------------------------
  // TEST 2: Add User - Request 2
  // ---------------------------------------------------------
  test('Add User - Request 2', async ({ request }) => {

    const payload = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30
    };

    const response = await request.post(BASE_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    });

    // ✅ Status code validation
    expect(response.status()).toBe(200);

    // ✅ Response body validation
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.firstName).toBe(payload.firstName);
    expect(responseBody.lastName).toBe(payload.lastName);
    expect(responseBody.age).toBe(payload.age);
  });

});