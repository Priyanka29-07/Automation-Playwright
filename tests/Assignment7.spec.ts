import { test, chromium } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';
import { InventoryPage } from '../POM/InventoryPage';
import { CartPage } from '../POM/CartPage';
import { CheckoutPage } from '../POM/CheckoutPage';
import users from '../test-data/testDataForA7.json';
import checkout from '../test-data/testDataA7Checkout.json';

test('Assignment 7: Multi-user E2E with Browser Contexts', async () => {

  const browser = await chromium.launch();

  const user1 = users[0];

  const user2 = users[1];

  // USER 1 CONTEXT

  const context1 = await browser.newContext();

  const page1 = await context1.newPage();

  const login1 = new LoginPage(page1);

  const inventory1 = new InventoryPage(page1);

  const cart1 = new CartPage(page1);

  const checkout1 = new CheckoutPage(page1);

  await login1.navigate();

  await login1.login(user1.username, user1.password);

  await inventory1.sortLowToHigh();
  await inventory1.addProducts();
  await inventory1.goToCart();
  await cart1.verifyItemsPresent();
  await cart1.proceedToCheckout();
  await checkout1.fillDetails(

    checkout.firstName,
    checkout.lastName,
    checkout.postalCode

  );

  await checkout1.finishOrder();
  await checkout1.verifyOrderSuccess();



  // USER 2 CONTEXT

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  const login2 = new LoginPage(page2);
  await login2.navigate();
  await login2.login(user2.username, user2.password);

  // Session isolation validation
  if (page1.context() === page2.context()) {
    throw new Error('Session not isolated!');

  }

  await browser.close();

});
 