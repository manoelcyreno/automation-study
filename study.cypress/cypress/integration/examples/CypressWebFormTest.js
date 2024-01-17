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
                cy.visit(this.data.url);
                cy.get('#my-text-id').type(this.data.smallText);
                cy.get('input[name="my-password"]').type("passwordField");
                cy.get('textarea[name="my-textarea"]').type(this.data.bigText);

                cy.get('select').select('Two');

                cy.get('#my-check-1').uncheck();
                cy.get('#my-check-2').check();
                cy.get('#my-radio-2').check();

                cy.get('input[name="my-date"]').type("08/21/1988");

                cy.get('button').click();

                var expectedMessage = "Received!";
                cy.get("#message").should('have.text', expectedMessage);
            }
        )

        it('Validate If Disable Input Is Disabled', function()
            {
                cy.visit(this.data.url);

                cy.get('input[name="my-disabled"]').should('be.disabled');
            } 
        )

        it('Validate If Readonly Input Can Not Be Editable', function()
            {
                cy.visit(this.data.url);

                cy.get('input[name="my-readonly"]').should('have.attr', 'readonly');
            } 
        )

        it('Validate If Web Form Page Is Accessible With Success', function()
            {
                var expectedMessage = "Web form";

                cy.visit(this.data.url);
                cy.title().should('eq', expectedMessage);
            } 
        )
    }
)