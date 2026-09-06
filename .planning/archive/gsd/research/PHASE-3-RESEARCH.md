# Phase 3 Research: Semantic Syntax Highlighting Refinement

## Overview
Phase 3 aims to leverage VSCode's Semantic Highlighting (LSP-based) to provide high-precision visual hierarchy that TextMate grammars (regex-based) often miss.

## Key Concepts
- **Semantic Tokens:** Tokens provided by language servers that understand the code's AST.
- **Precedence:** Semantic tokens always override TextMate `tokenColors`.
- **Target Key:** `semanticTokenColors` in the theme JSON.

## Relevant Token Types & Modifiers

### Standard Types
- `variable`, `parameter`, `property` (The "Data" layer)
- `function`, `method`, `macro` (The "Logic" layer)
- `class`, `interface`, `type`, `struct`, `enum`, `typeParameter` (The "Structure" layer)
- `namespace`

### Standard Modifiers
- `declaration`: When a symbol is being defined.
- `readonly`: Constants or immutable variables.
- `static`: Class/Static members.
- `async`: Asynchronous functions.
- `modification`: When a variable is being written to.
- `defaultLibrary`: Built-in symbols (e.g., `window`, `console`).

## Strategy for Lumen

### 1. Lumen Noir (Dark) - Precision Monochromatic
- **Logic Accent (#f54e00):**
    - Apply to `function`, `method`, `macro`.
    - Consider applying to `class`, `interface` declarations to highlight structure.
- **Data Layer (White/Gray):**
    - `variable`, `parameter`, `property` should stay in the neutral range (#e0e0e0).
    - `variable.readonly` / `property.readonly`: Use pure white (#ffffff) to highlight constants.
    - `parameter`: Slightly faded gray (#c0c0c0) to distinguish from local variables.
- **Interaction with Logic:**
    - `function.declaration` / `method.declaration`: Could be bolded or kept in orange to emphasize the "definition" vs "usage".

### 2. Lumen Blanc (Light) - Muted Differentiation
- **Palette Mapping:**
    - `variable`: Soft Green/Gray.
    - `parameter`: Soft Brown/Gray.
    - `property`: Soft Blue/Gray.
    - `function`: Muted Blue (consistent with TextMate).
- **Precision:**
    - Use `variable.readonly` to give constants a distinct (but still muted) color or weight.
    - Use `*.declaration` to subtly highlight definitions.

## Technical Implementation
```json
"semanticTokenColors": {
    "variable.readonly": "#ffffff",
    "parameter": "#c0c0c0",
    "property.readonly": "#ffffff",
    "function": "#f54e00",
    "method": "#f54e00"
}
```

## Potential Pitfalls
- **LSP Variance:** Different language servers might emit different tokens. We should focus on standard types first.
- **Visual Noise:** Too much precision can lead to "Color Overload," which we explicitly avoid in `ARCHITECTURE.md`.
- **Precedence Issues:** Some TextMate rules might be more complex than the semantic ones; we need to ensure the semantic override doesn't break intended logic.

## Next Steps
1. Create Phase 3 Execution Plan.
2. Implement `semanticTokenColors` in `lumen-noir.json` and `lumen-blanc.json`.
3. Verify using "Developer: Inspect Editor Tokens and Scopes".
