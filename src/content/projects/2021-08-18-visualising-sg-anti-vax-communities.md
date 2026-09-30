---
title: "Visualising the talk in Singapore's anti-vax communities"
date: 2021-08-18
tags: [smallworld]
description: "Exploring Singaporean anti-vax communities through network visualisation."
image: /assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word-network-b.webp
permalink: /projects/visualising-singapore-anti-vax-communities
---

Even as Singapore climbs it way to be the most vaccinated country,[^nyt-vaccination] a number of local anti-vax communities have emerged on messaging platform Telegram. These communities deserve our attention as they are a concern to public health.[^cna-misinformation]

Arguably, Telegram packs features that enable the spread of misinformation more effectively than other messaging platforms such as WhatsApp, with the ability to create channels, supergroups, and publishing of various media formats.

On the flip side, Telegram's features also makes it easier to study these communities. New users are not restricted access to old messages, meaning that the community's whole history is exposed to anyone. Telegram's desktop application even allows exporting chat history in machine-readable JSON format.

In this post, I'll explore how network visualisation can be used to understand anti-vax communities in Singapore. In particular, I'll look at three SG anti-vax communities that range in age and size.

_tldr_; in the smaller anti-vax communities a few broadcasters anchor tight clusters and the conversation is distinct, while the largest community has weaker ties and mixed topics, and all three talk mostly about vaccine side-effects, alternative remedies and passing information on.

## The three communities

Out of the three communities, two were of similar in age and size, while the third community was the oldest and significantly larger.

| Community | Age             | Size  |
| --------- | --------------- | ----- |
| A         | 16th June 2021  | 500   |
| B         | 22nd June 2021  | 730   |
| C         | 20th April 2021 | 7.6k  |

When we plot the activity of unique users over time however, we see positive growth across all three communities.

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/actors-time.webp" alt="Three line charts, one for each community, of the number of unique actors per day. All three rise over time, with a spike in late July or early August 2021: to about 57 in community A, 124 in community B and 900 in community C."/>
    <figcaption>Figure 1. Number of unique actors over time, by community.</figcaption>
</figure>

## The social network of an anti-vax community

In a social network, each actor in the community is represented by a node. The numbers on each node is a generated id, to maintain anonymity of the data. Each edge represents a user interaction between two actors, which can be a mention, reply, or invitation. The size of the node is proportional to its out-degree,[^outdegree] meaning that a larger node interacts with more members in the community. The colours mark the clusters found in each network (see the method notes below).

The social networks of each of the communities are thus presented.

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/social-network-a.webp" alt="Network diagram of community A. Nodes are actors, coloured by cluster and sized by out-degree: a dense green cluster on the left, a blue cluster on the right and a smaller red cluster at the bottom, with actors 60, 75 and 2 the largest nodes."/>
    <figcaption>Figure 2. Social network of community A.</figcaption>
</figure>

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/social-network-b.webp" alt="Network diagram of community B, with orange, blue and green clusters of similar size and a smaller pink cluster at the upper right. Actor 85 is the largest node, followed by 126, 92 and 65."/>
    <figcaption>Figure 3. Social network of community B.</figcaption>
</figure>

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/social-network-c.webp" alt="Network diagram of community C, far larger and denser than A or B, with green, orange and purple clusters and actor 597 as the largest node."/>
    <figcaption>Figure 4. Social network of community C.</figcaption>
</figure>

The social networks of each community are significantly smaller than the actual size of the community as only actors that interact with each other are considered in the construction. That is, lurkers (also called isolates) who do not interact with anyone within the communities have been filtered out.

Within each network, a set of actors can be identified as more active in interacting with other members. Not only are they active in socialising with a more diverse group of members, they also interact with each other more frequently, constituting a broadcast network (e.g. the green cluster in community A), from which most messages are distributed to the rest of the community.

However, as the group grows in size, such as in community C, the number of more-active-than-usual members grow and there are less strong ties present in the network, active members are found interacting across diverse groups within the broader network, instead of coalescing into distinct sub-communities.

Would removing these active users halt misinformation within the group? For a small to medium sized community, this might be effective and sufficient to shut down the community, but for a large community like Community C, it becomes harder to select out the few individuals responsible for the majority spread of misinformation.

## The word network of an anti-vax community

Beyond the social structure of these communities, network visualisation can also provide insight into the conversations that happen within a community, we can use a word co-occurrence network[^cooccurrence] to visualise how words are used in relation to each other in the community. This allows us to identify key topics of conversation, revealing the diversity of topics within the community.

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word-network-a.webp" alt="Word co-occurrence network of community A. An olive-green cluster on the left holds medical and vaccine terms, a pink cluster on the right and bottom holds everyday requests and opinions, and small blue-green clusters at the edges hold news and media terms. The largest words are 'people', 'like', 'ha' and 'one'."/>
    <figcaption>Figure 5. Word co-occurrence network of community A.</figcaption>
</figure>

Within community A, three clusters can be observed, though it appears no particular keyword anchors the conversation of the community. The green cluster pertains to medical information such as information on vaccines and the covid virus. A pink cluster reveals community actions, including asking for advice, personal opinions, and informal requests. A third cluster in blue pertains to the news and media, a staple source of information for these communities.

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word-network-b.webp" alt="Word co-occurrence network of community B in three distinct clusters: yellow at the top (food, ingredients and home remedies), green at the bottom (vaccines, cases and reports) and pink at the sides (symptoms and reactions). The largest words are 'ha', 'people', 'get' and 'one'."/>
    <figcaption>Figure 6. Word co-occurrence network of community B.</figcaption>
