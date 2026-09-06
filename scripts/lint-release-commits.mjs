import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const tag = execFileSync("git", ["describe", "--tags", "--match", "v[0-9]*", "--abbrev=0"], {
  encoding: "utf8",
}).trim();
if (!tag) throw new Error("A v-prefixed release tag is required");
const baseline = readFileSync(".release-baseline", "utf8").trim();
execFileSync("git", ["merge-base", "--is-ancestor", tag, baseline]);
execFileSync("git", ["merge-base", "--is-ancestor", baseline, "HEAD"]);

const messages = execFileSync("git", ["log", "--format=%B%x00", `${baseline}..HEAD`], {
  encoding: "utf8",
})
  .split("\0")
  .map((message) => message.trim())
  .filter(Boolean);

for (const message of messages) {
  const result = spawnSync(process.execPath, ["node_modules/@commitlint/cli/cli.js"], {
    input: `${message}\n`,
    stdio: ["pipe", "inherit", "inherit"],
  });
  if (result.status !== 0) process.exitCode = result.status ?? 1;
}

console.log(`Checked ${messages.length} commit(s) after migration baseline ${baseline} (${tag}).`);
