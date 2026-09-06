const assert = require("node:assert/strict");
const vscode = require("vscode");

async function run() {
  const extension = vscode.extensions.getExtension("thousight.lumen-theme");
  assert.ok(extension, "VS Code did not discover the Lumen extension");
  assert.deepEqual(
    extension.packageJSON.contributes.themes.map(({ label, uiTheme }) => ({ label, uiTheme })),
    [
      { label: "Lumen Light (Blanc)", uiTheme: "vs" },
      { label: "Lumen Dark (Noir)", uiTheme: "vs-dark" },
    ],
  );
  assert.ok(vscode.window.activeColorTheme, "VS Code 1.80 does not expose active theme state");
}

module.exports = { run };
