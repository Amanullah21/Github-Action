import { test, expect } from "@playwright/test";

test("Verify Navbar Navigation and Content", async ({ page }) => {
  // 1. Navigate to the sign-in page
  await page.goto("https://admin-smartlms.iasam.dev/auth/signin");

  // 2. Perform Login
  await page.locator("#email-address").fill("admin@gmail.com"); // Fill email/username
  await page.locator("#password").fill("Masai@000"); // Fill password
  await page.locator("button[type='submit']").click(); // Click login button

  // Wait for the main content to load after login.
  // This is a good place for waitForLoadState as it's a significant navigation.
  await page.waitForLoadState("domcontentloaded");

  // 3. Assert successful login by checking the URL
  // Use toHaveURL for URL assertions, not toHaveText
  await expect(page).toHaveURL("https://admin-smartlms.iasam.dev/");
  const contentNavLink = page.getByRole("link", { name: "Content" });
  const videoButton = page.getByRole("button", { name: "Video" }).first();
  await expect(contentNavLink).toHaveText("Content");
  await contentNavLink.click();
  await expect(page).toHaveURL(
    "https://admin-smartlms.iasam.dev/content-management/video"
  );

  // Assert Video button text
  await expect(videoButton).toBeVisible(); // Ensure it's visible first
  await expect(videoButton).toHaveText("Video");
  const courseNavLink = page.getByRole("link", { name: "Course" }).first();

  await expect(courseNavLink).toBeVisible();
  await courseNavLink.click();
  await page.waitForLoadState("domcontentloaded");
  await expect(page).toHaveURL(
    "https://admin-smartlms.iasam.dev/course-management"
  ); // Assuming this is the correct URL for courses

  const coursesButton = page.locator("//button[normalize-space()='Courses']");
  await coursesButton.click();
  // Assert Courses button text
  await page.reload();
  await expect(coursesButton).toBeVisible();
});
