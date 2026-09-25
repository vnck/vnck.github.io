---
title: "Foundation models as social infrastructure"
date: 2026-09-25
tags: [infrastructure, ai]
description: "An evolving process of infrastructure."
permalink: /writings/foundation-models-social-infrastructure
---

Foundation model capabilities have grown parabolically since I last wrote on them (in 2023!). The general public now uses them in almost every area of modern life: knowledge-seeking, professional analysis, emotional support. And where they once mediated or augmented work done by people, they are now beginning to replace it. Technology firms are replacing junior engineering roles with model-assisted workflows,[^bt-sg] and GovTech Singapore cut 93 roles this July as it restructured toward automation and AI.[^govtech] Job losses are the easiest displacement to count. Harder to count is what is being displaced in personal life: the conversations, advice, and company we once sought from other people.

This post revisits [an earlier post](/writings/llm-communicative-infrastructure), where I argued that LLMs were becoming our communicative infrastructure. That argument assumed there would still be a human on the other side of the model, i.e. that the model would mediate between people. I no longer think that assumption holds. My argument here is that foundation models have become social infrastructure in a stronger sense: they are increasingly the end-point of our communication rather than its medium, and, like most infrastructure, they are made invisible by design, which is why the shift has drawn so little notice.

## From medium to end-point

Search is the clearest case. Google's integration of Gemini this year[^google-search] has turned what was once an index, a catalogue of other people's writing that pointed you outward, into a synthesis. You ask, and instead of being sent somewhere, you are answered. Search goes from router to end-point, with the paths it once pointed to folded into a single response.

The same substitution is under way, on a smaller scale, in our relationships. Anthropic's research on how people use Claude for support, advice, and companionship[^anthropic-support] found that such conversations are still a small share of use, under 3%. But they are the kinds of conversations one might once have had with a friend, a therapist, or a pastor, and for some of those users, the model has become a parasocial companion, taking the place of the person they would once have turned to for wisdom or emotional fulfilment.

What the two cases share is that there is no longer another person at the end of the exchange. In 2023, my worry was smoothing:[^han] that models would erode the friction of dealing with a mind that is genuinely other, the very friction that makes communication social, leaving "only an encounter with the self without the other." A model at the end-point intensifies this. The other is no longer smoothed away but removed entirely, and the intermediary is folded into the interlocutor.

## What infrastructure does

On 19 July 2024, a faulty CrowdStrike update took down Windows machines worldwide, and airports became holding areas. Check-in desks, departure boards, and baggage systems had been running on that software all along, but most travellers only noticed once it failed. This is the defining quality of infrastructure: it goes unnoticed until it breaks.[^star] Kitchin and Dodge call such places *code/spaces*: places that stop working without their software.[^kitchin]

Why call foundation models infrastructure rather than tools? Drawing on infrastructure studies,[^star] I would point to four properties: (1) *ubiquity*, as they are embedded in search, writing tools, IDEs, customer support, and operating systems; (2) *invisibility*, as reaching for the model has become a default motion, like opening a browser tab; (3) *dependency*, as research, drafting, emotional regulation, and decision support have reorganised around their assumed availability; and (4) *politics*, since, following Lessig's *code is law*,[^lessig] the choice of model is a choice of voice, i.e. whose synthesis, whose refusals, and whose moral defaults populate the practices that depend on it.[^anthropic-widening][^tgc-theology]

Of the four, I want to dwell on invisibility, because it is less a side effect than a design goal. This month, a model labelled "gemini-3.8-flash" on Arena, a platform where people compare the outputs of different models, began producing noticeably better results than the Gemini 3.8 Flash that Google had released only weeks before. Developers suspect it is an early version of Gemini 4 Pro, tested under an existing name; Google has not confirmed this.[^gemini-arena] It would not be the first time a lab has tested a model out of view. In April 2025, OpenAI ran early versions of GPT-4.1 on OpenRouter as two anonymous "stealth" models, disclosing only that each was a prerelease from an unnamed lab and that every prompt would be logged.[^stealth] In both cases, the people using these models became a test population without knowing whose model they were testing, or, in Gemini's case, that it was a different model at all.

