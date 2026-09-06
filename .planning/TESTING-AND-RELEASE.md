# Theme testing and automated releases

Implemented locally 2026-09-06; hosted-runner validation remains pending. Track follow-up work in GitHub Issues.

## Workflow

Merge to `main` → tests → semantic-release → version/changelog → verified VSIX → Open VSX and GitHub release.

The lockfile-installed `semantic-release` CLI and standard plugins control versioning, changelog generation, and publication. No LLM participates. Commit ranges without release-worthy changes exit successfully without publishing.

Keep the theme JSON files hand-maintained; all new tooling is development-only. Microsoft Marketplace publication remains manual.

## Migration prerequisites

- Current package: 0.2.1; no tests, lockfile, or workflows. Replace unpinned `npx` tooling with locked dependencies and local binaries.
- Open VSX 0.2.1 matches commit `d5b6fc8` for the manifest, themes, and changelog. Push the existing local `v0.2.1` tag before merging the workflow; preserve remote tag `0.2.0`.
- Move the verified 0.2.1 status-bar entry from `Unreleased` into its dated changelog entry. Future entries come from semantic-release; retain historical entries.
- Verify `GH_TOKEN` repository write access and branch-rule permissions, plus `OPEN_VSX_TOKEN` access to the `thousight` namespace and publisher agreement. Never expose token values.
- Pin a compatible Node 24 patch version. The researched semantic-release version, 25.0.9, requires Node `^22.14.0 || >=24.10.0`.

## Tests

| Proposed command | Coverage |
| --- | --- |
| `npm test` | Node tests for theme structure, design invariants, commit parsing, and release helpers |
| `npm run test:package` | Build and inspect the VSIX |
| `npm run test:ui` | Real VS Code rendering, color assertions, and screenshots |
| `npm run test:compat` | VS Code 1.80.0 discovery and contribution smoke test |
| `npm run test:all` | All checks above, in order |

### Theme and package checks

Use `node:test` with duplicate-key detection. Validate JSON structure, color literals, theme paths/types, and TextMate/semantic rules.

Assert shared surface colors and Blanc's warm white status bar in normal, no-folder, and debugging states. Measure selected important contrast pairs with alpha compositing; do not claim a full accessibility audit.

Inspect `extension.vsixmanifest`, `extension/package.json`, both themes, and the license in the built ZIP. Verify identity, version, and expected contents. Exclude tests, scripts, `.github/`, `.planning/`, `AGENTS.md`, samples, snapshots, caches, lockfile, and `node_modules/` through `.vscodeignore`. Commit the lockfile to Git.

### Rendering checks

Use ExTester (`vscode-extension-tester`), Mocha, and Selenium. Install the supplied VSIX into an isolated profile; do not repack it inside the UI harness.

For both Blanc and Noir:

1. Select the theme by its contributed label and wait for it to apply.
2. Open a TypeScript/TSX fixture; assert rendered editor, sidebar, and status bar colors, then capture those regions.
3. Assert key syntax colors in the rendered TypeScript/TSX fixture.
4. Check the Extension Development Host status bar: Blanc overrides it with warm white; Noir keeps VS Code's pinned-version purple default.

Pin the editor version, fonts, locale, dimensions, scale, zoom, settings, and fixtures. Disable updates, sync, startup prompts, cursor blinking, and unrelated extensions. Use observable readiness checks, page objects, and one helper for necessary DOM/color queries.

Capture screenshots for diagnosis and upload them on CI failure. Exact computed-color assertions are the blocking regression checks. Coverage is limited to tested scenes and environments.

### Supported VS Code versions

- **Blocking rendering:** an exact recent stable version supported by ExTester.
- **Minimum compatibility:** retain `engines.vscode: ^1.80.0`; use `@vscode/test-electron` at 1.80.0 for extension discovery and contribution metadata, without pixel comparisons. ExTester's best-effort range starts at 1.90.0.

## GitHub Actions

