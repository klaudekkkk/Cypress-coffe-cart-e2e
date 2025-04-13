const coffeeTypes = [
    "Espresso",
    "Espresso_Macchiato",
    "Cappuccino",
    "Mocha",
    "Flat_White",
    "Americano",
    "Cafe_Latte",
    "Espresso_Con Panna",
    "Cafe_Breve"
];

const getRandomCoffee = () => coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)];


const addCoffee = (count) => {
    for (let i = 1; i <= count; i++) {
        const randomCoffee = getRandomCoffee();
        cy.getByData(`"${randomCoffee}"`).click();
    }
};

describe('Add three coffes and have discount mocha for 4$', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should show promo option', () => {
        addCoffee(3);
        cy.get('.promo').should('be.visible')
    });
    it('should get a mocha for 4$ for be a forth cup', () => {
        addCoffee(3);
        cy.getByNavElement('cart').contains('3')
        cy.get('.promo').should('be.visible')
        cy.get('.yes').click();
        cy.getByNavElement('cart').contains('4').click()
        cy.url().should('include', '/cart');
        cy.get('ul[data-v-8965af83=""]')
            .find('li.list-item')
            .contains('(Discounted)')
            .should('be.visible')
        cy.get('li.list-item')
            .find('div [data-v-8965af83=""]')
            .contains('$4.00')
            .should('be.visible');
    });
    it('should not get a mocha for 4$ for be a forth cup', () => {
       addCoffee(3);
        cy.getByNavElement('cart').contains('3')
        cy.get('.promo').should('be.visible')
        cy.get('.buttons > :nth-child(2)').click();
        cy.getByNavElement('cart').contains('3').click()
        cy.url().should('include', '/cart');
        cy.get('ul[data-v-8965af83=""]')
            .find('li.list-item')
            .contains('(Discounted)')
            .should('not.exist')
        cy.get('li.list-item')
            .find('div [data-v-8965af83=""]')
            .contains('$4.00')
            .should('not.exist');
    })

    it('should add 12 coffes with 4 mochas for 4$', () => {

        for(let i=1; i<=12; i++){
            const randomCoffee = coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)];
            cy.getByData(`"${randomCoffee}"`).click();
            if(i%3 === 0){
                cy.get('.promo').should('be.visible');
                cy.get('.yes').click();
                i++;
            }
        }
        cy.getByNavElement('cart').should('not.contain', '12');
        cy.getByNavElement('cart').contains('13').click();
        cy.url().should('include', '/cart');
        cy.get('ul[data-v-8965af83=""]')
            .find('li.list-item')
            .contains('(Discounted)')
            .should('be.visible');
        cy.get('.unit-desc')
            .contains('$4.00 x 4')
    })
})