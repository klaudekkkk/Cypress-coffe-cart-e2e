# Test Scenario for Payment Form Functionality in cart page


## Test Case 1
### Title: No Products in Cart
- **Pre-conditions**: User is on the cart page with no products.
- **Test Steps**:
    1. Visit the cart page.
    2. Check for the message indicating no products in the cart.
- **Expected Outcomes**:
    - The message "No coffee, go add some." should be displayed.

---

## Test Case 2
### Title: Apply Payment Form Without Newsletter at cart page
- **Pre-conditions**:    
  1. User has added products to the cart.
  2. User is on the cart page.
  3. User clicked on checkout button.
          
- **Test Steps**:
    1. Fill in the name field with "Stefan".
    2. Fill in the email field with "stefan@gmail.com".
    3. Verify that the newsletter checkbox is visible and not checked.
    4. Click the submit payment button.
    5. Verify that the URL includes https://coffee-cart.app/
    6. Check for the success message.
- **Expected Outcomes**:
    - The user should see the message "Thanks for your purchase. Please check your email for payment."

---

## Test Case 3
### Title: Apply Payment Form With Newsletter
- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the cart page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Fill in the name field with "Js".
    2. Fill in the email field with "Joseph@aaa.pl".
    3. Check the newsletter checkbox.
    4. Click the submit payment button.
    5. Verify that the URL includes "/".
    6. Check for the success message.
- **Expected Outcomes**:
    - The user should see the message "Thanks for your purchase. Please check your email for payment."

---

## Test Case 4
### Title: Show Error Message for Empty Name Field

- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the cart page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Leave the name field empty.
    2. Fill in the email field with "samplemail@mail.com".
    3. Click the submit payment button.
    4. Check for the validation message for the name field.
- **Expected Outcomes**:
    - The validation message should be "Wypełnij to pole."

---

## Test Case 5
### Title: Show Error Message for Empty Email Field
- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the cart page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Fill in the name field with "Zbigniew".
    2. Leave the email field empty.
    3. Click the submit payment button.
    4. Check for the validation message for the email field.
- **Expected Outcomes**:
    - The validation message should be "Wypełnij to pole."

---

## Test Case 6
### Title: Show Error Message for Invalid Email Format
- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the cart page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Fill in the name field with "Zbigniew".
    2. Fill in the email field with "invalid-email".
    3. Click the submit payment button.
    4. Check for the validation message for the email field.
- **Expected Outcomes**:
    - The validation message should indicate that the email format is invalid.

---

# Test Scenario for Payment Form Functionality in menu page

## Test Case 1
### Title: Apply Payment Modal Form Without Newsletter
- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the menu page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Fill in the name field with "J".
    2. Fill in the email field with "stefan@gmail.com".
    3. Verify that the newsletter checkbox is visible and not checked.
    4. Click the submit payment button.
    5. Verify that the URL includes "/".
    6. Check for the success message.
- **Expected Outcomes**:
    - The user should see the message "Thanks for your purchase. Please check your email for payment."

---

## Test Case 2
### Title: Apply Payment Modal Form With Newsletter
- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the menu page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Fill in the name field with "Asdfghjkl Awsfdsaa Werttyuiop".
    2. Fill in the email field with "zaqwsxcderfvbgtyhnmjuiklop@aaa.pl".
    3. Check the newsletter checkbox.
    4. Click the submit payment button.
    5. Verify that the URL includes "/".
    6. Check for the success message.
- **Expected Outcomes**:
    - The user should see the message "Thanks for your purchase. Please check your email for payment."

---
## Test Case 2
### Title: Show Error Message for Empty Name Field

- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the menu page.
3. User clicked on checkout button.
- **Test Steps**:
    1. Leave the name field empty.
    2. Fill in the email field with "samplemail@mail.com".
    3. Click the submit payment button.
    4. Check for the validation message for the name field.
- **Expected Outcomes**:
    - The validation message should be "Wypełnij to pole."

---

## Test Case 3
### Title: Show Error Message for Empty Email Field

- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the menu page.
3. User clicked on checkout button.

- **Test Steps**:

    1. Fill in the name field with "Zbigniew".
    2. Leave the email field empty.
    3. Click the submit payment button.
    4. Check for the validation message for the email field.

- **Expected Outcomes**:
    - The validation message should be "Wypełnij to pole."

---

## Test Case 4

### Title: Show Error Message for Invalid Email Format
- **Pre-conditions**:
1. User has added products to the cart.
2. User is on the menu page.
3. User clicked on checkout button.

- **Test Steps**:
    1. Fill in the name field with "Zbigniew".
    2. Fill in the email field with "invalid-email".
    3. Click the submit payment button.
    4. Check for the validation message for the email field.

- **Expected Outcomes**:
    - The validation message should indicate that the email format is invalid, specifically mentioning the missing "@" character.


---
