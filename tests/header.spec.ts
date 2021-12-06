import { test, expect } from "@playwright/test";

test.describe("Mobile Tests", () => {
  test.beforeEach(async ({ page }) => {
    //Visit page
    await page.goto("http://localhost:3000");
    //Display all console calls
    page.on("console", (msg) => console.log(msg.text()));
  });
  //Set viewport
  test.use({ viewport: { width: 500, height: 800 } });

  //Events
  test("Click hamburger", async ({ page }) => {
    const query = "[data-test='hamburger']";
    const hamburger = page.locator(query);

    await hamburger.click();
    await expect(hamburger).toHaveText("X");
  });
});

//open inspector with $ export PWDEBUG=1
//then npx playwright test
