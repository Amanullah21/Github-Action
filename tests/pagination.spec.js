import { expect, test } from "@playwright/test";

test("Pagination", async ({ page }) => {
  await page.goto("https://admin-smartlms.iasam.dev/auth/signin");

  // Login on Admin Side
  await page.locator("#email-address").fill("admin@gmail.com"); // Fill email/username
  await page.locator("#password").fill("Masai@000"); // Fill password
  await page.locator("button[type='submit']").click(); // Click login button

  // navigate to Assessment page
  await page.waitForLoadState("domcontentloaded");
  await page.getByRole("link", { name: "Content" }).click();
  await page.waitForLoadState("domcontentloaded");
  await page.getByRole("link", { name: "Assessments" }).click();
  await page.waitForLoadState("domcontentloaded");

  // let apply pagination on Assessment page\
  const assessmentName = await page
    .locator("tbody tr:nth-child(1) td:nth-child(1)")
    .innerText();
  await page.waitForLoadState("domcontentloaded");
  await page.locator("//button[normalize-space()='2']").click();
  // await expect(assessmentName).not.toBeVisible();
  await page.waitForLoadState("domcontentloaded");

  const textLocatorOnSecondPage = page.getByText(assessmentName, {
    exact: true,
  });

  // --- Step 4: Assert that this locator (the element containing the text) is NOT visible ---
  // Playwright will wait a bit to confirm the text is indeed not there.
  await expect(textLocatorOnSecondPage).not.toBeVisible();
  aw
});
