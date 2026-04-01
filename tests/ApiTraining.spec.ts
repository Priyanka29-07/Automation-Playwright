import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// ---------------------------------------------------------
// TEST 1: Create Post - Request 1
// ---------------------------------------------------------
test('POST - Create Post (Request 1)', async ({ request }) => {
  const payload = {
    title: 'My Demo',
    body: 'This is a test API',
    userId: 1
  };

  const response = await request.post(BASE_URL, {
    data: payload
  });

  // JSONPlaceholder returns 201 Created for POST
  expect(response.status()).toBe(201);

  const data = await response.json();
  expect(data.title).toBe(payload.title);
  expect(data.body).toBe(payload.body);
  expect(data.userId).toBe(payload.userId);
});

// ---------------------------------------------------------
// TEST 2: Create Post - Request 2
// ---------------------------------------------------------
test('POST - Create Post (Request 2)', async ({ request }) => {
  const payload = {
    title: 'Second Request',
    body: 'Testing again',
    userId: 2
  };

  const response = await request.post(BASE_URL, {
    data: payload
  });

  expect(response.status()).toBe(201);

  const data = await response.json();
  expect(data.title).toBe(payload.title);
  expect(data.body).toBe(payload.body);
  expect(data.userId).toBe(payload.userId);
});