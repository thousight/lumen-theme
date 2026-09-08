import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import duplicateKeyValidator from "json-dup-key-validator";

const root = path.resolve(import.meta.dirname, "..");
const manifestPath = path.join(root, "package.json");
const themePaths = [
  path.join(root, "themes/lumen-blanc.json"),
  path.join(root, "themes/lumen-noir.json"),
];

async function parseJson(file) {
  const source = await readFile(file, "utf8");
  const error = duplicateKeyValidator.validate(source, false);
  assert.equal(error, undefined, `${path.relative(root, file)} has duplicate or invalid keys`);
  return JSON.parse(source);
}

const colorPattern = /^#[0-9a-f]{6}([0-9a-f]{2})?$/i;

test("manifest contributes the two maintained themes", async () => {
  const manifest = await parseJson(manifestPath);
  assert.equal(manifest.publisher, "thousight");
  assert.equal(manifest.name, "lumen-themes");
  assert.deepEqual(manifest.contributes.themes, [
    { label: "Lumen Light (Blanc)", uiTheme: "vs", path: "./themes/lumen-blanc.json" },
    { label: "Lumen Dark (Noir)", uiTheme: "vs-dark", path: "./themes/lumen-noir.json" },
  ]);
});

test("theme files have valid colors and token rules", async () => {
  for (const file of themePaths) {
    const theme = await parseJson(file);
    assert.ok(["light", "dark"].includes(theme.type));
    assert.equal(theme.semanticHighlighting, true);
    assert.ok(theme.tokenColors.length > 0);
    assert.ok(Object.keys(theme.semanticTokenColors).length > 0);

    for (const [key, value] of Object.entries(theme.colors)) {
      assert.match(value, colorPattern, `${theme.name}: ${key} has invalid color ${value}`);
    }
    for (const rule of theme.tokenColors) {
      assert.ok(rule.scope, `${theme.name}: token rule is missing scope`);
      if (rule.settings.foreground) assert.match(rule.settings.foreground, colorPattern);
    }
  }
});

test("both variants keep primary workbench surfaces unified", async () => {
  for (const file of themePaths) {
    const { name, colors } = await parseJson(file);
    const background = colors["editor.background"];
    for (const key of [
      "activityBar.background",
      "sideBar.background",
      "panel.background",
      "statusBar.background",
      "terminal.background",
    ]) {
      assert.equal(colors[key], background, `${name}: ${key} must match editor.background`);
    }
  }
});

test("Blanc status bar stays warm white in every explicit state", async () => {
  const { colors } = await parseJson(themePaths[0]);
  assert.equal(colors["statusBar.background"], "#f7f7f4");
  assert.equal(colors["statusBar.noFolderBackground"], "#f7f7f4");
  assert.equal(colors["statusBar.debuggingBackground"], "#f7f7f4");
  assert.equal(colors["statusBar.noFolderForeground"], "#1a1a1acc");
  assert.equal(colors["statusBar.debuggingForeground"], "#1a1a1acc");
});

test("Noir status bar stays dark neutral in every explicit state", async () => {
  const { colors } = await parseJson(themePaths[1]);
  assert.equal(colors["statusBar.background"], "#26251e");
  assert.equal(colors["statusBar.noFolderBackground"], "#26251e");
  assert.equal(colors["statusBar.debuggingBackground"], "#26251e");
  assert.equal(colors["statusBar.noFolderForeground"], "#e0e0e0");
  assert.equal(colors["statusBar.debuggingForeground"], "#e0e0e0");
});
