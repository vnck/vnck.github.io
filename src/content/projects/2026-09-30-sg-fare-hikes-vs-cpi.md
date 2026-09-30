---
title: "Fair value of the public commute monthly pass"
date: 2026-09-30
tags: [smallworld]
description: "Is the adult monthly pass more worth than ever with the latest fare hike?"
permalink: /projects/sg-fare-hikes-vs-cpi
---

<link rel="stylesheet" href="/sg-fare-hikes/fares.css?v=27">
<script src="/sg-fare-hikes/fares.js?v=27" defer></script>

On 29 September the Public Transport Council announced its sixth consecutive annual fare increase.[^ptc2026] From 26 December, adult card fares rise by 12 to 13 cents per trip (7.0% overall), while the monthly pass stays at $122. Every round of increases prompts the same questions. Are fares really rising faster than prices, or does it only feel that way? Who decides by how much, and by what rule? And for those of us who tap in nearly every day, is the monthly pass now worth buying?

_tldr_; fares have risen faster than prices, and the pass is fair value for people who travel often, beyond their daily commute.

Measured from 2015, bus and train fares are up 24% against 19% for consumer prices to 2025, while the price of the pass has barely moved since 2018 ($120 then, $122 now). We can calculate that the pass pays off from roughly 13 to 16 trips a week; a commute on five days is 10 trips a week, so a five-day office week with regular social trips reaches that range while a three-day office week does not.

## Fares against prices

The chart normalises bus and train fares to 2015 prices (2015 = 100) and compares them with two benchmarks: headline CPI, and MAS core inflation, which excludes accommodation and private transport. The fares series is SingStat's index of bus and train fares to 2025.[^singstat]

<div class="fv" id="fv-fares"><noscript>This chart needs JavaScript. The figures are given in the text below.</noscript></div>

The official index does not yet cover 2026 or 2027, so the last two points follow a fixed 10.2 km trip, in the middle of the fare table, priced from the LTA fare table and each published increase.[^fare-series] Fares depend on distance, so a price series has to hold the trip constant; an average of what commuters pay would also move with trip length. Over 2018 to 2025 this fare stays within 0.6 index points of the official index in every year (+33.1% against +33.2% cumulatively), so the two series are joined at 2018.

The comparison turns on the base year: from 2018, fares rose 33% by 2025, against 18% for headline CPI and 14% for core, but 2018 is a trough. The fare formula (described below) returned negative results in 2016 and 2017, and the council passed them on. Fares were cut by 4.2% in December 2016.[^ptc2016] For 2017 the permitted adjustment was −5.4%; 2.2 percentage points were used for cheaper pre-7.45am rail fares from December 2017, and the remaining 3.2 were carried into the 2018 review.[^ptc2017] Fares consequently fell 7% between 2015 and 2018 while prices were flat. From 2015 the comparison is 24% against 19% by 2025. After the December increase, a 10.2 km fare will be about 39% above its 2015 level, against roughly 20% for prices to August 2026.

## How does the Public Transport Council determine a fare increase?

A formula sets the maximum increase, and inflation is only one input. Core inflation carries half the weight, wage growth 40% and an energy cost index 10%. The formula also adds an allowance for network capacity and deducts a small productivity discount. This year core inflation was 1.2%, wages grew 4%, and energy costs rose 21% between July 2025 and June 2026, an increase the council attributes to the conflict in the Middle East. Weighted, these contribute 0.6, 1.6 and 2.1 percentage points. With the capacity allowance (+1.1) and the productivity discount (−0.1), the formula returns 5.3%.[^formula] Core inflation therefore accounts for about a tenth of the result and energy for nearly 40%.

The formula result is only a starting point, because the council may also allow increases it deferred in earlier years. This is how the ceiling can far exceed the formula: the ceiling of 7.0% in 2019 became 22.6% in 2023 through deferrals over four years. In 2020 the formula returned 4.4%, but the council granted none of it because of COVID-19. In 2021 a formula result of −2.2% was netted against that 4.4%, leaving 2.2%, which was granted in full. In 2022 the surge in energy prices lifted the formula result to 13.5%, of which 2.9% was granted, so 10.6 percentage points were deferred. In 2023 a formula result of 12.0% was added to those 10.6 points, giving a ceiling of 22.6%, of which 7.0% was granted.

