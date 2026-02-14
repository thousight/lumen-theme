# Phase 2 Research: TextMate Syntax Scopes

This document maps the design decisions in `Phase-2-CONTEXT.md` to specific TextMate scopes.

## 1. Logic-First Strategy (Noir Accent: `#f54e00`)
Logic (control flow and function calls) is highlighted in International Orange to make code structure pop in the monochromatic dark theme.

### Control Flow
- `keyword.control`
- `keyword.control.flow`
- `keyword.control.conditional`
- `keyword.control.loop`
- `keyword.control.import`, `keyword.control.from`
- `keyword.control.trycatch`

### Function/Method Calls
- `variable.function`
- `entity.name.function`
- `meta.function-call`
- `support.function`

### JSX/TSX Tags
- `entity.name.tag`
- `entity.name.tag.js`, `entity.name.tag.tsx`, `entity.name.tag.html`

## 2. Data & Hierarchy (Noir Neutral)
Data (strings, numbers) is promoted via high contrast (bright white) or distinct brightness.

- **Strings (Bright White):** `string`
- **Numbers/Constants (Distinct Brightness):** 
    - `constant.numeric`
    - `constant.language` (true, false, null)
- **Base Text (Soft Gray):** `variable.other`, `source`
- **Decorators (Faded Gray):** `meta.decorator`, `meta.attribute.rust`

## 3. Visual Noise Reduction (Noir Dimmed)
- **Punctuation (Medium-Contrast Gray):** 
    - `punctuation.separator`, `punctuation.terminator`
    - `punctuation.bracket`, `punctuation.section`
    - `meta.brace`, `meta.bracket`, `meta.paren`
- **Comments (Low-Contrast Gray):** `comment`

## 4. Lumen Blanc Palette (Muted Multi-color)
Background: `#f7f7f4` (Cararra)

| Category | Role | Hex |
|----------|------|-----|
| Base Text | Dark Gray | `#343b43` |
| Keywords | Muted Red | `#a04a3a` |
| Functions | Muted Blue | `#3e5b7c` |
| Strings | Muted Green | `#587053` |
| Comments | Pencil Gray | `#706d6b` |
| Constants | Muted Purple | `#6a4a7a` |
| Tags | Muted Teal | `#4a6d6c` |
| Punctuation | Faded Gray | `#8a8a8a` |

## 5. Markup (Markdown/HTML)
For documentation clarity, we allow typography in markup.
- **Bold:** `markup.bold`
- **Italic:** `markup.italic`
- **Headings:** `markup.heading`
