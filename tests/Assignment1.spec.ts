import {test,expect} from "@playwright/test";
test('login DemoQa',async({page})=>{
await page.goto('https://demoqa.com/');
await expect(page).toHaveTitle(/demosite/);
});