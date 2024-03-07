# testcafe-repro-screenshot-mark-macos-14

This repository reproduces the issue with macOS 14, where testcafe is unable to
locate the page area mark and shows a warning.

There are example screenshots for different platforms/browsers at `./screenshots/resizeAndCreate*.png`.

```
% npm run test 

> testcafe-repro-screenshot-mark-macos-14@1.0.0 test
> testcafe safari screenshot.tc.ts

(node:9736) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 Running tests in:
 - Safari 17.3.1 / Sonoma 14

 screenshot
 ✓ resize and create (screenshots: /Users/gtisupport/testcafe-repro-screenshot-mark-macos-14/screenshots/resizeAndCreate.png)


 1 passed (3s)

 Warnings (1):
 --
  Unable to locate the page area in the browser window screenshot at /Users/gtisupport/testcafe-repro-screenshot-mark-macos-14/screenshots/resizeAndCreate.png, because the page area mark with ID
  924885079 is not found in the screenshot.
```