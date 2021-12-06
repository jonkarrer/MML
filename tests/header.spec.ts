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
    const hamburger = page.locator("[data-test='hamburger']");
    const navMenu = page.locator("[data-test='nav-menu']");

    //Before
    await expect(navMenu).toHaveCSS("display", "none");

    //Event
    await hamburger.click();
    await expect(hamburger).toHaveText("X");
    await expect(navMenu).toHaveCSS("display", "grid");
  });
});

//open inspector with command$ export PWDEBUG=1
//then npx playwright test
//This is to open the browser and see the tests.
