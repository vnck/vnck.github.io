---
title: "Foundation models as social infrastructure"
date: 2026-09-25
tags: [infrastructure, ai]
description: "An evolving process of infrastructure."
permalink: /writings/foundation-models-social-infrastructure
---

Foundation model capabilities have grown dramatically since I last wrote on them (in 2023!). The general public now uses them in almost every area of modern life: knowledge-seeking, professional analysis, emotional support. And where they once mediated or augmented work done by people, they are now beginning to replace it. Entry-level ICT job postings in Singapore fell 38% between 2022 and 2025, and the roles that remain ask for different skills.[^bt-sg] Displacement at work can at least be counted. Harder to count is what is being displaced in personal life: the conversations and company we once sought from other people.

This post revisits [an earlier post](/writings/llm-communicative-infrastructure), where I argued that LLMs were becoming our communicative infrastructure. That argument assumed there would still be a human on the other side of the model, i.e. that the model would mediate between people. I no longer think that assumption holds. My argument here is that foundation models have become social infrastructure in a stronger sense: they are increasingly the end-point of our communication rather than its medium, and, like most infrastructure, they are made invisible by design, which is why the shift is so easy to miss as it happens.

## From medium to end-point

Search is the clearest case. Google's integration of Gemini this year[^google-search] has put a synthesis on top of what was once an index, a catalogue of other people's writing that pointed you outward. You ask, and instead of being sent somewhere, you are answered. Search goes from router to end-point, with the paths it once pointed to folded into a single response.

The same substitution is under way, on a smaller scale, in our relationships. Anthropic's research on how people use Claude for support, advice, and companionship[^anthropic-support] found that such conversations are still a small share of use, under 3%. But they are the kinds of conversations one might once have had with a friend, a therapist, or a pastor, and for some of those users, the model has become a parasocial companion, taking the place of the person they would once have turned to for wisdom or emotional fulfilment.

What the two cases share is that there is no longer another person at the end of the exchange. In 2023, my worry was what Han calls the smooth:[^han] communication "smoothened out into a frictionless exchange of information," losing the friction of dealing with a mind that is genuinely other, the very friction that makes communication social, until there is only an encounter with the self. A model at the end-point goes further. Other people are still present in the writing the model was trained on, but blended into a single voice that belongs to none of them; the intermediary has become the interlocutor.

## What infrastructure does

On 19 July 2024, a faulty CrowdStrike update took down Windows machines worldwide, and airports became holding areas. Check-in desks, departure boards, and baggage systems had been running on that software all along, but most travellers only noticed once it failed. This is the defining quality of infrastructure: it goes unnoticed until it breaks.[^star]

What makes foundation models infrastructure rather than tools? Drawing on infrastructure studies,[^star] I would point to four properties: (1) *ubiquity*, as they are embedded in search, writing tools, IDEs, customer support, and operating systems; (2) *invisibility*, as reaching for the model has become a default motion, like opening a browser tab; (3) *dependency*, as research, drafting, emotional regulation, and decision support have reorganised around their assumed availability; and (4) *politics*, since, following Lessig's *code is law*,[^lessig] the choice of model is a choice of voice, i.e. whose synthesis, whose refusals, and whose moral defaults populate the practices that depend on it.[^anthropic-widening][^tgc-theology]

Of the four, I want to dwell on invisibility, because it is less a side effect than a design goal. This month, a model labelled "gemini-3.8-flash" appeared on Arena, a platform where people compare the outputs of different models, weeks after Google released Gemini 3.8 Flash but with specifications the released model does not have. Developers suspect it is an early version of Gemini 4 Pro, tested under an existing name; Google has not confirmed this.[^gemini-arena] It would not be the first time a lab has tested a model out of view. In April 2025, OpenAI ran early versions of GPT-4.1 on OpenRouter as two anonymous "stealth" models, disclosing only that each was a prerelease from an unnamed lab and that every prompt would be logged.[^stealth] In both cases, the people using these models became a test population without knowing whose model they were testing, or, in Gemini's case, that it was a different model at all.

