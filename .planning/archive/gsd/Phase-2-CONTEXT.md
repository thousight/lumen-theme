# Phase 2 Context: TextMate Core Syntax Highlighting

This document codifies the design decisions for the Lumen Theme syntax highlighting, focusing on a minimal yet high-precision hierarchy.

## 1. Typographic Strategy
- **Plain Code:** No bold or italics for programming language syntax (JS, Python, Rust, etc.).
- **Markdown/Markup Exception:** Bold and italics are permitted in Markdown/HTML documentation for structural clarity.

## 2. Light Theme ("Lumen Blanc")
- **Palette:** Muted multi-color palette (soft, legible tones).
- **Accents:** No orange accent in Light mode; purely neutral/multi-color.
- **Strings:** Neutral (matching base text or subtle brightness shift).
- **Comments:** Distinctive gray ("pencil notes" on paper).
- **Hierarchy:** Driven by muted colors and brightness levels.

## 3. Dark Theme ("Lumen Noir")
- **Palette:** Strictly monochromatic (shades of gray/white) + International Orange accent (#f54e00).
- **Accent Targets (Orange):**
    - **Function Calls:** All function/method invocations.
    - **Control Flow:** Keywords that change logic (e.g., `if`, `return`, `await`, `throw`).
    - **JSX/TSX Tags:** Opening and closing tags (e.g., `<div>`).
- **Monochromatic Hierarchy:**
    - **Strings:** Bright white (highest neutral contrast).
    - **Punctuation:** Medium-contrast gray (brackets, braces, semicolons).
    - **Decorators/Annotations:** Monochromatic (faded gray).
    - **Numbers/Constants:** Distinct brightness level to separate data from logic.
    - **Comments:** Low-contrast gray.

## 4. Language-Specific Rules
- **JSX/TSX:** Tags are accented in Noir; identifiers follow standard rules.
- **Decorators:** Treated as monochromatic metadata.
- **Logic vs. Data:** Logic (Control Flow/Functions) is promoted via accent (Noir) or color (Blanc); Data (Strings/Numbers) is promoted via contrast/brightness.
