---
title: "Fair value of the monthly public transport pass"
date: 2026-09-30
description: "Is the adult monthly pass better value after the latest fare hike?"
tags: [smallworld]
styles: [sg-fare-hikes/fares.css]
scripts: [sg-fare-hikes/fares.js]
permalink: /projects/sg-fare-hikes-vs-cpi
---

On 29 September, Singapore's Public Transport Council (PTC) announced its sixth consecutive annual fare increase.[^ptc2026] From 26 December, adult card fares will rise by 12 to 13 cents per trip (7.0% overall), while the monthly pass will stay at $122. Are fares rising faster than prices? Are the increases justified? Is the monthly pass worth buying?

_tldr_; since 2018 fares have risen faster than prices but no faster than earnings. The $122 pass pays off only for commuters in the office five days a week with a long commute.

The monthly pass has barely moved since 2018, while the trips a month needed to break even on a 10.2 km trip have fallen from 90 in 2018 to 61 from 2027.

## Fares against prices and earnings

The chart indexes public transport fares to 2015 (2015 = 100) against headline CPI, MAS core inflation (which excludes accommodation and private transport) and average monthly earnings. Fares come from SingStat's index of bus and train fares to 2025,[^singstat] and earnings from the Ministry of Manpower to 2024.[^mom]

<div class="fv" id="fv-fares"><noscript>This chart needs JavaScript. The figures are given in the text below.</noscript></div>

The official index stops at 2025, so we extended it to 2026 and 2027 using a fixed 10.2 km trip, the middle of LTA's fare table.[^fare-series]

Between 2015 and 2018 fares dropped 7% while headline prices stayed flat, after PTC lowered fares in 2016[^ptc2016] and introduced the pre-peak discount in 2017.[^ptc2017] From 2018 to 2025 they rose 33%, against 18% for headline CPI and 14% for core. Earnings rose 41% from 2015 to 2024, the latest year available, against 17% for fares; from 2018 the figures are 28% and 26%. The December increase will put fares 39% above 2015 levels, against about 20% for prices as of August 2026.

## How does PTC determine a fare increase?

PTC sets the maximum justifiable fare increase each year with a formula that weights core inflation at 0.5, wage growth at 0.4 and energy costs at 0.1, with allowances for network capacity and a productivity discount. This year core inflation was 1.2%, wages grew 4% and energy costs rose 21% between July 2025 and June 2026, which PTC attributes to the Middle East conflict. The formula returned 5.3%,[^formula] with core inflation contributing roughly a tenth of that and energy nearly 40%.

Deferred increases go into the following year's ceiling. In 2022 a 117% surge in energy costs pushed the formula to 13.5%, 11.7 points of it from energy, and in 2023 it returned 12.0%, 6.2 points from energy: 17.9 of the 25.5 points across the two years. PTC granted 2.9% and 7.0% and deferred 15.6 percentage points. Since 2024 it has granted more than the formula each year (6.0% against 3.3%, 5.0% against 1.5%, 7.0% against 5.3% this year), leaving 7.7 points deferred.[^deferral]

<div class="fv" id="fv-formula"></div>

Of this year's 7.0%, 5.3 points covers current costs and 1.7 points draws on the deferred stock. Deferring increases leaves operators short of what the formula says they need, and the government has covered part of that with additional subsidies announced alongside each review: about $300 million in 2023, $250 million in 2024 and more than $200 million for 2026.[^subsidies] Taxpayers have borne part of the cost of holding fares down.

By the formula's own terms, the increases are justified. This year's 7.0% sits under the 14.7% ceiling, continuing the trend of PTC granting less than the ceiling every year since 2022.

## Is the monthly pass fair value?

The Adult Monthly Travel Pass gives 30 days of unlimited travel on basic bus services, the MRT and the LRT (not express, premium or City Direct buses).[^amtc] The pass cost $120 in 2018, rose to $128 in December 2019 and was cut to $122 in December 2025,[^passprice] with PTC saying that the reduction would "mitigate the impact of the fare increase on heavy users of public transport".[^ptc2025] Over the same period the 10.2 km fare rose from $1.33 to $1.99 (after December 2026). We cover adult fares only; students, seniors, persons with disabilities and lower-wage workers have separate concession fares and passes.

