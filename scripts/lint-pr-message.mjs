import { spawnSync } from "node:child_process";

const title = process.env.PR_TITLE?.trim();
const body = process.env.PR_BODY?.trim() ?? "";
if (!title) throw new Error("PR_TITLE is required");

const message = body ? `${title}\n\n${body}\n` : `${title}\n`;
const result = spawnSync(process.execPath, ["node_modules/@commitlint/cli/cli.js"], {
  input: message,
  stdio: ["pipe", "inherit", "inherit"],
});
process.exitCode = result.status ?? 1;
