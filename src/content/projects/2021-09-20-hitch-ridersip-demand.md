---
title: "Deriving ridership demand from online hitch communities"
date: 2021-09-20
tags: [smallworld, codespace]
description: "Deriving hitch ridership demand from a Singapore-based telegram group."
image: /assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-avgdistsubzone.webp
permalink: /projects/deriving-hitch-ridership-demand
---

Early 2019, a carpooling telegram group made headlines as a competitive service to the dominant ride-sharing services in Singapore.[^toh] The next year, such groups were banned as part of Singapore's health safety measures against the Covid-19 pandemic.[^devaraj] However, this has not stopped these communities from operating business-as-usual, albeit the adoption of anti-surveillance measures such as daily data erasure policy and carrying out transactions over private messaging. The supposed cheaper rates that these platforms offer continues to generate demand for private carpooling and activity within these unofficial communities.

Hence, these private hitch telegram groups generate an unaccounted demand for private carpooling that is not insignificant, with some communities having sizes of up to 60,000 members. These communities offer potential insight on ride-sharing demand in Singapore. In addition, these telegram groups serve as a potential alternative open mobility data source, in an environment where ride-sharing companies might be less than willing to share their trip data. In this article, I present how these insights can be distilled from the messy textual data of message conversations in a Telegram group.

_tldr_; one private Telegram group made 491,809 hitch requests in a year, with demand peaking on weekends, from 5pm to 7pm and late at night, and with heartland estates, Changi Airport and Tuas standing out on the map.

## What the requests show

Despite the ban on hitch telegram groups, these communities have still been very much active. Within a year, a total of 491,809 trip requests were made in this one Telegram community.

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/hitchdemand-yearmonthhour.webp" alt="Three line charts of hitch demand. By month, requests rise from about 2,000 in August 2020 to a peak of about 76,000 in February 2021, then fall to about 31,000 by August 2021. By day of the week, demand is highest on Saturday (about 92,000) and lowest on Tuesday (about 52,000). By hour, it peaks at 6pm (about 39,000) and 10pm (about 35,000) and is lowest at 5am (about 6,500)."/>
    <figcaption>Figure 1. Left: Hitch demand by month. Middle: Hitch demand by day of the week. Right: Hitch demand by hour.</figcaption>
</figure>

Hitch ridership demand peaks across the weekends and during the off-work rush hour (5pm to 7pm) though a same preference is not observed for early commute (5am to 7am). In addition, the peak during the late night hours (11pm to 3am) reveals the dependence on private carpooling as an alternative transport mode after public transport services cease operations for the day.

Hitch ridership demand peaked at 76,084 in February 2021, primarily because of the Chinese New Year weekend (as seen below). However, the impact of soft lockdowns onto ridership demand is also visible such as the dip in demand in July (see below) as a result of heightened safety measures between 22 July to 18 August 2021.[^heightened-alert]

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/hitchdemand-febjuly21.webp" alt="Two line charts of daily hitch demand. In February 2021 it peaks at about 6,400 on Sunday 14 February, the Chinese New Year weekend. In July 2021 it stays between about 800 and 1,700 a day and falls after the restrictions of 22 July."/>
    <figcaption>Figure 2. Daily hitch demand for Feb'21 and July'21.</figcaption>
</figure>

### Where the requests come from

The geospatial visualisations below were produced in QGIS. The following two figures depict the aggregated counts of origins and destinations by subzone level.

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-orgnsubzone.webp" alt="Map of Singapore shaded by the number of hitch requests originating in each subzone, in five classes from 0 to 100 (red) up to 10,000 to 17,576 (dark green). A handful of subzones in the north, north-east, east and west reach the top class."/>
    <figcaption>Figure 3. Origin counts by subzone.</figcaption>
</figure>

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-destsubzone.webp" alt="Map of Singapore shaded by the number of hitch requests ending in each subzone, in five classes from low counts to high counts."/>
    <figcaption>Figure 4. Destination counts by subzone.</figcaption>
</figure>

From the figures above, we can see that residential districts such as the bedok region and ang mo kio regions are both strong attractors and generators of ridesharing trips. In addition, Changi Airport on the extreme east of the island and Tuas on the extreme right are also strong attractors of trips.

Alternatively, the origin and destination counts can be aggregated into a grid of 400m wide hexagon for higher granularity, as seen in the following two figures. However, in this instance, the use of centroids as placeholder locations for certain OD trips distorts visualisation using this approach, though this could be resolved through a smoothing function over hexagons belonging to the same planning area.

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-orgnhex.webp" alt="Map of Singapore in a grid of 400 m hexagons shaded by the number of hitch requests originating in each hexagon."/>
    <figcaption>Figure 5. Origin counts by 400 m hexagon.</figcaption>
</figure>

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-desthex.webp" alt="Map of Singapore in a grid of 400 m hexagons shaded by the number of hitch requests ending in each hexagon."/>
    <figcaption>Figure 6. Destination counts by 400 m hexagon.</figcaption>
</figure>

We can also visualise the average trip distance from origin to destination. As seen below, trips that originate from the edges of Singapore such as Changi, Tuas or Woodlands have on average larger trip distane than trips originating from heartlands such as the Ang Mo Kio and Bishan region.

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-avgdistsubzone.webp" alt="Map of Singapore shaded by the average distance of hitch trips starting in each subzone, from short to long. Subzones at the edges of the island tend to have longer average trips."/>
    <figcaption>Figure 7. Average trip distance (km) from origin to destination, by subzone.</figcaption>
