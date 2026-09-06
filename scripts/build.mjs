import { mkdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";

await mkdir("dist", { recursive: true });
const result = spawnSync(
  process.platform === "win32" ? "node_modules\\.bin\\vsce.cmd" : "node_modules/.bin/vsce",
  ["package", "--no-git-tag-version", "--out", "dist/lumen-theme.vsix"],
  { stdio: "inherit" },
);
process.exitCode = result.status ?? 1;
