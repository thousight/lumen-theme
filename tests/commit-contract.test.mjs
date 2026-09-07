import assert from "node:assert/strict";
import test from "node:test";
import { analyzeCommits } from "@semantic-release/commit-analyzer";
import releaseConfig from "../.releaserc.cjs";

const config = {
  preset: "conventionalcommits",
  releaseRules: [
    { type: "docs", release: false },
    { type: "test", release: false },
    { type: "ci", release: false },
    { type: "chore", release: false },
    { type: "refactor", release: false },
  ],
};
const logger = { log() {} };

async function releaseType(message) {
  return analyzeCommits(config, { logger, commits: [{ message }] });
}

test("Conventional Commits map to release types", async () => {
  assert.equal(await releaseType("fix(theme): restore status bar contrast"), "patch");
  assert.equal(await releaseType("feat(theme): add a dimmed variant"), "minor");
  assert.equal(
    await releaseType(
      "feat(theme)!: replace accents\n\nBREAKING CHANGE: Custom token overrides must use the new palette.",
    ),
    "major",
  );
  assert.equal(await releaseType("docs: explain theme testing"), null);
  assert.equal(await releaseType("chore(release): 0.3.0"), null);
});

test("release commits skip the CI and release workflow loop", () => {
  const gitPlugin = releaseConfig.plugins.find(([name]) => name === "@semantic-release/git");
  assert.ok(gitPlugin, "semantic-release git plugin must be configured");
  assert.match(gitPlugin[1].message, /\[skip ci\]/);
});

test("semantic-release publishes the same VSIX to both registries", () => {
  const execPlugin = releaseConfig.plugins.find(([name]) => name === "@semantic-release/exec");
  assert.ok(execPlugin, "semantic-release exec plugin must be configured");
  assert.match(execPlugin[1].publishCmd, /ovsx publish dist\/lumen-themes\.vsix/);
  assert.match(execPlugin[1].publishCmd, /vsce publish/);
  assert.match(execPlugin[1].publishCmd, /VSCE_PAT/);
  assert.match(execPlugin[1].publishCmd, /--packagePath dist\/lumen-themes\.vsix/);
});
