# Phase 1 Research: Workbench UI Color Keys

This document maps the design decisions in `Phase-1-CONTEXT.md` to specific VSCode workbench color keys.

## 1. Unified Background ("Sheet of Paper")
To achieve the unified background across all major UI components, the following keys must be set to the same color (`#f7f7f4` for Light, lifted dark gray for Dark):

- `editor.background`
- `sideBar.background`
- `sideBarSectionHeader.background`
- `activityBar.background`
- `panel.background`
- `statusBar.background`
- `titleBar.activeBackground`
- `titleBar.inactiveBackground`
- `tab.activeBackground`
- `tab.inactiveBackground`
- `editorGroupHeader.tabsBackground`
- `breadcrumb.background`

## 2. 1px Dividers (Section Separation)
To implement the 1px flat dividers without shadows:

- `sideBar.border`: `#e0e0de` (Light)
- `activityBar.border`: `#e0e0de` (Light)
- `editorGroup.border`: `#e0e0de` (Light)
- `panel.border`: `#e0e0de` (Light)
- `statusBar.border`: `#e0e0de` (Light)
- `editorGroupHeader.tabsBorder`: `#e0e0de` (Light)
- `sideBarSectionHeader.border`: `#e0e0de` (Light)
- `tab.border`: `#e0e0de` (Light)
- `widget.shadow`: `#00000000` (Disable shadows)

## 3. Interaction & States
### Light Theme (#f7f7f4)
- **Selection:** `editor.selectionBackground`: `#EAEAE780` (Semi-transparent)
- **Hover:** `list.hoverBackground`: `#EAEAE7`
- **Active:** `list.activeSelectionBackground`: `#EAEAE7`
- **Active Tab:** `tab.activeForeground`: `#192b2b99`

### Dark Theme (Leather Orange: `#C56A39`)
- **Accent Color:** `#C56A39` (Burnt Copper/Leather Orange)
- **Cursor:** `editorCursor.foreground`: `#C56A39`
- **Search Matches:** `editor.findMatchBackground`: `#C56A39` (Solid background)
- **Buttons:** `button.background`: `#C56A39`
- **Progress Bars:** `progressBar.background`: `#C56A39`
- **Breadcrumb Icons:** `breadcrumb.activeSelectionForeground`: `#C56A39`

## 4. UI Noise Reduction
- **Line Numbers:**
    - `editorLineNumber.foreground`: Low-contrast neutral
    - `editorLineNumber.activeForeground`: Brighter neutral
- **Indent Guides:**
    - `editorIndentGuide.background`: Low-contrast neutral
    - `editorIndentGuide.activeBackground`: Brighter neutral
- **Breadcrumbs:**
    - `breadcrumb.foreground`: Low-contrast neutral

## 5. Git Status (Desaturated)
To maintain the "soft" aesthetic, Git colors should be desaturated:

- `gitDecoration.modifiedResourceForeground`: Desaturated Yellow
- `gitDecoration.deletedResourceForeground`: Desaturated Red
- `gitDecoration.addedResourceForeground`: Desaturated Green

## 6. Terminal
- `terminal.background`: Must match `editor.background`.