The December increase is a set number of cents per distance band, 12 for trips up to 3.2 km and 13 beyond, not 7.0% on every fare.[^ptc2026] Since 2018 the shortest fare (up to 3.2 km) has risen from 77 to 140 cents (+82%), against +50% for a 10.2 km trip.

We model commutes of 30 minutes and one hour each way, converted to distance at 17 km/h door to door, including walking and waiting (about 8.5 km and 17 km). The 2024 Household Travel Survey puts the mean commute to work at 40 to 45 minutes,[^hts] between the two cases. Social travel is about three round trips a week, each 30 minutes one way. A month has 19 office days in a five-day week and 11 in a three-day week, taking into account public holidays, leave and sick days; a 30-day pass spans about 21 weekdays.

The chart compares 30 days of travel on a flat $122 pass with paying per trip. Even at the longest-distance fare, $2.57 ($2.70 after December),[^lta] the pass needs about 47 trips a month to break even (45 after December), and a commute on every working day gives only 38. The vertical lines mark a three-day office week (46 trips: 22 work, 24 social) and a five-day week (62 trips: 38 work, 24 social).

<div class="fv" id="fv-volume"></div>

The pass overtakes paying per trip at 57 trips a month for an hour's commute today and 54 after December, and at 67 and 63 for a 30-minute commute. A five-day week (62 trips) clears the hour-long thresholds but not the 30-minute ones; a three-day week (46) clears none. In office days, the break-even over 30 days is about 18 for an hour's commute and 22 for 30 minutes today (more than the 21 weekdays a pass spans), falling to 16 and 19 after December.

Per trip, a five-day week works out at $1.97 on the pass (62 trips a month), against average fares of $2.02 for an hour's commute and $1.82 for 30 minutes today. A three-day week works out at $2.65 (46 trips), against $1.98 and $1.82.

| Office week | Commute    | Today       | After December |
| ----------- | ---------- | ----------- | -------------- |
| Five days   | 1 hour     | 3% discount | 9% discount    |
| Five days   | 30 minutes | 8% premium  | 1% premium     |
| Three days  | 1 hour     | 34% premium | 26% premium    |
| Three days  | 30 minutes | 46% premium | 36% premium    |

### What about a cashback card?

But what about credit cards that offer cashback on public transport? The Citi SMRT card, our example, returns 5% on SimplyGo bus and train fares once $500 a month is spent on the card,[^citi] which we assume is met elsewhere, the most favourable case for the card. The table compares the pass with paying per trip, with and without the card, for each commute and office week.

<div class="fv" id="fv-calc"></div>

The card raises the break-even by about three trips a month and changes the verdict in only one case: a five-day week with an hour's commute today, where the pass beats full fares by about $3 a month but loses to the card by about $3. After December the pass wins that case by about $5 even against the card. With a 30-minute commute on five days, paying per trip is cheaper with or without the card; with it, by about $15 a month today and $7 after December. With three office days the card is cheaper than the pass by $30 to $43 a month in every case, and so is paying full fares.

## Who should buy the pass?

A five-day office week with an hour's commute saves 3% today, about $3 a month, and 9% after December. With a 30-minute commute the pass costs 8% more than paying per trip today and 1% more after December. For a three-day week it costs 26% to 46% more. The five-day margins are thin: one office day more or less changes the result in some of the cases.

An hour's commute breaks even at about 18 office days in the 30 days (16 after December) and a 30-minute commute at about 22 (19 after December). The pre-peak discount, worth about $10 a month over 19 office days, wipes out today's margin and most of December's.

The pass makes sense for a five-day office week with an hour's commute, saving $3 a month today and $11 after December. A five-day week with a 30-minute commute only comes close after December, and on a hybrid schedule paying per trip wins by a wide margin.

### How long will the discount last?

