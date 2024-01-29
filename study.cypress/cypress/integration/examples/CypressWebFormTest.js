require('cypress-xpath');

import HomePageLocators from "../pageObject/HomePageLocators";
import SuccessPageLocators from "../pageObject/SuccessPageLocators";

describe('Cypress Web Form Test Suite', function()
    {

        beforeEach(function()
        {
            cy.fixture('data').then(function(data) {
                this.data = data;
            })
        })

        it('Submit Web Form Page With Success', function()
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

        it('Validate If Disable Input Is Disabled', function()
            {
                const hpl = new HomePageLocators()

                cy.visit(this.data.url)

                hpl.getDisabledElement().should('be.disabled')
            } 
        )

        it('Validate If Readonly Input Can Not Be Editable', function()
            {
                const hpl = new HomePageLocators()

                cy.visit(this.data.url)

                hpl.getReadOnlyElement().should('have.attr', 'readonly')
            } 
        )

        it('Validate If Web Form Page Is Accessible With Success', function()
            {
                let expectedMessage = "Web form"

                cy.visit(this.data.url)
                cy.title().should('eq', expectedMessage)
            } 
        )
        
        it('Validate If Web Form Page Is Accessible With Success', function()
            {
                let expectedMessage = "which were introduced in the 1930s"

                cy.visit("http://www.google.com")
                cy.get('textarea[name="q"]').type('automation').type('Cypress.io{enter}')
                cy.xpath("//*[contains(@href, 'wikipedia.org')]/*[text()='Automation']").click()
                cy.get("#mw-content-text").should('have.text', expectedMessage)
            } 
        )
    }
)