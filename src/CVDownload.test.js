import fs from "fs";
import path from "path";
import crypto from "crypto";

const sha256 = (filePath) =>
  crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");

describe("downloaded CV asset", () => {
  test("matches the source CV file", () => {
    const sourceCv = path.resolve(__dirname, "../certificate/CV_victorien_ANDRIANASOAVINA.pdf");
    const publicCv = path.resolve(__dirname, "../public/certificates/CV_victorien_ANDRIANASOAVINA.pdf");

    expect(sha256(publicCv)).toBe(sha256(sourceCv));
  });
});
