import { test, expect } from "@playwright/test";

test("test radio button opration", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#male").click(); // male
  await expect(await page.locator("#male")).toBeChecked();
  //   await expect(page.locator("#sunday")).toBeChecked();

  // varify
  await page.locator("#female").click(); // female
  await expect(await page.locator("#male")).not.toBeChecked();
  await expect(await page.locator("#female")).toBeChecked();
  await expect(page.locator("#male")).toBeVisible();
  await expect(page.locator("#female")).toHaveAttribute("name", "gender");

  //male verify
  // female verify
});
