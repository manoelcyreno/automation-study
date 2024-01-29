export class SuccessPageLocators {

    constructor(page) {
        this.page = page;
      }
  
    async getTextContentMessage() {
        return this.page.textContent("#message");
    }

}