const HomePageLocators = require('../locators/HomePageLocators');

class HomePage {
  constructor(page) {
    this.page = page;
    this.homePageLocator = new HomePageLocators(page);
  }

  async check_Element(elementName) {
    switch (elementName) {
      case 'Checkbox2':
        await this.page.locator(this.homePageLocator.getCheckbox2()).check({ force: true })
        break;
      
      case 'RadioButton2':
        await this.page.locator(this.homePageLocator.getRadioButton2()).check({ force: true })
        break;
  
      default:
        console.log('Element not found')
        break;
    }
  }

  async click_Submit() {
    await this.page.click(this.homePageLocator.getSubmitButton());
  }

  async fill_Date(date) {
    await this.page.fill(this.homePageLocator.getFieldDate(), date);
  }

  async fill_Id(id) {
    await this.page.fill(this.homePageLocator.getFieldID(), id);
  }

  async fill_Password(password) {
    await this.page.fill(this.homePageLocator.getFieldPassword(), password);
  }

  async fill_Textarea(text) {
    await this.page.fill(this.homePageLocator.getFieldTextarea(), text);
  } 

  async getElement_Status(element, attribute) {
    let elementAttribute;

    switch (element) {
      case 'DisabledInput':
        elementAttribute = await this.page.locator(this.homePageLocator.getDisabledElement()).getAttribute(attribute);
        break;
      
        case 'ReadonlyInput':
        elementAttribute = await this.page.locator(this.homePageLocator.getReadOnlyElement()).getAttribute(attribute);
        break;
  
      default:
        console.log('Element not found')
        elementAttribute = 'Element not found'
        return false;
    }

    return elementAttribute !== null
  } 

  async select_Element(value) {
    await this.page.selectOption(this.homePageLocator.getSelectElement(), value);
  } 

  async uncheck_Element(elementName) {
    switch (elementName) {
      case 'Checkbox1':
        await this.page.locator(this.homePageLocator.getCheckbox1()).uncheck({ force: true })
        break;
        
      default:
        console.log('Element not found')
        break;
    }
  }

}

module.exports = HomePage;