Since 2022 the council has granted less than the ceiling every year: in 2024 the ceiling was 18.9% and 6.0% was granted, and in 2025 it was 14.4% against 5.0%.[^reviews] For 2026 the 9.4 percentage points still deferred were added to the formula's 5.3, giving a ceiling of 14.7%. The council granted 7.0%, leaving 7.7 points deferred. Components are shown only where the sources give them, and the 2022 formula result is inferred from its ceiling, since nothing was deferred into that year.

<div class="fv" id="fv-formula"></div>

The government subsidises operators to offset part of the shortfall: about $300 million in 2023, $250 million in 2024 and more than $200 million after the 2025 review.[^reviews] Part of the cost of holding fares down is therefore borne by taxpayers, and the deferred amount can be claimed in later reviews.

The granted percentage is then converted into a flat number of cents per trip. The December 2026 increase is 12 cents for trips up to 3.2 km and 13 cents beyond.[^ptc2026] Because the increase is nearly the same in cents at every distance, it is proportionally larger for short trips: since 2018 the shortest fare (up to 3.2 km) has risen from 77 to 140 cents (+82%), against +50% for a 10.2 km trip.

## Is the monthly pass fair value?

The Adult Monthly Travel Pass gives 30 days of unlimited travel on basic bus services, the MRT and the LRT (not express, premium or City Direct buses) to citizens and permanent residents.[^amtc] It cost $120 in 2018, rose to $128 in December 2019 and was cut to $122 in December 2025.[^reviews] Over the same period the 10.2 km fare rose from $1.33 to $1.99 (after December 2026), so the number of trips needed to break even fell from 21 a week in 2018 to 14 from 2027.

A trip here means one one-way journey, so a one-hour commute is two one-hour trips a day. The most expensive trip, anything over 40.2 km, costs $2.57 ($2.70 after December).[^lta] Dividing the pass's $122 (for 30 days) by those fares gives about 11 trips a week (10.5 after December) as the minimum for break-even, however long each trip is. A commute on every working day is 10 trips a week, which is below that minimum, so the pass pays only if there is non-work travel as well. The calculations below therefore assume about three social round trips a week (twelve a month), each 30 minutes one way.

The chart plots the cost of 30 days of travel against the number of trips a week. The pass costs a flat $122, whereas the cost of paying per trip rises with each trip at the fare for the chosen trip length. The vertical lines mark a three-day office week (6 work and 6 social trips, 12 in all) and a five-day week (10 work and 6 social, 16 in all).

<div class="fv" id="fv-volume"></div>

For a one-hour trip the pass overtakes paying per trip at 13.2 trips a week today and 12.5 after December; for a 30-minute trip the thresholds are 15.6 and 14.6. A five-day week produces 16 trips, which is above the threshold in all four cases, though only narrowly for 30-minute trips today. A three-day week produces 12 trips, below every threshold, so the pass does not pay on a hybrid schedule at any of these fares. The number of office days therefore matters more than the length of the commute.

Put as a price, the pass is a discount or a premium on the fares it replaces. On a five-day week the pass costs $1.79 a trip (68 trips a month), against an average fare of $2.03 for hour-long trips and $1.82 for 30-minute trips: a discount of 12% and 1% today, widening to 17% and 8% after December. On a three-day week the 50 trips cost $2.44 each on the pass, against an average of $1.99 or $1.82, a premium of 23% and 34% today, narrowing to 15% and 25% after December.

### What about a cashback card?

One might wonder if credit card rewards are enough to make the pass unwarranted. The Citi SMRT card returns 5% on SimplyGo bus and train fares, provided at least $500 a month is spent on the card in total, with rebates capped at $600 a year.[^citi] The calculations assume the spending threshold is met elsewhere, which is the most favourable case for the card. The table compares the pass with paying per trip, with and without the card, for a 30-minute and a one-hour commute in a three-day and a five-day office week.

<div class="fv" id="fv-calc"></div>

