describe('Cypress Web Form Test Suite', function()
    {
        it('Submit Web Form Page With Success', function()
            {
                cy.visit("https://www.selenium.dev/selenium/web/web-form.html");
                cy.get('#my-text-id').type("Testing a text field");
                cy.get('input[name="my-password"]').type("passwordField");
                cy.get('textarea[name="my-textarea"]').type("Testing a text area field");

                cy.get('select').select('Two');
                //cy.click('//*[contains(text(), 'Two')]');

                cy.get('#my-check-1').click();
                cy.get('#my-check-2').click();
                cy.get('#my-radio-2').click();

                cy.get('input[name="my-date"]').type("08/21/1988");

                cy.get('button').click();

                var expectedMessage = "Received!";
                cy.get("#message").should('have.text', expectedMessage);
            }
        )

        it('Validate If Disable Input Is Disabled', function()
            {
                cy.visit("https://www.selenium.dev/selenium/web/web-form.html");

                cy.get('input[name="my-disabled"]').should('be.disabled');
            } 
        )

        it('Validate If Readonly Input Can Not Be Editable', function()
            {
                cy.visit("https://www.selenium.dev/selenium/web/web-form.html");

                cy.get('input[name="my-readonly"]').should('have.attr', 'readonly');
            } 
        )

        it('Validate If Web Form Page Is Accessible With Success', function()
            {
                var expectedMessage = "Web form";

                cy.visit("https://www.selenium.dev/selenium/web/web-form.html");
                cy.title().should('eq', expectedMessage);
            } 
        )
    }
)