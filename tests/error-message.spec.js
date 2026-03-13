import { test, expect } from "@playwright/test";

[
  {
    username: "12",
    errorMessage: "User is to short {minimum is 3 characters",
    isErrorDisplayed: true,
  },
  { username: "123", errorMessage: "Username", isErrorDisplayed: false },
  {
    username: "1234567891234567890",
    errorMessage: "Username",
    isErrorDisplayed: false,
  },
  {
    username: "12345678912345678901",
    errorMessage: "User is to short {maximum is 20 characters",
    isErrorDisplayed: true,
  },
  {
    username: "12345678912345678901",
    errorMessage: "User is to short {maximum is 20 characters",
    isErrorDisplayed: true,
  },
].forEach(({ username, errorMessage, isErrorDisplayed }) => {
  test(`Error message test ${username}`, async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/register");
    await page.getByRole("textbox", { name: "username" }).fill(username);
    await page.getByRole("textbox", { name: "Email" }).fill("12");
    await page.getByRole("textbox", { name: "Password" }).fill("hello world");
    await page.getByRole("button", { name: " Sign up " }).click();
    if (isErrorDisplayed) {
      await expect(page.locator(".error-messages")).toContainText(errorMessage);
    } else {
      await expect(page.locator(".error-messages")).not.toContainText(
        errorMessage,
      );
    }
  });
});
