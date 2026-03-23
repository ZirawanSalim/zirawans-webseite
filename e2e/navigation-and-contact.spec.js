import { expect, test } from "@playwright/test";

test("desktop navigation routes to projects and contact", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("PORTFOLIO", { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "Projekte" }).click();
  await expect(page).toHaveURL(/\/projekte$/i);
  await expect(page.getByRole("heading", { name: "Meine Projekte" })).toBeVisible();

  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/contact$/i);
  await expect(page.getByRole("heading", { name: "Kontaktiere mich" })).toBeVisible();
});

test("contact form validates required fields", async ({ page }) => {
  await page.goto("/contact");

  await page.getByRole("button", { name: "Nachricht senden" }).click();

  await expect(page.getByText("Der Name muss mindestens 2 Zeichen lang sein")).toBeVisible();
  await expect(page.getByText("Bitte gib eine gültige Email ein")).toBeVisible();
  await expect(page.getByText("Die Nachricht muss mindestens 20 Zeichen lang sein")).toBeVisible();
});

test("contact submit button changes to valid style after valid input", async ({ page }) => {
  await page.goto("/contact");

  const submitButton = page.getByRole("button", { name: "Nachricht senden" });
  await expect(submitButton).toHaveClass(/bg-gray-600/);

  await page.getByPlaceholder("Dein Name").fill("Pari");
  await page.getByPlaceholder("deine@email.de").fill("psalim777@gmail.com");
  await page.getByPlaceholder("Deine Nachricht...").fill("Ich teste das Kontaktformular in Playwright.");

  await expect(submitButton).toHaveClass(/bg-blue-500/);
});
