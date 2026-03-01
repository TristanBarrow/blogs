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

## Writing Style Guidelines

### Tone and Credibility
- Avoid clichés and overused phrases ("it's not rocket science", "at the end of the day")
- Earn bold claims with evidence or concrete examples
- Use a reflective, observational tone rather than prescriptive commands
- Avoid hyperbole ("one of the most complicated things you can do")
- Write complete sentences; avoid fragments that feel unfinished

### Structure and Flow
- Build to your thesis with concrete scenarios rather than stating it bluntly
- Use smooth transitions between sections; avoid abrupt jumps
- Consolidate overlapping themes into cohesive sections
- Make your central concept the centerpiece and connect everything back to it
- Synthesize ideas in conclusions rather than repeating earlier points

### Supporting Arguments
- Ground abstract ideas with specific, concrete examples
- One clear metaphor is stronger than piling on multiple metaphors
- Support claims with reasoning or evidence, not just assertions
- Show complexity through examples rather than telling readers it's complex

### Voice
- Prefer "I've observed" over "you must"
- Replace commands with reflections on what works
- Avoid harsh judgments ("you're failing") in favor of constructive framing
- Let ideas speak for themselves without overselling
