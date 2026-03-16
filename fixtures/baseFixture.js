import { test as base, expect } from "@playwright/test";

/**
 * Base fixture that provides common setup for all tests
 * Includes automatic page navigation to the practice test login page
 */
export const test = base.extend({
  page: async ({ page }, use) => {
    // Navigate to the login page before each test
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    // Make the page available to the test
    await use(page);

    // Cleanup after test if needed
  },
});

export { expect };
