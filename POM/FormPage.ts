import { Page, expect,Locator } from "@playwright/test";

//import dataset from "../test-data/datatest.json";
export class FormPage {
    readonly page: Page;
    readonly successMessage: Locator;
    constructor(page:Page){
        this.page=page;
this.successMessage = page.getByText(
      'Thanks for submitting the form'
    );

    }
 
    async navigate(url:string){
        await this.page.goto(url);
    }
    async clickForm(){
 await this.page.getByRole('link', { name: 'Forms' }).click();
  await this.page.getByRole('link', { name: 'Practice Form' }).click();
    }
  async fNameTextField(firstName:string){
  await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  }
   async LNameTextField(lastName:string){
  await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
   }
    async emailTextField(email:string){
  await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(email);
    }
     async genderRadioBtn(gender:string){
  await this.page.getByRole('radio', { name: gender}).check();
     }
      async NumTextField(mobile:string){
  await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
      }
       async SelCheckBox(hobbies: string[]){
        for (const hobby of hobbies) {
  await this.page.getByRole('checkbox', { name: hobby }).check();

       }
    }
        async selectState(state: string){
          await this.page.locator('#state svg').click();
  await this.page.getByRole('option', { name: state }).click();
        }
 async selectcity(city: string){
   await this.page.locator('#city svg').click();
  await this.page.getByRole('option', { name: city }).click();
       }
        async submitBtn(){
 await this.page.getByRole('button', { name: 'Submit' }).click();
}

 async verifyFormSubmittedSuccessfully() {
    await expect(this.successMessage).toBeVisible();
  }

}