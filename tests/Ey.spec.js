//import { test, expect } from "@playwright/test";
import { test, expect } from "../fixtures/baseFixture";
test("login page sucessfully login new", async ({ page }) => {
  //await page.goto("https://practicetestautomation.com/practice-test-login/");
  // await page.goto(`${baseURL}`);
  await page.locator("//input[@id='username']").fill("student");
  await page.locator("//input[@id='password']").fill("Password123");
  //await page.locator("//button[text()='Submit']").click();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("p.has-text-align-center")).toBeVisible();
  await expect(page.locator("p.has-text-align-center")).toHaveText(
    "Congratulations student. You successfully logged in!",
  );
});
