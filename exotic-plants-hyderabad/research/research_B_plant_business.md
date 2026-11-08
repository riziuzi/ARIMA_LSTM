# Exotic-plant business near Hyderabad: market, prices, production, costs and benchmarks (Research B)

*Prepared 8 Nov 2026 as input for an interactive profit calculator. This section covers demand, selling prices, production parameters, input costs, capex, labour **requirement** and real-world benchmarks. Land, rent, transport, wage rates, subsidies, rules, taxes and loans are covered by other agents.*

**How to read this**
- **Default** is the suggested calculator default. **Range** is what the sources show. **Est.** marks my own estimate where no source was found, with the reasoning given.
- Most price and cost points are marketplace listings (IndiaMART, TradeIndia, ExportersIndia), company or blog pages, or older government cost norms. Treat them as indicative asking prices, not transaction prices. Data older than 2025 is labelled with its year.
- **Method limits.** I ran 68 web searches. Direct page fetches were blocked by the session's network allowlist (nhb.gov.in, nabard.org, napanta.com, telanganatoday.com and hyderabadnewshunt.com all failed to resolve), so figures from those pages come from search-result extracts. The shared web-search budget ran out before the final labour-norm searches. Items marked "not found" can be filled in a follow-up if the limit is raised or those domains are allowed.

---

## a) Model defaults

### Model A: Exotic ornamental pot-plant nursery under shade net (main focus)

