# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio site for Thibault Pensec, deployed to GitHub Pages at `thibaultpensec.io`. No build step, no dependencies, no package manager — just HTML and CSS served directly.

## Deployment

Pushes to `main` automatically deploy via the GitHub Actions workflow (`.github/workflows/static.yml`). The entire repository root is uploaded as the Pages artifact.

## Structure

- `index.html` — single-page site with header, about section, and footer with social links
- `style.css` — all styles
- `assets/` — favicon variants, web manifest, and screenshot

## External Dependencies (CDN)

- Google Fonts: Inter (400/500/700)
- Font Awesome 6.7.2 (icons)
- Google Analytics: `G-Q57NNYYER7`