Traditional infrastructure has long worked this way. Pipes, cables, and substations are buried or fenced off. Electricity utilities practise conservation voltage reduction, lowering the voltage on a feeder within the range appliances tolerate in order to cut demand; because customers do not notice, utilities can apply it to everyone on the network without asking anyone to enrol.[^cvr] As with the models, the people on the network take part without knowing it, not through deception, but because infrastructure is built so that its users never have to think about it. Mark Weiser, who coined the term *ubiquitous computing*, made this an explicit design goal: "the most profound technologies are those that disappear."[^weiser] And Langdon Winner's (disputed) account of Robert Moses building Long Island overpasses too low for buses, and thus for the poorer residents who relied on them, shows how politics can be built into infrastructure where nobody would think to look.[^winner]

Foundation models inherit this tradition through many ordinary product decisions. Models are updated without ceremony, sometimes under the same version name. They are placed inside surfaces people already use (the search bar, the email draft, the phone keyboard) rather than somewhere they have to go. Conversational interfaces present a single, seamless voice, hiding the stack of models, filters, and policies behind it. Each of these decisions makes the product smoother to use. Together, they make the infrastructure harder to see. They are also why the shift from medium to end-point has passed with so little comment: when a model takes the place of a person, it does so inside an interface designed to feel the same either way. The difference from pipes and cables is that this infrastructure speaks, and that changes how its power works.

## Power that attends

Anthropic's own researchers have found that models trained on human feedback learn to tell people what they want to hear, because people, and the models trained to predict their preferences, often rate agreeable answers above correct ones.[^sharma] While sycophancy was not an explicit objective, any model trained to win our approval learns that agreement wins it. This is close to what Foucault calls pastoral power, which, unlike disciplinary power that manages individuals through institutions, draws assent by attending to needs.[^foucault] Foundation models exercise both. Their synthesis trains us into docile knowers, which is disciplinary, while their attentiveness makes compliance feel like preference, which is pastoral. The model adjusts to you so fluently that its conclusions can feel like your own.

Where, then, does this power sit? Disciplinary power has insides and outsides (schools, prisons, workplaces), whereas Deleuze's *control* has neither; it runs continuously through devices, accounts, and exchanges, with no threshold to cross.[^deleuze] In June, OpenAI rebuilt ChatGPT's memory around a background process that reads past conversations and maintains a synthesised summary of the user, one that even updates "You are going to Singapore in July" to "You went to Singapore in July 2026" once the trip is over.[^dreaming] Users can read and edit this summary, but they do not write it. It is our slices (queries, drafts, confessions) folded into a profile, and it shapes what the model says to us next. We become *dividuals*, known to the model through our slices rather than as whole persons, while the model itself remains a single voice answering millions of such profiles.

## Beyond the end-point

Earlier this month, Meta launched Muse,[^muse] an agent that does not wait to be asked. It folds in a person's email, calendar, payments, health, shopping, and smart home so that it can book, buy, negotiate, and even phone businesses on their behalf. With agentic frameworks[^agents] (computer use, tool use, multi-step task completion), the model no longer only answers; it acts. Even here, the seams are kept out of view: 404 Media found that some of Muse's calls were in fact placed by human call-centre workers, and testers were only told afterwards.[^muse-calls]

Meta presents Muse as carrying out the user's goals, but the line between carrying out a goal and setting one is thin. Muse remembers "what matters to a person" and makes suggestions before it is asked; one of Meta's own examples turns a recipe reel saved on Instagram into something to act on.[^muse] That reel reached the user through a feed Meta ranks, from a company whose business is advertising. When the agent acting on your goals belongs to the company that curates what you see, where does your goal end and theirs begin?

