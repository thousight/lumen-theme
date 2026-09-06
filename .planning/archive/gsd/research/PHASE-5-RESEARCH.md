# Phase 5 Research: Ecosystem & Accessibility Refinement

## Overview
Phase 5 focuses on maturing the Lumen Theme by expanding language support, ensuring accessibility compliance, and integrating with popular developer extensions to provide a seamless "Lumen" experience across the entire VS Code ecosystem.

## 1. Accessibility Audit (WCAG 2.1 Level AA)
- **Goal:** Ensure all text-to-background combinations meet the minimum contrast ratio of 4.5:1.
- **Target Surfaces:**
    - Editor foreground (Blanc: #1a1a1a on #f7f7f4 -> 12.6:1, Noir: #e0e0e0 on #26251e -> 11.2:1).
    - Comments (Blanc: #706d6b on #f7f7f4 -> 4.8:1, Noir: #606060 on #26251e -> 3.5:1 - **ACTION NEEDED**).
    - Punctuation (Blanc: #9aa5b0 on #f7f7f4 -> 2.6:1 - **ACTION NEEDED**, Noir: #808080 on #26251e -> 4.1:1 - **ACTION NEEDED**).
- **Tooling:** Use `a11y-checker` or VS Code's built-in contrast hints.

## 2. Extension Ecosystem Integration
Many users rely on specific UI-modifying extensions. Lumen should provide explicit styling for:
- **GitLens:** Gutter heatmaps, hover views, and sidebar status.
- **Todo Tree:** Custom colors for TODO/FIXME tags that align with the Noir/Blanc palettes.
- **Peacock:** Ensure the border/status bar colors play well with Peacock's workspace coloring.
- **Error Lens:** Soften the error background colors to match the "Sheet of Paper" aesthetic.

## 3. Expanded Language Support
While core languages are covered, several high-traffic languages need fine-tuning:
- **Markdown:** Header hierarchy, blockquotes, and table styling.
- **C/C++:** Macro definitions, struct members, and pointer operators.
- **PHP:** Variable sigils and function call consistency.
- **Shell/Bash:** Parameter expansion and command flag highlighting.

## 4. Custom Terminal Styling
- **Lumen Blanc:** Soften terminal colors (Red, Green, Yellow) to avoid the "harsh" default ANSI look.
- **Lumen Noir:** Ensure terminal colors are monochromatic where possible, or use desaturated variants.

## Next Steps
1. Define Phase 5 requirements in `REQUIREMENTS.md`.
2. Create Phase 5 execution plan in `.planning/plans/phase-5.md`.
