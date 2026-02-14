# Roadmap: Lumen Theme

## Overview
Lumen Theme is a minimal, clean, and high-tech VSCode theme featuring a monochromatic Dark variant and a "Warm Paper" Light variant. The project progresses from the foundational workbench UI to high-precision syntax highlighting, concluding with branding and marketplace readiness.

## Phases

### Phase 1: Workbench UI Foundation (Dark and Light)
Establish the core "Lumen" identity by styling the editor environment.

- **Goal:** Users experience a cohesive and brand-aligned editor environment.
- **Requirements:** WB-01, WB-02, WB-03, WB-04, WB-05
- **Success Criteria:**
    1. User can switch between Lumen Dark and Lumen Light themes.
    2. Sidebar, Activity Bar, and Editor background colors match the "Minimalist" design principles.
    3. Dark theme uses the single accent color for focus and selection states.
    4. Light theme background is correctly set to `#f7f7f4`.
    5. UI components (buttons, inputs, tabs) are clearly legible and styled.

### Phase 2: TextMate Core Syntax Highlighting
Implement the fundamental syntax rules for major programming languages.

- **Goal:** Users can read and write core languages with a clear, minimal visual hierarchy.
- **Dependencies:** Phase 1
- **Requirements:** SYN-01, SYN-02, SYN-03, SYN-05
- **Success Criteria:**
    1. Keywords, strings, comments, and functions are visually distinct in JS/TS and Python.
    2. Dark theme maintains a high-tech monochrome look using shades and font weights.
    3. Light theme uses soft colors that satisfy accessibility contrast requirements.
    4. Strategic use of bold and italics provides hierarchy without color overload.

### Phase 3: Semantic Syntax Highlighting Refinement
Add precision to syntax highlighting using VSCode's Language Server Protocol data.

- **Goal:** Users can distinguish between subtle code contexts (e.g., constants vs. variables).
- **Dependencies:** Phase 2
- **Requirements:** SYN-04
- **Success Criteria:**
    1. Local variables, parameters, and constants are visually differentiated via semantic tokens.
    2. Readability is improved in complex files through refined token coloring.
    3. Theme visual consistency is maintained across different Language Servers.

### Phase 4: Branding & Marketplace Preparation
Finalize the extension for public distribution.

- **Goal:** The theme is professional, documented, and ready for the Visual Studio Marketplace.
- **Dependencies:** Phase 3
- **Requirements:** MKT-01, MKT-02, MKT-03, MKT-04
- **Success Criteria:**
    1. Extension manifest (package.json) is fully configured with correct metadata.
    2. Brand assets (icon, logo) are present and correctly rendered in the extension view.
    3. README provides clear documentation and high-quality screenshots of both variants.
    4. Extension is packaged and ready for `vsce publish`.

### Phase 5: Ecosystem & Accessibility Refinement
Mature the theme through expansion and technical audits.

- **Goal:** Lumen integrates with common extensions and meets high accessibility standards.
- **Dependencies:** Phase 4
- **Requirements:** REF-01, REF-02, REF-03, REF-04
- **Success Criteria:**
    1. All core colors meet WCAG 2.1 AA contrast requirements.
    2. GitLens and Todo Tree UI elements align with the theme's aesthetic.
    3. Additional languages (C++, PHP, Markdown) have refined syntax highlighting.
    4. Terminal ANSI colors are soft and theme-consistent.

## Progress

| Phase | Status | Progress |
|-------|--------|----------|
| 1: Workbench UI | Completed | 100% |
| 2: TextMate Syntax | Completed | 100% |
| 3: Semantic Refinement | Completed | 100% |
| 4: Marketplace Prep | Completed | 100% |
| 5: Ecosystem & Refinement | Completed | 100% |