The card makes a difference only at the margin. With five office days and a one-hour commute the pass is still cheaper than the card, by about $9 a month today and $18 after December. With a 30-minute commute the card is cheaper by about $4 today, but after December the pass is cheaper by about $4. With three office days the card is cheaper by $21 to $36 a month in every case. Without the card, the pass would already be cheaper for five office days and a 30-minute commute today, so the card changes the verdict in only one of the four cases, and even that reverses after December's fare increase.

## Should you get the pass?

It depends on how often you travel rather than how far. Card fares rise according to the formula, but the pass price is decided separately in each review, and in the last two reviews it has moved the other way: it was cut to $122 in 2025 and held there in 2026 while card fares rose. Each increase therefore lowers the break-even, from 21 trips a week in 2018 to 14 in 2027. For a five-day office week with social trips on top, the pass is a discount of 12% to 17% on an hour's commute; for a three-day week it is a premium of 15% to 34% that the December increase narrows but does not close. Five days with a 30-minute commute sits close to break-even today, at a 1% discount, and tips in the pass's favour after December. A cashback card moves the threshold by less than one trip a week, enough to matter only in that close case. The pass is attractive because its price has been held, and that is a policy choice: 7.7 percentage points of deferred increase remain available to later reviews, and a 6% rise would remove almost half of today's 12% discount for a five-day, one-hour week.

### When might the price rise?

The pass price has risen only once in the years covered here. In December 2019 it went from $120 to $128 (+6.7%), in step with a 6.5% rise in the 10.2 km fare, so the break-even held at about 86 trips a month. It then stayed at $128 through the four fare increases of 2021 to 2024, was cut to $122 in 2025 and held in 2026, while the 10.2 km fare rose 34% between 2020 and 2027.[^reviews] A pass that had kept its 2019 break-even would cost about $172 in 2027.

<div class="fv" id="fv-passgap"></div>

The pass has been held or cut during the same period in which the council has granted less than the formula allowed and the government has met part of the difference, so a rise looks unlikely while 7.7 points of increase remain deferred. That amount has fallen by about 2.6 points a year since 2023, from 15.6 to 7.7, which would exhaust it at the December 2029 review. The alternative is December 2028. The formula has been set for five-year periods, 2018 to 2022 and then 2023 to 2027, so if that pattern holds the 2028 review would be the first under new rules.[^reviews] My estimate is that the pass stays at $122 through the December 2027 review, and that the first increase comes between December 2028 and December 2029, at about 6%, or roughly $129. That is in line with the 2019 rise and with the 6.3% average increase granted from 2023 to 2026. It rests on a single observed rise, so it is a judgement rather than a forecast with a margin of error. Ending the subsidies before the deferred amount is used up would remove the main reason the price has been held and bring the first increase forward. Closing the gap in full would take a 41% rise, or at least six increases of about 6%, since fares keep rising as well.

## Method and caveats

All prices are in Singapore dollars. Fares are taken from the LTA table in force since 27 December 2025; earlier years subtract each December's published increase in cents for the relevant distance band. The fare for a calendar year is the level set the previous December, because increases take effect in the last week of the year. CPI values are annual averages of SingStat's 2024-based series, except 2026 (January to August). The official fares index seems to include the 2017 pre-peak rail discount, which standard fares do not (it dips in 2018), so the two series are compared only from 2018.

Minutes are converted to kilometres at an assumed door-to-door average of 17 km/h, including walking and waiting, so a 30-minute trip is about 8.5 km and a one-hour trip about 17 km. The 2024 Household Travel Survey reports a mean commute to work of 40 to 45 minutes,[^hts] which the two cases bracket. The pass covers 30 days, so weekly figures divide the 30-day total by 30/7 (about 4.3). A month has 22 office days in a five-day week and 13 in a three-day week. The price that keeps the 2019 break-even multiplies the 10.2 km fare by 86.5, the trips a month at which the pass broke even right after the December 2019 increase. The pre-7.45am rail discount, worth up to 50 cents on a morning MRT trip (about $11 a month over 22 office days), is not included; it would narrow the pass's advantage for anyone who qualifies.[^ptc2017]

[^ptc2026]: Public Transport Council. (2026, September 29). *Fare Review Exercise 2026*. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2026/. Overall adjustment of 7.0% against a ceiling of 14.7%, effective 26 December 2026, with adult monthly pass prices unchanged.

