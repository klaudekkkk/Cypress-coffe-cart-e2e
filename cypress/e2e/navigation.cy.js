describe("Navigation with no products in cart", () => {
    it("should navigate from menu to cart page", () => {
        cy.visit("/");
        cy.get(':nth-child(2) > a').contains('cart').click() //click on cart
        cy.url().should("include", "/cart"); //go to cart page
    })
    it("should navigate from cart to menu page", () => {
        cy.visit("/cart");
        cy.get(':nth-child(1) > a').contains('menu').click() //click on menu
        cy.url().should("include", "/"); //go to menu page
    })
    it('should navigate from menu tu github page and vice versa', () => {
        cy.visit("/");
        cy.get(':nth-child(3) > a').contains('github').click() //click on cart
        cy.url().should("include", "/github");
        cy.get(':nth-child(1) > a').contains('menu').click() //click on menu
        cy.url().should("include", "/"); //go to menu page
    });
    it('should navigate from cart tu github page', () => {
        cy.visit("/cart");
        cy.get(':nth-child(3) > a').contains('github').click() //click on cart
        cy.url().should("include", "/github");
        cy.get(':nth-child(2) > a').contains('cart').click() //click on menu
        cy.url().should("include", "/cart"); //go to menu page
    });
})
