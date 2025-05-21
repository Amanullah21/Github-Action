import { test } from "@playwright/test";

test("Input fields exploare", async ({ page }) => {
  await page.goto("https://student-smartlms.iasam.dev/auth/signin");
  await page
    .locator('input[placeholder="name@gmail.com"]')
    .fill("masai3@masaischool.com1"); // placeholder
  await page.locator('[type="password"]').fill("masai@000"); // input[type]

  await page.locator('button:has-text("Sign In")').click();
  await page.screenshot({ path: "loginerror.png" });
  await page.locator('[name="email"]').fill("masai3@masaischool.com"); // name
  await page.locator('button:has-text("Sign In")').click();
//   await page.locator("").click();
  await page.waitForLoadState("domcontentloaded");

});