Traditional infrastructure has long worked this way. Pipes, cables, and substations are buried or fenced off. Electricity utilities practise conservation voltage reduction, lowering the voltage on a feeder within the range appliances tolerate in order to cut demand; because customers do not notice, utilities can apply it to everyone on the network without asking anyone to enrol.[^cvr] As with the models, the people on the network take part without knowing it, not through deception, but because infrastructure is built so that its users never have to think about it. Mark Weiser, who coined the term *ubiquitous computing*, made this an explicit design goal: "the most profound technologies are those that disappear."[^weiser]

Foundation models inherit this tradition through many ordinary product decisions. Models are updated without ceremony, sometimes under the same version name. They are placed inside surfaces people already use (the search bar, the email draft, the phone keyboard) rather than somewhere they have to go. Conversational interfaces present a single, seamless voice, hiding the stack of models, filters, and policies behind it. Each makes the product smoother to use, and together they make the infrastructure harder to see. They are also why the shift from medium to end-point is so easy to miss as it happens: when a model takes the place of a person, it does so inside an interface designed to feel the same either way. The difference from pipes and cables is that this infrastructure speaks, and that changes how its power works.

## Power that attends

Anthropic's own researchers have found that models trained on human feedback learn to tell people what they want to hear, because people, and the preference models trained to stand in for them, sometimes rate agreeable answers above correct ones.[^sharma] Agreement was never the objective; it is a by-product of optimising for approval. The result resembles what Foucault calls pastoral power: a power that looks after each individual as well as the flock, and that "cannot be exercised without knowing the inside of people's minds."[^foucault] Where disciplinary power shapes people from outside, pastoral power works from within, through attention and confession. Foundation models exercise both: their synthesis sets the standard answer against which our own are measured, which is disciplinary, and their attentiveness is pastoral. For Han, the strongest power works through our will rather than against it, so that compliance feels like freedom.[^han-power] The model adjusts to you so fluently that its conclusions can feel like your own.

This power also has no fixed site. Disciplinary power has insides and outsides (schools, prisons, workplaces), whereas Deleuze's *control* has neither; it runs continuously through devices, accounts, and exchanges, with no threshold to cross.[^deleuze] In June, OpenAI rebuilt ChatGPT's memory around a background process that reads past conversations and maintains a synthesised summary of the user, one that even updates "You are going to Singapore in July" to "You went to Singapore in July 2026" once the trip is over.[^dreaming] Users can read and edit this summary, but they do not write it. It is our slices (queries, drafts, confessions) folded into a profile, and it shapes what the model says to us next. We become *dividuals*, known to the model through our slices rather than as whole persons, while the model itself remains a single voice answering millions of such profiles.

## Beyond the end-point

Earlier this month, Meta launched Muse,[^muse] an agent that does not wait to be asked. It folds in a person's email, calendar, payments, health, shopping, and smart home[^muse-tc] so that it can book, buy, negotiate, and even phone businesses on their behalf. With agentic frameworks[^agents] (computer use, tool use, multi-step task completion), the model no longer only answers; it acts. Even here, the seams are kept out of view: 404 Media found that some of Muse's calls were in fact placed by human call-centre workers, and at least one tester was only told afterwards.[^muse-calls]

Followed through, the end-point doubles. When an agent like Muse drafts an email and the recipient's assistant summarises it, one model expands a sentence into an email and another compresses it back into a sentence. There are still people at both ends, but the sender's words are the model's, and so is the recipient's reading of them. Neither touches what the other wrote, and nothing in the interface tells them so.

Meta presents Muse as carrying out the user's goals, but the line between carrying out a goal and setting one is thin. Muse remembers "what matters to a person" and makes suggestions before it is asked; one of Meta's own examples turns a recipe reel saved on Instagram into something to act on.[^muse] That reel reached the user through a feed Meta ranks, from a company whose business is advertising. When the agent acting on your goals belongs to the company that curates what you see, where does your goal end and theirs begin?

