# Phase 3 Plan: Semantic Syntax Highlighting Refinement

**Goal:** Add precision to syntax highlighting using VSCode's Semantic Tokens to distinguish between subtle code contexts.

## Step 1: Implementation - Lumen Noir (Dark)
- [x] Add `semanticTokenColors` to `themes/lumen-noir.json`.
- [x] Map `function`, `method`, and `macro` to International Orange (#f54e00).
- [x] Map `variable.readonly` and `property.readonly` to Pure White (#ffffff) for constant promotion.
- [x] Map `parameter` to a slightly faded gray (#c0c0c0).
- [x] Map `typeParameter` and `namespace` to neutral gray (#e0e0e0).

## Step 2: Implementation - Lumen Blanc (Light)
- [x] Add `semanticTokenColors` to `themes/lumen-blanc.json`.
- [x] Align `variable`, `parameter`, and `property` colors with the muted multi-color palette.
- [x] Ensure `function` and `method` remain in the soft blue tone.
- [x] Subtly highlight `readonly` members via a darker muted tone or italics.

## Step 3: Global Rules & Overrides
- [x] Configure `semanticHighlighting: true` for both themes.
- [ ] Test the interaction between TextMate and Semantic tokens in edge cases (e.g., JSX properties).

## Step 4: Verification
- [x] Use `Developer: Inspect Editor Tokens and Scopes` in TypeScript and Python samples.
- [x] Verify that constants are more prominent than variables in Noir.
- [x] Verify that function calls are consistently orange regardless of TextMate scope depth.

## Checkpoints
- **Checkpoint 1:** Constants (readonly) are visually distinct from mutable variables.
- **Checkpoint 2:** Function calls are consistently highlighted across different languages via semantic tokens.
- **Checkpoint 3:** No "Color Overload" – the theme remains minimal and focused.
