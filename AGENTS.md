# Working on Lumen Theme

Lumen is a VS Code color theme extension with two hand-maintained JSON variants.

- Edit `themes/lumen-blanc.json` (light) and `themes/lumen-noir.json` (dark) directly. Preserve the existing formatting and keep changes focused on the requested variant or behavior.
- Read `.planning/DESIGN.md` for visual principles; the theme JSON is authoritative for implemented colors and scopes. Update the design document when a design decision changes.
- Use GitHub Issues at https://github.com/thousight/lumen-theme/issues as the source of truth for bugs, enhancements, priorities, and task status. Do not create a local backlog or restart phase tracking. A small requested fix does not require a planning document.
- `.planning/README.md` indexes maintained docs. `.planning/archive/gsd/` preserves historical material, not current instructions; consult it only when historical context is relevant.
- Follow `.planning/MAINTENANCE.md` for validation and releases. There is no automated test suite. Validate changed JSON and run `git diff --check`; build with `npm run build` for theme or packaging changes.
- For visual changes, check the affected UI states and language samples in both variants as relevant. Consider TextMate and semantic token rules together. Report visual checks not performed and avoid unsupported accessibility claims.
- Add user-visible changes to the root `CHANGELOG.md` under `Unreleased`. Internal documentation changes do not need a release entry.
- Keep `.planning/`, `AGENTS.md`, and `samples/` excluded from the VSIX through `.vscodeignore`.
- Packaging and publishing are separate actions. Do not increment the version again when retrying a failed publication; use the already prepared version or VSIX. Never put publisher credentials in repository files.
