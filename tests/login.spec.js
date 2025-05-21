import { test, expect } from "@playwright/test";

const URL = "https://testautomationpractice.blogspot.com/";

test("Login page", async ({ page }) => {
  // Open Url
  await page.goto(URL);

  //var
  console.log(await page.title(".title"));
  await expect(page).toHaveTitle("Automation Testing Practice");
  await page.locator("text='Home'").first().click();
  await page.locator('text="Udemy Courses"').first().click();
  await page.goBack();

  await page.locator("//a[normalize-space()='Online Trainings']").click();
  await page.goBack();

  await page.locator("(//a[normalize-space()='Blog'])[1]").click();
  await page.goBack();

  await page.locator('a:has-text("PlaywrightPractice")').click();
  await page.goBack();

  await page.locator('a[href="/https://testautomationpractice.blogspot.com/"]');
  await page.locator(".form-control").first().fill("Md Amanullah");
  await page.locator('input[placeholder="Enter EMail"]').fill("1@gmail.com");
  await page.locator("#phone").fill("9090476900");
  const phoneLength = await page.locator("#phone").inputValue();
  expect(phoneLength).toHaveLength(10);
  await page.locator('input[maxlength="10"]').fill("1234567890");
  await page.locator("#textarea").fill("form");
  await page.locator("input[value=male]").click();
  await page.locator("#female").click();
  await page.locator("[value='sunday']").click();
  await page.locator("#tuesday").click();
  await page.locator('(//input[@id="friday"])[1]').click();
  await page.locator("#sunday").uncheck();
  await page.locator("//select[@id='country']").selectOption("Canada");
  await page.locator("#colors").selectOption("green");
  await page.locator("#animals").selectOption({ value: "cat" });
  await page.locator("//select[@id='country']").selectOption({ index: 2 });

  await page.locator("#Wikipedia1_wikipedia-search-input").fill("Amanullah");
  await page.locator("input[type='submit']").click();
  await expect(page.locator("#wikipedia-search-result-link")).first().toHaveText(
    "Amanullah"
  );
});
