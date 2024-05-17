
# Demo Tests using playwright framework

This repository contains the automation tests for the InPost interview assessment task. The tests are created using the Playwright framework.

## Project Structure

- `pages/` - Contains the Page Object Model (POM) classes for different pages.
- `tests/` - Contains the test classes.
  - `purchase.e2e.spec.ts` - Contains the end-to-end (E2E) flow tests, running in serial mode.
  - `login.negative.tests.spec.ts` - Contains negative test scenarios for the login page.
- `.env` - Stores environment variables, including the website URL.
- `playwright.config.ts` - Playwright configuration file.
- `README.md` - Instructions for setting up and running the tests.

## Prerequisites

- Node.js (v20.11.1)
- npm (v10.2.4)

## Framework and Configuration Setup

- Implemented the Page Object Model (POM) for managing page elements and actions.
- Managed test settings via a configuration file, including base URLs, wait timeouts, browser drivers.
- Enabled screenshot capabilities for better debugging.

## Test Lifecycle Management

- Utilized `beforeAll` and `afterAll` hooks for setup and create a shared page for serialized e2e test.

## Negative and Field Validation Testing

- Validated correct data entry in login fields.

## Cross-Browser Compatibility and Test Suites

- Ensured tests are compatible with at least Chrome, Firefox, and Safari (WebKit) browsers.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the website URL:
   ```
   WEBSITE_URL=<your-website-url>
   ```

## Running the Tests

- To run the tests on all configured browsers:
  ```bash
  npx playwright test
  ```
- To run the tests on specific browser (ex. firefox):
  ```bash
  npx playwright test --project=firefox
  ```

- To run the tests in UI mode:
  ```bash
  npx playwright test --ui
  ```

## Running the Report

- To generate the report:
  ```bash
  npx playwright show-report
  ```

  ![Report example](resources/report.gif)

## Code Formatting

- To format the code and fix errors, use the following command:
  ```bash
  npm run fix
  ```

## Additional Information

- The tests are configured to run on multiple browsers, including desktop Chromium, desktop Firefox, and desktop Safari (WebKit).
- Extended the test method to create instances for each page object model.
- Used GTS (Google TypeScript Style) to format the code.
