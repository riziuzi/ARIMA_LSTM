# Research A: Land, transport and labour costs vs distance from Hyderabad

Prepared 8 Nov 2026. In scope: (1) farmland purchase prices vs distance, (2) lease rents, (3) the costs of buying land, (4) transport and owner-travel costs, (5) market wages. Out of scope because other agents cover them: crop prices, yields and inputs; greenhouse, borewell and fencing; government schemes, laws and minimum wages; loans and interest rates.

**How to read this**
- **Distance d** is the approximate road distance in km from **Lakdikapul**, in central Hyderabad. I estimated these from standard highway distances (±10%); they do **not** come from a cited source. Check any specific village on a map.
- **Basis tags:** **S** = taken directly from a source. **D** = worked out by arithmetic from sourced numbers. **E** = my estimate because I found no source. Replace E values when better data turns up.
- **Land prices are mostly asking prices from listings** (1acre.in and others), not completed sales. This session's network blocked direct page fetches, so I read the figures from search-engine summaries of each URL. Open the URL before relying on any single figure. Listing pages are snapshots and are mostly undated; some carry a ">18 months old" flag.
- **Search limit:** the shared web-search budget ran out near the end, so a few items are marked "not found" (see section d).

---

## a) Model defaults

| # | Parameter | Suggested default | Realistic range | Unit | Basis | Source URL(s) |
|---|---|---|---|---|---|---|
| L1 | Farmland **asking** price vs distance | **P(d) = 0.30 + 7.2·e^(−0.0365·d)**. That gives: 30 km ≈ 2.7; 50 km ≈ 1.46; 75 km ≈ 0.77; 100 km ≈ 0.49; 125 km ≈ 0.38; 150 km ≈ 0.33 | 0.5× to 2× P(d), depending on village, road frontage, water and title | ₹ crore/acre | D: my curve fitted to the representative per-mandal values in table b (method in section 1) | Table b |
| L2 | Direction multiplier applied to P(d) | West/south-west (Moinabad–Chevella–Vikarabad–Tandur; Patancheru–Sangareddy–Zaheerabad): **×1.3**. South-east Future City belt (Kandukur–Kadthal–Yacharam): **×1.15**. NH44 south: **×1.0**. North (NH44 north, Rajiv Rahadari): **×0.9**. East/north-east (NH65 east, NH163): **×0.85**. Sagar road beyond Yacharam: **×0.75** | ±0.2 | multiplier | D | Table b |
| L3 | Gap between asking price and actual deal | 10–15% below asking | 0–30% | % | E. No source found. The market was reported soft in 2025 (distress sales, plot-sales slowdown) | https://telanganatoday.com/wave-of-distress-sale-sweeps-through-telanganas-agricultural-lands ; https://assets.thehansindia.com/business/hyderabads-plotting-market-slumps-amid-sales-slowdown-1003883 |
| L4 | Government **minimum** agricultural market value (floor used for registration), in force from **5 Jun 2026** | Rural ₹2.75 L; municipal-corporation limits ₹5 L; HMDA area ₹10 L; ORR influence zone ₹15 L | n/a | ₹/acre | S | https://www.deccanchronicle.com/southern-states/telangana/revised-market-values-of-lands-plots-flats-from-today-1961371 ; https://www.deccanlive.com/2026/06/05/telangana-land-prices-rates-range-from-%E2%82%B92-75-lakh-to-%E2%82%B935-crore-per-acre/ ; https://www.telanganatribune.com/telangana-revises-property-registration-values-statewide-from-june-5-2026/ |
| L5 | **Lease rent** (cash, 1-year, paid in advance) | **₹20,000** | ₹15,000–35,000. Statewide survey average ₹14,936; peaks ₹40,000–53,000 | ₹/acre/yr | S | https://thesouthfirst.com/telangana/tenant-farmers-in-telangana-struggle-amid-soaring-lease-costs-policy-gaps-survey/ ; https://telanganatoday.com/tenant-farmers-face-tough-future-in-telangana ; https://telanganatoday.com/tenant-farmers-in-erstwhile-karimnagar-yet-to-receive-rythu-bharosa-assistance |
| L6 | **Total registration cost** (stamp duty 5.5% + transfer duty 1.5% + registration fee 0.5%) | **7.5%** of the higher of the price paid or the government value | 7.5–8% including the mutation fee | % | S | https://realtyhunting.com/stamp-duty-in-telangana ; https://mcrhrdi.gov.in/2026/group1/week4/Rajiv%20Gandhi%20Hanumanthu,%20IAS%20MCRHRDI%20-%20R&S%2012.02.2026.pdf |
| L7 | Broker commission | 1–2% | 0.5–2% | % of price | E: not found | n/a |
| L8 | Legal, title and survey checks (title search, encumbrance, survey/demarcation) | ₹30,000 | ₹15,000–75,000 per purchase | ₹ | E: not found | n/a |
| T1 | **Hired Tata Ace** (~0.75 t) for an out-of-city trip | **₹30 per one-way km** (≈ ₹15 per km actually driven, because the empty return is charged) | ₹27–33 per one-way km; ₹14–18 per km driven | ₹/km | S/D | https://porter.in/rent-mini-trucks-in-hyderabad ; https://transrentals.in/mini-truck-rental/hyderabad/lb-nagar ; https://truckguru.co.in/bangalore-to-hyderabad-transport-company ; https://mover.delivery/blog/tata-ace-on-rent |
| T2 | Tata Ace minimum charge | ₹1,500 per out-of-city job (₹1,499 day package with driver and fuel, up to 100 km) | ₹1,500–1,711. Porter's in-city base fare is ₹200–218 (includes 2 km and 70 min waiting) | ₹/trip | S | https://transrentals.in/mini-truck-rental/hyderabad/lb-nagar ; https://porter.in/trucks/tata-ace-in-hyderabad ; https://porter.in/rent-mini-trucks-in-hyderabad/tata-ace |
| T3 | **Hired 14 ft truck** (~2.5–4 t) | **₹38 per one-way km** | ₹36.5–40.5 | ₹/km | S/D: long-haul quotes, tolls extra | https://truckguru.co.in/bangalore-to-hyderabad-transport-company ; https://truckguru.co.in/pune-to-hyderabad-transport-service |
| T4 | 14 ft truck minimum charge | ₹4,000 | ₹3,000–5,000 | ₹/trip | E: not found | n/a |
| T5 | Pickup truck (~2 t, Bolero class) | ₹30/km | n/a | ₹/km | S, but weak: undated, no city | https://m.indiamart.com/impcat/bolero-pickup.html |
| T6 | Helper/loader hired with the vehicle | ₹350 | ₹300–400 | ₹/trip | S (blog) | https://mover.delivery/blog/tata-ace-on-rent |
| T7 | **Diesel**, Hyderabad (7–8 Nov 2026) | **₹104.23** | ₹103.8–104.9 (Jun–Nov 2026) | ₹/litre | S | https://www.goodreturns.in/diesel-price-in-hyderabad.html ; https://kalingatv.com/business/petrol-diesel-prices-today-november-8-2026-check-rates-in-major-cities/ |
| T8 | **Petrol**, Hyderabad (7–8 Nov 2026) | **₹116.15** | ₹115.6–116.2 since late May 2026 | ₹/litre | S | https://kalingatv.com/business/petrol-diesel-prices-today-november-8-2026-check-rates-in-major-cities/ ; https://english.punjabkesari.com/india/petrol-diesel-and-cng-prices-today-7-november-2026-new-fuel-rates-released-ahead-of-diwali-check-prices-in-delhi-patna-and-other-cities |
| T9 | **Tolls** for a light commercial vehicle (LCV), per round trip | NH65 east beyond Pantangi plaza (Choutuppal onwards): **₹190**, plus ₹295 for Korlapahad (Suryapet side). NH44 south beyond Raikal plaza (Shadnagar onwards): **~₹200** (E). ORR: **₹3.94/km** used. Chevella, Srisailam (NH765) and Sagar roads: **₹0** (no plaza data found; check) | ₹0–500 | ₹/round trip | S/E | https://newsmeter.in/top-stories/travellers-between-hyderabad-and-vijayawada-to-pay-less-toll-fees-from-april-1-746112 ; https://www.siasat.com/hyderabad-hike-in-orr-toll-tariff-comes-into-effect-from-today-3201551/amp ; https://www.bajajfinserv.in/shadnagar-toll-plaza |
| T10 | Buying a Tata Ace (diesel) | New: ≈ ₹6.0–6.5 L ex-showroom. Used (2018–21 models): ≈ ₹2.5–3.0 L | Ace HT Plus ₹7.19 L (Hyderabad); petrol Ace Gold CX ₹4.50–5.16 L | ₹ | S | https://trucks.cardekho.com:443/en/trucks/tata/ace-gold ; https://trucks.tractorjunction.com/en/tata-truck/ace-gold-diesel/price/pune ; https://trucks.tractorjunction.com/en/tata-truck/ace-gold-cx/price/hyderabad ; https://trucks.tractorjunction.com/en/used-truck/tata/ace-gold-diesel-plus-18725 |
| T11 | Own Tata Ace running cost | **₹7/km** (fuel ₹5–6.5/km at 16–22 km/l + maintenance and tyres ₹1.5–2.5/km, the latter E) | ₹6–9 | ₹/km | D/E | Mileage 21–22 km/l: https://trucks.tractorjunction.com/en/tata-truck/ace-gold-diesel/price/pune |
| T12 | Own Tata Ace fixed cost, excluding driver | ≈ ₹80,000/yr: insurance ₹10,000–19,000 + depreciation ≈ ₹60,000 (₹6.8 L → ₹2.5 L over 7 yrs) | ₹60,000–1,00,000 | ₹/yr | D/E | Third-party insurance ₹8,432 + GST (own goods) to ₹15,746 + GST (hire goods): https://policybazaar.com/motor-insurance/commercial-vehicle-insurance/tata-motors/ace |
| T13 | Goods-vehicle driver salary, Hyderabad | ₹18,000 | ₹15,000–25,000 | ₹/month | S | https://in.indeed.com/explorer/driving-jobs-hyderabad,-ts ; https://cazvid.com/job/van-delivery-driver-dh-pickers-and-packer-40e4e8 |
| T14 | **Pots per Tata Ace load**, 4-inch / 6-inch / 8-inch | **With racks: ~1,000 / ~320 / ~120** (8-inch in 2 tiers, short plants only). **No racks, single layer: ~290 / ~125 / ~70** | ±25% | pots/load | D: geometry from a 7.2 × 4.9 ft deck and a ~750 kg payload cap (method in section 4) | https://www.trucksbuses.com/compare-scv-pick-ups-mini-trucks-vans/tata-ace-gold-petrol-vs-tata-ace-gold-petrol-cx-clb |
| T15 | Pots per 14 ft truck load, 4-inch / 6-inch / 8-inch | With racks: ~3,600 / ~1,250 / ~360. No racks: ~840 / ~360 / ~210 | ±25% | pots/load | D/E: 14 ft × ~6.5–7 ft deck, 2.5–4 t payload | https://www.motorbazee.com/eicher/pro-2049-plus/14-ft-overview ; https://www.trucksbuses.com/trucks/cargo-truck/eicher-pro-2110-6s/specifications |
| T16 | Transit damage / plant loss per trip | **3%** | 1–8% (covered, racked and short trip → low; open body, stacked, summer → high) | % of pots | E: no Indian source found | Context: https://diggermagazine.com/though-almost-inevitable-damage-claims-can-be-minimized-with-the-right-moves/ ; https://indiaagronet.com/indiaagronet/Research%20Update/Table%202.htm |
| T17 | Owner's car (petrol hatchback) | **₹10/km** extra cost per trip (fuel ₹6.5–7.7 + wear ₹2–3) | ₹9–12 extra cost per trip; ₹15–20 including depreciation | ₹/km | D/E | Fuel price T8; method: https://desiutility.com/petrol-diesel-cost-per-km-calculator ; depreciation: https://calcwise.finance/?p=2366 |
| T18 | Owner's two-wheeler | ₹3.5/km | ₹3–4 | ₹/km | D/E | Fuel ₹2.1–2.6/km at 45–55 km/l (T8) |
| T19 | Value of the owner's time | ₹400/hour (₹70,000 ÷ ~176 working hours). Average door-to-door speed including city traffic ≈ 40 km/h (E) | n/a | ₹/h | D/E | n/a |
| W1 | Daily wage, unskilled farm/nursery labour, **≤ 50 km** from the city | Male **₹650**, female **₹500** | Male ₹550–750; female ₹450–550 | ₹/day | S/E. Anchored to Chevella-area landscape labour paid ₹14,000–18,000/month in hand (≈ ₹540–690/day) | https://www.jobhai.com/hi/peon-helper-job-in-gamlaa-bioscapes-private-limited-chevella-hyderabad-0-to-6-plus-years-1781603741-7818110-jid |
| W2 | Daily wage, **100+ km** away, off-peak | Male **₹475**, female **₹325** | Male ₹450–550; female ₹250–400. Peak-season tasks ₹600–1,100 | ₹/day | S/E | https://dataful.in/datasets/21427/ (Andhra Pradesh 2024-25, general agricultural labourers: ₹463.2) ; https://www.deccanchronicle.com/southern-states/telangana/dry-spell-hits-livelihoods-of-women-farm-labourers-in-erstwhile-adilabad-district-1974018 ; https://www.deccanchronicle.com/southern-states/telangana/rising-labour-wages-push-nalgonda-paddy-farmers-to-direct-sowing-1927667 |
| W3 | Mali / nursery gardener, Hyderabad region | ₹15,000 | ₹13,000–18,000 | ₹/month | S | https://helpersnearme.com/workers/mali-gardener-banjara-hills-hyderabad ; JobHai Gamlaa link above |
| W4 | Farm supervisor | ₹25,000 | ₹20,000–30,000 (junior); up to ~₹50,000 (experienced) | ₹/month | S | https://www.expertia.ai/suchirindia-in/job/hiring-farm-manager-6465fcb2b5ce93123d7749e7 ; https://ambitionbox.com/profile/farm-supervisor-salary |
| W5 | Watchman (lives on site) | ₹12,000 + room | ₹10,000–15,000 | ₹/month | S | https://www.jobhai.com/security-guard-house-watchman-job-in-e-abhyas-academy-mansoorabad-hyderabad-1-to-5-years-1785132927-8048481-jid ; https://www.jobhai.com/security-guard-watchman-job-in-power-equipments-jeedimetla-hyderabad-1-to-2-years-1768810748-7158740-jid |

