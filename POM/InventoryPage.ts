import { Page, expect } from '@playwright/test';
export class InventoryPage {
 constructor(private page: Page) {}
 async sortLowToHigh() {
   await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
 }
 async addProducts() {
   await this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
   await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
 }
 async goToCart() {
   await this.page.locator('[data-test="shopping-cart-link"]').click();
 }
 async verifyHeader() {
   await expect(this.page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
 }
}