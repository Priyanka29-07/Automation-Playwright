import { test, expect } from '@playwright/test';
import {FormPage} from "../POM/FormPage";
import testData from '../test-data/testDataForA5.json';

testData.forEach((data, index) => {
  test(`Form Test JSON ${index + 1}`, async ({ page }) => {
    const form = new FormPage(page);

    await form.navigate(data.url);
    await form.clickForm();

    await form.fNameTextField(data.firstName);
    await form.LNameTextField(data.lastName);
    await form.emailTextField(data.email);
    await form.genderRadioBtn(data.gender);
    await form.NumTextField(data.mobile);
    await form.SelCheckBox(data.hobbies);
await form.selectState(data.state);
await form.selectcity(data.city);
await form.submitBtn();
 await form.verifyFormSubmittedSuccessfully();
  });
});