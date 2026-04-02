import fs from "fs";
import path from "path";

describe("App.css background assets", () => {
  test("uses a webpack-safe path for the home page background image", () => {
    const cssPath = path.join(__dirname, "App.css");
    const css = fs.readFileSync(cssPath, "utf8");

    expect(css).toContain("background-image: url('./assets/img/bg/page-bg-1.webp');");
    expect(css).not.toContain("background-image: url('/assets/img/bg/page-bg-1.webp');");
  });
});
