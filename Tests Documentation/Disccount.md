# Test Scenario for Coffee Purchase and Discount Functionality

## Test Case 1
### Title: Show Promo Option After Adding Three Coffees
- **Pre-conditions**: User is on the homepage.
- **Test Steps**:
    1. Add 3 random coffees to the cart.
    2. Check if the promo option is visible.
- **Expected Outcomes**:
    - The promo option should be visible after adding three coffees.

---

## Test Case 2
### Title: Get a Mocha for $4 as the Fourth Cup
- **Pre-conditions**: User has added 3 coffees to the cart.
- **Test Steps**:
    1. Verify that the cart contains 3 items.
    2. Check if the promo option is visible.
    3. Click on the "yes" button to accept the promo.
    4. Click on the cart icon to view the cart.
    5. Verify that the URL includes "/cart".
    6. Check that the mocha is listed with "(Discounted)".
    7. Verify that the price for the mocha is displayed as "$4.00".
- **Expected Outcomes**:
    - The mocha should be added to the cart with a discounted price of $4.00 and marked as "(Discounted)".

---

## Test Case 3
### Title: Do Not Get a Mocha for $4 if Promo is Declined
- **Pre-conditions**: User has added 3 coffees to the cart.
- **Test Steps**:
    1. Verify that the cart contains 3 items.
    2. Check if the promo option is visible.
    3. Click on the "Nah, I'll skip." button to decline the promo.
    4. Click on the cart icon to view the cart.
    5. Verify that the URL includes "/cart".
    6. Check that the mocha is not listed with "(Discounted)".
    7. Verify that the price for the mocha is not displayed as "$4.00".
- **Expected Outcomes**:
    - The mocha should not be added to the cart, and there should be no discounted price displayed.

---

## Test Case 3
### Title: Add 12 Coffees with 4 Mocha Discounts
- **Pre-conditions**: User is on the homepage.
- **Test Steps**:
    1. Add 12 random coffees to the cart.
    2. For every third coffee added, check if the promo option is visible and accept it.
    3. Verify that the cart does not contain '12' but contains '13'.
    4. Click on the cart icon to view the cart.
    5. Verify that the URL includes "/cart".
    6. Check that the mocha is listed with "(Discounted)".
    7. Verify that the price for the mocha is displayed as "$4.00 x 4".
- **Expected Outcomes**:
    - The cart should reflect the addition of 4 discounted mochas at the price of $4.00 each.

---