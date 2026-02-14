# Research Summary: Lumen Theme Phase 2

**Domain:** VSCode Theme Development (Syntax Highlighting)
**Researched:** 2024-05-24
**Overall confidence:** HIGH

## Executive Summary

Phase 2 focuses on establishing the TextMate foundation for "Lumen Theme." The dark variant, **Lumen Noir**, utilizes a monochromatic hierarchy with a single "International Orange" accent for logic and structure. The light variant, **Lumen Blanc**, employs a "Warm Paper" aesthetic with a muted multi-color palette that adheres to WCAG 4.5:1 contrast standards.

Key findings identify the precise TextMate scopes required to target Control Flow, Function Calls, and JSX tags across the target languages (JS/TS, Python, Rust, Go, CSS, HTML). The research also defines a "Pencil Gray" comment style and a strategy for dimming punctuation to reduce cognitive load without losing structural clarity.

## Key Findings

**Stack:** TextMate Grammar (VSCode standard) with a path toward Semantic Highlighting.
**Architecture:** Scopes are grouped into "Logic" (accented), "Data" (promoted via contrast), and "Metadata" (dimmed).
**Critical Pitfall:** Inconsistent scope names across different language grammars (e.g., Python decorators vs. TS decorators) require specific overrides.

## Implications for Roadmap

Based on research, suggested phase structure:

1. **Core Scope Mapping** - Define the base groups for Keywords, Strings, Comments, and Punctuation.
   - Addresses: Standard logic vs. data separation.
2. **Logic Accents (Noir)** - Implement the International Orange accent for `keyword.control`, `meta.function-call`, and `entity.name.tag`.
3. **Muted Palette (Blanc)** - Implement the multi-color muted scheme for the Light theme, verifying contrast against `#f7f7f4`.
4. **Language-Specific Refinement** - Add overrides for Rust attributes, Python decorators, and CSS property names.

**Phase ordering rationale:**
- Core mapping provides immediate results across all languages.
- Noir accents and Blanc palette implementation can happen in parallel or sequence as they use the same scope groups.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | TextMate is the mature standard for VSCode. |
| Features | HIGH | Requirements for Noir/Blanc are clearly defined. |
| Architecture | HIGH | Hierarchical scope targeting is well-documented. |
| Pitfalls | MEDIUM | Some language-specific grammars are brittle. |

## Gaps to Address

- **Semantic Highlighting:** While TextMate covers 90% of cases, Phase 3 will need to address edge cases like "Variables that are actually constants" which TextMate cannot distinguish.
- **Operator Overloading:** Rust and Python have specific scopes for operators that might need separate handling if they are considered "Logic."
