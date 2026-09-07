# Lumen Themes

A minimal, clean, and high-tech VSCode theme featuring a monochromatic Dark variant (**Noir**) and a "Warm Paper" Light variant (**Blanc**).

## Design Philosophy

Lumen is built on the principle of **Functional Hierarchy**. Instead of overwhelming the editor with a full color palette, Lumen uses color and brightness strategically to guide your focus.

- **Noir (Dark):** A strictly monochromatic experience with an International Orange accent reserved for logical flow (functions, control flow, tags).
- **Blanc (Light):** A soft, warm paper aesthetic using muted colors that prioritize legibility and long-form coding comfort.

## Screenshots

### Lumen Noir (Dark)

![Noir Python](https://raw.githubusercontent.com/thousight/lumen-theme/main/assets/noir_python.png)
![Noir TypeScript](https://raw.githubusercontent.com/thousight/lumen-theme/main/assets/noir_typescript.png)

### Lumen Blanc (Light)

![Blanc Python](https://raw.githubusercontent.com/thousight/lumen-theme/main/assets/blanc_python.png)
![Blanc TypeScript](https://raw.githubusercontent.com/thousight/lumen-theme/main/assets/blanc_typescript.png)

## Features

- **High-Tech Minimalism:** No unnecessary visual noise.
- **Precision Syntax Highlighting:** Combines TextMate grammars and Semantic Tokens for accurate context-aware coloring.
- **Optimized Typography:** Carefully balanced font weights and styles (italics/bold restricted to markup).
- **Unified Workbench:** Flat design with 1px borders and unified background colors for a seamless "sheet of paper" look.

## Variants

### Lumen Noir (Dark)

_Inspired by high-end technical interfaces._

- **Accent:** International Orange (`#f54e00`) for logic.
- **Strings:** High-contrast pure white.
- **Background:** Deep neutral charcoal (`#26251e`).

### Lumen Blanc (Light)

_Inspired by the tactile feel of premium stationery._

- **Palette:** Muted multi-color for a soft, readable hierarchy.
- **Background:** Warm off-white (`#f7f7f4`).

## Installation

1. Open **Extensions** in VS Code (`Ctrl+Shift+X`).
2. Search for `Lumen Themes`.
3. Click **Install**.
4. Go to `File > Preferences > Theme > Color Theme` and select `Lumen Noir` or `Lumen Blanc`.

The extension identifier is `thousight.lumen-themes`.

## Development

See [project notes](https://github.com/thousight/lumen-theme/blob/main/.planning/README.md) for design and maintenance guidance. Track bugs and enhancements in [GitHub Issues](https://github.com/thousight/lumen-theme/issues).

```sh
npm ci
npm test
npm run test:package
npm run test:ui
```

Pull requests use Conventional Commit titles. Merges to `main` release automatically to Open VSX when semantic-release detects a `fix`, `feat`, or breaking change.

## License

MIT © [marwen](https://github.com/marwen)
