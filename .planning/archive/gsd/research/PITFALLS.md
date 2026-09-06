# Domain Pitfalls: Syntax Highlighting

**Domain:** VSCode Theme Development
**Researched:** 2024-05-24

## Critical Pitfalls

### Pitfall 1: Scope Inconsistency
**What goes wrong:** A theme looks great in TypeScript but broken in Python because the Python grammar uses different scope names for the same concept (e.g., `meta.function.decorator` vs `meta.decorator`).
**Prevention:** Use broad base scopes (`keyword.control`) first, then add specific overrides for problematic languages (Python, Rust).
**Detection:** Test across a "Language Zoo" (TS, Py, Rust, Go, CSS) during development.

### Pitfall 2: Contrast Failures in Light Themes
**What goes wrong:** Muted colors look sophisticated but fail accessibility checks, making the code unreadable for some users or in high-glare environments.
**Prevention:** Always verify foreground colors against the background (e.g., #f7f7f4) using WCAG 4.5:1 tools.
**Detection:** Use VSCode's built-in accessibility tools or online contrast checkers.

## Moderate Pitfalls

### Pitfall 3: Punctuation Over-Dimming
**What goes wrong:** Dimming brackets/braces too much makes it impossible to see the structure of the code, especially in deeply nested blocks.
**Prevention:** Keep punctuation contrast at or above 3:1 (e.g., `#8a8a8a` on `#f7f7f4`).
**Detection:** Peer review with "visual fatigue" testing (long coding sessions).

### Pitfall 4: JSX/TSX Scope Collisions
**What goes wrong:** Accenting tags sometimes accidentally accents logic or variables if the scopes are too broad.
**Prevention:** Be specific with `entity.name.tag` and avoid global `entity` targeting.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Noir Logic Accents | Accenting too many keywords (e.g. `import`) | Stick to flow-altering keywords (`if`, `return`, `await`). |
| Blanc Muted Palette | "Muddy" appearance | Use desaturated colors with distinct Hues (Blue vs Red) but similar Luminance. |
| Rust/Python Refinement | Missing decorators/attributes | Research specific grammar paths for `meta.attribute` and `meta.decorator`. |

## Sources

- [VSCode Theme Accessibility Guide](https://code.visualstudio.com/api/ux-guidelines/accessibility)
- [Personal Experience with Theme Development]
- [Community discussions on 'Punctuation Dimming' (e.g., Alabaster theme)]
