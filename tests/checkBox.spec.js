import { test, expect } from "@playwright/test";

test("All Opration on Check box ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#tuesday").click();
  await page.locator("#thursday").check();
  await page.locator("#sunday").click();
  await expect(page.locator("#sunday")).toBeChecked();
  await page.locator("#sunday").uncheck();
  await expect(page.locator("#sunday")).not.toBeChecked();
  await page
    .locator("tbody tr:nth-child(2) td:nth-child(4) input:nth-child(1)")
    .check();
  await page
    .locator("tbody tr:nth-child(2) td:nth-child(4) input:nth-child(1)")
    .click();
});