</figure>

Community B exhibits more visibly distinct clustering. A green cluster pertains to information on vaccines and the pandemic, such as death counts, vaccination reports, and case updates. The yellow cluster is particularly unique to this community, pertaining to alternative medicine and home remedies, evidenced by the names of organic ingredients and household chemicals. The pink cluster, on the other hand, relates to symptoms and negative reactions from vaccines. It becomes clear that community B has a specific interest in alternative remedies and distrust and anxiety over side-effects and potential harm from the vaccine.

<figure>
    <img src="../../assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word-network-c.webp" alt="Word co-occurrence network of community C, with orange, green and blue words blended into one mass instead of separate clusters. The larger words include 'covid', 'jab', 'people' and 'one'."/>
    <figcaption>Figure 7. Word co-occurrence network of community C.</figcaption>
</figure>

Finally, in community C, clusters are the least distinct, indicating a mixing of various topics in conversation. This is perhaps a consequence of the size of the community, which results in more diverse conversations. However, an cursory look at the words that make up the network reveals that community C exhibits similar topic clusters as community A.

Generally, within anti-vax communities in Singapore, members use reports on negative symptoms to view vaccines in negative light. Vaccines are often mentioned together with words such as toxic, risks, and experimental. How vaccines might negatively affect the body is a topic also discussed in detail, with specific references to organs in the body such as the liver or heart, as well as specific symptoms such as fever and stroke. In response, alternative treatments are frequently discussed, and community B is particularly unique in its focus on home-based natural remedies.

Finally, we can also observe evidence that these community channels are actively promoting and encouraging the spread of misinformation. These take the form of frequent requests for more information, as well as encouragement to share misinformation, specifically targeting friends and families.

## What can we do?

Recently, these communities have been exposed to our mainjournal media and social networks. People have been joining these communities either to satisfy their curiosity or to troll. However, this does little to resolve the problem as such communities can quickly migrate and start new community channels, like the mythical hydra. Should the government be given the power to shut down these communities in a similar vein to POFMA?[^pofma] Or perhaps we should seek to understand these communities[^data-society] and learn to speak their lingo,[^pnas] in order to change their opinions using the power of their own words.

## Method and caveats

Using modularity clustering,[^modularity] each social network has been segmented into community clusters. Open source visualisation software Gephi[^gephi] was used to visualise the networks.

To improve the interpretability of the word networks, only the top 1000 most frequently occurring word were used in their construction. The assumption is that the top occurring keywords correlates to the key topics of the community. To reduce the complexity of the network, words were lemmatised[^lemmatisation] using the NLTK[^nltk] toolkit. Stopwords[^stopwords] were removed as well.

---
This post adds to a collection of studies exploring Telegram groups as rich sources of urban insight for policy and planning. If you enjoyed this post, do check out these other posts:

- [Deriving ridership demand from online hitch communities](/projects/deriving-hitch-ridership-demand)
- [An exploratory study on digital sharing communities](/projects/studying-online-communities)

[^nyt-vaccination]: The New York Times. (n.d.). *Covid world vaccination tracker* [Interactive]. https://www.nytimes.com/interactive/2021/world/covid-vaccinations-tracker.html. The page could not be retrieved when checked, so the title is taken from the address.

[^cna-misinformation]: Channel NewsAsia. (2021, January 12). *Commentary: Misinformation threatens Singapore's COVID-19 vaccination programme*. https://www.channelnewsasia.com/commentary/covid-19-coronavirus-conspiracy-misinformation-fake-news-400276

[^outdegree]: Wikipedia. (n.d.). *Directed graph: Indegree and outdegree*. https://en.wikipedia.org/wiki/Directed_graph#Indegree_and_outdegree

[^cooccurrence]: Wikipedia. (n.d.). *Co-occurrence network*. https://en.wikipedia.org/wiki/Co-occurrence_network

[^pofma]: POFMA Office. (n.d.). *Regulations*. https://www.pofmaoffice.gov.sg/regulations/. The address originally linked (…/regulations/protection-from-online-falsehoods-and-manipulation-act/) no longer resolves.

[^data-society]: Tripodi, F. (2018, May 16). *Searching for alternative facts: Analyzing scriptural inference in conservative news practices*. Data & Society. https://datasociety.net/library/searching-for-alternative-facts/

[^pnas]: DeMora, S. L., Merolla, J. L., Newman, B., & Zechmeister, E. J. (2021). Reducing mask resistance among White evangelical Christians with value-consistent messages. *Proceedings of the National Academy of Sciences, 118*(21), e2101723118. https://www.pnas.org/content/118/21/e2101723118.short. Details from a search result; the page could not be retrieved when checked.

[^modularity]: Wikipedia. (n.d.). *Modularity (networks)*. https://en.wikipedia.org/wiki/Modularity_(networks)

[^gephi]: Gephi. (n.d.). *Gephi: The open graph viz platform*. https://gephi.org/

[^lemmatisation]: Manning, C. D., Raghavan, P., & Schütze, H. (2008). Stemming and lemmatization. In *Introduction to information retrieval*. Cambridge University Press. https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html

[^nltk]: NLTK Project. (n.d.). *Natural Language Toolkit*. https://www.nltk.org/

[^stopwords]: Manning, C. D., Raghavan, P., & Schütze, H. (2008). Dropping common terms: Stop words. In *Introduction to information retrieval*. Cambridge University Press. https://nlp.stanford.edu/IR-book/html/htmledition/dropping-common-terms-stop-words-1.html
