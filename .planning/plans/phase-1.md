# Phase 1 Plan: Workbench UI Foundation

**Goal:** Establish the core "Lumen" identity by styling the editor environment for both Light and Dark variants.

## Step 1: Project Initialization
- [x] Initialize VSCode extension project.
- [x] Create `package.json` with theme contributions for `Lumen Light` and `Lumen Dark`.
- [x] Set up basic folder structure (`themes/`, `assets/`).

## Step 2: Implementation - Lumen Light (Blanc)
- [x] Define core colors in `themes/lumen-blanc.json`.
- [x] Implement Unified Background (`#f7f7f4`) across all components.
- [x] Implement 1px Dividers (`#e0e0de`) and disable shadows.
- [x] Implement Interaction Tints (`#EAEAE7`) and warm brownish-gray text.

## Step 3: Implementation - Lumen Dark (Noir)
- [x] Define core colors in `themes/lumen-noir.json`.
- [x] Implement softer dark background and monochromatic UI.
- [x] Apply "leather orange" (`#C56A39`) to Cursor, Search Matches, and Buttons.
- [x] Implement basic syntax hierarchy (brightness-based) and dimmed punctuation.

## Step 4: UI Noise Reduction & Refinement
- [x] Style Line Numbers and Indent Guides (minimal/low-contrast).
- [x] Customize Git status colors (desaturated Red/Green/Yellow).
- [x] Verify Terminal background consistency.

## Step 5: Verification
- [ ] Launch Extension Development Host.
- [ ] Verify visual alignment with `Phase-1-CONTEXT.md`.
- [ ] Check legibility and contrast ratios.

## Checkpoints
- **Checkpoint 1:** Light theme has a seamless "sheet of paper" look.
- **Checkpoint 2:** Dark theme feels "high-tech" and correctly applies the leather accent.
- **Checkpoint 3:** Both themes are installable and switchable.