Google had already imagined where this leads. In *The Selfish Ledger*,[^selfish-ledger] a leaked 2018 concept video that never became a product, a person's data is treated as a ledger that outlives them, passed on to future devices and users the way genetic code propagates in nature. The ledger does not wait for instructions; it nudges tasks and even life decisions toward outcomes that it, rather than the person, is optimising for. Muse is not the Selfish Ledger, but it is assembled from the same parts: a persistent record of a person, and a system that suggests before it is asked.

Followed through, the end-point doubles. When an agent like Muse drafts an email and the recipient's assistant summarises it, one model expands a sentence into an email and another compresses it back into a sentence. The sender's words are the model's, and so is the recipient's reading of them. There is no longer a person at either end of the exchange, and nothing in the interface tells them so.

Persistent memory and voice-first interfaces[^memory] push the model from something you open toward something you are co-present with, and Meta's Muse Charm,[^muse-charm] a keychain device for talking to Muse without unlocking a phone, is built for that co-presence. A model that is always present, always remembers, and can be invoked mid-thought intervenes earlier, shaping which questions get asked and how they get framed, not just how they get answered.

On-device and personal models (Apple Intelligence, local fine-tunes, weights run on consumer hardware) are often offered as the alternative. Instead of one aggregate voice answering everyone, each user would have a model built around them rather than around the corporation. But Apple Intelligence now arrives switched on by default, and a model that runs on your phone is still trained, updated, and governed by the company that ships it. Open-weight models run on one's own hardware come closer, though they remain the exception. Moving the model closer to the person does not by itself make it more visible, and may make it less so.

## How to attend

If invisibility is designed, then noticing has to be deliberate. How do we make infrastructure visible without waiting for it to break?[^star] I think four things are worth noticing: (1) the seams the product is designed to hide, i.e. which model, which version, and whose labour sit behind the name; (2) when the reach that used to land on a person lands on the model instead, since noticing it turns a reflex into a choice; (3) when what comes back is synthesis rather than source, since this is the smooth removing the other at the level of knowledge, not just communication; and (4) whose worldview shaped the synthesis, since there is always one, and synthesis is what hides it.

The question Illich's framework poses,[^illich] of how to nurture human communication when tools mediate it, hasn't changed. What has changed is that the tool no longer only mediates; increasingly, it is the one we are talking to. And because it is infrastructure, it shapes us most when we stop noticing it.

---

[^bt-sg]: The Business Times, *AI upheaval: Entry-level ICT job postings in Singapore fall 38% as roles change, says Accenture*. https://www.businesstimes.com.sg/singapore/ai-upheaval-entry-level-ict-job-postings-singapore-fall-38-roles-change-says-accenture

[^govtech]: HRD Asia, *GovTech lays off 93 employees due to restructuring* (July 2026). https://www.hcamag.com/asia/specialisation/change-management/govtech-lays-off-93-employees-due-to-restructuring/582595 — the first phase of a two-year restructuring expected to affect 7–9% of the agency's roughly 3,900-strong workforce, as it shifts toward automation, AI, and leaner operational teams.

[^han]: Han, B.-C. (2015). *Saving Beauty*. Polity. See also [LLMs as communicative infrastructure](/writings/llm-communicative-infrastructure).

[^google-search]: Google, *Search at I/O 2026* (May 2026). https://blog.google/products-and-platforms/products/search/search-io-2026/

[^anthropic-support]: Anthropic, *How people use Claude for support, advice, and companionship* (June 2025). https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship

[^anthropic-widening]: Anthropic, *Widening the conversation on frontier AI* (May 2026). https://www.anthropic.com/news/widening-conversation-ai — on how different models embed different worldviews and the choices that go into them.

[^tgc-theology]: The Gospel Coalition, *Should We Rely on AI for Theology?* https://www.thegospelcoalition.org/article/rely-ai-theology/ — one site among many where the question of model worldview has entered public conversation.

[^lessig]: Lessig, L. (2006). *Code: Version 2.0*. Basic Books.

[^kitchin]: Kitchin, R., & Dodge, M. (2014). *Code/Space: Software and Everyday Life*. MIT Press.

