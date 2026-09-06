import path from "node:path";
import { runTests } from "@vscode/test-electron";

const root = path.resolve(import.meta.dirname, "..");

try {
  await runTests({
    version: process.env.VSCODE_COMPAT_VERSION ?? "1.80.0",
    extensionDevelopmentPath: root,
    extensionTestsPath: path.join(root, "tests/compat/index.cjs"),
    launchArgs: [path.join(root, "samples"), "--disable-workspace-trust", "--skip-welcome"],
  });
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
