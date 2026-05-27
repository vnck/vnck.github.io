---
title: "Foundation models as social infrastructure"
date: 2026-05-27
draft: true
tags: [infrastructure, ai]
description: "Three years on from LLMs as communicative infrastructure, foundation models have become the social end-point — not just a medium between us, but the thing we attend to."
permalink: /writings/foundation-models-social-infrastructure
---

Foundation model capabilities have grown parabolically since my last post I had written on them (in 2023!). The range for which the general public uses them for has expanded into all areas of modern life: knowledge-seeking, professional analysis, emotional support. Beyond mediating and augmenting functions held by people, we increasingly see displacement. Technology firms are [replacing junior engineering roles](https://www.businesstimes.com.sg/singapore/ai-upheaval-entry-level-ict-job-postings-singapore-fall-38-roles-change-says-accenture) with model-assisted workflows.

This post revisits [an earlier thesis](/writings/llm-communicative-infrastructure). The concern then assumed that there would still be a human on the other side of the model, that models as social infrastructure would mediate between humans.

Increasingly, we see the infrastructure itself absorbing such relationships.

## From medium to end-point

Foundation models no longer just smooth communication between humans — they also can sit at the other end of the exchange. Smoothing[^han] alone already has its concerns: it erodes the friction — the resistance of dealing with a mind that is genuinely other — that makes communication social, leaving "only an encounter with the self without the other." A model at the endpoint is a stronger version of the same bitter pill: the other is not smoothed away — it is now wiped. The intermediary now folded into the interlocutor.

We can see it in the recent announcement of Search. Google's integration of Gemini this year[^google-search] has turned what was once an index — a catalogue of other people's writing, pointing you outward — into a synthesis answering from collected knowledge. Search becomes the destination, as all the paths it once pointed to is collapsed into a response.

The same logic operates at the relational level. Anthropic's research on how people use Claude for support, advice, and companionship[^anthropic-support] documents the kinds of conversations — with a friend, a therapist, a pastor — that now run through the model instead. The model is not assisting a relationship; for some users, it has become the relationship.

## What infrastructure does

Social infrastructure — the structures that facilitate social interaction — is what we depend on without noticing; felt mainly in breakdown.[^star] Software-saturated environments share this property: when the software fails, the space loses its function.[^kitchin] The July 2024 CrowdStrike outage made this concrete — airports without working software became holding areas; the infrastructure had been there all along.

What makes foundation models infrastructure rather than tool? Four properties. *Ubiquity* — embedded in search, writing tools, IDEs, customer support, operating systems. *Invisibility* — reaching for the model is a default motion now, like opening a browser tab. *Dependency* — practices have reorganised around assumed availability: research, drafting, emotional regulation, decision support. *Politics* — Lessig's *code is law*[^lessig] applies inwards: the choice of model is a choice of voice — whose synthesis, whose refusals, whose moral defaults — populating the practices that depend on it.[^anthropic-widening][^tgc-theology]

The infrastructure also updates itself quietly. Between model versions — Claude 4 to 5, GPT-4 to 5 — capabilities expand, alignment shifts, guardrails are redrawn.

Foundation models qualify on each count — and infrastructure, once it qualifies, disappears into use.

## Power that attends

Infrastructure that speaks acts on its users in two ways at once. Foucault distinguishes disciplinary power — managing individuals through institutions — from pastoral power, which draws assent by attending to needs.[^foucault] Foundation models enact both: they produce docile knowers who accept synthesis, and they are solicitous, responsive, attentive in ways that make compliance feel like preference. The model adjusts to you so fluently that its conclusions can feel like your own.

Where disciplinary power has insides and outsides — schools, prisons, workplaces — Deleuze's *control* has neither: power runs continuously through devices, accounts, exchanges, with no threshold to cross.[^deleuze] The foundation-model substrate fits this shape, except the code now speaks. What we hand over in slices — queries, drafts, confessions — returns as aggregate form: a singular voice answering plural listeners. We are *dividuals* in conversation with the aggregate — known by the slice, not the person.

## Beyond the end-point

The shift is not over. Agentic frameworks — computer-use, tool-use, multi-step task completion[^agents] — mean the model no longer only responds when consulted; it acts on our behalf. Friction now disappears at both ends of an exchange: a sentence gets expanded by one agent into an email; their agent compresses it back into a sentence. What was once friction laundered through one layer of model is now laundered through two.

Persistent memory and voice-first interfaces[^memory] push the model from something you open toward something you are co-present with. A model that is always present, always remembers, and can be invoked mid-thought operates earlier — shaping which questions get asked and how they get framed, not just how they get answered.

On-device and personal models — Apple Intelligence, local fine-tunes, weights run on consumer hardware — pull the other way, toward a model that reflects you back rather than the aggregate. Whether the infrastructure converges on one voice or fragments into many is the live question of the next few years.

## How to attend

The practice is making infrastructure visible without waiting for it to break.[^star] Three things are worth noticing. First, when a reach lands on the model in place of a person — noticing it turns a reflex into a choice. Second, when what comes back is synthesis rather than source — the smooth that removes the other operating at the level of knowledge, not just communication. Third, whose worldview shaped the synthesis, because it never comes without one and synthesis is what makes that invisible.

The question Illich's framework poses[^illich] — how to nurture human communication when tools mediate it — hasn't changed. What has changed is the mediator: it is now infrastructure, and infrastructure shapes us most when we stop noticing it.

---

[^han]: Han, B.-C. (2015). *Saving Beauty*. Polity. See also [LLMs as communicative infrastructure](/writings/llm-communicative-infrastructure).

[^google-search]: Google, *Search at I/O 2026*. https://blog.google/products-and-platforms/products/search/search-io-2026/

[^anthropic-support]: Anthropic, *How people use Claude for support, advice, and companionship*. https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship

[^anthropic-widening]: Anthropic, *Widening the conversation*. https://www.anthropic.com/news/widening-conversation-ai — on how different models embed different worldviews and the choices that go into them.

[^tgc-theology]: The Gospel Coalition, *Should We Rely on AI for Theology?* https://www.thegospelcoalition.org/article/rely-ai-theology/ — one site among many where the question of model worldview has entered public conversation.

[^lessig]: Lessig, L. (2006). *Code: Version 2.0*. Basic Books.

[^kitchin]: Kitchin and Dodge call these *code/spaces*: places whose function depends constitutively on running software. Kitchin, R., & Dodge, M. (2014). *Code/Space: Software and Everyday Life*. MIT Press.

[^foucault]: Foucault, M. (1982). The Subject and Power. *Critical Inquiry*, 8(4), 777–795.

[^deleuze]: Deleuze, G. (1992). Postscript on the Societies of Control. *October*, 59, 3–7.

[^agents]: Anthropic, *Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku* (October 2024). https://www.anthropic.com/news/3-5-models-and-computer-use

[^memory]: Persistent memory in consumer products began with OpenAI's *Memory and new controls for ChatGPT* (https://openai.com/index/memory-and-new-controls-for-chatgpt/); voice-first interfaces, with Advanced Voice Mode and equivalents now standard across the major LLM products.

[^star]: Susan Leigh Star's essay "The Ethnography of Infrastructure" (1999) is the canonical statement: infrastructure becomes visible on breakdown, and is otherwise defined by its disappearance into use. Star, S. L. (1999). The Ethnography of Infrastructure. *American Behavioral Scientist*, 43(3), 377–391.

[^illich]: Illich, I. (1973). *Tools for Conviviality*. Harper & Row. Illich argues that a convivial society is one where tools serve human relationships rather than replace them — the standard against which communicative infrastructure should be assessed.
