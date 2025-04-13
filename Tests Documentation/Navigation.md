# Test Scenarios for Navigation Functionality

## Test Case 1
### Title: Navigate from Menu to Cart Page
- **Test Steps**:
    1. Visit the homepage https://coffee-cart.app/.
    2. Click on the "cart" /cart navigation link.
    3. Verify that the URL includes "/cart".
- **Expected Outcomes**:
    - The user should be navigated to the cart page https://coffee-cart.app/cart.

---

## Test Case 2
### Title: Navigate from Cart to Menu Page

- **Test Steps**:
    1. Visit the cart page https://coffee-cart.app/cart.
    2. Click on the "menu" navigation element.
    3. Verify that the URL is https://coffee-cart.app/.
- **Expected Outcomes**:
    - The user should be navigated from cart page back to the menu page https://coffee-cart.app/.

---

## Test Case 3
### Title: Navigate from Menu to GitHub Page and Vice Versa

- **Test Steps**:
    1. Visit the homepage.
    2. Click on the "github" navigation element https://coffee-cart.app/.
    3. Verify that the URL includes "/github".
    4. Click on the "menu" navigation link.
    5. Verify that the URL is https://coffee-cart.app/.
- **Expected Outcomes**:
    - The user should be able to navigate to the GitHub page and back to the menu page.

---

## Test Case 4
### Title: Navigate from Cart to GitHub Page

- **Test Steps**:
    1. Visit the cart page https://coffee-cart.app/cart.
    2. Click on the "github" navigation link.
    3. Verify that the URL includes "/github".
    4. Click on the "cart" navigation link.
    5. Verify that the URL includes "/cart".
- **Expected Outcomes**:
    - The user should be able to navigate to the GitHub page and back to the cart page.

---

## Test Case 5
### Title: Navigate from Menu to Cart Page with One Visible Product

- **Test Steps**:
    1. Visit the homepage https://coffee-cart.app.
    2. Click on "Espresso" image cup to add the product to the cart.
    3. Click on the cart navigation element that shows "1".
    4. Verify that the URL includes "/cart".
    5. Check that the cart navigation element has the class 'router-link-active'.
    6. Click on the "menu" navigation element.
    7. Verify that the URL includes https://coffee-cart.app.
    8. Check that the menu navigation link has the class 'router-link-active'.
    9. Verify that the cart navigation element still shows "1".
- **Expected Outcomes**:
    - The user should be able to navigate to the cart page and back to the menu page, with the correct product count displayed in cart nav link.

---