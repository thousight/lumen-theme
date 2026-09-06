# Maintenance

## Editing and validation

The extension has no runtime code. Development dependencies are pinned in `package-lock.json`; use the Node version in `.node-version`.

After editing a theme, validate both theme files and the manifest:

```sh
npm ci
npm test
git diff --check
npm run test:package
```

Run `npm run test:ui` for visual changes. It installs the built VSIX into pinned VS Code test instances and checks rendered workbench and syntax colors for both variants. Run `npm run test:compat` to check discovery on VS Code 1.80. Linux CI wraps desktop tests in Xvfb.

## Visual checks

Install the generated VSIX through VS Code's **Extensions: Install from VSIX...** command, reload when prompted, and select each relevant Lumen variant. Personal `workbench.colorCustomizations` and token customizations can override the theme; use a clean profile when isolating theme behavior.

- UI changes: inspect the affected component's normal, focused, inactive, selected, and disabled states where applicable. For status bars, check a folder workspace, a window without a folder, and an active debug session.
- Syntax changes: open relevant files in `samples/`, inspect tokens with **Developer: Inspect Editor Tokens and Scopes**, and compare semantic highlighting enabled and disabled when relevant. Language extensions may be needed to supply semantic tokens.
- Contrast changes: evaluate the actual foreground/background pairs, including transparency. Record measurements and visual checks in the PR; do not infer full accessibility compliance from JSON validation.
- Integration changes: check the relevant installed extension and record its version when behavior depends on it.

## Package inspection

`npm run build` produces `dist/lumen-theme.vsix` without bumping the version. `npm run test:package` verifies identity, version, required files, and exclusions. Generated artifacts are ignored by Git.

## Changelog and release

Squash PRs with a Conventional Commit title and meaningful description. GitHub Actions runs the checks after merge; semantic-release then derives the version and changelog, packages the extension, publishes the same VSIX to Open VSX, and attaches it to a GitHub release. `GH_TOKEN` authenticates GitHub and `OPEN_VSX_TOKEN` is exposed to the Open VSX CLI as `OVSX_PAT`.

Do not manually bump `package.json` or add routine release entries. A release failure must retry the prepared version/artifact rather than create another version. Microsoft Marketplace publication remains manual.

See [testing and automated releases](TESTING-AND-RELEASE.md) for the implementation contract.
