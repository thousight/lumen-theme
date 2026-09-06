module.exports = {
  branches: ["main"],
  tagFormat: "v${version}",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "docs", release: false },
          { type: "test", release: false },
          { type: "ci", release: false },
          { type: "chore", release: false },
          { type: "refactor", release: false },
        ],
      },
    ],
    ["@semantic-release/release-notes-generator", { preset: "conventionalcommits" }],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/exec",
      {
        prepareCmd: "npm run test:package && npm run checksum && npm run test:ui:artifact",
        publishCmd: "ovsx publish dist/lumen-theme.vsix",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "dist/lumen-theme.vsix", label: "Lumen Theme ${nextRelease.version}" },
          { path: "dist/lumen-theme.vsix.sha256", label: "SHA-256 checksum" },
        ],
        successComment: false,
        failComment: false,
      },
    ],
  ],
};
