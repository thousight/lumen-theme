# Feature Landscape: Syntax Highlighting

**Domain:** VSCode Theme Development
**Researched:** 2024-05-24

## Table Stakes

Standard highlighting expectations for a functional theme.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Keyword Highlighting | Distinguish flow control from variables | Low | `keyword.control` |
| String/Literal Visibility | Identify data immediately | Low | `string`, `constant.numeric` |
| Comment Dimming | De-emphasize non-code notes | Low | `comment` |
| Variable Distinction | Separate usage from definition | Medium | `variable.other`, `entity.name.variable` |

## Differentiators

Unique aspects of the Lumen Theme logic-first approach.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Logic-First Accenting | International Orange highlights logic (functions/keywords) in Noir | Medium | Requires clean scope grouping |
| Warm Paper Blanc | High-contrast muted multi-color scheme for light mode | Medium | WCAG 4.5:1 on #f7f7f4 |
| Punctuation Dimming | Reduces visual noise in bracket-heavy languages (Rust, TS) | Medium | Subtle contrast balancing |
| Pencil Note Comments | Mimics physical notes on paper in Blanc | Low | #706d6b "pencil" color |

## Anti-Features

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| "Christmas Tree" Colors | Excessive colors in Noir break the monochromatic focus | Use International Orange ONLY for logic |
| Italics/Bold for Logic | Can be distracting and inconsistent across fonts | Use color and brightness for hierarchy |
| High-Contrast Punctuation | Overwhelms the actual code structure | Dim punctuation to medium/low contrast |

## MVP Recommendation (Phase 2)

Prioritize:
1. **Monochromatic Base (Noir):** Establish the gray/white hierarchy.
2. **Logic Accent (Noir):** Map `keyword.control` and `meta.function-call` to #f54e00.
3. **Muted Multi-color (Blanc):** Implement the 4.5:1 compliant palette.
4. **Data Promotion:** Ensure strings and numbers are highly legible.

## Lumen Blanc Palette Proposal

Target Background: `#f7f7f4`

| Role | Color | Hex | WCAG Contrast |
|------|-------|-----|---------------|
| Base Text | Dark Gray | `#343b43` | 11:1 |
| Keywords | Muted Red | `#a04a3a` | 5.8:1 |
| Functions | Muted Blue | `#3e5b7c` | 6.2:1 |
| Strings | Muted Green | `#587053` | 5.1:1 |
| Comments | Pencil Gray | `#706d6b` | 4.8:1 |
| Constants | Muted Purple | `#6a4a7a` | 6.5:1 |
| Tags | Muted Teal | `#4a6d6c` | 5.3:1 |
| Punctuation | Faded Gray | `#8a8a8a` | 3.2:1 |
