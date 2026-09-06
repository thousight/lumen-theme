# Requirements: Lumen Theme

## v1 Scope

### Workbench UI (WB)
- **WB-01:** Implement Dark variant base colors (strictly monochrome palette).
- **WB-02:** Implement Light variant "Warm Paper" background (`#f7f7f4`).
- **WB-03:** Define common UI component styles (buttons, input fields, dropdowns) for consistency.
- **WB-04:** Apply a single accent color to the Dark variant for focus and action states.
- **WB-05:** Ensure WCAG AA contrast ratios for the Light variant "soft text" against the warm paper background.

### Syntax Highlighting (SYN)
- **SYN-01:** Map TextMate scopes for core languages: JavaScript/TypeScript, Python, CSS, HTML, Go, and Rust.
- **SYN-02:** Design monochromatic syntax hierarchy for Dark variant using shades and font weights.
- **SYN-03:** Design syntax hierarchy for Light variant using soft, legible colors.
- **SYN-04:** Implement `semanticTokenColors` to refine variable, parameter, and constant differentiation.
- **SYN-05:** Use italics and bolding strategically to provide visual hierarchy without adding color clutter.

### Branding & Marketplace (MKT)
- **MKT-01:** Configure `package.json` with extension metadata, themes, and activation events.
- **MKT-02:** Create high-quality branding assets (logo, icon).
- **MKT-03:** Generate screenshots and documentation (README.md) for the Marketplace.
- **MKT-04:** Set up automated or manual publishing pipeline using `vsce`.

### Ecosystem & Accessibility (REF)
- **REF-01:** Accessibility Audit & Remediation (WCAG 2.1 AA) for comments and punctuation.
- **REF-02:** Explicit styling for GitLens, Todo Tree, and Error Lens.
- **REF-03:** Expanded Language Support (C/C++, PHP, Shell, Markdown).
- **REF-04:** Refined ANSI Terminal colors for both variants.

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| WB-01 | Phase 1 | Completed |
| WB-02 | Phase 1 | Completed |
| WB-03 | Phase 1 | Completed |
| WB-04 | Phase 1 | Completed |
| WB-05 | Phase 1 | Completed |
| SYN-01 | Phase 2 | Completed |
| SYN-02 | Phase 2 | Completed |
| SYN-03 | Phase 2 | Completed |
| SYN-05 | Phase 2 | Completed |
| SYN-04 | Phase 3 | Completed |
| MKT-01 | Phase 4 | Completed |
| MKT-02 | Phase 4 | Completed |
| MKT-03 | Phase 4 | Completed |
| MKT-04 | Phase 4 | Completed |
| REF-01 | Phase 5 | Pending |
| REF-02 | Phase 5 | Pending |
| REF-03 | Phase 5 | Pending |
| REF-04 | Phase 5 | Pending |
