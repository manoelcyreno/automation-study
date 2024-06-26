require('cypress-xpath');

import HomePageLocators from "../pageObject/HomePageLocators";
import SuccessPageLocators from "../pageObject/SuccessPageLocators";

describe('Cypress Web Form Test Suite4', function()
    {

        beforeEach(function()
        {
            cy.fixture('data').then(function(data) {
                this.data = data;
            })
        })

        it(["critical"], 'Submit Web Form Page With Success4', function()
            {

                const hpl = new HomePageLocators()
                const spl = new SuccessPageLocators()

                cy.visit(this.data.url)
                hpl.getFieldID().type(this.data.smallText)
                hpl.getFieldPassword().type("passwordField")
                hpl.getFieldTextarea().type(this.data.bigText)

                hpl.getSelectElement().select('Two')

                hpl.getCheckbox1().uncheck()
                hpl.getCheckbox2().check()
                hpl.getRadioButton2().check()

                hpl.getFieldDate().type("08/21/1988")

                hpl.getSubmitButton().click()

                var expectedMessage = "Received!"
                spl.getMessage().should('have.text', expectedMessage)
            }
        )

        it(["medium"], 'Validate If Disable Input Is Disabled4', function()
            {
                const hpl = new HomePageLocators()

                cy.visit(this.data.url)

                hpl.getDisabledElement().should('be.disabled')
            } 
        )

        it(["high"], 'Validate If Readonly Input Can Not Be Editable4', function()
            {
                const hpl = new HomePageLocators()

                cy.visit(this.data.url)

                hpl.getReadOnlyElement().should('have.attr', 'readonly')
            } 
        )

        //this test needs to failure, to check the fail results on the test report.
        it(["medium"], 'Validate If Web Form Page Is Accessible With Success4', function()
            {
                let expectedMessage = "Web form2"

                cy.visit(this.data.url)
                cy.title().should('eq', expectedMessage)
            } 
        )
    }
)