import {test,expect} from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/');
});
test('Elements.',async({page})=>{
    await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await expect(page.getByRole('heading')).toContainText('Text Box');
});
test('forms',async({page})=>{
    await page.getByText('Forms').click();
  await page.getByRole('link', { name: 'Practice Form' }).click();
  await expect(page.locator('h1')).toContainText('Practice Form');
});
test('widgets',async({page})=>{
 await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Select Menu' }).click();
  await expect(page.getByRole('heading')).toContainText('Select Menu');
 
});

