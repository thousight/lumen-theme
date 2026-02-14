# Phase 4 Research: Branding & Marketplace Preparation

## Overview
Phase 4 focuses on finalizing the Lumen Theme for public release on the Visual Studio Marketplace. This involves creating brand assets, configuring extension metadata, and preparing professional documentation.

## Marketplace Requirements

### Extension Manifest (`package.json`)
- **`name`**: `lumen-theme` (Lowercase, unique).
- **`displayName`**: `Lumen Theme` (User-friendly name).
- **`description`**: A concise summary (e.g., "A minimal, clean, and high-tech VSCode theme with monochromatic Dark and Warm Paper Light variants.").
- **`publisher`**: Must match the publisher ID on Marketplace.
- **`icon`**: Path to a PNG icon (minimum 128x128, 256x256 recommended).
- **`engines.vscode`**: Version compatibility (e.g., `^1.80.0`).
- **`categories`**: `["Themes"]`.
- **`keywords`**: `["minimalist", "monochromatic", "dark", "light", "high-tech", "paper"]`.
- **`repository`**: URL to the GitHub repository.
- **`galleryBanner`**:
    - `color`: `#26251e` (Dark) or `#f7f7f4` (Light).
    - `theme`: `dark` or `light`.

### Asset Specifications
- **Icon**:
    - **Format**: PNG (No SVG allowed).
    - **Size**: 256x256 pixels.
    - **Style**: Minimalist "L" or a representation of light/monochrome.
- **Screenshots**:
    - High-quality PNGs showing Noir (Dark) and Blanc (Light) variants.
    - Should demonstrate UI components (sidebar, status bar) and Syntax Highlighting (TS, Python).
- **README.md**:
    - Root level.
    - Features list.
    - Screenshots (HTTPS URLs or relative paths if linked to GitHub).
    - Installation & Usage.
    - Configuration options.

## Preparation Checklist
1. [ ] Finalize `package.json` metadata.
2. [ ] Create `icon.png` (256x256).
3. [ ] Generate `CHANGELOG.md`.
4. [ ] Create a `.vscodeignore` file to exclude research and planning docs.
5. [ ] Capture screenshots of both variants.
6. [ ] Draft the final `README.md`.

## Best Practices
- **Exclude Non-Essential Files**: Use `.vscodeignore` to remove `.planning/`, `samples/`, and any source files not needed for the theme.
- **HTTPS Links**: Ensure all links in the README are HTTPS.
- **Semantic Versioning**: Start with `0.1.0` or `1.0.0` depending on stability.

## Next Steps
1. Create Phase 4 Execution Plan.
2. Implement metadata changes in `package.json`.
3. Create brand assets (Icon/Screenshots).
4. Finalize documentation.