[^singstat]: Singapore Department of Statistics. (2026). *Consumer Price Index (CPI), 2024 as base year*, tables M213801 (annual), M213901 (additional indicators, including MAS core inflation) and M213751 (monthly). SingStat Table Builder. https://tablebuilder.singstat.gov.sg/table/TS/M213801; https://tablebuilder.singstat.gov.sg/table/TS/M213901; https://tablebuilder.singstat.gov.sg/table/TS/M213751. Retrieved 30 September 2026. Bus and train fares are available from 2015; 2026 values are the January to August average.

[^ptc2016]: Public Transport Council. (2016, October 27). *PTC reduces bus and rail fares*. https://www.ptc.gov.sg/media-centre/newsroom/ptc-reduces-bus-and-rail-fares/. Adult card fares lowered by 4.2%, with a further −1.5% carried forward.

[^ptc2017]: Public Transport Council. (2017, October 30). *Lower morning pre-peak rail fares islandwide, other public transport fares to be maintained for 2018* [News release]. https://www.nas.gov.sg/archivesonline/data/pdfdoc/20171030004/PTC%20Press%20Release%20-%20FRE%202017.pdf. A quantum of −5.4%, of which −2.2% funded the pre-peak discount (up to 50 cents off rail fares for taps before 7.45am on weekdays) and −3.2% was rolled over.

[^lta]: Land Transport Authority. (2025). *Fares effective from 27 December 2025* [Fare table]. https://www.lta.gov.sg/content/dam/ltagov/img/map/bus/fare-table.pdf. Adult card fares for basic services by distance band.

[^amtc]: SimplyGo. (n.d.). *Adult Monthly Travel Card*. https://simplygo.com.sg/concession-monthly-travel-cards/adult/adult-monthly-travel-card/. Pass price, coverage and eligibility. The 30-day validity comes from search summaries of TransitLink's page, which was unavailable when checked.

[^hts]: Ministry of Transport. (n.d.). *Weekday commute times based on LTA's latest Household Travel Survey, separated by household types and income*. https://www.mot.gov.sg/news-resources/newsroom/weekday-commute-times-based-on-lta-s-latest-household-travel-survey-separated-by-household-types-and-income/. Mean commute to work of 40 to 45 minutes in the 2024 survey.

[^citi]: Citibank Singapore. (n.d.). *Citi SMRT Card*. https://www.citibank.com.sg/credit-cards/cashback/smrt-credit-card. 5% on SimplyGo bus and train fares with $500 of monthly spend, and 0.3% below it. The $600 annual cap comes from search summaries of the card's rewards programme terms.

[^fare-series]: Land Transport Authority. (2025). *Fares effective from 27 December 2025* [Fare table]. https://www.lta.gov.sg/content/dam/ltagov/img/map/bus/fare-table.pdf; combined with the cent increases by distance band in Land Transport Guru. (2018–2026). *Public transport fare review* [Annual summaries of the fare review exercises]. https://landtransportguru.net/public-transport-fare-review-2018/, and the equivalent page for each year to 2026.

[^formula]: Public Transport Council. (2026, September 29). *Fare Review Exercise 2026*. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2026/; Land Transport Guru. (2026). *Public transport fare review 2026*. https://landtransportguru.net/public-transport-fare-review-2026/. The council gives the formula result (5.3%) and the energy price increase; Land Transport Guru gives the inputs and their weighted contributions.

[^reviews]: Land Transport Guru. (2018–2026). *Public transport fare review* [Annual summaries of the fare review exercises]. https://landtransportguru.net/public-transport-fare-review-2018/; https://landtransportguru.net/public-transport-fare-review-2019/; https://landtransportguru.net/public-transport-fare-review-2020/; https://landtransportguru.net/public-transport-fare-review-2021/; https://landtransportguru.net/public-transport-fare-review-2022/; https://landtransportguru.net/public-transport-fare-review-2023/; https://landtransportguru.net/public-transport-fare-review-2024/; https://landtransportguru.net/public-transport-fare-review-2026/; Public Transport Council. (2025). *Fare Review Exercise 2025*. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2025/. The source for each year's formula result, ceiling, amount granted and amount deferred, the government subsidies, and the pass price history.
