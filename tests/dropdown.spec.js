// scrolling dropdown
// drop down with drop and option
// check custom drop down
// any other posible case

import { test } from "@playwright/test";

test("dropDownTesting", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const options = await page.$$eval("#country", (opts) =>
    opts.map((o) => ({ value: o.value, label: o.textContent }))
  );
  console.log(options);
});