</figure>

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/sg-hitch-avgdisthex.webp" alt="Map of Singapore in a grid of 400 m hexagons shaded by the average distance of hitch trips from 0.9 to 32.8 km. Short trips (red) cluster in the central and east-central heartlands, and long trips (dark green) in the north, west and east edges."/>
    <figcaption>Figure 8. Average trip distance (km) from origin to destination, by 400 m hexagon.</figcaption>
</figure>

## What the requests suggest

Interestingly enough, the Central Business District performs average as a trip generator and attractor for private carpooling. This could hint towards the population demographic that makes use of these unofficial private ridesharing services as opposed to the established ridesharing services.

## Method and caveats

### The data

Our data was collected from a private hitch telegram supergroup through the Telegram client which allows exporting of the message history of public groups in JSON format. The message history between August 2020 to August 2021 was extracted, providing a year’s worth of data. Among the messages, hitch requests are of primary interest. Below depicts a typical hitch request.

<figure>
    <img src="../../assets/posts/2021-09-20-hitch-ridership-demand/typical-hitch-request.webp" alt="A Telegram message reading 'hitcher looking for driver', with pick up: sentosa, drop off: tanah merah, date: today, time: now, pax: 1."/>
    <figcaption>Figure 9. A typical hitch request message.</figcaption>
</figure>

### From messages to locations

The semi-structured nature of a hitch request eases the data standardisation process. Each hitch request can be interpreted as a trip. Using regex matching, an Origin-Destination (OD) pair can be constructed from the textual content of the hitch request. For simplicity, the date and time when the hitch request was made is treated as the date and time of the trip, given that only a minority of the hitch requests are a scheduled request. It is important to note that these trips represent ridership demand, as each hitch request is not guaranteed to produce a fulfilled trip.

Having extracted the OD pairs, the location names of the pick-up and drop-off exist as unstructured natural text data and thus, needs to be transformed into a standardised geospatial format for analysis. Three different approaches were used for this process.

1. **Postal code extraction**

    Some hitch request messages include the postal code of the pick-up and drop-off locations. Using a simple regex filter, these 6-digit postal codes can be extracted and later used in the OneMap search query for a more successful result.

2. **OneMap API**

    OneMap[^onemap] by the Singapore Land Authority (SLA) provides a Search API for retrieving geospatial information given a text query or postal code. For simplicity, the first result is taken for each search query. This step also serves as a filter for invalid location names and postal codes. While Google Map's Place API[^places-api] appears to be more robust at handling natural language text queries, the OneMap Search API has the benefit of being free of charge and built for Singapore’s context.

3. **Fuzzy matching of planning area names**

    Some location names might not return a successful result with OneMap’s Search API due to human errors such as spelling mistakes. To account for this, fuzzy matching can be used to compare location names with the list of planning areas in Singapore. The python package TheFuzz was used which employs the Levenshtein distance statistic to calculate the difference between two strings. A threshold score of 90 was set for acceptable results using this method. In these match cases, the centroid of the planning area is used to provide the geospatial information for that location, at the disadvantage of reduced granularity of the data.

As an additional note, some hitch requests consist of multiple possible pick-up or drop-off locations. In these instances, the first location is treated as the origin or destination.

For this analysis, the OD pairs were aggregated into subzones according to the Singapore 2019 Master Plan.[^master-plan] However, it is worth mentioning that the high granularity of the OD pairs in our data potentially allows for deeper analysis on building-level, by combining with other datasets such as land use characteristics or residential housing data.

---
This post adds to a collection of studies exploring Telegram groups as rich sources of urban insight for policy and planning. If you enjoyed this post, do check out these other posts:

- [Visualising the talk in Singapore's anti-vax communities](/projects/visualising-singapore-anti-vax-communities)
- [An exploratory study on digital sharing communities](/projects/studying-online-communities)

[^toh]: Toh, T. W. (2019, March 12). *New carpooling service in Telegram chat group draws 1,300 members in 2 weeks*. The Straits Times. https://www.straitstimes.com/singapore/transport/new-carpooling-service-in-telegram-chat-group-draws-1300-members-in-2-weeks

[^devaraj]: Devaraj. (2021). *Private carpooling services still in demand despite ban*. The New Paper. https://www.tnp.sg/news/singapore/private-carpooling-services-still-demand-despite-ban. The address no longer leads to the article, and the title is taken from it. The original citation gave no initials.

[^heightened-alert]: gov.sg. (2021, July 20). *As of 20 July 2021, return to Phase 2 (Heightened Alert) measures*. https://www.gov.sg/article/as-of-20-july-2021-return-to-phase-2-heightened-alert-measures. The page could not be retrieved when checked, so the title is taken from the address.

[^onemap]: Singapore Land Authority. (n.d.). *OneMap: Singapore's authoritative national map*. https://www.onemap.gov.sg/home/index.html

[^places-api]: Google. (n.d.). *Places API overview*. https://developers.google.com/maps/documentation/places/web-service/overview. The page now documents the newer Places API.

[^master-plan]: Urban Redevelopment Authority. (2019). *Master Plan 2019 subzone boundary (no sea)* [Data set]. data.gov.sg. https://data.gov.sg/dataset/master-plan-2019-subzone-boundary-no-sea
