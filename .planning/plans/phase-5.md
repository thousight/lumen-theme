# Phase 5 Plan: Ecosystem & Accessibility Refinement

**Goal:** mature the Lumen Theme by expanding extension support, refining language fidelity, and ensuring accessibility compliance.

## Step 1: Accessibility Audit & Remediation
- [ ] Audit **Lumen Blanc** contrast ratios for Comments and Punctuation against `#f7f7f4`.
- [ ] Audit **Lumen Noir** contrast ratios for Comments and Punctuation against `#26251e`.
- [ ] Adjust `tokenColors` to ensure WCAG 2.1 AA (4.5:1) compliance for all text.

## Step 2: Extension Ecosystem Styling
- [ ] Add explicit styling for **GitLens** (gutter, hovers, sidebar).
- [ ] Add explicit styling for **Todo Tree** tags (TODO, FIXME, BUG).
- [ ] Add explicit styling for **Error Lens** diagnostic overlays.
- [ ] Verify integration with **Peacock** and other UI-modifying extensions.

## Step 3: Expanded Language Highlighting
- [ ] Implement/Refine **Markdown** highlighting (headings, code blocks, lists).
- [ ] Implement/Refine **C/C++** highlighting (macros, struct/class members).
- [ ] Implement/Refine **PHP** highlighting (sigils, interpolation).
- [ ] Implement/Refine **Shell/Bash** highlighting (flags, variables).

## Step 4: Refined Terminal ANSI Colors
- [ ] Define soft ANSI color palettes for **Lumen Blanc**.
- [ ] Define monochromatic-leaning ANSI color palettes for **Lumen Noir**.
- [ ] Update `colors` in both theme files with `terminal.*` keys.

## Step 5: Final Verification
- [ ] Create `samples/` for C++, PHP, and Markdown.
- [ ] Verify accessibility via "Developer: Inspect Editor Tokens".
- [ ] Run `npm run build` and verify the new version (0.2.0).

## Checkpoints
- **Checkpoint 1:** All comments and punctuation pass 4.5:1 contrast.
- **Checkpoint 2:** GitLens gutter heatmaps are clearly visible but not distracting.
- **Checkpoint 3:** Markdown documents render with a clear hierarchy in the editor.
