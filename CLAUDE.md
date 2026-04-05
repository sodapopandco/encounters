# Encounters

A colour palette theme for editors and terminals.

## Tech Stack

- **Site**: Eleventy 3 (ESM), plain CSS, vanilla JS
- **Hosting**: GitHub Pages via Actions (`.github/workflows/deploy.yml`)
- **Source**: `source/` directory, builds to `public/`
- **Themes**: `dist/` directory (ghostty, hyper, iterm2, sublime-text, terminal, textmate, vscode, zed)

## Commands

- `npm start` — dev server at localhost:8080
- `npm run build` — build to `public/`

## Conventions

- CSS uses custom properties for the palette, hardcoded hex for computed darken/lighten values
- All 24 colours (8 neutral, 8 dark accent, 8 light accent) defined in `:root`
- Dark theme uses light accent colours (02 series), light theme uses dark accents (01 series)
- Corner radii are 4px (doubled from original 2px)
- Typographic quotes in prose, straight quotes in code
- External links open in new tabs (`target="_blank" rel="noopener"`)
- Editor/terminal links each have a unique hover colour from the palette
