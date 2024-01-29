export class HomePageLocators {
    
    constructor(page) {
      this.page = page;
    }

    async checkCheckbox2() {
        await this.page.locator('#my-check-2').check();
    }
    
    async checkRadioButton2() {
        await this.page.locator('#my-radio-2').check();
    }

    async uncheckCheckbox1() {
        await this.page.locator('#my-check-1').uncheck();
    }

    async getDisabledElement() {
        await this.page.locator('input[name="my-disabled"]').;
    }

    async fillFieldDate(text) {
        await this.page.fill('input[name="my-date"]', text);
    }

    async fillFieldID(text) {
        await this.page.fill('#my-text-id', text);
    }

    async fillFieldPassword(text) {
        await this.page.fill('input[name="my-password"]', text);
    }

    async fillFieldTextarea(text) {
        await this.page.fill('textarea[name="my-textarea"]', text);
    }

    async getReadOnlyElement() {
        await this.page.locator('input[name="my-readonly"]');
    }

    async getSubmitButton() {
        await this.page.locator('button');
    }

    async selectOptionFromSelectedElement(text) {
        await this.page.locator('select').selectOption({ label: text });
    }
}