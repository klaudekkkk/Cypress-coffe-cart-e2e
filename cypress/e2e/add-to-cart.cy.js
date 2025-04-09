describe("Add to Cart", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should add Espresso to the cart and verify its details", () => {
        cy.get('[data-test="Espresso"]').click();
        cy.get('[data-test="checkout"]').contains('$10.00');
        cy.get(':nth-child(2) > a').contains('1').click()
        cy.url().should("include", "/cart");
        cy.get('[data-test="checkout"]').should("be.visible");
        cy.get('ul[data-v-8965af83=""]').contains("Espresso").should("be.visible");
        cy.get(':nth-child(2) > .unit-desc').contains("$10.00 x 1").should("be.visible");
        cy.get('.list-item > :nth-child(3)').contains("$10.00").should("be.visible");

    });
it("should add two the same products", () => {
    cy.get('[data-test="Espresso"]').click(); //add product to cart
    cy.get('[data-test="Espresso"]').click(); //add product to cart
    cy.get(':nth-child(2) > a').contains('2').click() //click on cart
    cy.url().should("include", "/cart"); //go to cart page
    cy.get('li[data-v-8965af83=""]').should('have.length', 2) //check if the cart has 1 products firs li is header
    cy.get(':nth-child(2) > .unit-desc').contains("x 2").should("be.visible"); //check if the price is correct
})
    it("should add two different products", () => {
        cy.get('[data-test="Espresso"]').click(); //add product to cart
        cy.get('[data-test="Mocha"]').click(); //add product to cart
        cy.get(':nth-child(2) > a').contains('2').click() //click on cart
        cy.url().should("include", "/cart"); //go to cart page
        cy.get('li[data-v-8965af83=""]').should('have.length', 3) //check if the cart has 2 products firs li is header
    })
    it.only("should add all products to cart", () => {
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
        coffeeTypes.forEach((coffeeType) => {
            cy.get(`[data-test="${coffeeType}"]`).click(); //add all products to cart
        });
            cy.get(':nth-child(2) > a').contains('9').click() //click on cart
            cy.url().should("include", "/cart"); //go to cart page
            cy.get('li[data-v-8965af83=""]').should('have.length', 10) //check if the cart has 2 products firs li is header
        })
})