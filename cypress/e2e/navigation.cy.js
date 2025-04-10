describe("Navigation with no products in cart", () => {
    it("should navigate from menu to cart page", () => {
        cy.visit("/");
        cy.getByNavElement('cart').contains('cart').click() //click on cart
        cy.url().should("include", "/cart"); //go to cart page
    })
    it("should navigate from cart to menu page", () => {
        cy.visit("/cart");
        cy.getByNavElement('menu').contains('menu').click() //click on menu
        cy.url().should("include", "/"); //go to menu page
    })
    it('should navigate from menu tu github page and vice versa', () => {
        cy.visit("/");
        cy.getByNavElement('github').contains('github').click() //click on cart
        cy.url().should("include", "/github");
        cy.getByNavElement('menu').contains('menu').click() //click on menu
        cy.url().should("include", "/"); //go to menu page
    });
    it('should navigate from cart tu github page', () => {
        cy.visit("/cart");
        cy.getByNavElement('github').contains('github').click() //click on cart
        cy.url().should("include", "/github");
        cy.getByNavElement('cart').contains('cart').click() //click on menu
        cy.url().should("include", "/cart"); //go to menu page
    });
})
describe("Navigation with products in cart", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("should navigate from menu to cart page with visible one product", () => {
        cy.getByData("Espresso").click(); //add product to cart
        cy.getByNavElement('cart').contains('1').click()//click on cart with 1 product
        cy.url().should("include", "/cart"); //go to cart page
        cy.getByNavElement('cart').contains('1') // check if in nav cart has 1 product
        cy.getByNavElement('menu').contains('menu').click() //click on menu
        cy.getByNavElement('cart').contains('1') // check if in nav cart has 1 product
    })
})