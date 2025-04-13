
# Coffee Cart Application

## Project Overview
The **Coffee Cart Application** is a web-based project designed to simulate an online coffee shop. Users can browse various coffee types, add them to their cart, and proceed to checkout using a payment form. The project includes end-to-end (E2E) tests to ensure the functionality of the application and detailed documentation for test scenarios.

This project demonstrates proficiency in:
- Writing test code using Cypress.
- Implementing custom Cypress commands for efficient test automation.
- Documenting test cases in a structured and professional manner.
- Setting up Continuous Integration (CI) pipelines for automated testing.

## Project Goals
The primary goal of this project is to showcase:
1. **Test Automation Skills**: Writing  E2E tests for user flows.
2. **Documentation**: Providing clear and concise documentation for test scenarios and test cases.
3. **CI Integration**: Automating the testing process using GitHub Actions.

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coffee-cart-app.git
   cd coffee-cart-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Run Cypress tests:
   ```bash
   npx cypress open
   ```

## Project Structure

### 1. End-to-End Tests
The project includes comprehensive E2E tests written in Cypress. These tests cover:
- **Home Page**: Verifying navigation links, coffee types, and cart functionality.
- **Cart Page**: Testing the checkout process and payment form validation.
- **Menu Page**: Testing the modal payment form and its validation.

Test files are located in the `cypress/e2e` directory:
- `home.cy.js`
- `navigation.cy.js`
- `payment-form.cy.js`

### 2. Test Documentation
Detailed test scenarios are documented in the `Tests Documentation` folder. Each `.md` file describes:
- Test steps.
- Pre-conditions.
- Expected outcomes.


### 3. Custom Cypress Commands
Reusable Cypress commands are defined in the `cypress/support/commands.js` file. These commands simplify test steps, such as selecting elements by `data-test` attributes or navigating through the application.

### 4. Continuous Integration (CI)
The project includes a GitHub Actions workflow (`.github/workflows/main.yml`) to automate the testing process.

