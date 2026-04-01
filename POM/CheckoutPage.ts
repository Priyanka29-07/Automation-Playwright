import { Page, expect } from '@playwright/test';
export class CheckoutPage {
 constructor(private page: Page) {}
 async fillDetails(first: string, last: string, zip: string) {
   await this.page.locator('[data-test="firstName"]').fill(first);
   await this.page.locator('[data-test="lastName"]').fill(last);
   await this.page.locator('[data-test="postalCode"]').fill(zip);
   await this.page.locator('[data-test="continue"]').click();
 }
 async finishOrder() {
   await this.page.locator('[data-test="finish"]').click();
 }
 async verifyOrderSuccess() {
   await expect(this.page.locator('[data-test="complete-header"]'))
     .toContainText('Thank you for your order!');
 }
 
}