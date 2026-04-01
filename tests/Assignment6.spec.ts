import {test, expect, Locator} from '@playwright/test';

test.describe('Negative Testing', ()=>{
test('negative testing -without mandate fields', async({page})=>{
await page.goto('https://demoqa.com/automation-practice-form'); 

const firstName =page.getByRole('textbox', { name: 'First Name' });
const lastName= page.getByRole('textbox', { name: 'Last Name' });
const male= page.getByRole('radio', { name: 'Male', exact: true });
const female =page.getByRole('radio', { name: 'Female' });
const other =page.getByRole('radio', { name: 'Other' });
const mobile =page.getByRole('textbox', { name: 'Mobile Number' });
const getBorderClr = async(element: Locator)=>{
return await element.evaluate((el)=>
   window.getComputedStyle(el).borderColor);

};
const beforeFNClr = await getBorderClr (firstName);
const beforeLNClr= await getBorderClr (lastName);
const beforeMobileClr= await getBorderClr (mobile);
await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByText('Thanks for submitting the form')).not.toBeVisible();
const firstNameColor = await getBorderClr (firstName);
const lastNameColor = await getBorderClr(lastName);
const mobileColor= await getBorderClr (mobile);

expect(firstNameColor).not.toBe (beforeFNClr);
expect(lastNameColor).not.toBe (beforeLNClr);
expect(mobileColor).not.toBe(beforeMobileClr);
await expect(male).not.toBeChecked();
await expect(female).not.toBeChecked();
await expect(other).not.toBeChecked();

});

});
 