| Parameter | Default | Realistic range | Unit | Source URL(s) / basis |
|---|---|---|---|---|
| Wholesale price, 4" foliage / small plant | 30 | 15–60 | ₹/plant | Rajahmundry (Kadiyam belt) "indoor decorative plants" ₹25, MOQ 50: [TradeIndia](https://www.tradeindia.com/manufacturers/decorative-plant.html); TC Aglaonema 3–5" net-pot ₹35–40, MOQ 500: [ExportersIndia](https://www.exportersindia.com/indian-suppliers/aglaonema-plant.htm) |
| Wholesale price, 6" foliage (mix of common and premium) | 75 | 40–150 | ₹/plant | Red Aglaonema ₹100, MOQ 100 (Rajahmundry): [ExportersIndia Rajahmundry](https://www.exportersindia.com/rajahmundry/aglaonema-plant.htm); Aglaonema ₹85–100, MOQ 500: [ExportersIndia](https://www.exportersindia.com/indian-suppliers/aglaonema-plant.htm); areca palm ₹100: [IndiaMART](https://m.indiamart.com/impcat/arecanut-plant.html) |
| Wholesale price, 8" | 180 | 120–350 | ₹/plant | Est. (scaled from 6"); 1.5-ft Aglaonema B2B ₹549: [IndiaMART Plant Junction](https://m.indiamart.com/plantjunction76-noida) |
| Wholesale price, 10"+ specimen | 400 | 250–1,000+ | ₹/plant | Est.; Kadiyam-mandal red Aglaonema listed at ₹999: [ExportersIndia Rajahmundry](https://www.exportersindia.com/rajahmundry/aglaonema-plant.htm); Kadiyam "indoor plants" ₹1,700 (large): [IndiaMART](https://m.indiamart.com/impcat/indoor-plants.html) |
| Wholesale price, succulent/cactus 3–4" | 40 | 15–100 | ₹/plant | Mini cactus 4" ₹15: [IndiaMART](https://m.indiamart.com/impcat/cactus-plants.html); 3" succulents ₹90–99 (small-MOQ B2B): [IndiaMART](https://m.indiamart.com/impcat/succulent-plant.html) |
| Wholesale price, Phalaenopsis orchid (in spike or bloom) | 350 | 225–550 | ₹/plant | Grower listing ₹225: [IndiaMART](https://m.indiamart.com/krishnanandanam-orchids); retail ₹565–849 (MRP ₹899–1,200): [Paudhewale](https://www.paudhewale.com/product/phalaenopsis-west-cost-fireworks-medium-size-orchid-plant), [take.app seller](https://take.app/yoursplants/p/cmcsslbd8000ojl04o7jiwwq4) |
| Retail ÷ wholesale multiple | 2.5× | 2–4× | — | Online retail for common plants ₹169–599: [Nurserylive](https://nurserylive.com/a/s/collections/sale-plants-under-299), [Chhajed Garden](https://www.chhajedgarden.com/collections/all/products/variegated-monstera-deliciosa-rare-indoor-plant), compared with the B2B prices above |
| Plants per m² of gross shade-net area per cycle, 4" pot | 60 | 45–70 | plants/m² | Pot-to-pot ≈96/m² (geometry) × ~70% area utilisation; PAES 415 dense packing: 120 mm pot = 64/m²: [PAES 415](https://amtec.uplb.edu.ph/wp-content/uploads/2019/07/415.pdf) |
| … 6" pot | 25 | 18–30 | plants/m² | ≈43/m² pot-to-pot × 70%, less spacing as plants grow; PAES dense packing: 170 mm = 36/m² (same source) |
| … 8" pot | 14 | 10–17 | plants/m² | Geometry ≈24/m² × 70%, less canopy spacing (Est.) |
| … 10" pot | 9 | 6–11 | plants/m² | Geometry ≈15.5/m² × 70% (Est.) |
| Cycle length (liner to saleable), 4" | 4 | 2.5–5 | months | Syngonium 4" in 10–12 weeks: [Agristarts](https://www.agristarts.com/index.cfm/fuseaction/plants.printDetail/plant_id/118/index.htm); green Aglaonema 4" in 3–4 months: [GPN Mar 2019](https://nxtbook.com/greatamericanmediaservices/GPN/march-2019/index.php?startid=26) |
| … 6" | 6 | 3–9 | months | Syngonium 6" in 12–16 weeks (Agristarts); Aglaonema 1-gal in 5–6 months, coloured cultivars longer (GPN). Default adds a buffer for Hyderabad summer heat (Est.) |
| … 8"–10" | 12 | 8–14 | months | Aglaonema 'Silver Moon' needs 12–14 months to a 25-cm pot from a rooted cutting: [US patent PP12973](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/PP12973) |
| Cycles per year (6") | 2 | 1.3–4 | cycles/yr | 12 ÷ cycle length |
| Mortality plus unsold/discarded | 20 | 10–35 | % of plants started | **Not found.** Est.: 5–10% establishment and pest/heat losses plus 10–15% unsold or dumped ageing stock |
| Input cost per 6" plant (liner, pot, media, fertiliser/chemicals, sleeve) | 42 | 25–60 | ₹/plant | Liner ₹10–40, 6" pot ₹9, media ₹5–10 (Est.), fertiliser and chemicals ₹2–5 (Est.), sleeve ₹2–5 (Est.). See §4 |
| Input cost per 4" plant | 20 | 12–35 | ₹/plant | Bulk liner or own cutting ₹8–12, 4" pot ₹6, media ₹2–3, other ₹2–3. At ₹30 sale price the margin is thin unless you propagate your own cuttings |
| Shade-net house (GI pipe, 50% net) | 600 | 400–800 | ₹/m² | MIDH/NHB norm ₹710 (tubular): [NHB cost norms](https://nhb.gov.in/hindi/pdf/Cost%20Norms.pdf); IndiaMART GI net house ₹480 and 50% shade-net house ₹710: [IndiaMART](https://m.indiamart.com/impcat/net-house.html); blog ₹200–400: [Organic Mandya](https://www.organicmandya.com/farming/methods/shade-net-farming/) |
| Misting/fogger lines | 50 | 20–150 | ₹/m² | Est. from kit prices (100-nozzle nursery system ₹15,000): [IndiaMART Nency Plastech](https://m.indiamart.com/nencyplastech/mist-nozzle.html). A premium low-pressure misting system is ₹50,000 for up to 500 sq ft (≈₹1,000/m²): [IndiaMART Green Tech](https://m.indiamart.com/green-techsolution/misting-systems.html) |
| Irrigation to pots (hose, sprinkler or drip) | 30 | 10–60 | ₹/m² | Est.; field drip costs ₹35,000–80,000/acre (≈₹9–20/m²): [Tractor For Everyone (Nov 2025)](https://www.tractorforeveryone.com/knowledge-center/best-drip-irrigation-system-for-indian-farmers-cost-setup-tips), [Organic Mandya](https://www.organicmandya.com/farming/methods/drip-irrigation-cost-per-acre-india/) |
| Benches / floor | 0 (weed mat on ground) | 0–300 | ₹/m² | **Not found.** Est. |
| Borewell (400–600 ft) with casing, 5 HP submersible and panel | 2.5 lakh | 1.5–5 lakh | ₹ lump sum | Drilling ₹100–150/ft (2025): [Farmonaut](https://farmonaut.com/?p=123328); casing ₹300–650/ft for the top 20–60 ft: [StudioMatrx](https://www.studiomatrx.org/guides/borewell-plumbing-cost-india); 5 HP submersible ₹35–55k: [Infralens BOQ](https://infralens.in/boq/borewell-tubewell); Telangana borewells cost ₹1–2 lakh: [Telangana Today (2026)](https://telanganatoday.com/telanganas-water-crisis-forces-farmers-to-turn-to-open-wells) |
| Fencing, barbed wire | 60 | 50–75 | ₹/running ft | ₹16,000–25,000 per 100 m and ₹200–400/m installed: [Agrifarming](https://www.agrifarming.in/1-acre-fence-cost-in-india-agriculture-types), [Organic Mandya](https://www.organicmandya.com/farming/farm-setup/farm-fencing-complete-guide/) |
| Fencing, chain-link | 100 | 60–200 | ₹/running ft | ₹200–400/m installed (≈₹60–120/ft), low-reliability blog: [Organic Mandya](https://www.organicmandya.com/farming/farm-setup/types-of-farm-fencing-cost-comparison/). The upper end is my Est. for RCC posts. Installation labour ₹25–45/rft: [Just Fence](https://justfence.in/?p=35826) |
| Shed / store / worker room | 250 | 180–400 | ₹/sq ft | Storage shed ₹180–210/sq ft: [agri-shed guide](https://vigupta9246.github.io/RR-TEEN-SET-SOLUTION/agricultural-shed-delhi-ncr-poultry-dairy.html); basic warehouse shed ₹250–350/sq ft (Mar 2026): [Chennai shed blog](https://heavystructuralfabrication.blogspot.com/2026/03/warehouse-shed-construction-cost-chennai.html) |
| Water sump/tank | 10 | 6–15 | ₹/litre of capacity | **Not found.** Est. |
| Annual maintenance (structure and systems) | 3 | 2–5 | % of capex/yr | **Not found.** Est. |
| Structure life: GI frame / shade net | 15 / 4 | 10–20 / 3–5 | years | **Not found.** Est. (UV-stabilised HDPE net is typically replaced every few years) |
| Labour | 1.5 | 1–3 | workers per 1,000 m² | US rule of thumb is 1 field worker per acre of containers (mechanised, excludes sales): [Oregon State](https://horticulture.oregonstate.edu/department-horticulture/nursery/labor). Indian manual-nursery figure is Est.; see §6 |

### Model B: Exotic vegetables in a naturally ventilated (NV) polyhouse

| Parameter | Default | Realistic range | Unit | Source URL(s) / basis |
|---|---|---|---|---|
| Coloured capsicum wholesale price | 80 | 40–150 (short spikes to 300) | ₹/kg | ₹60–300/kg, average ₹100 (Maharashtra farmer, 2025 season): [ICAR success story](https://icar.org.in/en/protective-cultivation-polyhouse-success-story-coloured-capsicum-production); blogs ₹40–180 and ₹60–150: [Agrifirst](https://agrifirst.in/blog/colored-capsicum-polyhouse-economics-cost-yield-profit), [ProtectedCultivation](https://www.protectedcultivation.com/capsicum-economics) |
| English (seedless) cucumber farm-gate price | 20 | 10–40 | ₹/kg | **Hyderabad wholesale not found.** Est. from: generic cucumber APMC ≈₹25/kg (Kerala, Aug 2026): [acrop](https://acrop.app/mandi/kerala/kottayam/neezhoor-vfpck/cucumber); BigBasket retail English cucumber ₹20–54.5/kg: [BigBasket](https://www.bigbasket.com/pd/40050056/fresho-english-cucumber-organically-grown-1-kg/); Nalgonda retail spike ₹80/kg: [Deccan Chronicle](https://www.deccanchronicle.com/southern-states/telangana/cyclone-damage-pushes-up-vegetable-prices-in-nalgonda-1915861) |
| Coloured capsicum yield | 8 | 5–12 | kg/m²/yr (one ~10-month crop) | IARI trial: 10.4 kg/m² (NV) and 11.8 kg/m² (fan-pad): [IJAS 2016](https://epubs.icar.org.in/index.php/IJAgS/article/view/59814); ICAR farmer: 20 t from 3,000 m² ≈ 6.7 kg/m² (ICAR link above) |
| English cucumber yield | 10 per crop × 2.5 crops = 25 | 15–35 | kg/m²/yr | 1,060–1,530 kg per 100 m² per crop: [NABARD model (2015)](https://www.nabard.org/demo/auth/writereaddata/ModelBankProject/1612162301Precision_farming_for_vegetable_cultivation_in_Kerala_(E).pdf); 5 t in 3 months from 10 cents (~405 m²) ≈ 12 kg/m²: [HortiDaily/KAU](https://www.hortidaily.com/article/6023373/india-seedless-salad-cucumber-brings-good-returns/) |
| Crop duration | Capsicum ~10; cucumber ~3–4 | — | months | ICAR/IARI; KAU (3 months) |
| Grade-out / unsold | 10 | 5–20 | % | **Not found.** Est. |
| Cost of cultivation (planting material and inputs) | Capsicum 140/yr; cucumber 100/crop | 100–200 | ₹/m² (= ₹1.0–2.0 lakh per 1,000 m²) | MIDH/NHB norm ₹140/m² for high-value vegetables: [NHB cost norms](https://nhb.gov.in/hindi/pdf/Cost%20Norms.pdf); salad cucumber variable cost ₹40,609 per 400 m² (≈₹100/m²): [Palakkad study](https://www.researchgate.net/publication/330618488_Economic_feasibility_of_vegetable_production_under_polyhouse_a_case_study_from_Palakkad_district_of_Kerala); ICAR farmer ≈₹167/m² per season (₹5 lakh on 3,000 m², likely including labour) |
| Input cost per kg | Capsicum ~18; cucumber ~10 | — | ₹/kg | Derived: cost per m² ÷ yield per m² |
| NV polyhouse structure | 1,000 | 800–1,200 | ₹/m² | Telangana pattern ₹1,060/m² (200 m² slab) and ₹844/m² for 2,080–4,000 m² (derived, see §5): [Hans India 2016](https://www.thehansindia.com/posts/index/Telangana/2016-02-24/Green-Houses-in-Bangaru-Telangana/209432); West Bengal ₹950–1,200: [WB norms](https://wbfpih.wb.gov.in/assets/user_uploads/directorate_fpi/1334278438_1784265925.pdf); IndiaMART 2025 quotes ₹675–825 (Lucknow) and ₹900–1,100 (Pune): [Lucknow](https://m.indiamart.com/city/lucknow/polyhouse.html), [Pune](https://m.indiamart.com/pune/polyhouse.html); ICAR farmer all-in ₹1,167/m² (2025) |
| Fan-and-pad polyhouse | 1,600 | 1,400–2,500 | ₹/m² | NHB norm ₹1,400: [NHB](https://nhb.gov.in/hindi/pdf/Cost%20Norms.pdf); WB ₹1,600–1,800: [WB norms](https://wbfpih.wb.gov.in/assets/user_uploads/directorate_fpi/1334278438_1784265925.pdf); ₹800–2,500 range: [BossWallah 2025](https://bosswallah.com/blog/farming/poly-farming-in-india-cost-setup-subsidy-profit-guide-2025/) |
| Drip and fertigation inside polyhouse | 75 | 25–150 | ₹/m² | NABARD model ₹150/m² (1,000 m² unit, 2015, link above); protected-cultivation drip ₹80,000–1,50,000/acre (≈₹20–37/m²): [BigHaat](https://www.bighaat.com/hi/kisan-vedika/blogs/drip-irrigation-cost-per-acre-in-india) |
| Borewell, fencing, shed, sump | Same as Model A | — | — | See Model A rows |
| Annual maintenance | 3 | 2–5 | % of capex/yr | **Not found.** Est. |
| Structure life / polyethylene film life | 15 / 3 | 10–20 / 2–4 | years | **Not found.** Est.; film replacement ≈₹60–100/m² (Est.) |
| Labour | 1.5 | 1–2.5 | workers per 1,000 m² | Cucumber ≈39 person-days per 500 m² per crop (my sum of the listed operations), so ≈78 per 1,000 m² per crop and ≈200 per year at 2.5 crops: [ICAR Krishi repository, Meena et al. 2022](https://krishi.icar.gov.in/jspui/bitstream/123456789/80940/1/RL%20Meena%20et%20al%202022.pdf) (which paper holds this table is not confirmed). Capsicum pruning and harvest add more (Est.) |

### Model C: Dragon fruit, open field

| Parameter | Default | Realistic range | Unit | Source URL(s) / basis |
|---|---|---|---|---|
| Farm-gate price | 70 | 40–130 | ₹/kg | Davanagere 2026: ₹40–70 now, ₹90–100 in early years: [ETV Bharat](https://www.etvbharat.com/en/state/davanagere-farmers-seek-govt-intervention-as-dragon-fruit-prices-nosedive-enn26071404266); Telangana "once ₹200/kg, now a fraction" (2025): [Hyderabad News Hunt](https://www.hyderabadnewshunt.com/telangana-dragon-fruit-farmers-hit-by-price-crash); Telangana farmer sold 4 t at ₹130/kg (reported May 2025): [Deccan Chronicle](https://www.deccanchronicle.com/southern-states/telangana/tg-farmers-turn-to-exotic-fruits-to-cut-imports-1876720); Goa mandi ₹65–80/kg (Jan–Mar 2025): [NaPanta](https://napanta.com/agri-commodity-prices/goa/dragonfruit/20-Mar-2025) |
| Poles per acre / plants per pole | 450 / 4 | 300–800 / 2–4 | — | ICAR 3×3 m single-post system: [ICAR Indian Horticulture](https://epubs.icar.org.in/index.php/IndHort/article/download/107290/42259/277997); 2–4 plants per pole: [Vikaspedia](https://en.vikaspedia.in/viewcontent/agriculture/crop-production/package-of-practices/fruits-1/dragon-fruit?lgn=en); 600–800 poles/acre: [project profile](https://duy-heduk.org/downloads/project-profiles/12.%20DRAGON%20FRUIT%20FARMING.pdf) |
| Plants per acre | 1,800 | 1,200–3,200 | plants | Derived; ~1,812 at 12×8 ft and ~2,000/acre: [Agrifarming](https://www.agrifarming.in/?p=9051) |
| Yield, years 1/2/3/4/5+ | 0.5 / 2.5 / 4.5 / 5.5 / 6 | 0–1 / 1–5 / 3–8 / 4–9 / 4–10 | t/acre | ≈15 kg per pillar per year ([Vikaspedia](https://en.vikaspedia.in/viewcontent/agriculture/crop-production/package-of-practices/fruits-1/dragon-fruit?lgn=en)) gives ≈6.7 t/acre at 450 pillars (derived); economic yields start in year 3, average up to 5 t/acre: [Down To Earth](https://www.downtoearth.org.in/blog/dragon-fruit-is-it-the-next-big-thing-in-indian-horticulture-78017); blog curve Y2 2–3, Y3 5–8, Y5+ 8–12: [Organic Mandya](https://www.organicmandya.com/farming/crops/dragon-fruit-farming-india/); Karnataka study 1.25–1.29 t/acre: [Horizon e-Publishing](https://horizonepublishing.com/index.php/PST/article/download/8018/7850/54047) |
| Years to full yield | 4–5 | 3–5 | years | Same sources |
| Cutting/sapling price | 40 | 15–75 | ₹/plant | ₹15–100, including ₹20 from a farm and ₹75 for TC yellow: [IndiaMART](https://m.indiamart.com/impcat/dragon-fruit-plant.html); ₹15: [IndiaMART Ahmedabad](https://dir.indiamart.com/ahmedabad/dragon-fruit-plant.html); ₹46: [Dial4Trade Navsari](https://www.dial4trade.com/navsari/dragon-fruit.htm) |
| RCC pole with ring/tyre | 700 | 500–1,000 | ₹ per pole set | **Not found.** Est. |
| Establishment cost (poles, rings, plants, drip, labour; excludes borewell, fence and land) | 4.5 lakh | 2.5–6 lakh | ₹/acre | ₹3.5 lakh/acre for infrastructure: [Drishti IAS](https://www.drishtiias.com/daily-updates/daily-news-analysis/dragon-fruit); ≈₹4 lakh/acre (Davanagere, ETV link above); ≈₹5 lakh/acre total, since the farmer's ₹1.25 lakh was 25%: [Telangana Today](https://telanganatoday.com/telangana-mba-graduate-becomes-torchbearer-for-dragon-fruit-farming); ₹5–6 lakh/acre: [30 Stades](https://30stades.com/farming/three-engineers-and-an-ex-banker-earning-lakhs-from-dragon-fruit-farming-10611817); Gujarat unit cost ₹6 lakh/ha (≈₹2.4 lakh/acre): [Gujarat scheme page](https://www.publicservicesmap.in/schemes/assistance-program-for-plantation-of-kamalam-fruit-(dragon-fruit)--gj-8708) |
| Drip | 45,000 | 35,000–80,000 | ₹/acre | [Tractor For Everyone](https://www.tractorforeveryone.com/knowledge-center/best-drip-irrigation-system-for-indian-farmers-cost-setup-tips), [Organic Mandya](https://www.organicmandya.com/farming/methods/drip-irrigation-cost-per-acre-india/) |
| Annual maintenance (fertiliser, pruning, sprays, labour) | 75,000 | 50,000–1,00,000 | ₹/acre/yr | Growers report ₹1 lakh and ₹50,000: [30 Stades (Asabe)](https://30stades.com/farming/maharashtra-engineer-farmer-mahesh-asabe-rukmini-farms-earns-profit-of-rs-9-lakh-per-acre-from-dragon-fruit-farming-3587489); project profile: labour and maintenance ₹80,000 in Y1, ₹50,000 in Y2–3 |
| Grade-out / unsold | 10 | 5–25 | % | **Not found.** Est. |
| Orchard life | 15 | 15–20 | years | Assam study uses a 15-year appraisal: [Agricultural Reviews](https://arccjournals.com/journal/agricultural-reviews/R-2765) |
| Labour | 150 | 100–265 | person-days/acre/yr | Derived upper bound: ₹50–80k maintenance ÷ ₹300/day from the project profile. Pruning is about 3 times a year (30 Stades) |

---

## 1. Demand and market (Hyderabad and India)

**India market size**
- **Indoor plants.**
  - Ken Research: ≈USD 660 mn in 2025, growing at 7.61% a year to USD 1.02 bn by 2031 (7.02% a year over 2020–25) ([Ken Research](https://www.kenresearch.com/india-indoor-plants-market)).
  - IMARC: USD 612 mn in 2024, 7.40% a year over 2025–33 ([IMARC](https://www.imarcgroup.com/india-indoor-plants-market)).
  - Deep Market Insights: USD 949 mn in 2025, 4.63% a year over 2026–34 ([DMI](https://deepmarketinsights.com/vista/insights/indoor-plants-market/india)).
  - TechSci: USD 250 mn in 2024, 8.45% a year to 2030 ([TechSci](https://www.techsciresearch.com/report/india-indoor-plants-market/4124.html)).
  - **Working figure: USD 0.6–0.95 bn, growing 5–8% a year.** These are paid vendor reports with different scopes.
- **Exotic vegetables.**
  - Expert Market Research: USD 2.48 bn in 2025, rising to USD 7.90 bn by 2035 (12.29% a year) ([EMR](https://www.expertmarketresearch.com/reports/indian-exotic-vegetables-market)).
  - IMARC: USD 2.67 bn in 2025, ≈11% a year ([IMARC](https://www.imarcgroup.com/india-exotic-vegetables-market)).
  - ReportCubes: USD 3.09 bn in 2025 ([ReportCubes](https://thereportcubes.com/report-store/exotic-vegetables-market-indian)).
  - The drivers cited are urbanisation, supermarkets, online grocery and import substitution. This is qualitative vendor commentary.
- **Dragon fruit supply is expanding fast.**
  - MIDH set a target of 50,000 ha in 5 years (Mar 2023) ([FreshPlaza](https://www.freshplaza.com/europe/article/9511526/dragon-fruit-acreage-in-india-expected-to-expand-to-50-000-ha-in-five-years-under-midh-scheme/)).
  - Telangana had ≈2,000 farmers on ≈500 acres, per The Hindu via FreshPlaza (date not confirmed) ([FreshPlaza](https://www.freshplaza.com/asia/article/9537979/telangana-state-takes-to-dragon-fruit-amid-surge-in-demand)).
  - Telangana farmers are switching to dragon fruit and avocado to replace imports (May 2025) ([Deccan Chronicle](https://www.deccanchronicle.com/southern-states/telangana/tg-farmers-turn-to-exotic-fruits-to-cut-imports-1876720)).
- **Telangana context.** Horticulture is about 7% of the state's farm area but 34% of agricultural gross value of output ([Hans India](https://assets.thehansindia.com/telangana/horticulture-emerges-as-eco-growth-driver-in-telangana-800812)).

**Who buys in Hyderabad (evidence found)**
- **Retail and highway nurseries.** They stock flowering plants every winter, sourced from Bengaluru, Pune and Kadiyam (2015) ([Deccan Chronicle](https://www.deccanchronicle.com/151129/nation-current-affairs/article/hyderabad%E2%80%99s-nurseries-ablaze-flowering-plants)). Kukatpally has become a nursery hub, and the GHMC Kukatpally zone, once dependent on Kadiyam, now runs its own nurseries ([Telangana Today](https://telanganatoday.com/kukatpally-turns-hub-for-nurseries)). HMDA also raises plants for parks ([HMDA](https://hmda.gov.in/nurseries-2)). Government landscaping demand is therefore partly self-supplied.
- **Landscapers and corporate offices.** Kadiyam firms market landscaping and office-plant supply directly in Hyderabad ([Mahindra Nursery – landscaping](https://mahindranursery.com/blogs/plant-guide/kadiyam-nursery-company-the-premier-landscape-company-in-hyderabad), [office plants](https://mahindranursery.com/blogs/plant-guide/tagged/plants-list-hq)).
- **Builders and gated communities.** Real-estate sources describe fast gated-community growth in Kukatpally, HITEC City and along the ORR ([Aurorealty](https://aurorealty.com/blog/the-rise-of-gated-communities-in-hyderabad/), [Godrej](https://www.godrejproperties.com/blog/the-new-chapter-in-kukatpallys-residential-evolution)). **No plant-purchase data was found.**
- **Online sellers.** Ugaoo ([Hyderabad page](https://ugaoo.com/live-plants/buy-plants-online-in-hyderabad.html)), FNP ([Hyderabad](https://www.fnp.com/plants/hyderabad)) and Paudhewale ([Hyderabad](https://www.paudhewale.com/page/buy-plants-and-gardening-essentials-online-in-hyderabad)) all run Hyderabad delivery pages.
- **Quick commerce.** **No plant-category data was found.** For channel scale, FY26 orders were Blinkit 916.6 mn, Zepto 640.2 mn and Instamart 412.2 mn ([Angel One](https://oga-prod.angelone.in/news/ipos/zepto-ipo-comparing-zepto-with-blinkit-and-swiggy-instamart-on-orders-revenue-and-profitability)).
- **Hotels and function halls (exotic vegetables).** A 2018 report found strong demand from Hyderabad hotels and function halls. The polyhouse farmers' association claimed more than 95% of members were satisfied, which is self-reported ([Deccan Chronicle 2018](https://www.pressreader.com/india/deccan-chronicle/20180125/281642485598047)).
- **Supermarkets (Ratnadeep and others).** Not found.
- **Expos.** A Hyderabad horticulture expo with nursery stalls was "a huge hit" (2019) ([Hans India](https://thehansindia.com/posts/index/Telangana/2019-01-19/Horti-expo-a-huge-hit-with-plant-lovers/477911)).

**Kadiyam (East Godavari): the incumbent wholesale supplier**
- **Scale.** About 600+ nurseries on ~3,000 acres ([Mahindra Nursery history](https://mahindranursery.com/blogs/plant-guide/the-interesting-history-of-kadiyam-nursery-and-a-brief-introduction-to-the-plant-nurserys-processes)). Older reports give ~800 nurseries of ¼ to 100 acres each, ~50,000 workers, with 60–70% of output going to other states (2003) ([Business Standard](https://www.business-standard.com/article/economy-policy/kadiyam-nurseries-seek-research-centre-103122901088_1.html)).
- **Turnover estimates differ by more than 10 times.**
  - ₹2,000 crore, with exports to the US, Europe and the Gulf (2016) ([Deccan Chronicle](https://www.deccanchronicle.com/nation/current-affairs/250716/ap-smells-more-profits-from-floriculture-sector.html)).
  - More than ₹200 crore ([ResearchGate study on Kadiyam nursery constraints](https://www.researchgate.net/publication/360023530_Analysis_of_constraints_faced_by_commercial_floriculture_nursery_owners_in_Kadiyam_of_Andhra_Pradesh_-Suggestions_to_overcome_them)).
  - ₹120 crore (older sources, [Business Standard 2003](https://www.business-standard.com/article/economy-policy/kadiyam-nurseries-seek-research-centre-103122901088_1.html)).
  - **Implied revenue density (derived):** ₹2,000 crore over 3,000 acres ≈ ₹67 lakh per acre per year (≈₹1,650/m²). At ₹120–200 crore it is ≈₹4–7 lakh per acre (≈₹100–165/m²). These figures cover mixed open nursery land, not intensive shade-net area.
- **Price levels.** Wholesale is quote-based. Mahindra Nursery uses an "Add to Quote" flow, replies within 24 hours and delivers to Hyderabad ([wholesale page](https://mahindranursery.com/pages/wholesale-orders)). **No public Kadiyam price list was found.** Listed Kadiyam/Rajahmundry prices:
  - "Indoor decorative plants" ₹25, MOQ 50 ([TradeIndia](https://www.tradeindia.com/manufacturers/decorative-plant.html)).
  - Red Aglaonema ₹100, MOQ 100, and a large red Aglaonema ₹999 ([ExportersIndia Rajahmundry](https://www.exportersindia.com/rajahmundry/aglaonema-plant.htm)).
  - Generic "indoor plants" ₹1,700 per piece ([IndiaMART](https://m.indiamart.com/impcat/indoor-plants.html)).

**Hyderabad wholesale markets**
- **Bowenpally.** Capsicum (generic, mostly green) modal price ≈₹35/kg on 17 Jan 2025, ≈₹25/kg on 21 Feb 2025 and ≈₹30/kg on 28 Oct 2025 ([17-Jan](https://www.napanta.com/agri-commodity-prices/telangana/capsicum/17-Jan-2025), [21-Feb](https://www.napanta.com/agri-commodity-prices/telangana/capsicum/21-Feb-2025), [28-Oct](https://www.napanta.com/agri-commodity-prices/telangana/capsicum/28-Oct-2025)). Bowenpally and L.B. Nagar capsicum series are also on acrop ([Bowenpally](https://acrop.app/mandi/telangana/hyderabad/bowenpally/capsicum-136), [L.B. Nagar](https://acrop.app/mandi/telangana/hyderabad/l-b-nagar/capsicum-136)).
- **Gaddiannaram** appears among Telangana's dragon-fruit reporting markets (Oct 2024; prices not visible) ([NaPanta](https://www.napanta.com/agri-commodity-prices/telangana/dragonfruit/31-Oct-2024/)). **Kothapet** receives imported fruit, including kiwi and dragon fruit ([Telangana Today](https://telanganatoday.com/tag/dragonfruit)).
- **English cucumber is grown in Telangana.** IndiaStat carries a 2024-25 district series for "European cucumber" ([IndiaStat](https://indiastatdistricts.com/telangana/all-districts/agriculture/cucumber)).
- **Gudimalkapur and Monda:** no data found. **Agmarknet and T-AGRIMARKET:** not accessible in this session.

**Seasonality**
- **Found:**
  - Winter is the flowering-plant selling season at Hyderabad highway nurseries (2015, Deccan Chronicle above).
  - Dragon fruit is picked mainly July–November, in flushes ([Down To Earth](https://www.downtoearth.org.in/blog/dragon-fruit-is-it-the-next-big-thing-in-indian-horticulture-78017), [Just Agriculture](https://justagriculture.in/files/magazine/2021/april/002%20DRAGON%20FRUIT%20%E2%80%93%20A%20NEW%20INTRODUCTION%20IN%20THE%20INDIAN%20MARKET.pdf)).
  - Vegetable prices swing sharply. After cyclone damage in Nalgonda, retail capsicum rose from ₹80 to ₹120/kg and cucumber reached ₹80/kg ([Deccan Chronicle](https://www.deccanchronicle.com/southern-states/telangana/cyclone-damage-pushes-up-vegetable-prices-in-nalgonda-1915861)).
- **Not found (Est.):** Foliage-plant demand peaks with monsoon planting (Jun–Sep) and the festival and gifting season (Oct–Dec). April–May heat raises mortality and slows sales. The calculator should use a monthly seasonality factor rather than flat sales.

## 2. Selling prices (₹)

**2a. Ornamentals: wholesale and B2B listing prices (asking prices; check MOQ)**

| Item | Size | Price | MOQ | Source |
|---|---|---|---|---|
| Indoor decorative plants (Rajahmundry) | small | ₹25 | 50 | [TradeIndia](https://www.tradeindia.com/manufacturers/decorative-plant.html) |
| TC Aglaonema pink, net-pot (Ghaziabad) | 3–5" | ₹35–40 | 500 | [ExportersIndia](https://www.exportersindia.com/indian-suppliers/aglaonema-plant.htm) |
| Aglaonema | n/s | ₹85–100 | 500 | same |
| Red Aglaonema (Rajahmundry) | n/s | ₹100 | 100 | [ExportersIndia Rajahmundry](https://www.exportersindia.com/rajahmundry/aglaonema-plant.htm) |
| Red Aglaonema (Kadiyam mandal) | n/s (large) | ₹999 | — | same |
| Areca palm (Dypsis lutescens) | n/s | ₹100 | — | [IndiaMART](https://m.indiamart.com/impcat/arecanut-plant.html) |
| Green Aglaonema / 1.5-ft (Noida) | n/s / 1.5 ft | ₹350 / ₹549 | — | [IndiaMART](https://m.indiamart.com/plantjunction76-noida) |
| Aglaonema Super White / Red (Gurugram) | n/s | ₹304 / ₹277 | — | [IndiaMART](https://m.indiamart.com/anandi-enterprises-gurugram/ceramic-pot.html) |
| Mini cactus (Thane) | 4" | ₹15 | — | [IndiaMART](https://m.indiamart.com/impcat/cactus-plants.html) |
| Succulent / Pachyphytum | 3" | ₹90 / ₹99 (2.5" listings ₹150–175) | — | [IndiaMART](https://m.indiamart.com/impcat/succulent-plant.html), [IndiaMART](https://m.indiamart.com/secculent/compactum-plant.html) |
| Succulents (nursery) | n/s | ₹110–150 (named varieties ₹160–185) | 2–10 | [ExportersIndia](https://www.exportersindia.com/m-s-nazmin-nursery/succulent-and-cactus-plant.htm) |
| Phalaenopsis (Kerala grower) | n/s | ₹225 | — | [IndiaMART](https://m.indiamart.com/krishnanandanam-orchids) |
| Phalaenopsis in ceramic planter (gift) | — | ₹2,100 | — | [IndiaMART](https://m.indiamart.com/company/24445183) |
| Generic "indoor plants" (Kadiyam) | n/s | ₹1,700 | — | [IndiaMART](https://m.indiamart.com/impcat/indoor-plants.html) |

**2b. Ornamentals: retail and online**
- Snake plant from ₹199 (regular ₹249) ([Nurserylive](https://nurserylive.com/a/s/collections/house-plants?page=19)). Peace lily from ₹169 (regular ₹199) ([Nurserylive](https://nurserylive.com/a/s/collections/sale-plants-under-299)).
- Three-plant pack ₹799 (MRP ₹1,499) and five-plant pack ₹999, sold by Nurserylive on Pepperfry ([pack 1](https://www.pepperfry.com/product/spider-snake-peace-lily-natural-plant-1950162.html), [pack 2](https://www.pepperfry.com/product/peace-lily-snake-areca-palm-aloe-vera-money-natural-plant-1950172.html)).
- Monstera deliciosa in a 12-cm pot ₹599 ([Chhajed Garden](https://www.chhajedgarden.com/collections/all/products/variegated-monstera-deliciosa-rare-indoor-plant)). Areca palm ₹130 ([Flipkart](https://www.flipkart.com/alochuz-areca-palm/p/itmcca5a110aaa90)).
- Phalaenopsis: flowering ₹799–849, down from ₹1,200 ([take.app](https://take.app/yoursplants/p/cmcsslbd8000ojl04o7jiwwq4)); medium ₹565 (MRP ₹899) ([Paudhewale](https://www.paudhewale.com/product/phalaenopsis-west-cost-fireworks-medium-size-orchid-plant)); non-flowering ≈₹325–645 ([Paudhewale orchids](https://www.paudhewale.com/browse/phalenopsis)).
- Succulents from ₹39 retail ([Bhimtal Nursery](https://bhimtalnursery.com)).
- **Conclusion: retail runs about 2–4 times B2B prices for common 4–6" plants.**

**2c. Exotic vegetables**
- **Coloured capsicum:**
  - ₹60–300/kg, average ₹100 (Maharashtra, 2025 season) ([ICAR](https://icar.org.in/en/protective-cultivation-polyhouse-success-story-coloured-capsicum-production)).
  - Blogs quote ₹40–180 (average ₹80–100), ₹75–150, and ₹60–150 domestic or ₹80–200 for export grade ([Agrifirst](https://agrifirst.in/blog/colored-capsicum-polyhouse-economics-cost-yield-profit), [BigHaat](https://www.bighaat.com/kisan-vedika/blogs/best-crops-for-polyhouse-farming-in-india-vegetables-flowers-and-high-value-crops), [Green Pages](https://www.greenpages.co.in/post/best-polyhouse-crops)).
  - Bengaluru ≈₹120/kg in April 2026, from trade listings cited by a blog ([Agro Potli](https://agropotli.com/polyhouse-subsidy-in-karnataka/)).
- **Green capsicum, Hyderabad (Bowenpally):** modal ₹25–35/kg in 2025 (§1).
- **Cucumber and English cucumber:** generic APMC ≈₹25/kg (Kerala, Aug 2026). English cucumber retails at ₹20/kg, or ₹54.5/kg organic ([BigBasket](https://www.bigbasket.com/pd/40050056/fresho-english-cucumber-organically-grown-1-kg/)). The Nalgonda retail spike reached ₹80/kg.
- **Lettuce, broccoli, zucchini, cherry tomato and basil wholesale:** **not found.** The only proxy is Punjab "leafy vegetables" at an average ₹38/kg (Oct 2025) ([NaPanta](https://www.napanta.com/agri-commodity-prices/punjab/leafy-vegetable/11-Oct-2025)). Ordinary tomato fell to ₹5–7/kg at Azadpur on 24 Jun 2025, which shows how deep crashes can go ([Khetiwadi](https://next.khetiwadi.com/mandi/azadpur-mandi-bhav/24-06-2025)).
- **Contract prices** (hotels, retailers): **not found.**

**2d. Dragon fruit**
- **Telangana, 2025:** "once ₹200/kg, now a fraction", with large plantings in Telangana and Andhra Pradesh flooding markets ([Hyderabad News Hunt](https://www.hyderabadnewshunt.com/telangana-dragon-fruit-farmers-hit-by-price-crash)). A Telangana farmer sold 4 t at ₹130/kg (reported May 2025, [Deccan Chronicle](https://www.deccanchronicle.com/southern-states/telangana/tg-farmers-turn-to-exotic-fruits-to-cut-imports-1876720)). Older Jangaon retail prices were ₹150–200/kg ([Telangana Today](https://telanganatoday.com/farmers-reap-riches-with-exotic-dragon-fruit-farming-in-jangaon)).
- **Karnataka (Davanagere), 2026:** ₹40–70/kg now against ₹90–100 earlier, blamed on oversupply ([ETV Bharat](https://www.etvbharat.com/en/state/davanagere-farmers-seek-govt-intervention-as-dragon-fruit-prices-nosedive-enn26071404266)).
- **Goa mandi:** ₹65/kg (Jan 2025) and ₹80/kg (Mar 2025) ([Jan](https://napanta.com/agri-commodity-prices/goa/dragonfruit/14-Jan-2025), [Mar](https://napanta.com/agri-commodity-prices/goa/dragonfruit/20-Mar-2025)). These pages carry an old "last updated" stamp, so treat them cautiously.
- **Wholesale ranges:** ₹70–200+ ([FarmAtma](https://www.farmatma.in/dragon-fruit-cultivation/)). Hyderabad trader listings run from ₹50–60 to over ₹300/kg ([IndiaMART Hyderabad](https://dir.indiamart.com/hyderabad/dragon-fruit.html)).
- **2022 warning (Andhra Pradesh):** a grower earned ₹300/kg but said farmers should expect ₹45–50/kg once cultivation expands ([Deccan Chronicle 2022](https://deccanchronicle.com/nation/in-other-news/060122/dragon-fruit-cultivation-gives-good-yield-in-ap.html)).

## 3. Production parameters

**3a. Pot plants**

| Pot | Pot-to-pot density (geometry, square packing) | PAES 415 dense packing | Suggested plants per gross m² (≈70% utilisation, with spacing) |
|---|---|---|---|
| 4" (10 cm) | ≈96/m² | 120 mm: 64/m² | 60 |
| 6" (15 cm) | ≈43/m² | 170 mm: 36/m² | 25 |
| 8" (20 cm) | ≈24/m² | — | 14 |
| 10" (25 cm) | ≈15.5/m² | — | 9 |

Sources: [PAES 415:2001](https://amtec.uplb.edu.ph/wp-content/uploads/2019/07/415.pdf). One study grew miniature roses in 12-cm pots at a final 25 pots/m² ([ISHS](https://ishs.org/ishs-article/17_14/)). The 70% figure for paths and aisles is my Est.; not found.

- **Crop times:**
  - Syngonium: 4" in 10–12 weeks, 6" in 12–16 weeks ([Agristarts](https://www.agristarts.com/index.cfm/fuseaction/plants.printDetail/plant_id/118/index.htm)).
  - Green Aglaonema: 4" in 3–4 months, 1-gal in 5–6 months; coloured cultivars take longer ([GPN 2019](https://nxtbook.com/greatamericanmediaservices/GPN/march-2019/index.php?startid=26)).
  - Aglaonema in a 25-cm (10") pot: 12–14 months from a rooted cutting ([patent PP12973](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/PP12973)).
  - These US commercial times are a lower bound. Expect slower growth under Hyderabad shade nets in the April–May heat (Est.).
- **Propagation route.**
  - UF/IFAS guides say Syngonium production has moved almost entirely to tissue-culture liners, transplanted into 4/6/8" pots under shade. One UF guide says micropropagation has not worked well for Aglaonema, which is mostly grown from cuttings ([UF/IFAS EP244](https://edis.ifas.ufl.edu/publication/EP244/pdf), [UF/IFAS EP160](https://edis.ifas.ufl.edu/publication/EP160/pdf)).
  - Indian labs and suppliers do sell TC Aglaonema (§4), so the sources conflict.
- **Orchids (Phalaenopsis) cycle:** **not found.** Est.: about 18–30 months from TC plantlet to flowering. Many small growers instead "finish" bought-in near-flowering plants.
- **Succulents:** **not found.** Est.: 3–6 months from cutting to a saleable 3–4" pot.
- **Mortality and unsold share:** **not found.** Est. 10–35% (default 20%).

**3b. Polyhouse vegetables**
- **Coloured capsicum:**
  - IARI trial: 1.98 kg/plant, 11.83 kg/m² in fan-pad and ≈10.4 kg/m² in an NV polyhouse, against ≈2 kg/m² in open field ([IJAS 2016](https://epubs.icar.org.in/index.php/IJAgS/article/view/59814)).
  - ICAR farmer, 2025: 20 t from 3,000 m² ≈ 6.7 kg/m² per season ([ICAR](https://icar.org.in/en/protective-cultivation-polyhouse-success-story-coloured-capsicum-production)).
- **English cucumber:**
  - NABARD model: 1,060, 1,460 and 1,530 kg per 100 m² per crop, with the document also citing a possible 20–25 kg/m² ([NABARD 2015](https://www.nabard.org/demo/auth/writereaddata/ModelBankProject/1612162301Precision_farming_for_vegetable_cultivation_in_Kerala_(E).pdf)).
  - KAU: 5 t in 3 months from a 10-cent (≈405 m²) polyhouse ([HortiDaily](https://www.hortidaily.com/article/6023373/india-seedless-salad-cucumber-brings-good-returns/)).
  - **2–3 crops per year.**
- **Cherry tomato, lettuce, broccoli, zucchini and basil yields:** **not found.** Est. placeholders from general greenhouse rules of thumb, unsourced:
  - Cherry tomato: 6–10 kg/m² per year from one 8–10-month crop.
  - Lettuce: 2–3 kg/m² per 45–60-day crop, 4–6 crops a year, limited by summer heat.
  - Broccoli: 1.5–2 kg/m² per ~90-day crop.
  - Zucchini: 4–6 kg/m² per ~3-month crop.
  - Basil: 2–3 kg/m² per cutting cycle.

**3c. Dragon fruit**
- **Spacing.** 3×3 m single post ([ICAR](https://epubs.icar.org.in/index.php/IndHort/article/download/107290/42259/277997)) gives ≈1,111 posts/ha, or ≈450 per acre. Other spacings used are 2.5×2, 3×1.5 and 4×3 m ([Down To Earth](https://www.downtoearth.org.in/blog/dragon-fruit-is-it-the-next-big-thing-in-indian-horticulture-78017)). Plants per pole are 2–4, and yield is ≈15 kg per pillar of 3–4 plants per year ([Vikaspedia](https://en.vikaspedia.in/viewcontent/agriculture/crop-production/package-of-practices/fruits-1/dragon-fruit?lgn=en)).
- **Yield curve (t/acre):**
  - Blog: minimal in Y1, 2–3 in Y2, 5–8 in Y3, 8–12 from Y5 ([Organic Mandya](https://www.organicmandya.com/farming/crops/dragon-fruit-farming-india/)).
  - 0.5, 6 and 10 for Y1–Y3 at ~1,812 plants ([Agrifarming](https://www.agrifarming.in/?p=9051)).
  - Kerala grower: ~5 in Y1 and ~10 in Y2 ([30 Stades](https://30stades.com/farming/three-engineers-and-an-ex-banker-earning-lakhs-from-dragon-fruit-farming-10611817)).
  - Karnataka study: 1.25–1.29 ([Horizon](https://horizonepublishing.com/index.php/PST/article/download/8018/7850/54047)).
  - Assam study: 3.6 rising to 4.8 t/ha ([Agricultural Reviews](https://arccjournals.com/journal/agricultural-reviews/R-2765)).
  - **The blog figures look optimistic. The defaults use a 6 t/acre steady state from Y5, consistent with ICAR's per-pillar figure and Down To Earth's "up to 5 t/acre".**

## 4. Unit input costs

**Planting material**
- **TC ornamentals, KFRI rate sheet (undated):**
  - Aglaonema: ₹9 ex-agar, ₹30 tray-established, ₹40 in small pots, ₹60 in a polybag over 30 cm.
  - Philodendron: ₹6 ex-agar, ₹10 tray-established, ₹20 in small pots.
  - Source: [KFRI price list](https://www.kfri.res.in/downloads/Price%20list_TC_and_Convenionally_propagaed_plants.pdf).
- **Commercial TC suppliers:**
  - TC Araceae (Syngonium, Philodendron, Aglaonema) from ₹15 ([Callus Biotech, IndiaMART](https://m.indiamart.com/callusbiotech/)).
  - TC Syngonium ₹20 ([IndiaMART](https://m.indiamart.com/impcat/syngonium.html)).
  - TC Alocasia and Caladium ₹20, MOQ 1,000 ([IndiaMART Mauli](https://www.indiamart.com/maulibioplants/tissue-culture-plants.html)).
  - TC Aglaonema 3–5" net-pot ₹35–40, MOQ 500 ([ExportersIndia](https://www.exportersindia.com/indian-suppliers/aglaonema-plant.htm)).
  - **Default liner: ₹20 (range ₹6–40).**
- **Cucumber seed:** KAU seedless hybrid costs ₹500 per 10 cents against ≈₹5,000 for multinational hybrids ([HortiDaily](https://www.hortidaily.com/article/6023373/india-seedless-salad-cucumber-brings-good-returns/)).
- **Dragon fruit cuttings:** ₹15–100 each ([IndiaMART](https://m.indiamart.com/impcat/dragon-fruit-plant.html)); ~₹30 per sapling ([Agrifarming](https://www.agrifarming.in/?p=9051)).

**Pots (black plastic nursery pots, B2B)**
- 4" ₹6 and 6" ₹9 ([IndiaMART plant pots](https://m.indiamart.com/impcat/plant-pots.html)).
- 8" ₹30 ([Nabha Mouldings](https://m.indiamart.com/nabhamouldings)).
- 10" (flower pot) ₹55 ([Shree E-Serve](https://m.indiamart.com/shreeeserve/flower-pot.html)).
- 4.5×7×8" pot ₹12, MOQ 500 ([TradeIndia](https://www.tradeindia.com/manufacturers/plastic-plant-pot.html)).
- Retail 8": ₹72 each, as a six-pack for ₹429 ([Paudhewale](https://paudhewale.com/product/set-of-6-nursery-plastic-pots-in-8-inch)).

**Potting media**
- **Cocopeat:**
  - ₹15–54/kg on IndiaMART; the high-EC 5-kg block is ₹54/kg ([IndiaMART](https://m.indiamart.com/impcat/cocopeat-block.html)).
  - ₹30/kg, MOQ 250 kg ([TradeIndia](https://www.tradeindia.com/manufacturers/cocopeat.html)).
  - ₹300 per 5-kg block, Pune ([TradeIndia](https://www.tradeindia.com/pune/cocopeat-city-213577.html)).
  - Retail ≈₹399 per 5-kg block (Jul 2026) ([Magicdrop](https://magicdrop.in/drops/coir-pith)).
- **Perlite (horticulture grade):** ₹75/kg in a 100-L pack ([Perlite India](https://m.indiamart.com/perlite-india/expanded-perlite.html)); ₹65/kg in a 12-kg pack ([Perl Tech](https://m.indiamart.com/perl-tech)).
- **Vermicompost:**
  - ₹3.5–20/kg in 50-kg bags: ₹7 ([Right Way](https://m.indiamart.com/rightwayorganic)), ₹3.5 ([Hari Om](https://m.indiamart.com/hariom-vermicompost)), ₹20 ([Divya Sky Root](https://m.indiamart.com/divya-skyroot)).
  - Wholesale ₹5–30/kg ([NIIR](https://www.niir.org/how-to-start/vermicompost-manufacturing/)).
- **Red soil, Hyderabad 2025:** **not found.** The only figure is from Khammam in 2016: ₹250–400 per tractor load ([Deccan Chronicle](https://deccanchronicle.com/nation/current-affairs/040616/soil-turns-into-cash-cow-for-contractors.html)).
- **Media cost per pot (Est.):** ₹2–3 for 4", ₹5–10 for 6", ₹15–25 for 8". This assumes a cocopeat, red soil and vermicompost mix with a little perlite.

**Fertilisers, pesticides, power, water, packaging**
- **Fertilisers and pesticides:** **not found** as separate line items. For polyhouse vegetables they sit inside the MIDH ₹140/m² norm and the Kerala ₹100/m² per crop variable cost (below). Est. for pots: ₹2–5 per 6" plant per cycle.
- **Electricity and water use:** **not found.** For reference, a 5 HP pump is ≈3.7 kW (1 HP = 0.746 kW), so 2–4 hours a day uses ≈7.5–15 kWh. Tariffs are out of scope.
- **Packaging:** **not found.** Est.: ₹2–5 per plant for a sleeve or tray (wholesale) and ₹15–40 for an e-commerce box.

**Per-crop cost of cultivation, polyhouse vegetables, per 1,000 m²**
- MIDH/NHB norm (planting material and cultivation): ₹1.40 lakh ([NHB](https://nhb.gov.in/hindi/pdf/Cost%20Norms.pdf)).
- Kerala salad cucumber, variable cost: ≈₹1.02 lakh per crop ([Palakkad study](https://www.researchgate.net/publication/330618488_Economic_feasibility_of_vegetable_production_under_polyhouse_a_case_study_from_Palakkad_district_of_Kerala); [J. Trop. Agric.](https://jtropag.kau.in/index.php/ojs2/article/download/415/431/1257)).
- ICAR capsicum farmer: ≈₹1.67 lakh per season, operating cost including labour ([ICAR](https://icar.org.in/en/protective-cultivation-polyhouse-success-story-coloured-capsicum-production)).
- Other norms (cost benchmarks only): orchids and anthurium planting material and cultivation ₹700/m² (NHB, [WB](https://wbfpih.wb.gov.in/assets/user_uploads/directorate_fpi/1334278438_1784265925.pdf)). Andaman lists vegetable seedlings in polyhouse at ₹70/m² and orchid/anthurium at ₹350/m² ([Vikaspedia A&N](https://www.vikaspedia.in/agriculture/state-specific-schemes-for-farmers/andaman-and-nicobar/horticulture-cultivation-of-fruits-spices-and-flowers-for-higher-income)).

**Dragon fruit poles and rings:** **not found.** Est.: ₹500–1,000 per RCC pole with concrete ring or tyre. MS-pipe posts (50 mm, 2 m) are said to be slightly cheaper but rust ([Organic Mandya](https://farming.organicmandya.com/crops/dragon-fruit-farming-india/)).

## 5. Infrastructure (capex)

**5a. Government cost norms (reference costs only)**

| Item | Norm | Year / notes | Source |
|---|---|---|---|
| Shade-net house, tubular | ₹710/m² (₹816 hilly) | XII Plan-era NHB/MIDH | [NHB](https://nhb.gov.in/hindi/pdf/Cost%20Norms.pdf), [WB](https://wbfpih.wb.gov.in/assets/user_uploads/directorate_fpi/1334278438_1784265925.pdf) |
| Fan-and-pad greenhouse | ₹1,400/m² (₹1,610 hilly); WB ₹1,800 (≤500 m²), ₹1,600 (500–1,008 m²) | NHB; WB | same |
| NV polyhouse, tubular (WB) | ₹1,200 (≤500 m²), ₹1,050 (500–1,008), ₹1,000 (1,008–2,080), ₹950 (2,080–4,000) | WB schedule | [WB](https://wbfpih.wb.gov.in/assets/user_uploads/directorate_fpi/1334278438_1784265925.pdf) |
| NV polyhouse, tubular (Assam) | ₹935/m² (500–1,008 m²); bamboo NV ₹518 | 2018-19 | [Assam HMNEH](https://dirhorti.assam.gov.in/sites/default/files/swf_utility_folder/departments/horticulture_medhassu_in_oid_5/menu/document/COST%20NORMS%20HMNEH%2C%202018-19.pdf) |
| NV polyhouse, bamboo | ₹450/m² (₹518 hilly) | NHB | [NHB](https://nhb.gov.in/hindi/pdf/Cost%20Norms.pdf) |
| **Telangana pattern** | ₹1,060/m² (200 m² slab); planting material for vegetables ₹140/m² (= ₹5.60 lakh/acre); per-acre total ₹39.36 lakh, which implies ₹844/m² for 4,000 m² (derived: 0.75 × 39.36 = ₹29.52 lakh ceiling) | 2016 | [Hans India](https://www.thehansindia.com/posts/index/Telangana/2016-02-24/Green-Houses-in-Bangaru-Telangana/209432), [Telangana Horticulture](https://horticulture.tg.nic.in/PolyHouse/PolyHouse.html), [NABARD Telangana unit cost (older)](https://www.nabard.org/auth/writereaddata/tender/1901182748Unit%20Cost%20%20Telangana.pdf) |
| NV polyhouse / shade net (MP unit cost) | ₹9.35 lakh / ₹7.10 lakh per 1,000 m² | 2019-20 | [SLBC MP](https://www.slbcmadhyapradesh.in/docs/UnitCost2019_20.pdf) |
| NABARD NV polyhouse model | ≈₹1,045/m², plus drip ₹150/m²; NV 1,000 m² at ₹900–1,150/m² | 2015 | [NABARD](https://www.nabard.org/demo/auth/writereaddata/ModelBankProject/1612162301Precision_farming_for_vegetable_cultivation_in_Kerala_(E).pdf) |
| Hi-tech nursery (4 ha) | ₹25 lakh/ha | HMNEH | [Assam](https://agri-horti.assam.gov.in/sites/default/files/swf_utility_folder/departments/agriculture_medhassu_in_oid_3/menu/schemes/Cost%20norms%20of%20HMNEH%20Guideline.pdf) |
| Hi-tech nursery greenhouse (Bihar checklist) | 502 m² at ₹1,500/m² = ₹7.53 lakh | 06.01.2020 | [Bihar](https://horticulture.bihar.gov.in/HORTMIS/ProjectBasedActivity/ProjectDocuments/Guideline_HitechNursery.pdf) |
| Cost-intensive fruit crops (e.g., dragon fruit), area expansion | Max cost ₹4 lakh/ha | MIDH (Lok Sabha reply) | [Lok Sabha](https://eparlib.sansad.in/bitstream/123456789/975540/1/AS232.pdf) |
| Dragon fruit (Gujarat state unit cost) | ₹6 lakh/ha | 2022+ | [Scheme page](https://www.publicservicesmap.in/schemes/assistance-program-for-plantation-of-kamalam-fruit-(dragon-fruit)--gj-8708) |

A NABARD Mizoram regional office 2025-26 unit-cost table, found in search but with the exact file not pinned, implies ≈₹543/m² for a GI-pipe shade-net house (1,080 m², ₹5.86 lakh) and ≈₹3,100/m² for a polyhouse with insect-proof net. These are hill-state figures and are not used as defaults. The national NABARD "Indicative Unit Cost of Investments in Agriculture 2025-26" exists ([NABARD PDF](https://www.nabard.org/auth/writereaddata/tender/pub_0707251024431586.pdf)), but its line items could not be read here.

**5b. Market quotes (2025–26)**
- **NV polyhouse.**
  - IndiaMART: ₹900–1,100/m² in Pune (6 Nov 2025) and ₹675–825/m² in Lucknow (22 Dec 2025) ([Pune](https://m.indiamart.com/pune/polyhouse.html), [Lucknow](https://m.indiamart.com/city/lucknow/polyhouse.html)).
  - ICAR farmer, 2025: ₹35 lakh for 3,000 m² ≈ ₹1,167/m² all-in ([ICAR](https://icar.org.in/en/protective-cultivation-polyhouse-success-story-coloured-capsicum-production)).
  - Blogs give ₹400–1,200/m² ([BossWallah](https://bosswallah.com/blog/farming/poly-farming-in-india-cost-setup-subsidy-profit-guide-2025/)).
- **Fan-and-pad:** blogs say ₹900–1,200/m² for medium-tech and "₹55 lakh per acre" (≈₹1,360/m²) (BossWallah above). These are inconsistent.
- **Shade-net house.** IndiaMART lists a GI round-pipe net house at ₹480/m² (52×60 m) and a 50% shade-net house at ₹710/m² ([IndiaMART](https://m.indiamart.com/impcat/net-house.html)). Blogs give ₹200–400/m², and ₹2–4 lakh per 1,000 m² including basic irrigation ([Organic Mandya](https://www.organicmandya.com/farming/methods/shade-net-farming/), [guide](https://www.organicmandya.com/farming/tools/greenhouse-net-house-guide/)). Net fabric alone can be as cheap as ≈₹14/m² ([IndiaMART shade net](https://m.indiamart.com/impcat/shade-net.html)).
- **Misting and fogging.**
  - Kits with timer, 100–300 GPD: ₹3,310–5,620 ([Krushikendra](https://krushikendra.com/?p=12561)).
  - Nursery fogger ₹2,000; 50-nozzle system ₹9,999; 100-nozzle system ₹15,000 ([Nency Plastech](https://m.indiamart.com/nencyplastech/mist-nozzle.html)).
  - Single foggers ₹190 each, MOQ 50 ([TradeIndia](https://www.tradeindia.com/manufacturers/plastic-fogger.html)).
  - Engineered misting: ₹50,000 for a low-pressure system (≤500 sq ft) and ₹1,00,000 for high-pressure ([Green Tech](https://m.indiamart.com/green-techsolution/misting-systems.html)).
  - A mist chamber of 15–25 m² is enough for a nursery's propagation ([Agrimoon text](https://agrimoon.com/wp-content/uploads/Protected-Cultivation-of-Horticultural-Crops.pdf)).
- **Drip per acre (open field).** ₹35,000–60,000 (Nov 2025) ([Tractor For Everyone](https://www.tractorforeveryone.com/knowledge-center/best-drip-irrigation-system-for-indian-farmers-cost-setup-tips)); ₹40,000–80,000 for vegetables ([Organic Mandya](https://www.organicmandya.com/farming/methods/drip-irrigation-cost-per-acre-india/)); ₹80,000–1,50,000 for protected cultivation ([BigHaat](https://www.bighaat.com/hi/kisan-vedika/blogs/drip-irrigation-cost-per-acre-in-india)).

**5c. Site items**
- **Borewell (Telangana-relevant).**
  - Drilling: ₹100–150/ft (2025) ([Farmonaut](https://farmonaut.com/?p=123328)) and ₹100–300/ft ([Medium](https://medium.com/@chandresh0912/borewell-drilling-per-feet-rate-and-costing-everything-you-need-to-know-7a3c6c54aef9)).
  - By depth: ₹80–110/ft at 300–500 ft, ₹100–150 at 500–700 ft, ₹130–220 at 700–1,000 ft, plus ₹20–60/ft in hard rock. PVC casing costs ₹300–650/ft for the top 20–60 ft ([StudioMatrx](https://www.studiomatrx.org/guides/borewell-plumbing-cost-india)).
  - 5 HP submersible: ₹40–55k single-phase, ₹35–45k three-phase ([Infralens](https://infralens.in/boq/borewell-tubewell)).
  - All-in for 300–600 ft: ₹1.5–5 lakh ([JK Cement](https://www.jkcement.com/blog/construction-planning/borewell-guide/)). In Telangana, borewells cost ₹1–2 lakh and 2–5 HP diesel pump sets ₹12,000–42,500 ([Telangana Today 2026](https://telanganatoday.com/telanganas-water-crisis-forces-farmers-to-turn-to-open-wells)).
- **Fencing.** Barbed wire costs ₹160–250/m (₹16–25k per 100 m) and ₹200–400/m installed. Chain-link is quoted at ₹200–400/m installed, with a 15–25-year life for galvanised wire on concrete posts ([Organic Mandya](https://www.organicmandya.com/farming/farm-setup/types-of-farm-fencing-cost-comparison/), [Agrifarming](https://www.agrifarming.in/1-acre-fence-cost-in-india-agriculture-types)). Installation labour in South India is ₹25–45/rft ([Just Fence](https://justfence.in/?p=35826)). A square 1-acre perimeter is ≈255 m (≈835 ft), so barbed wire costs ≈₹0.4–0.65 lakh (derived).
- **Shed, store or worker room.** ₹180–210/sq ft for crop or equipment storage; ₹150–300/sq ft for basic prefab steel ([agri-shed guide](https://vigupta9246.github.io/RR-TEEN-SET-SOLUTION/agricultural-shed-delhi-ncr-poultry-dairy.html), [Agrifarming](https://www.agrifarming.in/cost-of-building-a-cattle-shed-in-india)); ₹250–350/sq ft for a basic warehouse shed (2026) ([blog](https://heavystructuralfabrication.blogspot.com/2026/03/warehouse-shed-construction-cost-chennai.html)).
- **Not found:** water sump or tank cost, agricultural electricity connection cost, benches and raised beds, tools and sprayers.
- **Useful life and replacement (polyhouse film, shade net, GI frame): not found.** Est. defaults: film 3 years, shade net 3–5 years, GI frame 15–20 years, fogger lines 5 years. Chain-link fence lasts 15–25 years (source above).

## 6. Labour requirement (person-days, not wages)

- **Pot-plant nursery.**
  - US extension rule of thumb: about 1 field worker per acre of containers, excluding sales and office staff. Container work can need more ([Oregon State](https://horticulture.oregonstate.edu/department-horticulture/nursery/labor)).
  - Indian nursery studies find labour is the largest operating cost: 72.82% of operating cost, with a nursery benefit-cost ratio of 1.50 ([Kerala nurseries, ResearchGate](https://www.researchgate.net/publication/387107668_Commercial_Plant_Nurseries_in_Kerala_India_A_Critical_Analysis_of_Key_Success_Drivers); [Journal of Farm Sciences](https://journaloffarmsciences.in/index.php/JFM/article/download/15/14); which of the two holds the figure is not confirmed).
  - **Est. for manual operation in India, per 1,000 m² of 6" pots (≈50,000 pots a year):**
    - Potting: ≈100–170 person-days (≈300–500 pots per person per day).
    - Watering, if not automated: ≈60–90 days.
    - Spacing, weeding, spraying and fertilising: ≈100 days.
    - Grading, loading and dispatch: ≈50 days.
    - **Total ≈300–450 person-days a year, or 1–1.5 full-time workers.** Default 1.5 per 1,000 m² (range 1–3).
- **Polyhouse vegetables.**
  - Protected cucumber: ≈39 person-days per 500 m² per crop. Harvest is the biggest item at ≈10 days. That gives ≈78 per 1,000 m² per crop, or ≈200 a year at 2.5 crops ([ICAR Krishi repository](https://krishi.icar.gov.in/jspui/bitstream/123456789/80940/1/RL%20Meena%20et%20al%202022.pdf); which paper holds this table is not confirmed).
  - Salad cucumber needs more labour for training, pruning and harvest ([J. Trop. Agric.](https://jtropag.kau.in/index.php/ojs2/article/download/415/431/1257)).
  - A capsicum-specific norm was not found. Est.: 1–2.5 workers per 1,000 m², default 1.5.
- **Dragon fruit.**
  - No person-day norm was found. Labour and maintenance run ₹50–80k per acre a year at a ₹300/day assumption, giving an upper bound of ≈165–265 person-days (derived). Pruning is about 3 times a year, and harvest runs July–November in flushes ([30 Stades](https://30stades.com/farming/maharashtra-engineer-farmer-mahesh-asabe-rukmini-farms-earns-profit-of-rs-9-lakh-per-acre-from-dragon-fruit-farming-3587489), [Down To Earth](https://www.downtoearth.org.in/blog/dragon-fruit-is-it-the-next-big-thing-in-indian-horticulture-78017)).
  - **Default 150 person-days per acre per year**, about 0.6 of a full-time worker.

## 7. Real-world benchmarks, failures and risks

**7a. Published economics**

| Case | Key numbers | Source |
|---|---|---|
| Coloured capsicum, 3,000 m² polyhouse, Maharashtra (ICAR, 2025 season) | 20 t; ₹60–300/kg, average ₹100; operating cost ≈₹5 lakh; **net ₹15 lakh**; polyhouse cost ₹35 lakh | [ICAR](https://icar.org.in/en/protective-cultivation-polyhouse-success-story-coloured-capsicum-production) |
| IARI trial, coloured capsicum (2012–14) | Benefit-cost ratio 2.47 (NV), 1.73 (fan-pad), 1.48 (insect-net house), 1.32 (open field) | [IJAS 2016](https://epubs.icar.org.in/index.php/IJAgS/article/view/59814) |
| IIHR, medium-cost NV polyhouse, 500 m² (2002–04 data) | Capsicum IRR 53.7%; payback under 2 years; breakeven ≈₹11.8/kg | [JHS](https://jhs.iihr.res.in/index.php/jhs/article/view/533) |
| Punjab, 4,000 m² (M.Sc. thesis, 2020) | IRR: capsicum 24%, tomato 17%, cucumber 15%; benefit-cost ratio 1.3 / 1.1 / 1.5 | [Krishikosh](https://krishikosh.egranth.ac.in/items/ed478aaa-dc93-4958-a00c-2b370751ddfa) |
| Solan, Himachal Pradesh (thesis, 2016) | Capsicum in 500 and 1,000 m² polyhouses: **NPV negative, IRR under 10%, not economical**; breakeven 3,807 kg (500 m²) to 12,215 kg (2,000 m²) | [Krishikosh](https://krishikosh.egranth.ac.in/items/b7b1d3e6-08b0-4f64-beb2-86af10cf8422) |
| Kerala (Palakkad) polyhouse vegetables | Feasible **only with subsidy** | [ResearchGate](https://www.researchgate.net/publication/330618488_Economic_feasibility_of_vegetable_production_under_polyhouse_a_case_study_from_Palakkad_district_of_Kerala) |
| Nursery enterprises, Konkan (Maharashtra) | Benefit-cost ratio 2.25 (one study); ornamental plants 1.23 within an overall 1.44 (another) | [Extension Journal](https://www.extensionjournal.com/article/view/2507/8-9-146), [Extension Journal PDF](https://www.extensionjournal.com/uploads/archives/9-1-132-286.pdf) |
| Horticultural nurseries, Andhra Pradesh (Alluri Sitarama Raju district) | Enterprise economics study (figures not extracted) | [Plant Archives](https://www.plantarchives.org/article/350-Economic%20analysis%20of%20horticultural%20nursery%20enterprise%20in%20Alluri%20Sitarama%20Raju%20District%20of%20Andhra%20Pradesh,%20India.pdf) |
| Orchids, West Bengal hills | Benefit-cost ratio 1.76 | [Academia](https://www.academia.edu/79782127/Economics_of_Flower_Cultivation_with_Special_Reference_to_Orchid_in_Hilly_Areas_of_West_Bengal) |
| Dragon fruit, Karnataka | Establishment ₹1.44–1.55 lakh/acre (borewell and irrigation are the main items); 1.25–1.29 t/acre at ₹140/kg; net ₹1.35–1.47 lakh/acre | [Horizon](https://horizonepublishing.com/index.php/PST/article/download/8018/7850/54047) |
| Dragon fruit, Assam | Benefit-cost ratio 3.49; NPV ₹85.8 lakh/ha at 6%; IRR 87.2% over 15 years | [Agricultural Reviews](https://arccjournals.com/journal/agricultural-reviews/R-2765) |
| Dragon fruit growers (news) | Initial ₹5–6 lakh/acre; maintenance ₹50k–1 lakh/acre/yr | [30 Stades](https://30stades.com/farming/three-engineers-and-an-ex-banker-earning-lakhs-from-dragon-fruit-farming-10611817) |

**7b. Documented failures and risk evidence**
- **Telangana polyhouses (2015).** Farmers paid about ₹18 crore, roughly ₹10 lakh per acre across 181 acres. The polyhouse firms stopped work midway and the state's share of funds was delayed by a year ([Deccan Chronicle](https://www.deccanchronicle.com/150928/nation-current-affairs/article/telangana-poly-house-farmers-feel-cheated-subsidy), [Hans India](https://www.thehansindia.com/posts/index/Telangana/2015-09-23/A-catch-22-subsidy/177170)). **Lesson: contractor and execution risk.**
- **Anantapur, Andhra Pradesh.** Polyhouse farmers, capsicum growers among them, shut down and fell into debt. Officials blamed poor marketing and herd behaviour ([Hans India](https://www.thehansindia.com/andhra-pradesh/anantapur-polyhouse-farming-yet-to-gather-pace-779896)).
- **Himachal Pradesh.** Most polyhouse owners sold or closed their units for lack of markets ([Tribune](https://www.tribuneindia.com/news/archive/himachal/lack-of-markets-forcing-farmers-to-abandon-polyhouses-58101)). Exotic-vegetable growers found no buyers ([Tribune](https://www.tribuneindia.com/news/himachal/no-buyers-exotic-veggies-growers-incur-losses-76512/amp)).
- **Haryana.** Farmers destroyed capsicum and tomato after prices crashed for a second year (2021) ([Deccan Herald](https://www.deccanherald.com/india/covid-19-crisis-why-are-haryana-farmers-destroying-tomatoes-and-capsicum-987127.html)).
- **Yield gaps.** A study of polyhouses under a central scheme traced yield gaps to faulty management and faulty construction or design ([IDEAS/RePEc](https://ideas.repec.org/a/ags/inijae/345207.html)).
- **Dragon fruit price crash.**
  - Telangana, 2025: prices fell from ₹200/kg to a fraction of that, with farmers seeking support ([Hyderabad News Hunt](https://www.hyderabadnewshunt.com/telangana-dragon-fruit-farmers-hit-by-price-crash)).
  - Karnataka, 2026: ₹40–70/kg ([ETV Bharat](https://www.etvbharat.com/en/state/davanagere-farmers-seek-govt-intervention-as-dragon-fruit-prices-nosedive-enn26071404266)).
  - Vietnam, the main exporter, saw prices fall below production cost ([Vietnam.vn](https://www.vietnam.vn/en/gia-thanh-long-giam-sau-nong-dan-doi-mat-lo-nang)).
- **Hyderabad vegetable gluts.** Surplus tomato supply to the city threatened grower losses ([HortiDaily](https://www.hortidaily.com/article/9296933/tomato-prices-down-in-hyderabad/)). A 2026 report on vegetable farming in Telangana cites perishability, uncertain markets, volatile prices and heavy post-harvest losses ([Telangana Today](https://telanganatoday.com/farmers-question-support-for-vegetable-cultivation-amid-el-nino-concerns)).
- **Kadiyam nursery owners face documented constraints** ([ResearchGate](https://www.researchgate.net/publication/360023530_Analysis_of_constraints_faced_by_commercial_floriculture_nursery_owners_in_Kadiyam_of_Andhra_Pradesh_-Suggestions_to_overcome_them)); details were not extracted.

**7c. Key risks by model**
- **A: nursery.**
  - Price competition from Kadiyam's scale.
  - Sell-through risk: production is easy, selling 100+ plants a day is not.
  - Summer heat stress in April–May, and pests such as mealybug, scale and fungal rots.
  - Ageing unsold stock.
  - Working capital tied up in liners and pots.
- **B: polyhouse.**
  - High capex and contractor risk (the Telangana 2015 case).
  - Technical skill needed for fertigation and pest control (thrips, mites, viruses).
  - Perishability and sharp price swings (capsicum ₹40–300/kg).
  - Film damage from storms.
  - Marketing failure (Himachal Pradesh, Anantapur).
- **C: dragon fruit.**
  - Three-year gestation.
  - Oversupply and price collapse (₹200 down to ₹40–70/kg).
  - Stem rot and anthracnose. These are known diseases, though not covered by my sources.
  - Low per-acre returns at current prices.

---

## c) Which model looks most viable near Hyderabad, and why (based only on the data above)

**Illustrative contribution using the defaults** (before labour wages, power, maintenance, depreciation, transport, marketing and land; derived):

| Model | Basis | Revenue | Direct inputs | Contribution | Main capex |
|---|---|---|---|---|---|
| A: 6" foliage | 1,000 m² shade net; 25 plants/m² × 2 cycles = 50,000 started; 80% sold × ₹75 | ₹30.0 lakh | ₹21.0 lakh (₹42/plant) | **₹9.0 lakh** (≈₹900/m²) | ≈₹6.8 lakh (₹680/m²) plus borewell, fence, shed |
| B: coloured capsicum | 1,000 m² NV polyhouse; 8 kg/m², 90% sold × ₹80 | ₹5.8 lakh | ₹1.4 lakh | **₹4.4 lakh** (≈₹436/m²) | ≈₹10.75 lakh (₹1,075/m²) plus site items |
| C: dragon fruit | 1 acre, steady state (Y5+), 6 t × 90% × ₹70 | ₹3.8 lakh | ₹0.75 lakh maintenance | **₹3.0 lakh/acre** (≈₹75/m²) | ≈₹4.5 lakh/acre plus borewell and fence. Cumulative cash covers establishment in ~Y4 at ₹70/kg, ~Y6 at ₹40/kg |

1. **Model A (shade-net ornamental nursery) looks the most viable for a salaried part-timer near Hyderabad.**
   - It has the lowest structure cost per m² (shade net ₹400–710 against ₹844–1,200 for an NV polyhouse).
   - The product is semi-durable: unsold plants can be held and upsized instead of dumped.
   - It can start small, at 500–1,000 m².
   - It serves a large, growing urban category (indoor plants ≈USD 0.6–0.95 bn, growing 5–8% a year).
   - Hyderabad has several channels: retail and highway nurseries, landscapers, offices, gated communities and online sellers.
   - **Main caveat:** Kadiyam's 600–800 nurseries on ~3,000 acres set low wholesale prices (₹25–100 for small and medium plants). Margins exist mainly in 6"+ premium foliage (Aglaonema, Philodendron, Monstera), in own-propagated stock, and in selling direct to Hyderabad retailers, landscapers and online sellers. Small 4" commodity plants are thin-margin under the defaults.
   - The real constraint is sales volume. 50,000 plants a year from 1,000 m² means about 110 sales a day, so the calculator should treat "unsold %" as the key sensitivity.
2. **Model B is attractive on paper but risky.**
   - The ICAR farmer earned ≈₹5 lakh net per 1,000 m² at ₹100/kg, and IRRs of 15–54% are reported.
   - Against that, capex is high, the crop is perishable and prices are volatile. Telangana, Anantapur and Himachal Pradesh all have failure records, and one study found small (500–1,000 m²) polyhouses had negative NPV.
   - It suits a later phase, with contract buyers such as hotels, supermarkets or aggregators and more technical skill.
3. **Model C is the least attractive now.** Fast expansion in Telangana, Andhra Pradesh and Karnataka (and a national 50,000-ha target) has pushed farm-gate prices from about ₹130–200 down to ₹40–70/kg. The crop also needs 3–4 years to reach meaningful yield. It is low-labour, so it only makes sense as a long-horizon, land-extensive side asset if prices recover.

## d) Gaps and caveats

- **Tool limits.** 68 searches were used and the shared budget then ran out. Every direct page fetch was blocked (nhb.gov.in, nabard.org, napanta.com, telanganatoday.com, hyderabadnewshunt.com), so numbers from government PDFs, NaPanta and news articles are as reported in search extracts, not read from the full documents. **Verify the NHB norms, the NABARD Kerala and Telangana unit-cost PDFs, and the NaPanta prices directly before relying on them.**
- **Not found** (filled with labelled estimates or left open):
  - A Kadiyam wholesale price list. Listing prices from Rajahmundry and Kadiyam suppliers were used instead.
  - Hyderabad wholesale or contract prices for lettuce, broccoli, zucchini, cherry tomato, basil and English cucumber (Agmarknet and T-AGRIMARKET were not accessible), and yields for those crops.
  - Quick-commerce plant sales share. Supermarket (Ratnadeep) buying.
  - Gudimalkapur and Monda market data.
  - Plant-demand seasonality.
  - Mortality and unsold percentages.
  - Fertiliser, pesticide, electricity, water and packaging costs per unit.
  - Red soil price.
  - Costs of dragon-fruit RCC poles and rings, water sumps, electricity connections, benches and tools.
  - Polyhouse film, shade net and structure life.
  - Labour norms per 1,000 m² for nurseries and capsicum.
  - Telangana-specific polyhouse area for 2024-25.
- **Conflicts noted:**
  - Kadiyam turnover estimates range from ₹120 crore to ₹2,000 crore.
  - India indoor-plant market estimates range from USD 250 mn to USD 949 mn.
  - Dragon fruit yield claims range from 1.3 to 12 t/acre.
  - Fan-and-pad polyhouse costs range from ₹900 to ₹2,500/m².
  - Whether Aglaonema tissue culture works (UF/IFAS says it does not; Indian suppliers sell TC plants).
- **Dates.** Several key sources are older: the NHB norms (XII Plan), Telangana's pattern of assistance (2016), the NABARD model (2015), Kadiyam scale figures (2003 and 2016) and the IIHR study (2002–04 data). The 2025–26 points are mainly IndiaMART quotes, the ICAR 2025 capsicum case, Bowenpally prices and dragon-fruit price news.
- **Listing prices** on IndiaMART, TradeIndia and ExportersIndia are asking prices with varying MOQ and quality. Real wholesale deals, especially from Kadiyam, are usually negotiated lower.
