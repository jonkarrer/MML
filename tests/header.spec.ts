//open inspector with command_terminal$ PWDEBUG=1 npx playwright test
//otherwise for headless test run command_terminal$ npx playwright test

import { test, expect } from "@playwright/test";

test.describe("Mobile", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });
  //Set viewport
  test.use({ viewport: { width: 500, height: 800 } });

  test("Click hamburger", async ({ page }) => {
    const hamburger = page.locator("data-test=hamburger");
    const navMenu = page.locator("data-test=mobile-nav");

    await expect(navMenu).toHaveCSS("display", "none");

    await hamburger.click();
    await expect(hamburger).toHaveText("X");
    await expect(navMenu).toHaveCSS("display", "grid");
  });

  test.describe("Follow Links", async () => {
    test.beforeEach(async ({ page }) => {
      const hamburger = page.locator("data-test=hamburger");
      await hamburger.click();
    });
    test.afterEach(async ({ page }) => {
      await page.goBack();
    });

    test("Feature", async ({ page }) => {
      await page.click("a:has-text('Features')");
      await expect(page).toHaveURL("http://localhost:3000/#features");
    });
    test("Learn", async ({ page }) => {
      await page.click("a:has-text('Learn')");
      await expect(page).toHaveURL("https://learn.marketmakerlite.com/");
    });
    test("Docs", async ({ page }) => {
      await page.click("a:has-text('Docs')");
      await expect(page).toHaveURL("https://docs.marketmakerlite.com/");
    });
  });
});

test.describe("Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });
  //Set viewport
  test.use({ viewport: { width: 1100, height: 800 } });

  test("Feature", async ({ page }) => {
    await page.click("data-test=Features");
    await expect(page).toHaveURL("http://localhost:3000/#features");
  });
  test("Learn", async ({ page }) => {
    await page.click("data-test=Learn");
    await expect(page).toHaveURL("https://learn.marketmakerlite.com/");
  });
  test("Docs", async ({ page }) => {
    await page.click("data-test=Docs");
    await expect(page).toHaveURL("https://docs.marketmakerlite.com/");
  });
});
