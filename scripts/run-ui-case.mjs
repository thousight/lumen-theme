import { access, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { ExTester, ReleaseQuality } from "vscode-extension-tester";

const [slug, background, statusBackground, tokenColors] = process.argv.slice(2);
if (!slug || !background || !statusBackground || !tokenColors) {
  throw new Error("theme slug, backgrounds, and token colors are required");
}

const root = path.resolve(import.meta.dirname, "..");
const version = process.env.VSCODE_UI_VERSION ?? "1.109.4";
const results = path.join(root, "test-results");
const marker = path.join(results, `ui-${slug}.passed`);
await mkdir(results, { recursive: true });
await rm(marker, { force: true });

const tester = new ExTester(
  path.join(root, ".vscode-test", `ui-${version}`),
  ReleaseQuality.Stable,
  path.join(root, ".vscode-test", `extensions-${slug}`),
);
await tester.downloadCode(version);
await tester.downloadChromeDriver(version);
await tester.installVsix({ vsixFile: path.join(root, "dist/lumen-themes.vsix") });

process.env.LUMEN_THEME_SLUG = slug;
process.env.LUMEN_EXPECTED_BACKGROUND = background;
process.env.LUMEN_EXPECTED_STATUS_BACKGROUND = statusBackground;
process.env.LUMEN_EXPECTED_TOKEN_COLORS = tokenColors;
process.env.LUMEN_RESULT_FILE = marker;
const status = await tester.runTests([path.join(root, "tests/ui/rendering.test.cjs")], {
  vscodeVersion: version,
  settings: path.join(root, `tests/ui/settings/${slug}.json`),
  resources: [path.join(root, "samples/typescript.tsx")],
  cleanup: false,
});
if (status !== 0) process.exit(status);

try {
  await access(marker);
} catch {
  throw new Error(`${slug} UI test returned success without running an assertion`);
}
