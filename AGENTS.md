# Working on Lumen Themes

Lumen Themes is a VS Code color theme extension with two hand-maintained JSON variants.

- Edit `themes/lumen-blanc.json` (light) and `themes/lumen-noir.json` (dark) directly. Preserve the existing formatting and keep changes focused on the requested variant or behavior.
- Read `.planning/DESIGN.md` for visual principles; the theme JSON is authoritative for implemented colors and scopes. Update the design document when a design decision changes.
- Use GitHub Issues at https://github.com/thousight/lumen-themes/issues as the source of truth for bugs, enhancements, priorities, and task status. Do not create a local backlog or restart phase tracking. A small requested fix does not require a planning document.
- `.planning/README.md` indexes maintained docs. `.planning/archive/gsd/` preserves historical material, not current instructions; consult it only when historical context is relevant.
- Follow `.planning/MAINTENANCE.md` for validation and releases. Run `npm test` and `git diff --check`; run `npm run test:package` for theme or packaging changes and `npm run test:ui` for visual changes.
- For visual changes, check the affected UI states and language samples in both variants as relevant. Consider TextMate and semantic token rules together. Report visual checks not performed and avoid unsupported accessibility claims.
- Use Conventional Commit PR titles. `fix` releases a patch, `feat` a minor, and `!` plus a `BREAKING CHANGE:` footer a major. Squash merges preserve the PR title and description for semantic-release.
- Keep `.planning/`, `AGENTS.md`, and `samples/` excluded from the VSIX through `.vscodeignore`.
- Semantic-release owns versioning, changelog generation, GitHub releases, and Open VSX publication after `main` passes CI. Do not edit versions or dated changelog entries for routine changes. Never put publisher credentials in repository files.
