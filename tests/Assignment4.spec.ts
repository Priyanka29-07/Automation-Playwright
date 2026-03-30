import {test,expect} from "@playwright/test";
import {FormPage} from "../POM/FormPage";
import TestData from "../test-data/datatest.json";
test('Practice Form using POM + JSON', async ({ page }) => {

  const fPage = new FormPage(page);
   
 
    const {url,firstName,lastName,email,mobile,gender,hobbies,state,city} = TestData;
    await fPage.navigate(url);
    await fPage.clickForm();
    await fPage.fNameTextField(firstName);
    await fPage.LNameTextField(lastName);
    await fPage.emailTextField(email);
    await fPage.genderRadioBtn(gender);
    await fPage.NumTextField(mobile);
    await fPage.SelCheckBox(hobbies);
    await fPage.selectState(state);
    await fPage.selectcity(city);
    await fPage.submitBtn();
   await fPage.verifyFormSubmittedSuccessfully();
   
});