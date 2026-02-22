# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a pure data repository containing blog articles as Markdown files. There is no build system, no dependencies, and no programming language — only content and configuration.

## Article Format

Each article is a `.md` file at the root with YAML frontmatter:

```
---
title: Article Title
date: MM-DD-YYYY
image: image-filename.ext
description: One-line summary
---

Article body in Markdown...
```

## Visibility & Configuration

`config.json` controls what appears on the site:

- `featured_articles`: Articles highlighted/promoted on the site (subset of visible)
- `all_visible_articles`: All articles shown to readers

Articles present in the repo but absent from `all_visible_articles` (e.g., `soc.md`) are hidden/archived from readers. Add an article's filename slug (no `.md`) to the appropriate arrays to publish it.

## Naming Conventions

- Article filenames: `kebab-case` (e.g., `term-bloat.md`)
- Images are referenced by filename only — they are stored externally, not in this repo
- Article slugs in `config.json` match filenames without the `.md` extension
