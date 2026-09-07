import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import AdmZip from "adm-zip";

const root = path.resolve(import.meta.dirname, "..");
const vsixPath = path.join(root, "dist/lumen-themes.vsix");

test("VSIX contains release files and excludes repository tooling", async () => {
  const zip = new AdmZip(vsixPath);
  const names = zip.getEntries().map((entry) => entry.entryName);
  const manifest = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
  const packagedManifest = JSON.parse(zip.readAsText("extension/package.json"));

  assert.equal(packagedManifest.name, manifest.name);
  assert.equal(packagedManifest.publisher, manifest.publisher);
  assert.equal(packagedManifest.version, manifest.version);

  for (const required of [
    "extension.vsixmanifest",
    "extension/package.json",
    "extension/themes/lumen-blanc.json",
    "extension/themes/lumen-noir.json",
    "extension/LICENSE.txt",
  ]) {
    assert.ok(names.includes(required), `VSIX is missing ${required}`);
  }

  for (const prefix of [
    "extension/.github/",
    "extension/.planning/",
    "extension/tests/",
    "extension/scripts/",
    "extension/samples/",
    "extension/node_modules/",
    "extension/AGENTS.md",
    "extension/package-lock.json",
  ]) {
    assert.ok(!names.some((name) => name === prefix || name.startsWith(prefix)), `VSIX contains ${prefix}`);
  }
});
