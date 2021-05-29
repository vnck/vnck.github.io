---
layout: post
title: "An Exploratory Study on Digital Sharing Communities"
date: 2021-04-29
tag: [datascience, socialscience, projects]
description: "Applying methods from computational social science to study HDB towns."
permalink: /writings/studying-online-communities
reading_time: 20
---

> This is an introductory post on my experience conducting a research study on online communities using computational social science methods. The full report can be accessed [here](https://vnck.xyz/digital-sharing-communities-study/).

During my spring semester, I had the opportunity to undertake a research study with the [Singapore Housing and Development Board (HDB)](https://en.wikipedia.org/wiki/Housing_and_Development_Board) to look into online sharing communities within HDB towns. Specifically, we were interested in (1) describing characteristics and (2) uncovering motivations and behaviours behind members of these online communities.
<details>
	<summary>What is an online sharing community?</summary>
	<p>We defined online sharing communities as communities that exist on online social media platforms, but also associated with a place (region, town, block), that not only share physical resources but also include knowledge sharing and social sharing.
	<br><br>
	For example, BTO chat groups and Residential Facebook groups, while counterexamples would be online dating platforms and discord gaming communities.</p>
</details>

## Studying Online Communities 
Online communities have been around long enough for the field of social science to have developed methods to study them, ranging from digital ethnography ([Wishcry has done amazing work in this!](https://wishcrys.com/)) to making use of machine learning and natural language processing in the sub-field of [computational social science](https://en.wikipedia.org/wiki/Computational_social_science).

For the purposes of our study, we decided to adopt an observational stance (i.e. keeping our presence hidden) and scrape chat histories. This collection of networked and unstructured data justified a computational approach, using social network analysis and topic modelling.

## The Study

The study lasted the semester (four months), and even though we had a very tight schedule, we effectively delivered useful results. Our report can be found [here](https://vnck.xyz/digital-sharing-communities-study/), along with interactive visualisations.

We were able to experiment with many novel (to us, and to our stakeholders) methods, and it was interesting to see which methods worked well and which methods did not. Two examples:

1. Social network analysis was effective in describing the health of communities and its visual nature made it easy to communicate the results with our stakeholders. 
2. On the other hand, our attempt at using NLP to identify conversation threads that led to offline engagement still required much manual validation, revealing the complexity of the problem which would require more time and effort to be effective.

Overall, I had a lot of fun working on this study as it was a good mixture of the familiar (data science) and unfamiliar (social science), and it was a great opportunity to show how data science and machine learning can be used in a social science study!