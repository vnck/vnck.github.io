---
layout: draft
title: "Extracting ridership demand from online hitch communities"
date: 2021-09-20
tag: [communities, dataviz]
# image: /assets/posts/2021-08-18-visualising-sg-anti-vax-communities/word_network_B.png
description: "Extracting hitch ridership demand from a Singapore-based telegram group."
permalink: /projects/extracting-hitch-ridership-demand
---

Early 2019, a [carpooling telegram group made headlines](https://www.straitstimes.com/singapore/transport/new-carpooling-service-in-telegram-chat-group-draws-1300-members-in-2-weeks) as a competitive service to the dominant ride-sharing services in Singapore. The next year, [such groups were banned](https://www.tnp.sg/news/singapore/private-carpooling-services-still-demand-despite-ban) as part of Singapore's health safety measures against the Covid-19 pandemic. This has not stopped these communities from operating business-as-usual, albeit the adoption of anti-surveillance measures such as daily data erasure policy and carrying out transactions over private messaging.

Still, these private hitch telegram groups with sizes up to 60,000 members present valuable insights on ride-sharing demand in Singapore. These telegram groups serve as an alternative data source to ride-sharing in Singapore, when ride-sharing companies tend to keep such data confidential. In this post, I present how these insights can be distilled from the messy textual data of message conversations in a Telegram group.

### About the data

The data comprises of text messages extracted from a hitch Telegram supergroup created in July 2020. Messages within a period of a year was extracted, from  August 2020 to August 2021. Among the messages, hitch requests are of primary interest. A typical hitch request looks like this:

<figure>
    <img src="../assets/posts/2021-09-20-hitch-ridersip-demand/typical-hitch-request.png"/>
    <figcaption>A typical hitch request message.</figcaption>
</figure>

### Data Preparation

The semi-structured nature of the messages eases the data preparation process. Each hitch request message can be interpreted as a trip and using regex matching, an Origin-Destination (OD) pair can be constructed from each message. For simplicity, the datetime when the message was sent was treated as the datetime of the trip, as only a minority of these messages are scheduled requests. It is important to note that these trips represent _ridership demand_, as each message is not guaranteed to produce a fulfilled trip.

Having extracted the OD pairs, the next challenge is to translate them from natural language into a standardised geospatial format for analysis. To achieve this, [OneMap by the Singapore Land Authority](https://www.onemap.gov.sg/home/index.html) helpfully provides a search API that does exactly that. For simplicity, the first result is taken for each search query. Some messages consist of multiple possible pick-up locations. In these instances, the first pick-up location is treated as the origin.

For this analysis, the OD pairs were aggregated into 55 subzones according to the  Singapore 2019 Master Plan, provided on [data.gov.sg](https://data.gov.sg/dataset/master-plan-2019-subzone-boundary-no-sea). However, it is worth mentioning that the high granularity of the OD-pairs in our data potentially allows for deeper analysis if combined with other datasets such as [land use characteristics](https://data.gov.sg/dataset/master-plan-2019-land-use-layer).

### Analysis

Despite the ban on hitch telegram groups, these communities have still been very much active. Within a year, a total of 491,809 trip requests were made in this one Telegram community.

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridersip-demand/hitchdemand-yearmonthhour.png"/>
    <figcaption>Left: Ridership demand by month. Right: Ridership demand by hour.</figcaption>
</figure>

Hitch ridership demand peaks across the weekends and from the hourly plot, we can see that ridership demand peaks during the off-work rush hour though the same preference is not observed for the to-work early commute. In addition, the peak during the late night hours (11pm to 3am) reveals the dependence on private carpooling as an alternative transport mode after public transport services cease operations for the day.

Hitch ridership demand peaked at 76,084 in February 2021, primarily because of the Chinese New Year weekend (as seen below). However, the impact of soft lockdowns onto ridership demand is also visible such as the dip in demand in July (see below) as a result of [heightened safety measures between 22 July to 18 August 2021](https://www.gov.sg/article/as-of-20-july-2021-return-to-phase-2-heightened-alert-measures).

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridersip-demand/hitchdemand-febjuly21.png"/>
    <figcaption>Daily ridership demand for Feb'21 and July'21.</figcaption>
</figure>

---
This post adds to a collection of studies exploring Telegram groups as rich sources of urban insight for policy and planning. If you enjoyed this post, do check out these other posts:
- [Visualising the talk in Singapore's anti-vax communities](https://vnck.xyz/projects/visualising-singapore-anti-vax-communities)
- [An exploratory study on digital sharing communities](https://vnck.xyz/digital-sharing-communities-study/)
