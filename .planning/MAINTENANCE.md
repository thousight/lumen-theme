# Maintenance

## Editing and validation

The extension has no runtime code or compilation step. `npm run build` packages the JSON themes and assets with `@vscode/vsce`. Node.js and npm are needed; `npx` may download the packaging tool. The current script does not pin its version.

After editing a theme, validate both theme files and the manifest:

```sh
node -e 'const fs = require("fs"); for (const p of ["package.json", "themes/lumen-blanc.json", "themes/lumen-noir.json"]) JSON.parse(fs.readFileSync(p, "utf8")); console.log("JSON valid");'
git diff --check
npm run build
```

JSON parsing verifies syntax, not whether every color key or scope is supported. Consult the official theme references for keys and use the editor to verify behavior. For documentation-only changes, check links and whitespace; rebuild when packaging exclusions change.

## Visual checks

Install the generated VSIX through VS Code's **Extensions: Install from VSIX...** command, reload when prompted, and select each relevant Lumen variant. Personal `workbench.colorCustomizations` and token customizations can override the theme; use a clean profile when isolating theme behavior.

- UI changes: inspect the affected component's normal, focused, inactive, selected, and disabled states where applicable. For status bars, check a folder workspace, a window without a folder, and an active debug session.
- Syntax changes: open relevant files in `samples/`, inspect tokens with **Developer: Inspect Editor Tokens and Scopes**, and compare semantic highlighting enabled and disabled when relevant. Language extensions may be needed to supply semantic tokens.
- Contrast changes: evaluate the actual foreground/background pairs, including transparency. Record measurements and visual checks in the PR; do not infer full accessibility compliance from JSON validation.
- Integration changes: check the relevant installed extension and record its version when behavior depends on it.

## Package inspection

`npm run build` produces `lumen-theme-<version>.vsix` without bumping the version. Inspect its contents with `unzip -l` and confirm the manifest and both theme files are included. `.planning/`, `AGENTS.md`, and `samples/` must remain excluded. Generated VSIX files are ignored by Git.

## Changelog and release

Keep user-visible changes in the root `CHANGELOG.md` under `Unreleased`, grouped as `Added`, `Changed`, or `Fixed` as needed. GitHub Issues tracks future work; the changelog records delivered changes. Do not invent release dates from local version tags or packaging success.

1. Check the existing package version and Marketplace release before choosing a new version. Update `package.json` once for the intended release, and prepare the matching changelog entry. Keep changes under `Unreleased` until publication is confirmed.
2. Run validation, perform relevant visual checks, build, and inspect the VSIX.
3. Publish the exact verified artifact when a release is requested. For example, for version 0.2.1:

   ```sh
   npm run publish -- --packagePath lumen-theme-0.2.1.vsix
   ```

   Alternatively upload that same VSIX in the [Marketplace publisher dashboard](https://marketplace.visualstudio.com/manage/publishers/thousight).
4. Confirm publication, date the changelog entry, and sync the release metadata and tag to GitHub. A successful build or GitHub merge alone does not confirm a Marketplace release.

If authentication fails, refresh credentials locally with `npx @vscode/vsce login thousight`. Keep tokens out of chat and repository files. Retry the same version or artifact; do not rerun `npm run publish -- patch`, which can bump, commit, and tag another version before publication succeeds. If the version already exists remotely, verify it before deciding whether a new release is needed.

See the [official publishing guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for current authentication and Marketplace requirements.
