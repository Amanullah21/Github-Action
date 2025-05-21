import { test, except } from "@playwright/test";

const LoginURL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test("login Orange HRM", async ({ page }) => {
  await page.goto(LoginURL);
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator("[type='submit']").click();

  await page.waitForLoadState("domcontentloaded");

  await page.locator("//div[@class='oxd-layout-navigation']//li[2]").click();

  await page
    .locator("(//div[@class='oxd-select-text oxd-select-text--active'])[3]")
    .click();

    const options = page.locator(" ")

//   await page.waitForLoadState("domcontentloaded");
});
