# Architecture Patterns: Syntax Highlighting

**Domain:** VSCode Theme Development
**Researched:** 2024-05-24

## Recommended Architecture

Lumen Theme uses a "Functional Hierarchy" where color and brightness signify the role of code (Logic, Data, Metadata) rather than just its type.

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| **Logic Layer** | Flow control and action (Keywords, Functions) | User (via Accent color) |
| **Data Layer** | Values and types (Strings, Numbers, Constants) | User (via High Contrast) |
| **Structure Layer**| Framing (Punctuation, Brackets) | User (via Dimmed Contrast) |
| **Metadata Layer**| Documentation and hints (Comments, Annotations) | User (via Faded Gray) |

### Data Flow

1. **TextMate Grammar** parses the source file into dot-separated scopes.
2. **Token Color Rules** match these scopes to specific hex values based on the "Functional Hierarchy."
3. **Semantic Tokens** (Phase 3) will later refine these tokens based on LSP context.

## Patterns to Follow

### Pattern 1: Scope Grouping
**What:** Group multiple related scopes into a single rule to ensure consistent behavior across languages.
**When:** When defining the logic accent or data promotion.
**Example:**
```json
{
  "name": "Lumen Logic Accent",
  "scope": [
    "keyword.control",
    "variable.function",
    "entity.name.function",
    "meta.function-call"
  ],
  "settings": {
    "foreground": "#f54e00"
  }
}
```

## Anti-Patterns to Avoid

### Anti-Pattern 1: Color Overload
**What:** Using a different color for every single token type (Variables, Parameters, Properties, etc.).
**Why bad:** Creates "Visual Noise" and makes it harder to identify the logical flow.
**Instead:** Group tokens into roles (Logic, Data) and use 1-2 colors maximum in Noir, or a muted palette in Blanc.

## Scalability Considerations

| Concern | Small Projects | Large Mono-repos | Multi-language |
|---------|--------------|--------------|-------------|
| Performance | Instant | Minimal impact | TextMate is efficient |
| Maintainability | Easy | Complex overrides | Requires centralized scope mapping |

## Sources

- [VSCode Theme Schema](https://code.visualstudio.com/api/references/theme-color)
- [TextMate Language Grammars](https://macromates.com/manual/en/language_grammars)
