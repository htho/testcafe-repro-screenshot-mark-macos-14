import { fixture, test } from "testcafe";

const allowedChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
export function mkValidPath(path: string): string {
	return path.split("").map(char => allowedChars.includes(char) ? char : "_").join("");
}

fixture("screenshot")
    .page("about:blank");

test("screenshot", async t => {
    await t.eval(() => document.body.style.backgroundColor = "#dde")
    await t.resizeWindow(640, 480);
    await t.takeScreenshot(mkValidPath(`${t.browser.alias}--${t.test.name}`));
});