**Suggested cost terms for the equation, built from the defaults above**
- **Land, buy:** one-time cost = acres × P(d) × direction multiplier × (1 − deal gap) × (1 + 0.075 + broker %) + legal costs. The annual figure needs an opportunity-cost or interest rate. That rate is out of scope here; the orchestrator supplies it.
- **Land, lease:** annual cost = acres × ₹15,000–35,000. This is **almost independent of distance**; water availability matters more (section 2).
- **Transport, hired:** cost per trip = max(min charge, rate per one-way km × d) + tolls + helper. For a Tata Ace: max(₹1,500, ₹30·d) + toll + ₹350.
- **Transport, own vehicle:** ₹7/km × 2d × trips per year + ₹80,000/yr + driver ₹1.8–2.6 L/yr if a dedicated driver is hired.
- **Owner travel:** visits per year × [2d × ₹10/km (car) + (2d ÷ 40 km/h) × ₹400/h].
- **Labour:** worker-days × wage(d). Wage(d) is about ₹650/₹500 (male/female) within 50 km, about ₹550/₹400 at 50–100 km, and about ₹475/₹325 beyond 100 km (E). Peak-season wages are higher everywhere.

---

## b) Land price data points

Types: **Listing** = asking price; **News** = market rate reported in news; **Award** = government compensation for land acquisition; **Govt value** = government market value for registration.
For mandal pages, "Low–High" is the range shown on the portal. The **high end often reflects small plotted parcels or highway frontage**; for farming, look at the low-to-middle end and the "examples" column.

