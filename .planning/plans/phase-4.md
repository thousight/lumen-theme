# Phase 4 Plan: Branding & Marketplace Preparation

**Goal:** Finalize the Lumen Theme for public distribution on the Visual Studio Marketplace.

## Step 1: Manifest & Metadata
- [x] Update `package.json` with categories, keywords, and repository URL.
- [x] Add `galleryBanner` configuration to `package.json`.
- [x] Verify the `publisher` ID.
- [x] Create a robust `.vscodeignore` file to exclude internal project docs.

## Step 2: Brand Assets
- [ ] Create a minimalist `icon.png` (256x256).
- [x] Create an `assets/` directory for branding images.
- [ ] Capture/prepare screenshots for Noir and Blanc variants (using the verification samples).

## Step 3: Documentation
- [x] Draft a professional `README.md` with:
    - Value proposition.
    - Screenshot gallery.
    - Feature highlights.
    - Installation instructions.
- [x] Create a standard `LICENSE` file (MIT recommended).
- [x] Generate a `CHANGELOG.md` for version 0.1.0.

## Step 4: Final Verification & Packaging
- [x] Audit theme files for consistency (Data Layer/Logic Layer).
- [ ] Run `npm run build` to verify packaging via `vsce`.
- [x] Inspect the generated `.vsix` content to ensure no internal docs are leaked.
- [x] Final visual check of both theme variants in the extension host.

## Checkpoints
- **Checkpoint 1:** `package.json` contains all required marketplace metadata.
- **Checkpoint 2:** `.vscodeignore` correctly excludes all `.planning/` and `samples/` folders.
- **Checkpoint 3:** `README.md` is visually appealing and informative.