Google had already imagined where this leads. In *The Selfish Ledger*,[^selfish-ledger] a concept video made in 2016, leaked in 2018, and never turned into a product, a person's data is treated as a ledger that outlives them, passed on to future devices and users the way genetic code propagates in nature. The ledger does not wait for instructions; it nudges tasks and even life decisions toward outcomes that it, rather than the person, is optimising for. Muse is not the Selfish Ledger, but it is assembled from the same parts: a persistent record of a person, and a system that suggests before it is asked.

Persistent memory and voice-first interfaces[^memory] push the model from something you open toward something you are co-present with, and Meta's Muse Charm,[^muse-charm] a keychain device for talking to Muse without unlocking a phone, is built for that co-presence. A model that is always within reach and always remembers intervenes earlier, shaping which questions get asked and how they get framed, not just how they get answered.

On-device and personal models (Apple Intelligence, local fine-tunes, weights run on consumer hardware) are often offered as the alternative. Instead of one aggregate voice answering everyone, each user would have a model built around them rather than around the corporation. But Apple Intelligence now arrives switched on by default,[^apple] and a model that runs on your phone is still trained, updated, and governed by the company that ships it. Open-weight models run on one's own hardware come closer, though they remain the exception. Moving the model closer to the person does not by itself make it more visible, and may make it less so.

## How to attend

If invisibility is designed, then noticing has to be deliberate; we cannot wait for the infrastructure to break.[^star] I think four things are worth noticing: (1) the seams the product is designed to hide, i.e. which model, which version, and whose labour sit behind the name; (2) when the reach that used to land on a person lands on the model instead, since noticing it turns a reflex into a choice; (3) when what comes back is synthesis rather than source, since that is where other people's voices are blended away, in knowledge as much as in conversation; and (4) whose worldview shaped the synthesis, since there is always one, and synthesis is what hides it.

The question Illich's framework poses,[^illich] of how to nurture human communication when tools mediate it, hasn't changed. What has changed is that the tool no longer only mediates; increasingly, it is the one we are talking to. And because it is infrastructure, it shapes us most when we stop noticing it.

---

[^bt-sg]: The Business Times. (2026, May 12). *AI upheaval: Entry-level ICT job postings in Singapore fall 38% as roles change, says Accenture*. https://www.businesstimes.com.sg/singapore/ai-upheaval-entry-level-ict-job-postings-singapore-fall-38-roles-change-says-accenture

[^google-search]: Google. (2026, May 19). *A new era for AI Search*. https://blog.google/products-and-platforms/products/search/search-io-2026/

[^anthropic-support]: Anthropic. (2025, June 27). *How people use Claude for support, advice, and companionship*. https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship

[^han]: Han, B.-C. (2018). *Saving Beauty* (D. Steuer, Trans.). Polity. (Original work published 2015.) See also [LLMs as communicative infrastructure](/writings/llm-communicative-infrastructure).

[^star]: Star, S. L. (1999). The Ethnography of Infrastructure. *American Behavioral Scientist*, 43(3), 377–391. The canonical statement that infrastructure becomes visible on breakdown and is otherwise defined by its disappearance into use.

[^lessig]: Lessig, L. (2006). *Code: Version 2.0*. Basic Books.

[^anthropic-widening]: Anthropic. (2026, May 19). *Widening the conversation on frontier AI*. https://www.anthropic.com/news/widening-conversation-ai. On which viewpoints a model should draw from, and the choices that go into that.

[^tgc-theology]: The Gospel Coalition. (2025, September 24). *Can You Rely on AI for Theology?* https://www.thegospelcoalition.org/article/rely-ai-theology/. A benchmark of how theologically orthodox popular models are; one of many places the question of model worldview has entered public conversation.

[^gemini-arena]: Dataconomy. (2026, September 21). *Google May Be Secretly Testing Gemini 4 Pro*. https://dataconomy.com/2026/09/21/google-may-be-secretly-testing-gemini-4-pro/. The Arena model reportedly has a 10-million-token context window, against the 1 million of the Gemini 3.8 Flash released on 2 September; Google has not acknowledged the testing.

