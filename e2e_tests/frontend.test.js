import { test, expect } from "@playwright/test";

test("Test clicking workshop 1 link", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/Frontend/bc15-w8-project-front-end-async-avatars/index.html");
  await expect(page.getByRole("heading", { name: "Bootcamp 15 Resources" })).toBeVisible();
  const workshop1Link = page.getByRole("link", { name: "Workshop 1 - Romeo and Juligit" });
  await expect(workshop1Link).toBeVisible();
  await workshop1Link.click();
  await page.waitForLoadState("load");
  let repoLink = page.getByRole("link", { name: "Github Repo" });
  await expect(repoLink).toBeVisible();
  const href = await repoLink.getAttribute("href");
  expect(href).toMatch("https://classroom.github.com/a/ElP3Fc9C");
  await expect(page).toHaveTitle(/.*/);
  await page.getByRole("textbox").fill("This is a new test comment");
  await page.getByRole("button", {name: "Post"}).click()
  await expect(page.getByRole("textbox")).toHaveValue("");
  await expect(page.getByText("This is a new test comment")).toBeVisible();

//   await expect(page.getByRole("link"))

});