PTC sets the pass price separately from card fares at each review, and cut it in 2025 to shield heavy users from the fare increase. The only rise in the years covered here came in December 2019, when the pass went from $120 to $128 (+6.7%), in step with a 6.5% rise in the 10.2 km fare. By 2027 the 10.2 km fare is 34% higher than in 2020 and the pass is $6 cheaper. A pass that had kept its 2019 break-even of about 86 trips a month would cost about $172 in 2027.

<div class="fv" id="fv-passgap"></div>

A 6% rise in the pass would erase today's 3% discount for a five-day, one-hour week. The price has been held while PTC granted less than the ceiling, leaving 7.7 points deferred, and the government covered part of the difference. The deferred stock has shrunk by about 2.6 points a year since 2023 and runs out at the December 2029 review at that rate. The formula has run in five-year periods, 2018 to 2022 and 2023 to 2027, so the 2028 review is the first under new rules.[^period]

We expect the pass to stay at $122 through the December 2027 review and to rise for the first time between December 2028 and December 2029, by about 6% to roughly $129, in line with the 2019 rise and the 6.3% average increase granted from 2023 to 2026. This rests on a single observed rise. The advantage should grow through 2028 as card fares keep rising.

## Method and caveats

All prices are in Singapore dollars. Fares come from the LTA table in force since 27 December 2025, and earlier years subtract each December's published increase in cents for the relevant distance band. The fare for a calendar year is the level set the previous December, since increases take effect in the last week of the year. CPI values are annual averages of SingStat's 2024-based series, except 2026 (January to August), and earnings are nominal annual averages of monthly earnings. The official fares index seems to include the 2017 pre-peak discount, which standard fares do not (the index dips in 2018), so we compared the two series only from 2018.

The price that keeps the 2019 break-even multiplies the 10.2 km fare by 86.5, the monthly trips at which the pass broke even after the December 2019 increase. The model leaves out the pre-peak discount (see above) and the extra travel a pass may encourage, which would favour the pass.

[^ptc2026]: Public Transport Council. (2026, September 29). _Fare Review Exercise 2026_. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2026/. Overall adjustment of 7.0% against a ceiling of 14.7%, effective 26 December 2026, with adult monthly pass prices unchanged. The count of six consecutive increases runs from the 2021 review.

[^singstat]: Singapore Department of Statistics. (2026). _Consumer Price Index (CPI), 2024 as base year_, tables M213801 (annual), M213901 (additional indicators, including MAS core inflation) and M213751 (monthly). SingStat Table Builder. https://tablebuilder.singstat.gov.sg/table/TS/M213801; https://tablebuilder.singstat.gov.sg/table/TS/M213901; https://tablebuilder.singstat.gov.sg/table/TS/M213751. Retrieved 30 September 2026. Bus and train fares are available from 2015; 2026 values are the January to August average.

[^ptc2016]: Public Transport Council. (2016, October 27). _PTC reduces bus and rail fares_. https://www.ptc.gov.sg/media-centre/newsroom/ptc-reduces-bus-and-rail-fares/. Adult card fares lowered by 4.2%, with a further −1.5% carried forward.

[^ptc2017]: Public Transport Council. (2017, October 30). _Lower morning pre-peak rail fares islandwide, other public transport fares to be maintained for 2018_ [News release]. https://www.nas.gov.sg/archivesonline/data/pdfdoc/20171030004/PTC%20Press%20Release%20-%20FRE%202017.pdf. A quantum of −5.4%, of which −2.2% funded the pre-peak discount (up to 50 cents off rail fares for taps before 7.45am on weekdays) and −3.2% was rolled over.

[^lta]: Land Transport Authority. (2025). _Fares effective from 27 December 2025_ [Fare table]. https://www.lta.gov.sg/content/dam/ltagov/img/map/bus/fare-table.pdf. Adult card fares for basic services by distance band.

[^amtc]: SimplyGo. (n.d.). _Adult Monthly Travel Card_. https://simplygo.com.sg/concession-monthly-travel-cards/adult/adult-monthly-travel-card/. Pass price, coverage, eligibility and 30-day validity.

