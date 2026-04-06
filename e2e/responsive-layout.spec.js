import { expect, test } from "@playwright/test";

const viewports = [
  { name: "iphone", size: { width: 390, height: 844 }, usesMobileNav: true },
  { name: "ipad", size: { width: 1024, height: 1366 }, usesMobileNav: true },
  { name: "desktop", size: { width: 1440, height: 900 }, usesMobileNav: false },
];

async function expectNoHorizontalOverflow(page) {
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
}

for (const viewport of viewports) {
  test(`responsive layout on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize(viewport.size);
    await page.goto("/projekte");

    if (viewport.usesMobileNav) {
      await expect(page.getByRole("button", { name: "Theme wechseln" })).toBeVisible();
      await expect(page.getByRole("button", { name: "Menü öffnen" })).toBeVisible();
    } else {
      await expect(page.getByRole("link", { name: "Projekte" })).toBeVisible();
    }

    await expectNoHorizontalOverflow(page);

    await page.goto("/github");
    await expect(page.getByRole("heading", { name: "Meine GitHub Projekte" })).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });
}