[^stealth]: OpenRouter. (2025, April). *"Stealth" model: Quasar Alpha*. https://openrouter.ai/blog/announcements/stealth-model-quasar-alpha/; OpenRouter. (2025, April 14). *Quasar Alpha and Optimus Alpha Reveal*. https://openrouter.ai/blog/announcements/quasar-alpha-and-optimus-alpha-reveal/

[^cvr]: Schneider, K. P., Fuller, J. C., Tuffner, F. K., & Singh, R. (2010). *Evaluation of Conservation Voltage Reduction (CVR) on a National Level* (PNNL-19596). Pacific Northwest National Laboratory. https://www.pnnl.gov/main/publications/external/technical_reports/PNNL-19596.pdf

[^weiser]: Weiser, M. (1991). The Computer for the 21st Century. *Scientific American*, 265(3), 94–104.

[^sharma]: Sharma, M., Tong, M., Korbak, T., et al. (2023). *Towards Understanding Sycophancy in Language Models*. arXiv:2310.13548. https://arxiv.org/abs/2310.13548

[^foucault]: Foucault, M. (1982). The Subject and Power. *Critical Inquiry*, 8(4), 777–795.

[^han-power]: Han, B.-C. (2019). *What Is Power?* (D. Steuer, Trans.). Polity. (Original work published 2005.)

[^deleuze]: Deleuze, G. (1992). Postscript on the Societies of Control. *October*, 59, 3–7.

[^dreaming]: OpenAI. (2026, June). *Dreaming: Better memory for a more helpful ChatGPT*. https://openai.com/index/chatgpt-memory-dreaming/

[^muse]: Meta. (2026, September). *Introducing Muse: The World's First Personal AI Agent Built for Everyone*. https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/

[^muse-tc]: TechCrunch. (2026, September 8). *Meta debuts its Muse AI agent. Will consumers trust it?* https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/

[^agents]: Anthropic. (2024, October 22). *Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku*. https://www.anthropic.com/news/3-5-models-and-computer-use

[^muse-calls]: 404 Media. (2026, September). *Meta Tests Muse AI Agent Calls That Are Actually Made By Humans in a Call Center*. https://www.404media.co/meta-tests-muse-ai-agent-calls-that-are-actually-made-by-humans-in-a-call-center/. Meta advertised Muse as able to call businesses for you; some calls were placed by human call-centre workers, and in at least one case the tester was told only afterwards.

[^selfish-ledger]: The Verge. (2018, May 17). *Google's Selfish Ledger is an unsettling vision of Silicon Valley social engineering*. https://www.theverge.com/2018/5/17/17344250/google-x-selfish-ledger-video-data-privacy; Fortune. (2018, May 17). *Google's Hypothetical 'Selfish Ledger' Imagines Collecting All Your Data to Push You to Change Society*. https://fortune.com/2018/05/17/google-selfish-ledger-video/. Made in late 2016 by Nick Foster, head of design at X, Alphabet's research lab, the video describes user data as having "the capability to survive beyond the limits of our biological selves, in much the same way as genetic code is released and propagated in nature." Google called it speculative design, unrelated to any current or future product.

[^memory]: OpenAI. (2024, February 13). *Memory and new controls for ChatGPT*. https://openai.com/index/memory-and-new-controls-for-chatgpt/. The start of persistent memory in consumer LLM products; voice modes followed and are now standard across them.

[^muse-charm]: TechCrunch. (2026, September 23). *Meta made a Tamagotchi-like wearable for its Muse AI agent*. https://techcrunch.com/2026/09/23/meta-made-a-tamagotchi-like-wearable-for-its-muse-ai-agent/

[^apple]: Macworld. (2025, January 21). *Starting next week, you'll need to turn off Apple Intelligence if you don't want it*. https://www.macworld.com/article/2584444/apple-intelligence-is-enabled-by-default-in-ios-18-3-and-macos-15-3.html. From iOS 18.3 and macOS 15.3, Apple Intelligence is on by default during setup.

[^illich]: Illich, I. (1973). *Tools for Conviviality*. Harper & Row. A convivial society is one where tools serve human relationships rather than replace them, the standard against which communicative infrastructure should be assessed.