| # | Place (mandal / village) | District | Corridor | ~km | ₹/acre low | ₹/acre high | Examples / notes | Type | Date | URL |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Shamshabad mandal | Rangareddy | NH44 S | 25 | 2 Cr | 15 Cr | 54 land + 29 plot listings. Sultanpalle 1 ac 3.5 Cr; Peddashapur 8.65 ac 6 Cr; Palmakole 7 Cr | Listing | Undated snapshot (2025–26) | https://1acre.in/hi/lands-for-sale/shamshabad-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-sultanpalle-shamshabad-ranga-reddy-telangana-6510 ; https://1acre.in/lands-for-sale/8.7-acre-land-in-peddashapur-shamshabad-ranga-reddy-telangana-14675 |
| 2 | Kothur mandal | Rangareddy | NH44 S | 45 | 80 L | 7.3 Cr | 60 land + 18 plot listings. Kothur (Ct) 1 ac 4.2 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/kothur-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-kothur-ct-kothur-ranga-reddy-telangana-14349 |
| 3 | Farooqnagar mandal (Shadnagar) | Rangareddy | NH44 S | 55 | 60 L | 8.7 Cr | 169 land + 39 plot listings. Kishannagar 1 ac 95 L; Madhurapur 1.25 ac 1.3 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/farooqnagar-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-kishannagar-farooqnagar-ranga-reddy-telangana-4560 ; https://1acre.in/lands-for-sale/1.2-acre-land-in-madhurapur-farooqnagar-ranga-reddy-telangana-4717 |
| 4 | Elakanti (Shadnagar) | Rangareddy | NH44 S | 58 | 3 Cr | 3 Cr | Page quotes a locality average of ~2.94 Cr/acre. Search summary links it to this URL; verify | Listing | Undated | https://propertywala.com/P194796742 |
| 5 | Balanagar mandal | Mahabubnagar | NH44 S | 70 | 35 L | 7.3 Cr | 127 land listings. Udithyal 1.35 ac 46 L | Listing | Undated | https://1acre.in/hi/lands-for-sale/balanagar-mahabubnagar-telangana ; https://1acre.in/lands-for-sale/1.4-acre-land-in-udithyal-balanagar-mahabubnagar-telangana-11888 |
| 6 | Jadcherla mandal (Earlapalle, Kishtaram, Kodgal, Narsullabad) | Mahabubnagar | NH44 S | 85 | 57 L | 80 L | Earlapalle 1 ac 57 L (uploaded May 2025); Kishtaram 65 L; Kodgal 2.8 ac 65 L and 15.8 ac 76 L; Narsullabad 80 L. Outlier: Polepalle 5 Cr (>18 months old) | Listing | 2024–25 | https://1acre.in/lands-for-sale/1-acre-land-in-earlapalle-jadcherla-mahabubnagar-telangana-6886 ; https://1acre.in/lands-for-sale/1-acre-land-in-kishtaram-jadcherla-mahabubnagar-telangana-3067 ; https://1acre.in/lands-for-sale/15-8-acre-land-in-kodgal-jadcherla-mahabubnagar-telangana-13894 ; https://1acre.in/lands-for-sale/1-acre-land-in-narsullabad-jadcherla-mahabubnagar-telangana-3961 |
| 7 | Konded (Jadcherla) | Mahabubnagar | NH44 S | 90 | 70 L | 70 L | 70 ac parcel | Listing | Jul 2024 | https://www.1acre.in/verified-lands-for-sale/telangana/mahabubnagar/jadcherla/konded/3076 |
| 8 | Bhoothpur mandal | Mahabubnagar | NH44 S | 97 | 15 L | 3.5 Cr | 23 land listings. Maddigatla 5 ac 26 L; Bhoothpur 1 ac 48 L; Tadparthy 2.2 ac 60 L | Listing | Undated | https://1acre.in/lands-for-sale/bhoothpur-mahabubnagar-telangana?tab=listings ; https://1acre.in/lands-for-sale/5-acre-land-in-maddigatla-bhoothpur-mahabubnagar-telangana-14596 ; https://1acre.in/lands-for-sale/2-2-acre-land-in-tadparthy-bhoothpur-mahabubnagar-telangana-6665 |
| 9 | Medchal mandal | Medchal-Malkajgiri | NH44 N | 30 | 3 Cr (1.4 Cr for a 10 ac parcel) | 11.5 Cr | Medchal (Ct) 1 ac 8 Cr | Listing | Undated | https://1acre.in/lands-for-sale/medchal-medchal-malkajgiri-telangana |
| 10 | Toopran mandal | Medak | NH44 N | 50 | 60 L | 7.3 Cr (English page snapshot: 4.84 Cr) | Allapur 1 ac 80 L; Malkapur 60–95 L; Venktaipalle 11 ac 1.25 Cr; Gundareddipalle 2.9 ac 1.6 Cr | Listing | Undated | https://1acre.in/lands-for-sale/toopran-medak-telangana ; https://1acre.in/hi/lands-for-sale/toopran-medak-telangana ; https://1acre.in/lands-for-sale/1-3-acre-land-in-malkapur-toopran-medak-telangana-16072 ; https://1acre.in/lands-for-sale/2-9-acre-land-in-gundareddipalle-toopran-medak-telangana-3001 |
| 11 | Ramayampet mandal | Medak | NH44 N | 95 | 33 L | 1.6 Cr | Katrial 44 L; Komatipalle 3.5 ac 60 L; Dongal Dharmaram 1 ac 33 L | Listing | Undated | https://1acre.in/lands-for-sale/ramayampet-medak-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-dongal-dharmaram-ramayampet-medak-telangana-2562 |
| 12 | Kamareddy mandal (edge of town) | Kamareddy | NH44 N | 115 | 80 L | 2.8 Cr | 0.9 ac in town 2.8 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/kamareddy-kamareddy-telangana ; https://1acre.in/lands-for-sale/0.9-acre-land-in-kamareddy-kamareddy-kamareddy-telangana-14781 |
| 13 | Gandhari mandal | Kamareddy | NH44 N (interior) | 130 | 25 L | 45 L | 23 ac 45 L; Sithaipalle 5 ac 25 L | Listing | Undated | https://1acre.in/lands-for-sale/23-acre-land-in-gandhari-gandhari-kamareddy-telangana-6220 ; https://1acre.in/lands-for-sale/5-acre-land-in-sithaipalle-gandhari-kamareddy-telangana-3203 |
| 14 | Patancheru mandal | Sangareddy | NH65 W | 30 | 2.4 Cr | 25 Cr | Kyasaram 1 ac 3.2 Cr; 5 ac 5.5 Cr; Patighanpur 15 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/patancheru-sangareddy-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-kyasaram-patancheru-sangareddy-telangana-5781 |
| 15 | Kandi mandal | Sangareddy | NH65 W | 55 | 1.2 Cr | 10 Cr | Kandi 2.45 ac 3.5 Cr; Mamidipalle 1.5 ac 3.6 Cr | Listing | Undated | https://1acre.in/lands-for-sale/kandi-kandi-sangareddy-telangana ; https://1acre.in/hi/lands-for-sale/kandi-sangareddy-telangana ; https://1acre.in/lands-for-sale/2.5-acre-land-in-kandi-kandi-sangareddy-telangana-1960 |
| 16 | Kandi (farmer quoted, RRR area) | Sangareddy | NH65 W / RRR | 55 | 1–1.5 Cr (interior) | 2 Cr (highway-facing) | Farmer's quote in The Hindu (via inkl) | News | Undated | https://www.inkl.com/news/rrr-proposal-creates-tension-among-farmers |
| 17 | Sadasivpet mandal | Sangareddy | NH65 W | 72 | 40 L (Thangadpalle) | 3.5 Cr (town; up to 7.6 Cr) | Atmakur 50 L; Sadasivpet town listings 1.5–3.5 Cr | Listing | Undated | https://1acre.in/lands-for-sale/sadasivpet-sangareddy-telangana ; https://1acre.in/lands-for-sale/sadasivpet-sadasivpet-sangareddy-telangana |
| 18 | Peddapur (Sadasivpet), RRR compensation | Sangareddy | NH65 W / RRR north | 70 | 1.01 Cr (slightly off the highway) | 1.27 Cr (NH65 frontage) | Award based on the average sale value of the previous 3 years | Award | ~Apr 2026 (estimated from article ID sequence) | https://deccanchronicle.com/southern-states/telangana/rrr-oustee-gets-127cr-compensation-for-acre-1952990 ; https://hyderabadmail.com/rrr-sangareddy-land-compensation-1-27-crore-per-acre/ |
| 19 | Doultabad (Hathnoora), RRR compensation | Sangareddy | RRR north (interior) | 75 | 16 L | 16 L | Lowest award; far from the highway | Award | ~Apr 2026 | Same as row 18 |
| 20 | Kohir mandal | Sangareddy | NH65 W | 95 | 45 L | 1.8 Cr (3.5 Cr for a verified highway-facing parcel) | 1 ac 60 L; 8 ac 65 L; highway-facing 8.2 ac 1.3 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/kohir-kohir-sangareddy-telangana ; https://1acre.in/lands-for-sale/8.2-acre-land-in-kohir-kohir-sangareddy-telangana-17281 ; https://www.1acre.in/verified-lands-for-sale/telangana/sangareddy/kohir/kothur-patti-digwal/1908 |
| 21 | Zaheerabad (Huggelli) | Sangareddy | NH65 W | 110 | 1.3 Cr | 1.3 Cr | 9 ac; >18 months old | Listing | ≤2025 | https://1acre.in/lands-for-sale/9-acre-land-in-huggelli-zahirabad-sangareddy-telangana-2691 |
| 22 | NIMZ area (Jharasangam, Nyalkal) | Sangareddy | NH65 W (interior) | 120 | 30 L | 1 Cr | Farmers' claimed market price; official offer was 9 L | News (The Hindu via inkl) | Undated | https://www.inkl.com/news/how-can-i-sell-my-land-for-so-cheap |
| 23 | NIMZ area, older market claim | Sangareddy | NH65 W | 120 | 25 L | 30 L | Same report says the industrial corporation was acquiring at 7–9 L | News/NGO | 2021 | https://napmindia.org/2021/02/18/napm-nimzeng/ |
| 24 | Nyalkal mandal | Sangareddy | NH65 W (beyond Zaheerabad) | 125 | 38 L | 63 L | 75 land listings. Gunjetti 42 L; Tekur 3 ac 60 L; Mariampur 50 L; Hadnur 63 L | Listing | Undated | https://1acre.in/lands-for-sale/nyalkal-sangareddy-telangana ; https://1acre.in/lands-for-sale/3-acre-land-in-tekur-nyalkal-sangareddy-telangana-9688 ; https://1acre.in/lands-for-sale/2-acre-land-in-mariampur-nyalkal-sangareddy-telangana-1710 |
| 25 | Abdullapurmet mandal | Rangareddy | NH65 E | 25 | 2.2 Cr | 6.8 Cr | 8 land + 26 plot listings | Listing | Undated | https://1acre.in/hi/lands-for-sale/abdullapurmet-ranga-reddy-telangana |
| 26 | Choutuppal mandal | Yadadri-Bhuvanagiri | NH65 E | 50 | 55 L | 5.6 Cr | 31 land + 9 plot listings. Gudem 1.5 Cr; Tangadpalle 1.8 ac 2 Cr (uploaded Nov 2025) | Listing | 2025–26 | https://1acre.in/hi/lands-for-sale/choutuppal-yadadri-bhuvanagiri-telangana ; https://1acre.in/lands-for-sale/1.8-acre-land-in-tangad-palle-choutuppal-yadadri-bhuvanagiri-telangana-11373 |
| 27 | Near the RRR alignment (Vijayawada and Mumbai highway interchanges) | Various | RRR | 50–70 | 1.5 Cr (road-facing) | 3 Cr (interchange sites) | Hans India report | News | ~early 2025 (estimated) | https://assets.thehansindia.com/telangana/real-estate-sees-high-demand-around-hyderabads-rrr-947584 |
| 28 | Narketpally mandal | Nalgonda | NH65 E | 75 | 28 L | 6.8 Cr | Ammanabole 25 ac 34 L; Mandra 103 ac 28 L | Listing | Undated | https://1acre.in/hi/lands-for-sale/narketpally-nalgonda-telangana ; https://1acre.in/lands-for-sale/25.1-acre-land-in-ammanabole-narketpally-nalgonda-telangana-1704 ; https://1acre.in/lands-for-sale/103-acre-land-in-mandra-narketpally-nalgonda-telangana-12670 |
| 29 | Nalgonda mandal (edge of town) | Nalgonda | NH65 E (via Narketpally) | 100 | 1.2 Cr | 1.2 Cr | Anneparthy 5 ac; Medla Duppala Palle 4 ac | Listing | Undated | https://1acre.in/lands-for-sale/nalgonda-nalgonda-telangana ; https://www.1acre.in/verified-lands-for-sale/telangana/nalgonda/nalgonda/medla-duppala-palle/2627 |
| 30 | Suryapet mandal and district | Suryapet | NH65 E | 135 | 25 L | 62 L | Kasarabad 20 ac 35 L; Yerkaram 3 ac 40 L; Ailapur 1 ac 62 L; Thummalapen Pahad 20 ac 25 L | Listing | Undated | https://1acre.in/lands-for-sale/suryapet-suryapet-telangana ; https://1acre.in/lands-for-sale/suryapet-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-ailapur-chivemla-suryapet-telangana-8246 |
| 31 | Bhongir mandal | Yadadri-Bhuvanagiri | NH163 | 50 | 55 L | 7.8 Cr | Wadaparthy 2 ac 55 L; Anajipur 1.95 ac 82 L; Kunoor 1.45 ac 1.1 Cr; 41.6 ac 1.2 Cr | Listing | Undated | https://1acre.in/lands-for-sale/bhongir-yadadri-bhuvanagiri-telangana ; https://1acre.in/lands-for-sale/1.9-acre-land-in-anajipur-bhongir-yadadri-bhuvanagiri-telangana-888 ; https://1acre.in/lands-for-sale/1.4-acre-land-in-kunoor-bhongir-yadadri-bhuvanagiri-telangana-13656 |
| 32 | Yadagirigutta mandal | Yadadri-Bhuvanagiri | NH163 (spur) | 65 | 45 L | 4.5 Cr | Jangampally 1.75 ac 45 L; Peddakandukur 60 ac 1.6 Cr; Yadagiri-palle 3.2 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/yadagirigutta-yadadri-bhuvanagiri-telangana ; https://1acre.in/lands-for-sale/1.8-acre-land-in-jangampally-yadagirigutta-yadadri-bhuvanagiri-telangana-2233 ; https://1acre.in/verified-lands-for-sale/telangana/yadadri-bhuvanagiri/yadagirigutta/peddakandukur/2717 |
| 33 | Rajapet mandal (Aler side; no Aler data found) | Yadadri-Bhuvanagiri | NH163 | 80 | 48 L | 1 Cr | Rajapet 2.85 ac 55 L (uploaded 15 Jun 2026); Begumpet 1.15 ac 48 L | Listing | Jun 2026 | https://1acre.in/hi/lands-for-sale/rajapet-rajapeta-yadadri-bhuvanagiri-telangana ; https://1acre.in/lands-for-sale/2-9-acre-land-in-rajapet-rajapeta-yadadri-bhuvanagiri-telangana-14882 ; https://1acre.in/lands-for-sale/1.2-acre-land-in-begumpet-rajapeta-yadadri-bhuvanagiri-telangana-2652 |
| 34 | Jangaon (Peddapahad) | Jangaon | NH163 | 88 | 35 L | 35 L | 4 ac; >18 months old | Listing | ≤2025 | https://www.1acre.in/verified-lands-for-sale/telangana/jangoan/jangaon/peddapahad/1620 |
| 35 | Raghunathpalle | Jangaon | NH163 | 100 | 69 L | 69 L | 1.1 ac | Listing | Undated | https://1acre.in/lands-for-sale/1-1-acre-land-in-raghunathpalle-ragunathpally-jangoan-telangana-2409 |
| 36 | Bachannapet mandal | Jangaon | NH163 (interior) | 105 | 30 L | 1.5 Cr | 1.7 ac 30 L; Chinnaramancherla 30 ac 35 L; 5.35 ac 52 L; Mansanpalle 66 L; 10.75 ac 1.3 Cr | Listing | Undated | https://1acre.in/lands-for-sale/bachannapet-jangoan-telangana ; https://1acre.in/lands-for-sale/30-acre-land-in-chinnaramancherla-bachannapet-jangoan-telangana-6497 ; https://1acre.in/lands-for-sale/5.3-acre-land-in-bachannapet-bachannapet-jangoan-telangana-1389 |
| 37 | Shamirpet mandal | Medchal-Malkajgiri | Rajiv Rahadari | 30 | 1.5 Cr | 12.1 Cr | 1.75 ac 3 Cr; 4 ac 13 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/shamirpet-medchal-malkajgiri-telangana |
| 38 | Mulug mandal | Siddipet | Rajiv Rahadari | 45 | 85 L | 4 Cr | Mostly 1.25–2.5 Cr. Aliabad 1.8 ac 85 L; 8.25 ac 2.5 Cr | Listing | Undated | https://1acre.in/lands-for-sale/mulug-siddipet-telangana ; https://1acre.in/lands-for-sale/1.8-acre-land-in-aliabad-adivimasjid-mulug-siddipet-telangana-11735 |
| 39 | Wargal mandal | Siddipet | Rajiv Rahadari | 55 | 50 L | 10.5 Cr | 28 land listings | Listing | Undated | https://1acre.in/lands-for-sale/wargal-siddipet-telangana |
| 40 | Gajwel mandal | Siddipet | Rajiv Rahadari | 60 | 50 L | 12 Cr | Bayyaram 1.9 ac 58 L; Srigiripalle 3.5 ac 68 L; Arepalle 1.15 ac 84 L; Gajwel town 1–6 Cr | Listing | Undated (some >18 months) | https://1acre.in/lands-for-sale/gajwel-siddipet-telangana ; https://1acre.in/lands-for-sale/1.9-acre-land-in-bayyaram-gajwel-siddipet-telangana-1116 ; https://1acre.in/lands-for-sale/3.5-acre-land-in-srigiripalle-gajwel-siddipet-telangana-14484 ; https://1acre.in/lands-for-sale/1.2-acre-land-in-arepalle-sivar-bejgaon-gajwel-siddipet-telangana-2576 |
| 41 | Siddipet Rural mandal | Siddipet | Rajiv Rahadari | 100 | 20 L | 1 Cr | 8 land listings | Listing | 2026 (per search) | https://1acre.in/lands-for-sale/siddipet-rural-siddipet-telangana |
| 42 | Mirdoddi mandal | Siddipet | Off Rajiv Rahadari | 115 | 32 L | 1.7 Cr | Almaspur 1 ac 40 L | Listing | Undated | https://1acre.in/lands-for-sale/mirdoddi-siddipet-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-almaspur-mirdoddi-siddipet-telangana-11694 |
| 43 | Koheda mandal | Siddipet | Beyond Siddipet | 125 | 24 L | 62 L | n/a | Listing | Undated | https://1acre.in/lands-for-sale/koheda-koheda-siddipet-telangana |
| 44 | Akkannapet mandal | Siddipet | Beyond Siddipet | 130 | 23 L | 40 L | n/a | Listing | Undated | https://1acre.in/lands-for-sale/akkannapet-siddipet-telangana |
| 45 | Moinabad (Kethireddipalle) | Rangareddy | West | 25 | 5.5 Cr | 5.5 Cr | 7.7 ac; 40 ft tarred approach road | Listing | Undated | https://1acre.in/lands-for-sale/7-7-acre-land-in-kethireddipalle-moinabad-ranga-reddy-telangana-12793 |
| 46 | Chevella mandal | Rangareddy | West | 40 | 1.4 Cr | 6 Cr | Yenkepalle 1.3 ac 1.4 Cr; Kesavaram 1 ac 2.5 Cr; Tangedapalle 2 ac 2.6 Cr; Aloor-II 12.5 ac 2.6 Cr | Listing | Undated | https://1acre.in/hi/lands-for-sale/chevella-chevella-ranga-reddy-telangana ; https://www.1acre.in/verified-lands-for-sale/telangana/rangareddy/chevella/yenkepalle/2876 ; https://1acre.in/lands-for-sale/1-acre-land-in-kesavaram-chevella-ranga-reddy-telangana-102 ; https://1acre.in/lands-for-sale/12-5-acre-land-in-aloor-ii-chevella-ranga-reddy-telangana-3261 |
| 47 | Chevella highway belt | Rangareddy | West | 35–50 | 2.5 Cr | 3 Cr | Land was 40–60 L before the 4-lane widening; owners expected 12.5 L/acre compensation | News (The Hindu via inkl) | Undated | https://www.inkl.com/news/land-prices-spiral-on-hyderabad-chevella-highway |
| 48 | Shabad (3.1 ac) | Rangareddy | West | 50 | ~2.9 Cr | ~2.9 Cr | 3.10 ac for 9 Cr | Listing | Undated | https://www.realestateindia.com/rangareddy-property/farm-land-for-sale.htm |
| 49 | Pudur | Vikarabad | West | 60 | 3 Cr | 3 Cr | 6 ac mango orchard; 80 ft tarred road (premium parcel) | Listing | Jun 2024 | https://1acre.in/verified-lands-for-sale/telangana/vikarabad/pudur/pudur/2875 |
| 50 | Mominpet | Vikarabad | West | 75 | 2.2 Cr | 2.2 Cr | 1 ac | Listing | Undated | https://1acre.in/lands-for-sale/1-acre-land-in-mominpet-mominpet-vikarabad-telangana-13460 |
| 51 | Pargi (Rangapur) | Vikarabad | South-west | 75 | 2.75 Cr | 2.75 Cr | 10 ac | Listing | Undated | https://1acre.in/lands-for-sale/10-acre-land-in-rangapur-pargi-vikarabad-telangana-11045 |
| 52 | Yelal | Vikarabad | West (Tandur side) | 105 | 60 L | 60 L | 1 ac | Listing | Undated | https://1acre.in/lands-for-sale/1-acre-land-in-yelal-yelal-vikarabad-telangana-6697 |
| 53 | Tandur mandal | Vikarabad | West | 110 | 28 L | 80 L | Elmakanna 6.5 ac 28 L; Gonur 30 L; Chengole 1 ac 70 L; Tandur 2.65 ac 70 L; Inole 3.3 ac 80 L (several >18 months old) | Listing | ≤2025 | https://1acre.in/lands-for-sale/6.5-acre-land-in-elmakanna-tandur-vikarabad-telangana-3481 ; https://1acre.in/lands-for-sale/1-acre-land-in-gonur-tandur-vikarabad-telangana-5889 ; https://1acre.in/lands-for-sale/2.6-acre-land-in-tandur-tandur-vikarabad-telangana-10812 ; https://1acre.in/lands-for-sale/3.3-acre-land-in-inole-tandur-vikarabad-telangana-9903 |
| 54 | Maheshwaram mandal | Rangareddy | South-east (Srisailam highway) | 30 | 2.1 Cr | 7 Cr | 11 ac 2.1 Cr; 1.4 ac 5 Cr | Listing | Undated | https://1acre.in/lands-for-sale/maheshwaram-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/11-acre-land-in-maheswaram-maheshwaram-ranga-reddy-telangana-12839 |
| 55 | Kandukur mandal | Rangareddy | South-east (Future City) | 38 | 2.8 Cr | 4.5 Cr | 25 ac 2.8 Cr; 1.2 ac 4 Cr; Kothur village 1.25 ac 4.5 Cr | Listing | Undated | https://1acre.in/lands-for-sale/kandukur-kandukur-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/1.2-acre-land-in-kothur-kandukur-ranga-reddy-telangana-16120 |
| 56 | Kandukur (news) | Rangareddy | South-east | 38 | 1.8 Cr | 4 Cr | ~1.5 Cr before Future City. One report: now 2.5–4 Cr; another: 1.8 Cr | News (real-estate sources) | Undated | https://regnews.in/bharat-future-city%E2%80%A6-where-to-buy-land-for-maximum-appreciation |
| 57 | Kadthal mandal | Rangareddy | South-east | 55 | 1.1 Cr (50 L for small parcels on NH765) | 3 Cr | 13 land + 27 plot listings. 1 ac 1.25–1.5 Cr; 10 ac 2.1 Cr; 8.5 ac 2.25 Cr | Listing | Undated | https://1acre.in/lands-for-sale/kadthal-kadthal-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/1-acre-land-in-kadthal-kadthal-ranga-reddy-telangana-17635 ; https://1acre.in/map-layers/telangana/lands-in-sagar-highway-nh-765 |
| 58 | Kadthal (news) | Rangareddy | South-east | 55 | 1.5 Cr | 3 Cr | ~1.2 Cr before Future City | News | Undated | https://regnews.in/bharat-future-city%E2%80%A6-where-to-buy-land-for-maximum-appreciation |
| 59 | Amangal mandal | Rangareddy | South-east | 70 | 45 L | 6.7 Cr | 53 land listings. 1.1 ac 62 L; 18 ac 85 L; 1 ac 90 L; 15 ac 2 Cr | Listing | Undated | https://1acre.in/lands-for-sale/amangal-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/18-acre-land-in-amangal-amangal-ranga-reddy-telangana-9285 ; https://1acre.in/lands-for-sale/1.1-acre-land-in-amangal-amangal-ranga-reddy-telangana-5622 |
| 60 | Kalwakurthy mandal | Nagarkurnool | South-east | 85 | 45 L | 1.5 Cr | 11 ac 50 L; others 45–75 L and 1 Cr; 1.8 ac 1.5 Cr | Listing | Undated | https://1acre.in/lands-for-sale/kalwakurthy-nagarkurnool-telangana ; https://1acre.in/lands-for-sale/11-acre-land-in-kalwakurthy-ct-kalwakurthy-nagarkurnool-telangana-1098 |
| 61 | Ibrahimpatnam mandal | Rangareddy | Sagar road | 30 | 85 L | 5 Cr | Dandumailaram 6 ac 1.2 Cr; Ramdaspalle 30 ac 3.5 Cr; Khalsa 2.5–3.5 Cr | Listing | Undated | https://1acre.in/lands-for-sale/ibrahimpatnam-ranga-reddy-telangana?tab=listings ; https://1acre.in/lands-for-sale/ibrahimpatnam-khalsa-ibrahimpatnam-ranga-reddy-telangana |
| 62 | Manchal mandal | Rangareddy | Sagar road | 40 | 35 L | 4 Cr | Chittapur 9 ac 1.35 Cr | Listing | Undated | https://1acre.in/lands-for-sale/manchal-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/9-acre-land-in-chittapur-manchal-rangareddy-telangana-3094 |
| 63 | Yacharam mandal (Maal side; no Maal data found) | Rangareddy | Sagar road | 45 | 40 L | 4 Cr | Nandiwanaparthy 9.9 ac 1.6 Cr; Chowderpalle 36 ac 1.65 Cr; Thakkellapalle 3 ac 2.2 Cr | Listing | Undated (one >18 months) | https://1acre.in/lands-for-sale/yacharam-ranga-reddy-telangana ; https://1acre.in/lands-for-sale/36-acre-land-in-chowderpalle-yacharam-ranga-reddy-telangana-3547 |
| 64 | Nampally mandal | Nalgonda | Sagar road (interior) | 95 | 20 L | 40 L | Pagidi Palle 3 ac 20 L; Vadde Palle 1.98 ac 40 L | Listing | Undated | https://1acre.in/lands-for-sale/nampally-nalgonda-telangana |
| 65 | Devarakonda mandal | Nalgonda | Sagar road | 100 | 20 L | 1.3 Cr | 3 ac 20 L; others 50 L and 70 L | Listing | Undated | https://1acre.in/lands-for-sale/devarakonda-nalgonda-telangana ; https://1acre.in/hi/lands-for-sale/devarakonda-nalgonda-telangana |
| 66 | Peddavoora mandal | Nalgonda | Sagar road | 135 | 24 L | 40 L | Velmaguda 9 ac 24 L | Listing | Undated | https://1acre.in/hi/lands-for-sale/peddavoora-nalgonda-telangana |
| 67 | Statewide rural floor | All | n/a | n/a | 2.75 L | n/a | From 5 Jun 2026. One report gives the earlier floor as 1.75 L; another says the 2021 floor was 75,000 | Govt value | Jun 2026 | https://tmv.in/article/telangana-sets-new-minimum-land-values-across-regions-from-june-5-date=2026-06-05 ; https://english.rtvlive.com/telangana-revises-property-market-values-across-state-new-rates-come-into-effect/ |
| 68 | HMDA-area / ORR-zone / municipal-corporation floors | n/a | n/a | 0–60 | 5 L / 10 L / 15 L | n/a | Municipal corporation 5 L; HMDA 10 L; ORR influence zone 15 L | Govt value | Jun 2026 | https://www.deccanchronicle.com/southern-states/telangana/revised-market-values-of-lands-plots-flats-from-today-1961371 |
| 69 | NIMZ official compensation (private landowners) | Sangareddy | NH65 W | 120 | 5.65 L | 5.65 L | 2015 government order; 2024 High Court ruling extended the same rate to assigned-land holders | Award | 2015/2024 | https://livelaw.in/high-court/telangana-high-court/telangana-high-court-orders-additional-compensation-for-land-acquisition-in-nimz-project-261335 |

