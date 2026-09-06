module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  plugins: [
    {
      rules: {
        "breaking-change-explanation": ({ header = "", raw = "" }) => {
          const marked = /!:\s/.test(header) || /^BREAKING CHANGE:/m.test(raw);
          if (!marked) return [true];

          const match = raw.match(/^BREAKING CHANGE:\s+(.+)$/m);
          return [
            Boolean(/!:\s/.test(header) && match && match[1].trim()),
            "breaking changes require both ! in the title and a nonempty BREAKING CHANGE: footer",
          ];
        },
      },
    },
  ],
  rules: {
    "breaking-change-exclamation-mark": [2, "always"],
    "breaking-change-explanation": [2, "always"],
    "header-max-length": [2, "always", 100],
  },
};
