import { Page, expect } from '@playwright/test';
export class CartPage {
 constructor(private page: Page) {}
 async proceedToCheckout() {
   await this.page.locator('[data-test="checkout"]').click();
 }
 async verifyItemsPresent() {
   await expect(this.page.locator('.cart_item')).toHaveCount(2);
 }
}