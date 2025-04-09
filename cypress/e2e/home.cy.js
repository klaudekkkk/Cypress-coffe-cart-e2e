describe("home page", () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it("menu is active", () => {
        cy.contains('a', 'menu')
            .should('be.visible')
            .and('have.class', 'router-link-active');
    })
    it("all type of coffee are visible", () => {
        const coffeeTypes = [
            "Espresso",
            "Espresso Macchiato",
            "Cappuccino",
            "Mocha",
            "Flat White",
            "Americano",
            "Cafe Latte",
            "Espresso Con Panna",
            "Cafe Breve"
        ];
        coffeeTypes.forEach((coffeeType, index) => {
            cy.get(`:nth-child(${index + 1}) > h4`).contains(coffeeType);
        });
    })
    it("button checkout is visible", () => {
        cy.get('[data-test="checkout"]').should('be.visible');
    })

})