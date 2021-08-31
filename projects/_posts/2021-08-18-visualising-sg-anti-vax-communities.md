---
layout: post
title: "Visualising the talk in Singapore's anti-vax communities"
date: 2021-08-18
tag: [communities, dataviz]
image: /assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word_network_B.png
description: "Exploring Singaporean anti-vax communities through network visualisation."
permalink: /projects/visualising-singapore-anti-vax-communities
---

Even as Singapore climbs it way to be [the most vaccinated country](https://www.nytimes.com/interactive/2021/world/covid-vaccinations-tracker.html), a number of local anti-vax communities have emerged on messaging platform Telegram. These communities deserve our attention as they are a [concern to public health](https://www.channelnewsasia.com/commentary/covid-19-coronavirus-conspiracy-misinformation-fake-news-400276).

Arguably, Telegram packs features that enable the spread of misinformation more effectively than other messaging platforms such as WhatsApp. Technology writer Venkat Ananth has a thread briefly exploring the reasons for this:

<div class="twitter-tweet-container">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🧵 WhatsApp as a propaganda distribution channel might be slowing down (as one pol functionary told me a majority of groups are muted by users) <br><br>Engagement with content is not as much in real-time as it used to be. Shares do happen. But that depends on when folks engage w/ it</p>&mdash; Venkat Ananth (@venkatananth) <a href="https://twitter.com/venkatananth/status/1357923318356037637?ref_src=twsrc%5Etfw">February 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

On the flip side, Telegram's features also makes it easier to study these communities. New users are not restricted access to old messages, meaning that the community's whole history is exposed to anyone. Telegram's desktop application even allows exporting chat history in machine-readable JSON format.

In this post, I'll explore how network visualisation can be used to understand anti-vax communities in Singapore. In particular, I'll look at three SG anti-vax communities that range in age and size.

## Introduction

Out of the three communities, two were of similar in age and size, while the third community was the oldest and significantly larger.

| Community | Age             | Size  |
------------|-----------------|-------|
| A         | 16th June 2021  | 500   |
| B         | 22nd June 2021  | 730   |
| C         | 20th April 2021 | 7.6k  |

When we plot the activity of unique users over time however, we see positive growth across all three communities.

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/actors_time.png"/>
    <figcaption>No. of actors over time</figcaption>
</figure>

## The Social Network of an Anti-Vax Community

In a social network, each actor in the community is represented by a node. The numbers on each node is a generated id, to maintain anonymity of the data. Each edge represents a user interaction between two actors, which can be a mention, reply, or invitation. The size of the node is proportional to its [out-degree](https://en.wikipedia.org/wiki/Directed_graph#Indegree_and_outdegree), meaning that a larger node interacts with more members in the community. Using [modularity clustering](https://en.wikipedia.org/wiki/Modularity_(networks)), the network has been segmented into community clusters. Open source visualisation software [Gephi](https://gephi.org/) was used to visualise the network.

The social networks of each of the communities are thus presented.

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/social_network_A.png"/>
    <figcaption>Social network of community A</figcaption>
</figure>

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/social_network_B.png"/>
    <figcaption>Social network of community B</figcaption>
</figure>

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/social_network_C.png"/>
    <figcaption>Social network of community C</figcaption>
</figure>

The social networks of each community are significantly smaller than the actual size of the community as only actors that interact with each other are considered in the construction. That is, lurkers (also called isolates) who do not interact with anyone within the communities have been filtered out.

Within each network, a set of actors can be identified as more active in interacting with other members. Not only are they active in socialising with a more diverse group of members, they also interact with each other more frequently, constituting a broadcast network (e.g. the green cluster in community A), from which most messages are distributed to the rest of the community.

However, as the group grows in size, such as in community C, the number of more-active-than-usual members grow and there are less strong ties present in the network, active members are found interacting across diverse groups within the broader network, instead of coalescing into distinct sub-communities.

Would removing these active users halt misinformation within the group? For a small to medium sized community, this might be effective and sufficient to shut down the community, but for a large community like Community C, it becomes harder to select out the few individuals responsible for the majority spread of misinformation.

## The Word Network of an Anti-Vax Community

Beyond the social structure of these communities, network visualisation can also provide insight into the conversations that happen within a community, we can use a [word co-occurrence network](https://en.wikipedia.org/wiki/Co-occurrence_network) to visualise how words are used in relation to each other in the community. This allows us to identify key topics of conversation, revealing the diversity of topics within the community.

To improve the interpretability of the network, only the top 1000 most frequently occurring word were used in the construction of these networks. The assumption is that the top occurring keywords correlates to the key topics of the community. To reduce the complexity of the network, words were [lemmatised](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html) using the [NLTK](https://www.nltk.org/) toolkit. [Stopwords](https://nlp.stanford.edu/IR-book/html/htmledition/dropping-common-terms-stop-words-1.html) were removed as well.

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word_network_A.png"/>
    <figcaption>Word co-occurrence network of community A</figcaption>
</figure>

Within community A, three clusters can be observed, though it appears no particular keyword anchors the conversation of the community. The green cluster pertains to medical information such as information on vaccines and the covid virus. A pink cluster reveals community actions, including asking for advice, personal opinions, and informal requests. A third cluster in blue pertains to the news and media, a staple source of information for these communities.

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word_network_B.png"/>
    <figcaption>Word co-occurrence network of community B</figcaption>
</figure>

Community B exhibits more visibly distinct clustering. A green cluster pertains to information on vaccines and the pandemic, such as death counts, vaccination reports, and case updates. The yellow cluster is particularly unique to this community, pertaining to alternative medicine and home remedies, evidenced by the names of organic ingredients and household chemicals. The pink cluster, on the other hand, relates to symptoms and negative reactions from vaccines. It becomes clear that community B has a specific interest in alternative remedies and distrust and anxiety over side-effects and potential harm from the vaccine.

<figure>
    <img src="../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word_network_C.png"/>
    <figcaption>Word co-occurrence network of community C</figcaption>
</figure>

Finally, in community C, clusters are the least distinct, indicating a mixing of various topics in conversation. This is perhaps a consequence of the size of the community, which results in more diverse conversations. However, an cursory look at the words that make up the network reveals that community C exhibits similar topic clusters as community A.

Generally, within anti-vax communities in Singapore, members use reports on negative symptoms to view vaccines in negative light. Vaccines are often mentioned together with words such as toxic, risks, and experimental. How vaccines might negatively affect the body is a topic also discussed in detail, with specific references to organs in the body such as the liver or heart, as well as specific symptoms such as fever and stroke. In response, alternative treatments are frequently discussed, and community B is particularly unique in its focus on home-based natural remedies.

Finally, we can also observe evidence that these community channels are actively promoting and encouraging the spread of misinformation. These take the form of frequent requests for more information, as well as encouragement to share misinformation, specifically targeting friends and families.

## What can we do?

Recently, these communities have been exposed to our mainstream media and social networks. People have been joining these communities either to satisfy their curiosity or to troll. However, this does little to resolve the problem as such communities can quickly migrate and start new community channels, like the mythical hydra. Should the government be given the power to shut down these communities in a similar vein to [POFMA](https://www.pofmaoffice.gov.sg/regulations/protection-from-online-falsehoods-and-manipulation-act/)? Or perhaps we should seek to [understand these communities](https://datasociety.net/library/searching-for-alternative-facts/) and learn to [speak their lingo](https://www.pnas.org/content/118/21/e2101723118.short), in order to change their opinions using the power of their own words.