---
title: Term Bloat
date: 8-30-2024
description: All the words none of the communication.
stage: AI_DRAFT
---

Tech has a word problem. We take common words, overload them with framework-specific meanings, then assume everyone shares our definition. Two people can use the same word and mean completely different things — and neither one notices until the confusion has already done damage.

Consider a meeting about React and global state management. One developer keeps talking about "context" as the solution. Another pushes back, saying context feels too heavyweight. They go in circles for ten minutes before realizing they're talking about completely different things.

In React, "context" is a built-in API for sharing data across components without prop drilling. In many backend frameworks, "context" means a database session or request-scoped environment. Both developers were using their framework's definition without checking if the other person meant the same thing.

The meeting wasn't wasted because we were wrong. It was wasted because we never paused to align on vocabulary.

## Why This Keeps Happening

Technical terms get overloaded for a few reasons, and they feed on each other.

Frameworks and libraries want memorable names for their concepts. "Context" is intuitive — it suggests something ambient and accessible. So React uses it. Django uses it. Go uses it. Each team independently chooses the word because it fits their use case, not realizing (or caring) that everyone else did the same thing.

Then there's time pressure. When you're moving fast, checking definitions feels like overhead. You assume the other person knows what you mean because you're both technical people working on the same problem. The cost of that assumption only shows up later, after you've already invested time going in the wrong direction.

There's also a status element. Knowing the "right" terminology signals expertise. Admitting you're unclear about a term can feel like admitting ignorance. So people nod along rather than ask clarifying questions, hoping context will make things clear. It usually doesn't.

The result is that our shared vocabulary becomes less shared over time, even as we use more of the same words.

## What I've Found Works

This problem doesn't have a framework-level solution. It's a people problem, which means it requires small, deliberate communication habits.

When a key term comes up in conversation, I've learned to pause and check alignment before moving forward. A simple "When you say context, do you mean the React API or something else?" takes ten seconds and often saves hours. The signal that something might be misaligned is usually subtle — the other person's reaction doesn't quite track with what you said. That's the moment to clarify.

I've also noticed that the developers I learn the most from are the ones who ask clarifying questions, not the ones who already know all the terminology. They're not asking because they don't understand concepts — they're asking because they know that the same word can mean different things, and they'd rather confirm than assume. That habit compounds over time. You waste less effort, build better mental models, and avoid talking past people.

Writing definitions down helps too. When a team settles on what a term means for their project, putting it in a shared doc prevents the same confusion from recurring a month later. It's a small thing that shows you value clarity over speed.

## Conclusion

Overloaded terminology isn't just an annoyance — it's a symptom of how technical culture values speed and expertise signaling over clarity. The same dynamics that make us reach for intuitive names like "context" also make us reluctant to admit when we're not aligned on what those names mean.

The fix isn't a better naming convention or a shared glossary (though that helps). The fix is creating space in conversations to check assumptions without it feeling like a failure. When someone asks "What do you mean by X?" they're not slowing things down — they're preventing the much slower problem of building the wrong thing.

Maintainable systems start with clear, well-defined concepts. Clear concepts start with people willing to pause and check. That willingness is more valuable than knowing the right terminology in the first place.
