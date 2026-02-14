# Phase 1 Context: Workbench UI Foundation

This document codifies the design decisions for the Lumen Theme Workbench UI, serving as the "ground truth" for research and planning agents.

## 1. Visual Aesthetic: "The Sheet of Paper"
- **Unified Background:** The Editor, Sidebar, and Panels must use the exact same background color to create a seamless, single-sheet look.
- **Flat Design:** No shadows or depth effects.
- **Section Separation:** Sections are divided by subtle 1px lines/borders.
- **Density:** 
    - UI noise (line numbers, indent guides) is rendered in a minimal, low-contrast tint.
    - **Active Line Number:** Brighter neutral (not the accent color).
    - **Indent Guides:** Always visible but low-contrast.
    - **Rulers:** Disabled by default.

## 2. Light Theme ("Warm Paper")
- **Core Colors:**
    - Background: `#f7f7f4` (Unified, matches Cursor 'Cararra')
    - Dividers: `#e0e0de` (1px lines)
    - Primary Text: `#192b2bdd` (Warm brownish-gray, increased contrast for WCAG AA)
- **Interactions:**
    - Selection/Hover/Active Indicators: Neutral tint `#EAEAE7`.
    - **Selection Transparency:** Semi-transparent (background "bleeds" through).
- **Terminal:** Matches the unified background.

## 3. Dark Theme ("Soft High-Tech")
- **Core Colors:**
    - Background: `#26251e` (Unified, matches Cursor 'Rangitoto')
    - UI Elements: Monochromatic. Tints of the background color are used for hovers, selections, and active states.
    - **Accent Color:** `#f54e00` (International Orange, matches Cursor accent).
- **Accent Application:**
    - Primarily used for **Code Syntax** to provide focal points.
    - **UI Feedback:** Cursor (thin line), Search Matches (solid background), Progress Bars, and Breadcrumb Icons.
    - **Action Buttons:** Solid accent color (#f54e00) with dark text.
- **Syntax Hierarchy:**
    - Driven by **varying brightness levels** (shades of gray/white).
    - Punctuation (brackets, semicolons) is dimmed into the background.
    - Comments are low-contrast gray.

## 4. UI Components & Behavior
- **Terminal:** Unified background matching the editor variant.
- **Git Status:** Custom desaturated versions of standard colors (Red/Green/Yellow) that match the soft theme aesthetic.
- **Sidebar Highlights:** Active list items use a **full-width** background highlight.
- **Interactive Feedback:** No shadows; state changes are communicated via subtle color tints or the leather orange accent.