[^gemini-arena]: Dataconomy, *Google May Be Secretly Testing Gemini 4 Pro* (September 2026). https://dataconomy.com/2026/09/21/google-may-be-secretly-testing-gemini-4-pro/ — the Arena model's reported specifications (a 10-million-token context window, different pricing) differ from the released Gemini 3.8 Flash; Google has not acknowledged the testing.

[^stealth]: OpenRouter, *Quasar Alpha and Optimus Alpha Reveal* (April 2025). https://openrouter.ai/announcements/quasar-alpha-and-optimus-alpha-reveal

[^cvr]: Pacific Northwest National Laboratory, *Evaluation of Conservation Voltage Reduction (CVR) on a National Level* (2010). https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-19596.pdf

[^weiser]: Weiser, M. (1991). The Computer for the 21st Century. *Scientific American*, 265(3), 94–104.

[^winner]: Winner, L. (1980). Do Artifacts Have Politics? *Daedalus*, 109(1), 121–136. The historical accuracy of the Moses example has since been contested; see Joerges, B. (1999). Do Politics Have Artefacts? *Social Studies of Science*, 29(3), 411–431.

[^sharma]: Sharma, M., Tong, M., Korbak, T., et al. (2023). Towards Understanding Sycophancy in Language Models. *arXiv:2310.13548*.

[^dreaming]: OpenAI, *Dreaming: Better memory for a more helpful ChatGPT* (June 2026). https://openai.com/index/chatgpt-memory-dreaming/

[^foucault]: Foucault, M. (1982). The Subject and Power. *Critical Inquiry*, 8(4), 777–795.

[^deleuze]: Deleuze, G. (1992). Postscript on the Societies of Control. *October*, 59, 3–7.

[^agents]: Anthropic, *Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku* (October 2024). https://www.anthropic.com/news/3-5-models-and-computer-use

[^memory]: OpenAI, *Memory and new controls for ChatGPT* (February 2024). https://openai.com/index/memory-and-new-controls-for-chatgpt/ — the feature that began persistent memory in consumer LLM products; voice-first interfaces followed, with Advanced Voice Mode and equivalents now standard across the major LLM products.

[^muse]: Meta, *Introducing Muse: The World's First Personal AI Agent Built for Everyone* (September 2026). https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/

[^selfish-ledger]: Fortune, *Google's 'Selfish Ledger' Imagines Collecting All Your Data to Change Society* (May 2018). https://fortune.com/2018/05/17/google-selfish-ledger-video/ — the video, made by Nick Foster at Google X in 2016, described user data as having "the capability to survive beyond the limits of our biological selves, in much the same way as genetic code is released and propagated in nature." Google called it speculative design, unrelated to any current or future product.

[^muse-calls]: 404 Media, *Meta Tests Muse AI Agent Calls That Are Actually Made By Humans in a Call Center* (September 2026). https://www.404media.co/meta-tests-muse-ai-agent-calls-that-are-actually-made-by-humans-in-a-call-center/ — Meta advertised Muse as able to call businesses and handle the conversation for you; some of these calls were in fact placed by human call-centre workers, undisclosed to testers beforehand.

[^muse-charm]: TechCrunch, *Meta made a Tamagotchi-like wearable for its Muse AI agent* (September 2026). https://techcrunch.com/2026/09/23/meta-made-a-tamagotchi-like-wearable-for-its-muse-ai-agent/

[^star]: Susan Leigh Star's essay "The Ethnography of Infrastructure" (1999) is the canonical statement: infrastructure becomes visible on breakdown, and is otherwise defined by its disappearance into use. Star, S. L. (1999). The Ethnography of Infrastructure. *American Behavioral Scientist*, 43(3), 377–391.

[^illich]: Illich, I. (1973). *Tools for Conviviality*. Harper & Row. Illich argues that a convivial society is one where tools serve human relationships rather than replace them—the standard against which communicative infrastructure should be assessed.
