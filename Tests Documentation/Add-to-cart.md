# "Add to Cart" Functionality

## Test Case 1:
### Title: Add Espresso to the Cart and verify its details
- **Pre-conditions**: User is on the homepage https://coffee-cart.app/.
- **Test Steps**:
    1. Click on "Espresso" cup image.
    2. Verify that the checkout price is '$10.00'.
    3. Click on the cart link at navbar.
    4. Verify that the URL includes "/cart".
    5. Check that the checkout button is visible.
    6. Verify that "Espresso" is visible in the cart.
    7. Check that the Unit column shows "$10.00 x 1" and is visible.
    8. Verify that the total column shows "$10.00" and is visible.
- **Expected Outcomes**:
    - "Espresso" should be visible in the cart with the correct price and quantity.

---

## Test Case 2
### Title: Add Two of the Same Products
- **Pre-conditions**: User is on the homepage https://coffee-cart.app/.
- **Test Steps**:
    1. Click on "Espresso" (twice).
    2. Click on the cart link at the navbar.
    3. Verify that the URL includes "/cart".
    4. Check that the cart has 2 products (the first item is a header).
    5. Verify that the Unit column shows "$10.00 x 2" and is visible.
    6. Check that the total column shows "$20.00" and is visible.
- **Expected Outcomes**:
    - The cart should contain 2 "Espresso" items with the correct quantity (2) and price ($20.00).

---

## Test Case 3
### Title: Add Two Different Products
- **Pre-conditions**: User is on the homepage.
- **Test Steps**:
    1. Click on "Espresso" cup image.
    2. Click on "Mocha" cup image.
    3. Click on the cart link in navbar.
    4. Verify that the URL includes "/cart".
    5. Check that the cart has 2 products (the first item is a header).
- **Expected Outcomes**:
    - The cart should contain 2 different products.

---

## Test Case 4
### Title: Add All Products to Cart
- **Pre-conditions**: User is on the homepage.
- **Test Steps**:
    1. Click on image of each coffee type from the following list:
        - Espresso
        - Espresso_Macchiato
        - Cappuccino
        - Mocha
        - Flat_White
        - Americano
        - Cafe_Latte
        - Espresso_Con Panna
        - Cafe_Breve
    2. Click on the cart link in navbar.
    3. Verify that the URL includes "/cart".
    4. Check that the cart has 9 products (the first item is a header).
- **Expected Outcomes**:
    - The cart should contain all 9 coffee types with the correct quantity.

---