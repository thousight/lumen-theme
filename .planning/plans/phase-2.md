# Phase 2 Plan: TextMate Core Syntax Highlighting

**Goal:** Implement fundamental syntax rules for core languages with a clear, minimal visual hierarchy.

## Step 1: Implementation - Lumen Blanc (Light)
- [x] Implement the Muted Multi-color palette in `themes/lumen-blanc.json`.
- [x] Map core categories: Keywords, Functions, Strings, Constants, Tags.
- [x] Implement "Pencil Note" comments and faded punctuation.
- [x] Verify WCAG contrast for all syntax tokens.

## Step 2: Implementation - Lumen Noir (Dark)
- [x] Implement the Monochromatic hierarchy in `themes/lumen-noir.json`.
- [x] Apply International Orange (#f54e00) to Control Flow, Function Calls, and JSX/TSX Tags.
- [x] Implement Bright White strings and medium-contrast gray punctuation.
- [x] Apply distinct brightness levels for numbers and constants.

## Step 3: Markup & Documentation Support
- [x] Implement Bold/Italic support for Markdown and HTML in both themes.
- [x] Style headings and links in Markdown.

## Step 4: Language-Specific Refinement
- [x] Verify and refine highlighting for:
    - JavaScript/TypeScript (including JSX)
    - Python (decorators/strings)
    - Rust (attributes/macros)
    - Go, CSS, HTML

## Step 5: Verification
- [x] Launch Extension Development Host.
- [x] Test with sample files for all target languages.
- [x] Verify alignment with `Phase-2-CONTEXT.md`.

## Checkpoints
- **Checkpoint 1:** Light theme syntax is soft, legible, and multi-colored.
- **Checkpoint 2:** Dark theme syntax is monochromatic with logic-focused orange accents.
- **Checkpoint 3:** Both themes handle multiple languages consistently without bold/italics in code.