[^hts]: Ministry of Transport. (n.d.). _Weekday commute times based on LTA's latest Household Travel Survey, separated by household types and income_. https://www.mot.gov.sg/news-resources/newsroom/weekday-commute-times-based-on-lta-s-latest-household-travel-survey-separated-by-household-types-and-income/. Mean commute to work of 40 to 45 minutes in the 2024 survey.

[^citi]: Citibank Singapore. (n.d.). _Citi SMRT Card_. https://www.citibank.com.sg/credit-cards/cashback/smrt-credit-card. 5% on SimplyGo bus and train fares with $500 of monthly spend, and 0.3% below it.

[^fare-series]: Land Transport Authority. (2025). _Fares effective from 27 December 2025_ [Fare table]. https://www.lta.gov.sg/content/dam/ltagov/img/map/bus/fare-table.pdf; combined with the cent increases by distance band in Land Transport Guru. (2018–2026). _Public transport fare review_ [Annual summaries of the fare review exercises]. https://landtransportguru.net/public-transport-fare-review-2018/, and the equivalent page for each year to 2026.

[^formula]: Public Transport Council. (2026, September 29). _Fare Review Exercise 2026_. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2026/; Land Transport Guru. (2026). _Public transport fare review 2026_. https://landtransportguru.net/public-transport-fare-review-2026/. PTC gives the formula result (5.3%) and the energy price increase; Land Transport Guru gives the inputs and their weighted contributions.

[^mom]: Ministry of Manpower. (n.d.). _Average monthly earnings, by sex_ [Dataset]. data.gov.sg. https://data.gov.sg/datasets/d_16dfef0280cd2c09f95dcb52c6a7a006/view. Annual average monthly earnings of all employees, 2015 to 2024, in nominal dollars.

[^ptc2025]: Public Transport Council. (2025, October 14). _Fare Review Exercise 2025_. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2025/. Overall adjustment of 5.0% against a ceiling of 14.4%, with adult monthly passes reduced by $6 from 27 December 2025 "to mitigate the impact of the fare increase on heavy users of public transport".

[^passprice]: Land Transport Guru. (2019–2026). _Public transport fare review_ [Annual summaries of the fare review exercises]. https://landtransportguru.net/public-transport-fare-review-2019/ (pass from $120 to $128); https://landtransportguru.net/public-transport-fare-review-2023/ and https://landtransportguru.net/public-transport-fare-review-2024/ (unchanged at $128); https://landtransportguru.net/public-transport-fare-review-2026/ (unchanged at $122). The $6 reduction in 2025 is from Public Transport Council (2025) above.

[^deferral]: Land Transport Guru. (2022–2026). _Public transport fare review_. https://landtransportguru.net/public-transport-fare-review-2022/; https://landtransportguru.net/public-transport-fare-review-2023/; https://landtransportguru.net/public-transport-fare-review-2024/; https://landtransportguru.net/public-transport-fare-review-2026/; Public Transport Council. (2025). _Fare Review Exercise 2025_. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2025/; Public Transport Council. (2026). _Fare Review Exercise 2026_. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2026/. The source for each year's formula result, ceiling, amount granted and amount deferred.

[^subsidies]: Land Transport Guru. (2023). _Public transport fare review 2023_. https://landtransportguru.net/public-transport-fare-review-2023/ (additional subsidy of about $300 million in 2023); Land Transport Guru. (2024). _Public transport fare review 2024_. https://landtransportguru.net/public-transport-fare-review-2024/ (about $250 million); Public Transport Council. (2025). _Fare Review Exercise 2025_. https://www.ptc.gov.sg/media-centre/newsroom/fare-review-exercise-2025/ (more than $200 million in 2026).

[^period]: Public Transport Council. (2023). _2023 Fare Adjustment Formula & Mechanism Review_. https://www.ptc.gov.sg/media-centre/newsroom/2023-fare-adjustment-formula-mechanism-review/. The formula for 2023 to 2027. The 2018 to 2022 period is from Land Transport Guru. (2019). _Public transport fare review 2019_. https://landtransportguru.net/public-transport-fare-review-2019/.
