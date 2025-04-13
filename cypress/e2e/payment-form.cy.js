const CommonSteps = () => {
    cy.getByData("Espresso").click();
    cy.getByData("Americano").click();
    cy.getByNavElement('cart').contains('2').click()
    cy.url().should("include", "/cart");
    cy.getByData("checkout").should("be.visible").click();
}

describe('Payment form in cart page', () => {
    beforeEach(() => {
        cy.visit('/');//starting from the home page
        CommonSteps();
    });
    it('No products in cart', () => {
        cy.visit('/cart');
        cy.get('.list >p').should('have.text', 'No coffee, go add some.');
    })
    it('Apply Payment form without newsletter', () => {
        cy.get('#name').type('Stefan');
        cy.get('#email').type('stefan@gmail.com');
        cy.get('#promotion').should('be.visible').and('not.be.checked');
        cy.get('#submit-payment').click();
        cy.url().should("include", "/");
        cy.get('.snackbar').contains("Thanks for your purchase. Please check your email for payment.");
    })
    it('Apply Payment form with newsletter', () => {
        cy.get('#name').type('Js');
        cy.get('#email').type('Joseph@aaa.pl');
        cy.get('#promotion').check().should('be.checked');
        cy.get('#submit-payment').click();
        cy.url().should("include", "/");
        cy.get('.snackbar').contains("Thanks for your purchase. Please check your email for payment.");
    });
    context('Validate Payment Form with Missing or Incorrect Input Data', () => {
        it('should show error message for empty name field', () => {
            cy.get('#email').type('samplemail@mail.com');
            cy.get('#submit-payment').click();
            cy.get('#name:invalid').invoke('prop', 'validationMessage')
                .should('be.oneOf', ['Wypełnij to pole.', 'Please fill out this field.']);
        })
        it('should show error message for empty email field', () => {
            cy.get('#name').type('Zbigniew');
            cy.get('#submit-payment').click();
            cy.get('#email:invalid').invoke('prop', 'validationMessage')
                .should('be.oneOf', ['Wypełnij to pole.', 'Please fill out this field.']);
        })
        it('should show error message for invalid email format', () => {
            cy.get('#name').type('Zbigniew');
            cy.get('#email').type('invalid-email');
            cy.get('#submit-payment').click();
            cy.get('#email:invalid')
                .invoke('prop', 'validationMessage')
                .should('be.oneOf', [
                    'Uwzględnij znak „@” w adresie e-mail. W adresie „invalid-email” brakuje znaku „@”.',
                    "Please include an \\'@\\' in the email address. \\'invalid-email\\' is missing an \\'@\\'."
                ])
        })
    })
})

const CommonStepsModal = () => {
    cy.getByData("Mocha").click();
    cy.getByData("Flat_White").click();
    cy.getByData('checkout').click();
}

describe('Payment modal form in menu page', () => {
    beforeEach(() => {
        cy.visit('/');//starting from the home page
        CommonStepsModal();
    });
    it('Apply Payment form without newsletter', () => {
        cy.get('#name').type('J');
        cy.get('#email').type('stefan@gmail.com');
        cy.get('#promotion').should('be.visible').and('not.be.checked');
        cy.get('#submit-payment').click();
        cy.url().should("include", "/");
        cy.get('.snackbar').contains("Thanks for your purchase. Please check your email for payment.");
    })
    it('Apply Payment form with newsletter', () => {
        cy.get('#name').type('Asdfghjkl Awsfdsaa Werttyuiop');
        cy.get('#email').type('zaqwsxcderfvbgtyhnmjuiklop@aaa.pl');
        cy.get('#promotion').check().should('be.checked');
        cy.get('#submit-payment').click();
        cy.url().should("include", "/");
        cy.get('.snackbar').contains("Thanks for your purchase. Please check your email for payment.");
    });
    context('Validate Payment Form with Missing or Incorrect Input Data', () => {
        it('should show error message for empty name field', () => {
            cy.get('#email').type('samplemail@mail.com');
            cy.get('#submit-payment').click();
            cy.get('#name:invalid').invoke('prop', 'validationMessage')
                .should('be.oneOf', ['Wypełnij to pole.', 'Please fill out this field.']);
        })
        it('should show error message for empty email field', () => {
            cy.get('#name').type('Zbigniew');
            cy.get('#submit-payment').click();
            cy.get('#email:invalid').invoke('prop', 'validationMessage')
                .should('be.oneOf', ['Wypełnij to pole.', 'Please fill out this field.']);
        })
        it('should show error message for invalid email format', () => {
            cy.get('#name').type('Zbigniew');
            cy.get('#email').type('invalid-email');
            cy.get('#submit-payment').click();
            cy.get('#email:invalid').invoke('prop', 'validationMessage')
                .should('be.oneOf', [
                    'Uwzględnij znak „@” w adresie e-mail. W adresie „invalid-email” brakuje znaku „@”.',
                    "Please include an \\'@\\' in the email address. \\'invalid-email\\' is missing an \\'@\\'."
                ])
        })
    })
})