**Government guidance values for open plots** (third-party compilation of Bhu Bharati FY 2026-27 data; ₹ per **sq yd**). These are rates for **non-agricultural open plots**, not farmland market prices. They are included only because they show the same distance gradient.

| Mandal | ~km | ₹/sq yd | URL |
|---|---|---|---|
| Abdullapurmet | 25 | 3,700–10,000 (median 3,700) | https://assetlyhq.com/tools/guidance-value-explorer/telangana/rangareddy/abdullapurmet/ |
| Ghatkesar | 30 | 4,800–11,100 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/medchal-malkajgiri/ghatkesar/ |
| Medchal (Medchal town) | 30 | 10,500 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/medchal-malkajgiri/medchal/ |
| Chevella | 40 | 3,700 (villages); 6,200 (town) | https://assetlyhq.com/tools/guidance-value-explorer/telangana/rangareddy/chevella/ |
| Shankarpalle | 40 | 3,200–16,000 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/rangareddy/shankarpalle/ |
| Kothur | 45 | 3,200–3,700 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/rangareddy/kothur/ |
| Choutuppal | 50 | 3,200–3,700 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/yadadri-bhuvanagiri/choutuppal/ |
| Kohir | 95 | 1,300–2,300 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/sangareddy/kohir/ |
| Bachannapeta | 105 | 900–2,300 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/jangoan/bachannapeta/ |
| Zaheerabad (town rate) | 110 | 6,200 | https://assetlyhq.com/tools/guidance-value-explorer/telangana/sangareddy/zahirabad/ |
| Suryapet district | 135 | 600–7,200 (median 800) | https://assetlyhq.com/tools/guidance-value-explorer/telangana/suryapet/ |

