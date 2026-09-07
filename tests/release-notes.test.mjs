import assert from "node:assert/strict";
import test from "node:test";
import { generateNotes } from "@semantic-release/release-notes-generator";

test("release notes generator renders Conventional Commits", async () => {
  const notes = await generateNotes(
    { preset: "conventionalcommits" },
    {
      options: { repositoryUrl: "https://github.com/thousight/lumen-themes" },
      commits: [
        {
          message: "fix: brighten Blanc blue accents",
          hash: "1234567890abcdef",
          author: { name: "thousight", email: "test@example.com" },
          committer: { name: "thousight", email: "test@example.com" },
        },
      ],
      lastRelease: { version: "0.2.1", gitTag: "v0.2.1" },
      nextRelease: { version: "0.2.2", gitTag: "v0.2.2" },
      cwd: process.cwd(),
      logger: { log() {}, error() {} },
    },
  );

  assert.match(notes, /### Bug Fixes/);
  assert.match(notes, /brighten Blanc blue accents/);
});
