# Technology Stack: TextMate Scopes

**Project:** Lumen Theme
**Researched:** 2024-05-24

## Recommended TextMate Scopes

These scopes form the foundation for Lumen Noir (Accented) and Lumen Blanc (Multi-color).

### 1. Control Flow (Noir: #f54e00)
| Scope | Purpose |
|-------|---------|
| `keyword.control` | Base for if, else, for, while, return |
| `keyword.control.flow` | Specific flow keywords (return, await, yield, break) |
| `keyword.control.conditional` | if/else logic |
| `keyword.control.loop` | loop logic |
| `keyword.control.import`, `keyword.control.from` | Module logic |
| `keyword.control.trycatch` | Exception handling |

### 2. Function/Method Calls (Noir: #f54e00)
| Scope | Purpose |
|-------|---------|
| `variable.function` | Standard function calls (JS/TS) |
| `entity.name.function` | Function names in calls and declarations |
| `meta.function-call` | Entire call expression |
| `support.function` | Built-in functions |

### 3. JSX/TSX Tags (Noir: #f54e00)
| Scope | Purpose |
|-------|---------|
| `entity.name.tag` | Standard HTML/JSX tag names |
| `entity.name.tag.js`, `entity.name.tag.tsx` | Specific JSX/TSX tag names |

### 4. Strings, Numbers, and Constants (Data)
| Scope | Purpose |
|-------|---------|
| `string` | String literals |
| `constant.numeric` | Numeric literals |
| `constant.language` | true, false, null, undefined |
| `constant.other` | Generic constants |
| `variable.other.constant` | Constant variables |

### 5. Punctuation (Dimmed)
| Scope | Purpose |
|-------|---------|
| `punctuation.separator` | Commas, semicolons |
| `punctuation.terminator` | Semicolons |
| `punctuation.bracket`, `punctuation.section` | Brackets, braces |
| `meta.brace`, `meta.bracket`, `meta.paren` | Grouping punctuation |

### 6. Comments (Pencil Notes)
| Scope | Purpose |
|-------|---------|
| `comment` | All comment types |

### 7. Decorators and Annotations
| Scope | Purpose |
|-------|---------|
| `meta.decorator`, `punctuation.decorator` | Decorators (Python, TS) |
| `storage.type.annotation`, `entity.name.type.annotation` | Annotations (Java, Rust) |
| `meta.attribute.rust` | Rust attributes |

## Language-Specific Overrides

| Language | Scope Category | Specific Scope |
|----------|----------------|----------------|
| Python | Decorators | `meta.function.decorator.python` |
| Rust | Attributes | `meta.attribute.rust` |
| CSS | Property Names | `support.type.property-name.css` |
| CSS | Property Values| `support.constant.property-value.css` |
| HTML | Tags | `entity.name.tag.html` |

## Sources

- [VSCode Theme Documentation](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)
- [TextMate Scope Selectors](https://macromates.com/manual/en/scope_selectors)
- [Lumen Phase 2 Context](.planning/Phase-2-CONTEXT.md)