---

## c) Findings by item

### 1. Farmland purchase prices vs distance

**Typical whole-acre farmland asking price by distance band** (D, from table b. "Typical" means the middle of the individual whole-acre listings, ignoring plotted and highway-frontage parcels)

| Distance from Lakdikapul | Example mandals | Typical asking price per acre | Lowest seen | Fitted P(d) |
|---|---|---|---|---|
| 20–35 km (ORR belt) | Shamshabad, Moinabad, Abdullapurmet, Medchal, Patancheru, Shamirpet, Maheshwaram, Ibrahimpatnam | ₹2.5–5 Cr | ₹85 L (Ibrahimpatnam) | ₹2.7 Cr at 30 km |
| 35–50 km | Kandukur, Chevella, Manchal, Kothur, Mulug, Yacharam, Toopran, Choutuppal, Bhongir | ₹1–2.5 Cr | ₹35–60 L | ₹1.5–2.2 Cr |
| 50–65 km | Shadnagar/Farooqnagar, Kandi, Wargal, Kadthal, Gajwel, Yadagirigutta | ₹0.75–2 Cr | ₹45–60 L | ₹1.0–1.5 Cr |
| 65–90 km | Balanagar, Amangal, Sadasivpet, Narketpally, Rajapet, Vikarabad area, Kalwakurthy, Jadcherla, Jangaon | ₹50–90 L (more on highways and near towns) | ₹28–46 L | ₹0.6–0.9 Cr |
| 90–115 km | Ramayampet, Kohir, Nampally, Bhoothpur, Devarakonda, Siddipet Rural, Bachannapet, Tandur, Zaheerabad, Mirdoddi | ₹35–65 L | ₹15–30 L | ₹0.42–0.55 Cr |
| 115–140 km | Koheda, Nyalkal, Gandhari, Akkannapet, Suryapet, Peddavoora | ₹25–50 L | ₹23–25 L | ₹0.35–0.40 Cr |

**How the curve was fitted (D).** I took one representative value per mandal from table b. Averaging these within distance bands gave: ~₹3.0 Cr at 28 km; 1.8 at 42; 1.35 at 55; 0.8 at 72; 0.5 at 95; 0.4 at 120 (₹ Cr/acre). Fitting ln(P − 0.30) against d gives **P(d) = 0.30 + 7.2·e^(−0.0365·d)**, in ₹ crore/acre. The curve reproduces the band values to within about ±10%.

The shape matters for the model:
- Price falls steeply out to about 80–100 km.
- Beyond 100 km it flattens to a floor of roughly ₹30–40 L/acre.
- So going further than ~100 km saves little on land, while transport, labour-supervision and travel costs keep rising in a straight line with distance.

