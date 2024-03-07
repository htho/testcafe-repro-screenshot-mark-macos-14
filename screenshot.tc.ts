import { fixture, test } from "testcafe";

fixture("screenshot")
    .page("https://devexpress.github.io/testcafe/example");

test('resize and create', async t => {
    await t.resizeWindow(400, 400);
    await t.takeScreenshot("resizeAndCreate")
});