Use `.github/workflows/ci.yml` on all PRs and pushes to `main`, including documentation changes. Pin action revisions, use `npm ci`, and start with `ubuntu-24.04` x64. Each job installs dependencies and builds or downloads its package; jobs do not share filesystems.

Provide Xvfb, Xauth, fonts, and Electron libraries. Follow ExTester's Ubuntu user-namespace workaround when needed (`kernel.apparmor_restrict_unprivileged_userns=0`), restricted to the disposable runner. If hosted-image changes destabilize screenshots, move the rendering environment to a reviewed digest-pinned image.

After Node and desktop setup:

```sh
npm ci
xvfb-run --auto-servernum --server-args='-screen 0 1920x1080x24' npm run test:all
```

Separate UI/compatibility jobs use the same Xvfb wrapper. Set `CI=true`, fresh profiles, and initial 20-minute editor-job timeouts. Reject zero discovered tests, propagate failures, and close VS Code/ChromeDriver during cleanup. Required jobs must not use `continue-on-error`.

Cache downloads by OS, architecture, and exact tool/editor versions; never cache user profiles. Allow npm, VS Code, and ChromeDriver downloads. PR tests use `pull_request`, `contents: read`, and no publishing secrets, including for forks.

Upload expected/actual/diff images, editor logs, and ChromeDriver logs on failure with unique artifact names. The required aggregate `ci` check runs even after dependency failure and passes only when every required job succeeds.

The release job needs the same desktop setup: wrap `npm run release` in Xvfb because its prepare hook tests the final versioned VSIX.

## Commit contract

Require a `commit-message` check using commitlint with `config-conventional`. Share the `conventionalcommits` preset across linting, release analysis, and notes generation.

| Message | Release |
| --- | --- |
| `fix(theme): ...` | Patch |
| `feat(theme): ...` | Minor |
| Breaking change | Major, including from 0.x |
| `docs`, `test`, `ci`, `chore`, ordinary `refactor` | None |

For breaking changes, require both title `!` and a nonempty `BREAKING CHANGE:` footer explaining impact and migration. Enable `breaking-change-exclamation-mark` and check the explanation. This project rule is stricter than Conventional Commits.

Configure squash-only merges with `squash_merge_commit_title: PR_TITLE` and `squash_merge_commit_message: PR_BODY`. Lint the complete prospective message: title, blank line, description. Rerun on `opened`, `edited`, `synchronize`, `reopened`, and `ready_for_review`. Pass event data through stdin/files, never shell interpolation.

Descriptions explain impact, rationale, and validation. Titles become changelog summaries; breaking footers become migration notes. Ordinary body paragraphs need not appear in release notes. Add a PR template without an active breaking-change placeholder in every PR.

Require the check through branch rules. Before release, lint actual main commits since the reconciled migration boundary or latest release tag, excluding legacy history. This catches edited squash messages and direct pushes; linting cannot judge whether the declared impact is accurate.

Example:

```text
feat(theme)!: replace legacy syntax accents

Apply the new palette consistently across both variants.
Verified rendering snapshots and package contents.

BREAKING CHANGE: Syntax accents changed. Update custom token overrides
to match the new palette.
```

## Release configuration

Run `npm run release` (`semantic-release`) on `main` with `v${version}` tags. Configure plugins in order:

| Plugin | Responsibility |
| --- | --- |
| `commit-analyzer`, `release-notes-generator` | Determine version and generate notes |
| `changelog` | Update root `CHANGELOG.md` |
| `npm` with `npmPublish: false` | Update package and lockfile versions |
| `exec` | Prepare and test `dist/lumen-theme.vsix`; publish with `ovsx publish dist/lumen-theme.vsix` |
| `git` | Commit only package, lockfile, and changelog as `chore(release)` |
| `github` | Create GitHub release and attach the same VSIX and checksum after Open VSX succeeds |

All plugin names above use the `@semantic-release/` prefix. Disable unnecessary automatic issue/PR comments. Helpers validate artifacts only; standard plugins own version calculation and notes.

