import { test } from "@playwright/test";

const URL = "https://abuem.in/";

test(" Copy text ", async ({ page }) => {
  await page.goto(URL);
  const textCopy = await page
    .locator('text="Seamless Communication, Global Impact."')
    .innerHTML();

  console.log("copy text", textCopy);

  const textCopyInner = await page
    .locator("text='Seamless Communication, Global Impact.'")
    .textContent();
  console.log("inner texxt", textCopyInner);
});