**Direction effects** (D, from table b):
- **West and south-west cost about 1.3–1.4× the curve at the same distance.** Examples: Chevella ₹1.4–2.6 Cr and Kandi ₹1.8–3.6 Cr at 40–55 km, against Bhongir ₹0.55–1.2 Cr at 50 km. Further out, Tandur and Zaheerabad (110 km) still list at ₹28 L–₹1.3 Cr. Drivers: spill-over from the IT corridor, the Chevella road widening (₹40–60 L became ₹2.5–3 Cr per The Hindu), and the Mumbai highway / NIMZ.
- **The south-east Future City belt (Kandukur, Kadthal, Yacharam) is about 1.15× the curve.** Kandukur rose from ~₹1.5 Cr to ₹1.8–4 Cr and Kadthal from ~₹1.2 Cr to ₹1.5–3 Cr after the Future City announcement; reports disagree on how much (https://regnews.in/bharat-future-city%E2%80%A6-where-to-buy-land-for-maximum-appreciation). Government acquisition in Yacharam, Kandukur and Kadthal is largely complete, with ~432 acres in court (https://www.deccanchronicle.com/southern-states/telangana/bharat-future-city-land-acquisition-picks-up-pace-1935764). A 2026 buyer guide warns the master plan is not final and part of the rise is speculative (https://www.propnewz.com/blog/hyderabad-future-city-tukkuguda-plot-buyer-2026-05-31).
- **North (NH44 north, Rajiv Rahadari) is about 0.9×.** Toopran's rural villages list at ₹60 L–1.6 Cr and Gajwel's rural villages at ₹58–84 L, but town and highway parcels are much higher.
- **East and north-east (NH65 east, NH163) are about 0.8–0.9×.** Bhongir and Yadagirigutta interiors list at ₹45–82 L. Exceptions are Choutuppal highway and RRR-facing parcels (₹1.5–2 Cr).
- **The Sagar road beyond Yacharam is the cheapest corridor, about 0.75×.** Nampally lists at ₹20–40 L and Devarakonda at ₹20–70 L at 95–100 km.

**Effect of infrastructure projects**
- **Regional Ring Road (RRR)** (runs roughly 55–80 km out):
  - Road-facing land near the alignment is reported at ₹1.5–2 Cr/acre, and interchange sites on the Vijayawada and Mumbai highways at ~₹3 Cr (Hans India, ~early 2025: https://assets.thehansindia.com/telangana/real-estate-sees-high-demand-around-hyderabads-rrr-947584).
  - Compensation on the north arm (Sangareddy) shows the frontage premium clearly: ₹1.27 Cr on NH65 frontage, ₹1.01 Cr slightly inside, ₹16 L far from the highway. Officials said awards were based on the average sale value of the previous 3 years (https://deccanchronicle.com/southern-states/telangana/rrr-oustee-gets-127cr-compensation-for-acre-1952990 ; https://hyderabadmail.com/rrr-sangareddy-land-compensation-1-27-crore-per-acre/).
  - The new southern alignment was approved but its details were not made public, which adds uncertainty for buyers (https://telanganatoday.com/farmers-tense-as-congress-govt-keeps-regional-ring-road-alignment-under-wraps).
- **ORR / HMDA:** the June 2026 government floors are ₹15 L/acre in the ORR influence zone and ₹10 L/acre in the HMDA area. Market asking prices inside the ORR belt are ₹2–15 Cr/acre (table b, rows 1, 9, 14, 25, 37, 54).
- **NIMZ (Zaheerabad):** farmers cite a market of ₹25–30 L (2021) and ₹30 L–₹1 Cr depending on location. Official acquisition rates were ₹5.65–9 L/acre (table b, rows 22–24 and 69).
- **Urban-core auctions** (not farmland, shown only for context): Raidurg fetched ₹177 Cr/acre (Oct 2025), ₹237 Cr (May 2026) and ₹264 Cr (Aug 2026) (https://thesouthfirst.com/telangana/an-acre-of-land-sold-for-rs-177-crore-in-hyderabad-raidurg-plot-sets-new-record/ ; https://www.etvbharat.com/en/bharat/hyderabad-land-auction-record-an-acre-iin-raidurg-fetches-rs-237-crore-enn26052806447 ; https://ianslive.in/new-record-in-hyderabad-real-estate-as-one-acre-fetches-rs-264-crore--20260821200121).

**State of the market, 2025–26**
- Telangana Today (Mar 2025) reported farmland values falling over the previous year, distress sales and a lack of buyers (https://telanganatoday.com/wave-of-distress-sale-sweeps-through-telanganas-agricultural-lands).
- Hans India reports a slowdown in Hyderabad's plot market (https://assets.thehansindia.com/business/hyderabads-plotting-market-slumps-amid-sales-slowdown-1003883).
- **So asking prices probably overstate what land actually sells for.** I found no source quantifying the gap; I use 10–15% (L3, E).

**Government market values: the June 2026 revision**
- The revision took effect on **5 Jun 2026** at all 144 sub-registrar offices.
- New per-acre floors: rural ₹2.75 L, municipal corporation ₹5 L, HMDA ₹10 L, ORR zone ₹15 L.
- High-growth corridors were raised by 50–100%.
- The highest agricultural value is unchanged: Begumpet Paiga, ₹35.29 Cr/acre.
- **Registration rates were not changed.**
- One report says the values will be reviewed in six months; I could not confirm this officially.
- Sources: https://www.deccanchronicle.com/southern-states/telangana/revised-market-values-of-lands-plots-flats-from-today-1961371 ; https://www.deccanlive.com/2026/06/05/telangana-land-prices-rates-range-from-%E2%82%B92-75-lakh-to-%E2%82%B935-crore-per-acre/ ; https://www.telanganatribune.com/telangana-revises-property-registration-values-statewide-from-june-5-2026/
- Before the revision, a report said the government value for agricultural land in the HMDA area was about ₹5 L/acre while village market prices were ₹20–30 L. I could not pin down which article this was; it appeared in coverage of the planned revision, e.g. https://telanganatoday.com/congress-govt-plans-steep-hike-in-land-registration-values.
- Even after the revision, **government values are a small fraction of market asking prices** beyond the ORR: ₹2.75–15 L against ₹25 L–₹3 Cr.

### 2. Lease rent for agricultural land

- **Statewide survey (Rythu Swarajya Vedika, 1,816 tenant farmers in 22 districts):**
  - Average lease ₹14,936/acre/yr; peaks ₹53,000.
  - Paddy average ₹15,647; chilli up to ₹25,000 (Bhupalpalli, Khammam).
  - Average leased area rose to 6.7 acres from 5 acres in 2022.
  - Sources: https://thesouthfirst.com/telangana/tenant-farmers-in-telangana-struggle-amid-soaring-lease-costs-policy-gaps-survey/ ; https://thewire.in/agriculture/telangana-farmers-tenant-survey-findings ; https://deccanchronicle.com/southern-states/telangana/tenant-farmers-in-dire-straits-in-telangana-survey-finds-1962484 (~mid-2026)
- **Nizamabad and Kamareddy:** typically ₹20,000–25,000/acre, with landowners pushing to ~₹30,000 (~Jun 2025): https://www.deccanchronicle.com/southern-states/telangana/nizamabad-kamareddy-farmers-ready-for-kharif-agricultural-operations-1883586
- **Nalgonda and Suryapet, land with assured water:** ₹25,000–35,000; elsewhere ₹25,000–40,000 depending on water. Telangana Today; the page shows a 2026 date but the article date is unconfirmed: https://telanganatoday.com/tenant-farmers-face-tough-future-in-telangana
- **Without assured irrigation:** ₹15,000–20,000/acre/yr: https://telanganatoday.com/tenant-farmers-in-erstwhile-karimnagar-yet-to-receive-rythu-bharosa-assistance
- **Typical terms:** one-year agreements, paid in full before the season, not refunded if the crop fails. All risk sits with the tenant: https://telanganatoday.com/telangana-tenant-farmers-struggle-amid-water-shortage-and-rising-costs
- **Direction of rents:** rising. Tenant groups say the investment-support payments to landowners (Rythu Bandhu, now Rythu Bharosa) pushed rents up, not down. An earlier study found only 0.6% of tenants saw rent cuts: https://www.thenewsminute.com/telangana/telangana-tenant-farmers-urge-congress-govt-to-implement-promise-demand-recognition ; https://www.downtoearth.org.in/amp/story/agriculture/1-out-of-3-farmers-are-tenants-in-telangana-are-excluded-from-any-government-support-86572
- **Implication for the model:** lease rent depends on **water, not distance**. At ₹15,000–35,000/acre/yr it is roughly 1–3% of the asking price at 75–100 km and under 1% near the ORR.
- **Gaps:** no source found for multi-year leases (5–15 years, needed for perennial crops such as dragon fruit) or for leases close to Hyderabad within Rangareddy, Vikarabad or Sangareddy.

### 3. Costs of buying land in Telangana

- **Duties:** stamp duty 5.5% + transfer duty 1.5% + registration fee 0.5% = **7.5%**, in force since 22 Jul 2021. Before that it was 4% + 1.5% + 0.5% = 6%; many blogs still show 6%, which is out of date. Source: https://realtyhunting.com/stamp-duty-in-telangana
- **Split in rural vs municipal areas:** a government training deck (MCRHRDI, 12 Feb 2026) lists stamp duty 5.5%, transfer duty 1.5% and registration fee 0.5% in municipal areas, a 2.0% registration fee in rural (gram panchayat) areas, and a 0.1% mutation fee (https://mcrhrdi.gov.in/2026/group1/week4/Rajiv%20Gandhi%20Hanumanthu,%20IAS%20MCRHRDI%20-%20R&S%2012.02.2026.pdf). Another source says rural areas pay no transfer duty, with 5.5% + 2% giving the same 7.5% total. **Budget 7.5–8% in total.**
- **What the duty is charged on:** the higher of the price actually paid and the government market value (https://realtyhunting.com/stamp-duty-in-telangana). Beyond the ORR the government value is usually far below market (section 1), so **in practice the 7.5% is charged on the price paid**.
- **The June 2026 revision did not change these rates.** A Telangana Today item (Jun 2026) says a stamp-duty increase is possible (https://telanganatoday.com/telangana-govt-likely-to-increase-stamp-duty).
- **Mutation (updating the land record):**
  - Under Bhu Bharati, registering a sale triggers mutation automatically and the fee is collected at registration (https://1acre.in/guides/telangana/bhu-bharati-mutation).
  - An aggregator quotes ~₹2,500/acre for succession mutation, within a ₹100–2,500/acre range by land type. This is unverified (https://realtyhunting.com/bhu-bharati-telangana).
  - Agricultural sales are registered at the Tahsildar's office (the Tahsildar acts as joint sub-registrar) through online slot booking (https://telanganatoday.com/dharani-portal-agri-registrations-made-easy-swift).
  - The Bhu Bharati Act took effect on 14 Apr 2025, and the portal went statewide on 2 Jun 2025 (https://apacnewsnetwork.com/2025/04/bhu-bharati-telangana-shifts-to-new-land-records-portal-replaces-dharani-system).
- **Broker commission, and legal/survey checks:** not found. Estimates: broker 1–2%; legal and survey ₹15,000–75,000 (E).
- **Verification risk:** several 1acre listings say the survey number "could not be verified due to unavailability of cadastral maps". Budget for an independent survey (E).

### 4. Transport costs from farm to Hyderabad

**Hiring a vehicle**
- **Porter (Hyderabad):**
  - Tata Ace in-city base fare ₹200–218, which includes 2 km and 70 minutes of waiting.
  - Out-of-city fares: ₹1,711 for 54 km (to Rangareddy) and ₹5,940 for 202 km (to Khammam). These work out to ₹29–32 per one-way km. The page may refer to the 8 ft pickup rather than the Ace.
  - Porter takes on-demand bookings only, with no advance booking. Being rural, the farm may struggle to get a pickup from Porter.
  - Sources: https://porter.in/trucks/tata-ace-in-hyderabad ; https://porter.in/rent-mini-trucks-in-hyderabad/tata-ace ; https://porter.in/rent-mini-trucks-in-hyderabad
- **TransRentals (LB Nagar):** Tata Ace ₹1,499/day including driver and fuel for up to 100 km; ₹15/km beyond that; half-day ₹799. The 14 ft truck starts at ₹1,499, with out-of-city trips charged per km (https://transrentals.in/mini-truck-rental/hyderabad/lb-nagar ; https://transrentals.in/transporter). For a farm d km away the truck drives 2d km, so the cost is 1,499 + 15 × (2d − 100). At d = 100 that is ₹2,999, again **≈ ₹30 per one-way km**.
- **TruckGuru (full-truck long-haul, tolls extra):**
  - Hyderabad → Bengaluru (563 km): Tata Ace ₹17,100–18,800 (₹30–33/km); 14 ft ₹20,600–22,800 (₹37–40/km).
  - Pune → Hyderabad (560 km): 14 ft ₹20,460–22,700.
  - Sources: https://truckguru.co.in/bangalore-to-hyderabad-transport-company ; https://truckguru.co.in/pune-to-hyderabad-transport-service
- **Mover blog:** Tata Ace ₹14–18 per km driven; helper ₹300–400; tolls, parking and GST extra (https://mover.delivery/blog/tata-ace-on-rent).
- **Pickup trucks:** an undated listing with no city gives ₹30/km for a 2-tonne pickup (https://m.indiamart.com/impcat/bolero-pickup.html).
- **Empty-return practice (D):** quoted one-way rates (₹29–33/km) are about twice the per-km-driven rates (₹14–18/km). So one-way pricing **includes the empty return**.
- **Not found:** 17 ft and 19 ft truck rates, waiting charges beyond Porter's included 70 minutes, and the daily allowance (bata) for drivers on out-of-city trips.

**Fuel (Hyderabad)**
- 7–8 Nov 2026: **petrol ₹116.15/L, diesel ₹104.23/L, CNG ₹112/kg** (https://kalingatv.com/business/petrol-diesel-prices-today-november-8-2026-check-rates-in-major-cities/ ; https://english.punjabkesari.com/india/petrol-diesel-and-cng-prices-today-7-november-2026-new-fuel-rates-released-ahead-of-diwali-check-prices-in-delhi-patna-and-other-cities ; https://www.goodreturns.in/diesel-price-in-hyderabad.html ; https://www.v3cars.com/telangana/diesel-price-in-hyderabad).
- **Why prices are high:** pump prices were raised on 15 May 2026 for the first time in over 4 years (petrol +₹3.39, diesel +₹3.26 in Hyderabad), during the US–Iran–Israel / Strait of Hormuz crisis. Several further hikes followed. By 25 May petrol was ₹115.62 and diesel ₹103.76; on 29 Sep diesel was ₹103.82. Before May 2026 petrol was about ₹107.4, a figure still shown on outdated pages.
  - Sources: https://www.businesstoday.in/india/story/petrol-diesel-prices-hiked-in-telangana-check-new-rates-in-hyderabad-warangal-nizamabad-and-other-cities-528366-2026-05-15 ; https://telanganatoday.com/fuel-prices-in-hyderabad-increase-after-fourth-hike ; https://www.thehansindia.com/business/market-compass/petrol-and-diesel-prices-today-in-hyderabad-delhi-chennai-and-mumbai-on-29-september-2026-1126840
- Brent crude was ~$98/bbl in early Nov 2026, down from nearly $117 in October (Punjab Kesari link above). **Fuel is a volatile input; run a ±10% sensitivity.**

**Tolls**
- **ORR, 2025-26 schedule:**
  - LCV/mini-bus ₹3.94/km (from ₹3.77); car ₹2.44/km (from ₹2.34); bus or 2-axle truck ₹7/km; 3-axle ₹9.01/km. Charges are rounded to the nearest ₹10.
  - Sources: https://www.siasat.com/hyderabad-hike-in-orr-toll-tariff-comes-into-effect-from-today-3201551/amp ; https://deccanchronicle.com/southern-states/telangana/toll-charges-for-orr-rise-vijayawada-falls-1870118 ; https://www.thehansindia.com/news/cities/hyderabad/toll-hike-on-hyderabads-outer-ring-road-begins-april-1-2025-959397
  - **Conflict:** Telangana Today (Feb 2026) says the ORR operator skipped the April 2025 revision and was still charging April 2024 rates, with a revision likely from 1 Apr 2026 (https://telanganatoday.com/hyderabad-qr-code-based-payments-to-be-implemented-in-19-orr-interchange-toll-plazas-from-april-1). Use ₹3.8–4.1/km.
- **NH65 east (Hyderabad–Vijayawada), from 1 Apr 2025:**
  - Pantangi: LCV ₹125 one-way / ₹190 return (down from ₹150/₹230).
  - Korlapahad: ₹195 / ₹295.
  - Chillakallu (in Andhra Pradesh): ₹165 / ₹250 (up from ₹110/₹160).
  - Sources: https://newsmeter.in/top-stories/travellers-between-hyderabad-and-vijayawada-to-pay-less-toll-fees-from-april-1-746112 ; https://assets.thehansindia.com/telangana/toll-charges-to-be-cut-on-hyd-vij-nh-65-958842
  - Siasat and Munsif print "₹25/₹40" for Pantangi LCVs (https://www.siasat.com/nhai-reduces-toll-fees-on-hyderabad-vijayawada-national-highway-3201350). This matches the size of the *reduction* (150 − 125 and 230 − 190), so it is probably not the rate (my interpretation).
- **NH44 south:** Raikal plaza (km ~54, near Shadnagar), LCV rate not found. A "Shadnagar" plaza page gives a car single trip of ₹85 (https://www.bajajfinserv.in/shadnagar-toll-plaza ; https://www.bajajfinserv.in/raikal-toll-plaza). Estimated LCV single trip ₹130–150 (E).
- **Not found:** toll rates for the NH163 Gudur plaza, NH44 north plazas and Rajiv Rahadari plazas. I found no plaza data at all for the Chevella–Vikarabad road, the Srisailam highway (NH765) or the Sagar road; check before assuming they are toll-free.
- **Vehicles without FASTag** have paid 2× in cash or 1.25× via UPI since 15 Nov 2025 (https://tollguru.mapup.ai/telangana-toll-roads).

**Owning a small goods vehicle**
- **Tata Ace:**
  - Ace Gold diesel: ~₹5.99 L (CarDekho, probably ex-showroom); ₹6.52 L ex-showroom in Pune.
  - Ace Gold petrol CX in Hyderabad: ₹4.50–5.16 L. Ace HT Plus in Hyderabad: ₹7.19 L.
  - Mileage ~21–22 km/l. A 15 kmpl figure on one page looks like an outlier.
  - Sources: https://trucks.cardekho.com:443/en/trucks/tata/ace-gold ; https://trucks.tractorjunction.com/en/tata-truck/ace-gold-diesel/price/pune ; https://trucks.tractorjunction.com/en/tata-truck/ace-gold-cx/price/hyderabad
- **Mahindra Bolero Pik-Up Extra Long 1.7 t:**
  - Hyderabad ex-showroom ₹8.85–9.12 L; on-road ₹10.72–11.04 L. Payload 1,700 kg; 14.3 km/l.
  - Bolero MaXX Pik-Up HD 1.7: ₹10.18–10.33 L.
  - Sources: https://trucks.tractorjunction.com/en/mahindra-truck/bolero-pikup-extralong/price/hyderabad ; https://www.cardekho.com/mahindra/bolero-pik-up/price-in-hyderabad ; https://trucks.tractorjunction.com/en/mahindra-truck/bolero-maxx-pik-up-hd-17l-vxi/price/hyderabad
- **Used:** 2018 Ace Gold Diesel Plus in Hyderabad ₹2.85 L (https://trucks.tractorjunction.com/en/used-truck/tata/ace-gold-diesel-plus-18725); 2021 Ace in Salem ₹2.55 L (https://tractorkarvan.com/used-commercial-vehicle-in-tamil-nadu/tata). GaadiBazaar shows 368 used Ace XL listings in Hyderabad (https://gaadibazaar.in/used-second-hand-tata-motors-ace-xl-trucks-in-hyderabad-for-sale).
- **Insurance:** Tata Ace third-party cover is ~₹15,746 + GST when carrying goods for hire and ~₹8,432 + GST for the owner's own goods. Ace Gold (1,835 kg gross weight) third-party is listed at ₹16,049. The third-party premium is set by the insurance regulator (IRDAI) by gross vehicle weight. Sources: https://policybazaar.com/motor-insurance/commercial-vehicle-insurance/tata-motors/ace ; https://www.policybazaar.com/motor-insurance/commercial-vehicle-insurance/tata-motors ; https://www.stashfin.com/blogs/tata-ace-insurance-price
- **Running cost (D/E):** diesel at ₹104.23/L ÷ 16–22 km/l = ₹4.7–6.5/km, plus maintenance and tyres of ₹1.5–2.5/km (E, not found). **About ₹7/km.**
- **Driver salary:** Indeed's Hyderabad driving jobs pay ₹14,952–25,702/month; truck drivers ₹14,124. Job posts show ₹14,720–20,000, ₹15,000–18,000 and ₹20,000–25,000; one listing site shows commercial drivers at ~₹24,000–26,000. Sources: https://in.indeed.com/explorer/driving-jobs-hyderabad,-ts ; https://www.jobhai.com/driver-driver-job-in-krishna-cars-ramanthapur-hyderabad-5-to-6-plus-years-1778575068-7645673-jid ; https://helpersnearme.com/workers/commercial-driver-shamshabad-hyderabad
- **Own vs hire, break-even (D/E):**
  - Own vehicle fixed cost ≈ ₹80,000/yr, or ≈ ₹3 L/yr with a dedicated driver.
  - At d = 100 km: hiring costs ~₹3,000 per trip against ~₹1,400 per trip in running cost for your own vehicle (2 × 100 km × ₹7).
  - Break-even ≈ 190 trips/yr with a dedicated driver, or ≈ 50 trips/yr if a farm worker drives.

**Plant-specific transport**
- **Deck sizes:**
  - Tata Ace Gold petrol/diesel: 7.2 × 4.9 ft (~2.19 × 1.49 m = 3.27 m²). CNG / Plus versions: 8.2 × 4.9 ft (2,520 mm long). Ace CNG payload 640 kg (https://www.trucksbuses.com/compare-scv-pick-ups-mini-trucks-vans/tata-ace-gold-petrol-vs-tata-ace-gold-petrol-cx-clb ; https://trucksbuses.com/compare-scv-pick-ups-mini-trucks-vans/tata-ace-cng-cab-chassis-vs-tata-ace-gold-cng ; https://smalltrucks.tatamotors.com/bn/node/2013).
  - Ace payload by model: 750–900 kg; HT Plus 1,000–1,250 kg (https://www.91trucks.com/blog/best-tata-ace-payload-capacity-guide-model-wise-comparison-and-use).
  - 14 ft trucks: body width ~6.7–7 ft (Eicher examples: 2,125 mm and 6.67 ft); payload ~2.5–3 t (Eicher Pro 2049 14 ft) to ~4 t (Pro 2059XP 14 ft) (https://www.motorbazee.com/eicher/pro-2049-plus/14-ft-overview ; https://trucks.tractorjunction.com/en/eicher-truck/pro-2059xp-3770hsd/specifications ; https://www.trucksbuses.com/trucks/cargo-truck/eicher-pro-2110-6s/specifications).
- **Pots per load (D/E, my calculation):**
  - Pot top diameters: 4-inch ≈ 10 cm, 6-inch ≈ 15 cm, 8-inch ≈ 20 cm, packed in a square grid.
  - **Tata Ace, single layer:** 21×14 ≈ 290 (4-inch); 14×9 ≈ 125 (6-inch); 10×7 ≈ 70 (8-inch).
  - **Tata Ace, racked, with ~15% of floor space lost to rack frames:**
    - 4-inch: 4 tiers ≈ 1,000 pots at ~0.6 kg each ≈ 600 kg + racks.
    - 6-inch: 3 tiers ≈ 320 pots at ~1.75 kg each ≈ 560 kg.
    - 8-inch: 2 tiers for short plants ≈ 120 pots at ~4.5 kg each ≈ 540 kg.
    - **The ~750 kg payload, not floor space, is the binding limit for the larger pots.**
  - **14 ft truck (≈ 8.5 m²):** single layer ≈ 840 / 360 / 210; racked (5, 4 and 2 tiers) ≈ 3,600 / 1,250 / 360. Pot weights per size are my estimates (E).
  - **Fruit and vegetables** (dragon fruit, exotic vegetables) are limited by weight: Ace ≈ 0.64–0.9 t, Bolero 1.3–1.7 t, 14 ft 2.5–4 t.
- **Covered body:** a nursery's transport advice says plants must travel in a covered vehicle; an open truck bed causes wind damage (Australian nursery: https://yuruga.com.au/stock-lists). No Indian rule was found, but a canopied Ace or closed container body is standard practice (E).
- **Transit damage:**
  - No India-specific source on loss of potted plants.
  - A US nursery reports damage of 0.02% of shipments (best practice): https://diggermagazine.com/though-almost-inevitable-damage-claims-can-be-minimized-with-the-right-moves/
  - An Indian research table shows 3.8–8.9% "transport damage" for flower/plant items, but its labels are garbled: https://indiaagronet.com/indiaagronet/Research%20Update/Table%202.htm
  - **Default 3%, range 1–8% (E).**
- **Kadiyam (East Godavari, Andhra Pradesh) → Hyderabad:**
  - No published per-trip freight rate found. Kadiyam nurseries (e.g. Mahindra Nursery) say transport and driver charges are quoted separately, vehicles are sized to the order, and Hyderabad is served (https://mahindranursery.com/pages/wholesale-orders ; https://mahindranursery.com/pages/nationwide-shipping).
  - **Estimate (D/E):** road distance ~430–450 km (E) × TruckGuru rates gives a Tata Ace ≈ ₹13,000–15,000 one-way and a 14 ft truck ≈ ₹16,000–18,000, plus NH tolls.
  - A government tender for moving coconut seedlings mentions 6–7 t lorries carrying ≥1,500 seedlings (https://tenders.infralens.in/tender/transportation-of-planting-materials-2026-agri-855284-1).

**Owner travel**
- **Car fuel (D):** ₹116.15/L ÷ 15–18 km/l = **₹6.5–7.7/km**. An online calculator gives ₹5–7/km at ₹102/L (https://desiutility.com/petrol-diesel-cost-per-km-calculator).
- **Car wear and depreciation:** add ₹2–3/km for maintenance and tyres (E). A ₹10 L car is worth ₹6–7 L after 3 years (https://calcwise.finance/?p=2366). That is ≈ ₹1–1.3 L/yr of depreciation, or ₹8–11/km at 12,000 km/yr; this is mostly a cost of owning the car rather than of each trip.
  - **Extra cost per trip ≈ ₹9–12/km; full cost including depreciation ≈ ₹15–20/km.**
- **Two-wheeler:** ₹116.15 ÷ 45–55 km/l = ₹2.1–2.6/km fuel; ≈ ₹3–4/km in total (D/E).
- **Time:** ₹70,000/month salary ÷ ~176 working hours ≈ ₹400/h (D). At ~40 km/h door to door (E), a 100 km farm costs ~5 hours per round trip, about ₹2,000 of the owner's time plus ~₹2,000 for the car.

### 5. Market wages for labour

- **Official rural wage series (Labour Bureau WRRI / RBI Handbook) for Telangana: figure not retrieved** (see section d).
  - Nearest data: **Andhra Pradesh 2024-25, men, general agricultural labourers ₹463.2/day; all-India ₹398/day** (RBI series via https://dataful.in/datasets/21427/).
  - The Labour Bureau's rural-wages page shows ₹465.76 for men general agricultural labourers, but the snippet does not say which state or period. The bureau moved to a revised sample of 787 villages in 34 states and UTs, used from July 2025 (https://www.labourbureau.gov.in/rural-wages).
  - The Telangana figure is in RBI Handbook of Statistics on Indian States 2024-25, Table 113 (https://website.rbi.org.in/documents/d/rbi/HSIS202425_T113).
- **What is actually being paid (news):**
  - **Nalgonda (~100 km), paddy transplanting season:** women ₹800/day (up from ₹600 the previous season); men ₹1,100 for carrying seedlings to the fields. These high wages are pushing farmers to direct seeding (~early 2026): https://www.deccanchronicle.com/southern-states/telangana/rising-labour-wages-push-nalgonda-paddy-farmers-to-direct-sowing-1927667
  - **Adilabad (remote):** women ₹250/day against ₹500 for men (2026, dry spell): https://www.deccanchronicle.com/southern-states/telangana/dry-spell-hits-livelihoods-of-women-farm-labourers-in-erstwhile-adilabad-district-1974018
  - **Adilabad cotton picking:** ₹800–900/day for 100–110 kg picked, against a usual ~₹200 (Nov 2024): https://deccanchronicle.com/southern-states/telangana/telangana-peak-cotton-picking-season-may-hit-census-in-adilabad-1835969
- **Near Hyderabad (anchor for W1):**
  - Landscape/nursery labour at Gamlaa Bioscapes, Chevella (~40 km): ₹14,000–18,000/month in hand, ≈ ₹540–690/day over 26 days (https://www.jobhai.com/hi/peon-helper-job-in-gamlaa-bioscapes-private-limited-chevella-hyderabad-0-to-6-plus-years-1781603741-7818110-jid).
  - A mali in Banjara Hills expects ₹13,000/month (https://helpersnearme.com/workers/mali-gardener-banjara-hills-hyderabad).
- **Labour availability:**
  - Adilabad cotton growers depend on migrant workers from Maharashtra, Odisha and other states because of local shortages (Nov 2025): https://telanganatoday.com/adilabad-cotton-farmers-rely-on-migrant-labour-as-costs-rise
  - North-Indian migrant labour into Telangana is an older trend (Hans India, 2021): https://assets.thehansindia.com/news/cities/nizamabad/nizamabad-labourers-from-north-indian-states-flock-south-for-employment-692944
  - No source was found specifically on farm workers near Hyderabad moving to construction (see section d).
- **Do wages fall with distance?**
  - Off-peak, roughly yes: about ₹550–700/day (male) near the city against ₹450–500 in rural areas (AP series ₹463; Adilabad men ₹500). That is ~15–30% lower (E).
  - In peak seasons, remote districts pay as much or more (Nalgonda ₹800–1,100). Women's wages are 50–80% of men's.
- **Floor for what labour will accept:** the new rural employment scheme pays ₹308/day in Telangana from 1 Jul 2026 (MGNREGA was ₹307 in 2025-26). Mentioned for context only; scheme rules belong to another agent. Sources: https://www.deccanchronicle.com/southern-states/telangana/ap-telangana-get-312-and-308-daily-wages-under-new-rural-employment-scheme-1967536 ; https://www.hyderabadnewshunt.com/central-government-increases-mgnrega-wages-across-states
- **Monthly salaries, Hyderabad region:**
  - **Mali / nursery gardener:** ₹13,000–18,000 (links above). National data: gardeners and nursery growers typically start at ₹13,823–35,004 net/month (2025): https://prd.wageindicator.org/en-in/work-in-india/role-and-pay/india-gardeners-horticultural-and-nursery-growers
  - **Farm supervisor / manager:** a Hyderabad farm-manager post (May 2023) offers ₹20,000–30,000/month for 1–3 years' experience (https://www.expertia.ai/suchirindia-in/job/hiring-farm-manager-6465fcb2b5ce93123d7749e7). Another farm post offers ₹12,000–20,000 (https://www.simplyhired.co.in/job/cHya-KP2jDVUMhC3oAoW5PzOSOdQDV85LW4cAr5p1Drf-N7GIoiaKQ). Self-reported AmbitionBox ranges for Hyderabad: farm supervisor ₹1.2–6.5 L/yr, farm manager ₹2.5–18 L/yr (https://ambitionbox.com/profile/farm-supervisor-salary).
  - **Driver:** ₹15,000–25,000 (section 4).
  - **Watchman:** ₹10,000–12,000 (Jeedimetla); ₹10,000–11,000 **with accommodation** (Mansoorabad); security guards ₹14,000–19,000; Indeed average for security jobs ₹13,745. Links: https://www.jobhai.com/security-guard-watchman-job-in-power-equipments-jeedimetla-hyderabad-1-to-2-years-1768810748-7158740-jid ; https://www.jobhai.com/security-guard-house-watchman-job-in-e-abhyas-academy-mansoorabad-hyderabad-1-to-5-years-1785132927-8048481-jid ; https://in.indeed.com/explorer/security-jobs-hyderabad,-ts
- **Is accommodation usually given?** It appears as a benefit in watchman listings, and farm job descriptions mention pay "supplemented with housing". It is common for workers who live on site but not universal (partly sourced).

---

## d) Gaps and caveats

1. **Search limits.** WebFetch could not reach 1acre.in or deccanchronicle.com from this session; those domains would need to be allowed in the network settings. All numbers were read from search-engine summaries of the cited pages. The shared web-search budget then ran out, so the items below could not be researched further. A follow-up session could continue.
2. **Not found (estimates given where useful):**
   - The Telangana-specific official rural wage figures (Labour Bureau / RBI Table 113) for general agricultural, horticulture and non-agricultural labour and tractor drivers.
   - Broker commission; legal and survey costs.
   - 17 ft and 19 ft truck rates; waiting charges; driver daily allowance.
   - LCV tolls at Raikal, Gudur, NH44 north and Rajiv Rahadari plazas.
   - Ace maintenance cost per km.
   - Kadiyam → Hyderabad freight; transit damage % for potted plants in India.
   - Multi-year horticulture lease terms; lease rents close to Hyderabad.
   - Evidence of farm workers moving to construction near Hyderabad.
   - Farmland prices for Maal, Aler, Ghatkesar and Shadnagar town specifically (neighbouring mandals used instead).
3. **Distances** are my estimates (±10%) from Lakdikapul, not sourced.
4. **Listing data:**
   - Asking prices only, mostly undated; several are flagged as more than 18 months old.
   - Mandal "ranges" include plotted parcels quoted per square yard, which inflates the high end.
   - Listing counts and prices differ between the Hindi and English versions of the same page.
   - Some listings could not be checked against the cadastral (survey) maps.
   - The fitted curve (L1) and direction multipliers (L2) are my derivations. Treat them as ±30% at any single village.
5. **Date uncertainty:**
   - Telangana Today pages show the site's current date in the header, not the article date.
   - Deccan Chronicle and Hans India dates marked "~" are estimated from article-ID sequences.
   - The Hindu items read via inkl are undated.
6. **Conflicting figures I found:**
   - ORR toll: 2025-26 rates (₹3.94/km for LCVs) against the claim that the April 2025 revision was skipped.
   - Pantangi LCV toll: ₹125 against ₹25 (the latter is probably the reduction amount).
   - Previous minimum agricultural value: ₹1.75 L against ₹75,000.
   - Future City price rise: to ₹1.8 Cr against ₹2.5–4 Cr.
   - Mileage: Ace 15 against 21–22 km/l.
   - Gardener salary aggregators: about ₹9,000/month against ₹13,800+.
7. **Fuel prices are elevated and volatile** after the May–June 2026 crude shock. Run a ±10% sensitivity on fuel-based costs.
8. **Not advice on legality.** The duty base (higher of price paid or government value) is described as reported; the buyer should confirm with the sub-registrar or Tahsildar and a lawyer.

---

## Appendix: worked example for the equation (illustrative, per acre or per year)

Assumptions:
- One hired Tata Ace delivery per week (52 trips/yr); owner visits weekly by car (52/yr); one full-time worker for 300 days/yr.
- Defaults from section a; no tolls; direction multiplier 1.0.
- Land shown as the purchase price per acre (the orchestrator converts it to an annual cost with its own interest rate) and as a lease.

| d (km) | P(d) asking, ₹ Cr/acre | Lease, ₹/acre/yr | Hired transport, ₹/yr (max(1,500, 30d) × 52) | Owner car, ₹/yr (2d × ₹10 × 52) | Owner time, ₹/yr (2d ÷ 40 × ₹400 × 52) | 1 worker, ₹/yr (male wage × 300) |
|---|---|---|---|---|---|---|
| 40 | 1.97 | 15,000–35,000 | 78,000 | 41,600 | 41,600 | 1,95,000 (₹650) |
| 70 | 0.86 | 15,000–35,000 | 1,09,200 | 72,800 | 72,800 | 1,65,000 (₹550) |
| 100 | 0.49 | 15,000–35,000 | 1,56,000 | 1,04,000 | 1,04,000 | 1,42,500 (₹475) |
| 130 | 0.36 | 15,000–35,000 | 2,02,800 | 1,35,200 | 1,35,200 | 1,42,500 (₹475) |

What the example shows:
- Going from 40 to 100 km cuts the purchase price per acre by about ₹1.5 Cr.
- Over the same move, transport plus owner travel and time rise by about ₹2 L/yr, and labour falls by about ₹50,000/yr.
- Past ~100 km, land barely gets cheaper (floor ~₹30–40 L) while travel keeps rising.
- If leasing, land cost is roughly flat with distance, so the cost-minimising distance moves closer to the city.
