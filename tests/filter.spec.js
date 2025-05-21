import { test, expect } from "@playwright/test";

let Url = "https://student-smartlms.iasam.dev/";

test("LMS Filter apply", async ({ page }) => {
  await page.goto(Url);
  await page.locator("#email-address").fill("masai3@masaischool.com"); // await page.fill("id", text)
  await page.locator("#password").fill("masai@000");
  await page.locator("button[type='submit']").click(); // await page.click("id")
  await page.waitForLoadState("domcontentloaded");
  //   await page.locator("").click();

  const dashboardURl = page.url();
  await expect(dashboardURl).toMatch(Url);
  await page.locator("//a[normalize-space()='Learn']").click();
  await page.locator("//button[normalize-space()='Assignments']").click();
  await page
    .locator("input[placeholder='Search ']")
    .fill("Manual grading Question and testing");
  await page.waitForLoadState("domcontentloaded");
  await expect(
    page.locator("//a[normalize-space()='Manual grading Question and testing']")
  ).toHaveText("Manual grading Question and testing");
  //   await page
  //     .locator("//a[normalize-space()='Manual grading Question and testing']")
  //     .click();
  await page.locator("(//img[@alt='dropdown'])[1]").click();
  await page.waitForLoadState("domcontentloaded");
  await page.locator("//button[normalize-space()='Submitted']").click();
  await page.waitForLoadState("domcontentloaded");
  await expect(
    page.locator("(//div[contains(text(),'Submitted')])[1]").first()
  ).toHaveText("Submitted");
  await expect(
    page.locator("//a[normalize-space()='Manual grading Question and testing']")
  ).toHaveText("Manual grading Question and testing");
});