Verify lifecycle ordering: finish preparation and artifact tests before pushing release metadata. A tag may exist before registry upload succeeds, so it does not prove publication.

The release job depends on all required checks and runs only on a push to `main`. Checkout the tested SHA with full history/tags and `persist-credentials: false`. Serialize releases with `cancel-in-progress: false`; reject stale checkouts if remote main has advanced so the newer run handles accumulated commits.

Only the release job receives:

```yaml
env:
  GH_TOKEN: ${{ secrets.GH_TOKEN }}
  OVSX_PAT: ${{ secrets.OPEN_VSX_TOKEN }}
```

`GH_TOKEN` authenticates GitHub writes; `OVSX_PAT` authenticates Open VSX. Configure required repository write access and resolve branch-rule restrictions before rollout. Workflow `permissions` governs the built-in token, not the supplied PAT, and does not grant bypass rights. Do not also set `GITHUB_TOKEN`. No npm or Marketplace token is needed.

PAT-authenticated release commits may trigger CI again. Let `chore(release)` pass normally; semantic-release should exit without another release. Test this behavior rather than skipping workflows by actor or broad commit filters.

## Delivery and verification

Implement tests and rendering fixtures first, then CI and commit enforcement, then release migration and publishing. Update `AGENTS.md`, maintenance docs, README, changelog, and packaging exclusions to match the implemented workflow.

| Area | Planned files |
| --- | --- |
| Toolchain | `package.json`, `package-lock.json`, Node version file |
| Tests | `tests/theme.test.mjs`, `tests/package.test.mjs`, `tests/ui/`, `tests/compat/` |
| CI and messages | `.github/workflows/ci.yml`, `commit-message.yml`, `commitlint.config.cjs`, PR template |
| Release | `.releaserc.cjs`, build/checksum scripts, release job in `ci.yml` |

Before enabling publication, demonstrate:

- A clean, secret-free GitHub-hosted run, including VS Code 1.80.0 and both rendering cases.
- Required checks blocking merge and publication, including malformed messages and missing breaking explanations; PR body edits rerun validation.
- Real pinned release plugins producing patch/minor/major/no-release results and migration notes from fixtures, including a no-op generated release commit.
- Matching package, lockfile, changelog, tag, and tested/uploaded VSIX versions.

Use temporary Git repositories and mocked publishing endpoints for release integration tests. A dry run skips prepare/publish hooks and is insufficient alone. Hosted-runner execution is still required; upstream CI support does not prove this repository's tests pass.

## References

- [semantic-release on npm](https://www.npmjs.com/package/semantic-release), [registry metadata](https://registry.npmjs.org/semantic-release/latest), and [Actions guidance](https://semantic-release.gitbook.io/semantic-release/recipes/ci-configurations/github-actions).
- Release plugins: [npm](https://github.com/semantic-release/npm), [changelog](https://github.com/semantic-release/changelog), [exec](https://github.com/semantic-release/exec), [git](https://github.com/semantic-release/git), [GitHub](https://github.com/semantic-release/github).
- [VS Code testing](https://code.visualstudio.com/api/working-with-extensions/testing-extension), [CI setup](https://code.visualstudio.com/api/working-with-extensions/continuous-integration), [ExTester](https://github.com/redhat-developer/vscode-extension-tester), and [its Actions workflow](https://github.com/redhat-developer/vscode-extension-tester/blob/main/.github/workflows/template-suite.yaml).
- [commitlint configuration](https://commitlint.js.org/reference/configuration.html), [rules](https://commitlint.js.org/reference/rules.html), and [GitHub squash settings](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests).
- [Open VSX CLI](https://github.com/eclipse-openvsx/openvsx/blob/main/cli/README.md), [publishing prerequisites](https://github.com/eclipse-openvsx/openvsx/wiki/Publishing-Extensions), and [Lumen registry metadata](https://open-vsx.org/api/thousight/lumen-theme/latest).
