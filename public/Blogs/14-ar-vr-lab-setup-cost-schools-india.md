<!--
CODEX IMPLEMENTATION BRIEF

Objective:
Publish an India-focused AR/VR school-lab cost and budgeting guide that helps
schools create a requirements-led capital budget, recurring operating budget
and three-to-five-year total-cost model. Connect the article to the site's
existing lab-readiness, budget-planner, implementation-guide and consultation
workflows without changing the established design system.

Repository-first implementation requirements:
1. Inspect the repository before editing. Reuse the current article/MDX route,
   front-matter parser, typography, spacing, breadcrumbs, table of contents,
   formula panels, comparison tables, calculator components, scenario cards,
   disclosure blocks, author/reviewer modules, CTAs, dark mode and responsive
   breakpoints.
2. Do not add a new global stylesheet, font, colour palette, header, footer,
   page width, navigation pattern, card system, chart theme or button language.
3. Map the content to existing components where available:
   - opening blockquote -> answer/summary callout
   - budget bands -> current comparison cards
   - public-price benchmarks -> evidence/source callout
   - line-item worksheets -> responsive tables
   - calculator formulas -> formula/code panel
   - budget calculator -> existing calculator component
   - procurement phases -> stepper/timeline
   - quote audit -> checklist component
   - five-year TCO -> current chart/table module
   - FAQ -> accessible accordion
   - CTAs -> readiness, budget, consultation and implementation components
4. Keep exactly one H1 and logical H2/H3 heading order.
5. Add Article and BreadcrumbList structured data through the existing SEO layer.
6. FAQPage markup is optional. Emit it only when current policy allows it and
   the structured data exactly matches visible FAQ content.
7. Do not add Product, Offer, Review, AggregateRating or EducationalOccupationalProgram
   markup to this editorial budgeting guide.
8. Replace every {{PLACEHOLDER}} with existing configuration, components or
   reviewed content. Do not publish placeholder prices, vendors, tax rates,
   school names, funding eligibility or learning claims.
9. Add a visible pricing notice:
   - Figures are planning estimates, public procurement examples or dated listings.
   - They are not quotations or recommended retail prices.
   - Taxes, freight, exchange rates, licences, support and specifications change.
   - Schools must obtain technically comparable written quotations.
10. Do not create a retail shopping carousel. This page supports institutional
    procurement, not impulse hardware purchases.
11. Keep the guide vendor-neutral. Named vendors or products may appear only as
    dated public benchmarks or specification examples and never as endorsements.
12. Do not claim that the lowest quotation is the lowest total cost.
13. Do not compare quotations until the bill of quantities, device count,
    storage, management, content, training, warranty, support, taxes and room
    scope are normalised.
14. Do not publish one universal school-lab price. The calculator must distinguish:
    - tablet/WebAR programme;
    - small shared-headset pilot;
    - managed curriculum lab;
    - full-classroom fleet;
    - creator/development or specialist MR lab.
15. The calculator's default planning bands in this article are editorial
    estimates dated 30 July 2026. Store them in versioned configuration with
    source, method, review date and expiry; do not hard-code them in UI logic.
16. The current GeM listing discovered during research showed standalone
    education-oriented VR headsets near ₹48,000 each. Treat this as a dated
    marketplace observation, not a guaranteed procurement price.
17. A July 2025 GeM contract priced one VR classroom setup at ₹24,94,200,
    inclusive of duties and taxes, with equipment, content/software, teacher
    training and five-year support described in the contract. It does not prove
    that another school will receive the same device count, specification or price.
18. A 2026 Rajasthan marketplace proposal labelled as a 25-device lab contains
    internally inconsistent line-item arithmetic. Do not reproduce its total as
    a reliable benchmark. Use it in the article only to demonstrate quote auditing.
19. PM SHRI funding norms cited in this guide are programme ceilings and context,
    not an automatic entitlement for an individual school or a dedicated AR/VR
    grant. Require confirmation from the competent authority.
20. Taxes:
    - Do not hard-code one GST percentage for all hardware, software and services.
    - The calculator must accept line-level tax treatment or a reviewed blended input.
    - Show whether every quote is tax-inclusive or tax-exclusive.
    - Store HSN/SAC, tax source and review date where the live product supports it.
21. Currency:
    - Use Indian rupees and Indian number formatting for India-specific examples.
    - Preserve full numeric values in accessible text, exports and calculations.
22. Calculate both Year-0 capital expenditure and annual operating expenditure.
23. Calculate three-to-five-year total cost of ownership. Include:
    - hardware;
    - room and electrical work;
    - network;
    - display/casting;
    - content;
    - device management;
    - implementation;
    - teacher training and release time;
    - support/AMC;
    - spares;
    - hygiene consumables;
    - connectivity;
    - security/privacy compliance;
    - insurance where applicable;
    - replacement;
    - migration;
    - secure wipe and e-waste.
24. Do not call teacher time "free." Let schools enter salary/release-time cost
    or display it as an excluded cost.
25. Do not call an existing room "free." Include remediation, opportunity cost
    and any displacement of other teaching activity where relevant.
26. Separate hardware warranty from software support, content updates, onsite
    response, accidental damage and battery replacement.
27. Require a support matrix with response time, resolution target, onsite scope,
    exclusions, spare-device policy, escalation and service-credit terms.
28. Require an end-of-support date for every device and management platform.
29. Treat device-management licences as a separate recurring cost even when the
    first year is bundled.
30. Treat curriculum content as a licensed service unless the contract transfers
    perpetual, offline and migration rights explicitly.
31. Require every content quote to specify:
    - grades and subjects;
    - number of modules;
    - languages;
    - active users/devices;
    - offline rights;
    - teacher controls;
    - updates;
    - new syllabus mapping;
    - accessibility;
    - assessment;
    - licence term;
    - renewal price;
    - post-termination access;
    - data collection.
32. Do not value content by module count alone. Review curriculum depth,
    accuracy, interaction, accessibility and lesson usability.
33. Do not buy one headset per student by default. The calculator must support
    station rotation, paired use, casting and shared fleets.
34. Device quantity must be derived from:
    - class size;
    - student-to-device ratio;
    - lesson rotation;
    - timetable;
    - simultaneous classes;
    - charging turnaround;
    - spare rate;
    - accessibility alternatives.
35. Include at least one spare or a user-configurable spare percentage for
    production fleets. Do not assume 100% hardware availability.
36. Model replacement reserve separately from maintenance.
37. The budget calculator must expose assumptions, formulas, inclusions,
    exclusions, source date and confidence. Do not output false precision.
38. Required calculator inputs:
    - deployment model;
    - device type and quantity;
    - unit price;
    - spare percentage;
    - tablets/workstations;
    - display/casting;
    - network and security;
    - charging/storage;
    - room/civil/electrical;
    - accessories and hygiene;
    - content licence;
    - management licence;
    - implementation;
    - training;
    - warranty/support;
    - annual maintenance;
    - annual content renewal;
    - annual teacher refresher;
    - annual replacement reserve;
    - tax;
    - freight;
    - contingency;
    - project years;
    - student sessions.
39. The calculator must show:
    - subtotal before tax;
    - line-level or blended tax;
    - Year-0 total;
    - annual recurring total by year;
    - replacement events;
    - five-year TCO;
    - cost per completed student session;
    - cost per curriculum lesson;
    - cost per active device;
    - exclusions;
    - sensitivity range.
40. Do not divide TCO by enrolled students and call it cost per student unless
    every student receives the same measured use. Prefer completed student-sessions.
41. Do not claim return on investment from engagement or assumed marks. An ROI
    calculation requires reviewed financial benefits and outcome evidence.
42. Use "cost effectiveness" rather than ROI where benefits are educational and
    not monetised.
43. Require at least three technically comparable quotes where policy permits.
44. Quote validity must be visible. Revalidate imported hardware and foreign-
    currency-linked prices before award.
45. Require bidder arithmetic checks:
    - unit price × quantity;
    - subtotal;
    - discount;
    - tax base;
    - tax;
    - freight;
    - grand total;
    - recurring years;
    - escalation;
    - optional items.
46. The app must flag mismatched row totals and subtotals automatically.
47. Require separate pricing for mandatory, optional and future items.
48. Require a technical-compliance pass before commercial ranking. A low-priced
    non-compliant bid must not be treated as equivalent.
49. Suggested evaluation weighting in this article is illustrative and editable.
    Do not present it as a statutory procurement rule.
50. Require demonstration with the proposed model, proposed content and proposed
    management service—not a premium demonstration model.
51. Require written acceptance tests before final payment:
    - device inventory;
    - age/fit/safety documents;
    - managed enrolment;
    - app deployment;
    - offline lesson;
    - casting;
    - teacher control;
    - accessibility;
    - performance;
    - cleaning/charging;
    - data deletion;
    - training;
    - documentation;
    - support escalation.
52. Hold back an appropriate payment milestone until acceptance, subject to the
    school's procurement and contract rules.
53. Require warranty from final acceptance, not only invoice or dispatch date.
54. Require ownership and licensing status for custom 3D models, lesson plans,
    source assets, code, media and teacher-created content.
55. Require data export and migration assistance before contract end.
56. Require security review, data-flow documentation, breach notification and
    student-data deletion as separately costed or included obligations.
57. India privacy:
    - Comply with the Digital Personal Data Protection Act, 2023, final Rules of
      2025 and phased commencement as applicable.
    - Include the cost of legal/privacy review, contract review, consent design,
      data inventory, access control, audit and deletion.
58. Do not send identifiable student telemetry, room scans, eye/hand/voice data
    or assessment data to vendors or AI providers without an approved necessity,
    contract, legal basis and safeguarding process.
59. Build accessibility into procurement. Do not make accessible alternatives an
    unfunded change request after purchase.
60. Include captions, alternative media, seated mode, control alternatives,
    accessible room work and non-headset lesson options in the budget.
61. Include cybersecurity and network segmentation. Do not connect a new headset
    fleet directly to administrative or examination networks.
62. Include offline continuity so lessons do not fail whenever internet,
    authentication or vendor cloud services are unavailable.
63. Include battery, charging, electrical and fire-safety assessment. Do not
    budget only for multi-plug extensions.
64. E-waste:
    - Follow current E-Waste (Management) Rules and amendments.
    - Require producer take-back or an authorised/registered channel where applicable.
    - Budget for secure wipe, inventory closure, transport and documentation.
65. Do not dispose of devices through informal scrap channels.
66. Include a vendor-exit reserve for management-service discontinuation,
    account migration, content conversion and replacement.
67. Do not capitalise every annual licence automatically; preserve the school's
    applicable accounting and procurement treatment.
68. Add a downloadable bill-of-quantities template and five-year TCO sheet using
    the site's current resource component.
69. All charts need accessible data tables, text alternatives, keyboard support
    and no dependence on colour alone.
70. Test zero devices, one device, a target already over budget, tax-inclusive
    and tax-exclusive quotes, negative discount, zero renewal, escalation,
    replacement in year three, changing student sessions, very large values,
    Indian number formatting, print/PDF, spreadsheet export, mobile, keyboard,
    screen reader, no-JavaScript article content and Core Web Vitals.
-->

---
title: "AR/VR Lab Setup Cost for Schools in India: Equipment, Software and Budget"
seoTitle: "AR/VR Lab Cost for Schools in India: 2026 Budget Guide"
description: "Estimate the cost of setting up an AR/VR lab in an Indian school. Compare pilot, managed and full-classroom budgets covering headsets, tablets, room work, network, content, training, support, maintenance, replacement, taxes and five-year total cost."
slug: "/school-ar-vr-labs/guides/cost-india/"
canonical: "{{SITE_URL}}/school-ar-vr-labs/guides/cost-india/"
publishedAt: "2026-07-30"
updatedAt: "2026-07-30"
author: "{{IMMERSIVE_LEARNING_AUTHOR_NAME}}"
reviewer: "{{SCHOOL_EDTECH_REVIEWER_NAME}}"
procurementReviewer: "{{PUBLIC_PROCUREMENT_REVIEWER_NAME}}"
financeReviewer: "{{SCHOOL_FINANCE_REVIEWER_NAME}}"
privacyReviewer: "{{PRIVACY_SECURITY_REVIEWER_NAME}}"
category: "AR/VR Lab Cost"
subcategories:
  - "School Technology"
  - "Education Procurement"
  - "Budget Planning"
featuredImage: "{{URL_AR_VR_LAB_COST_FEATURED_IMAGE}}"
featuredImageAlt: "School AR and VR lab budget showing headsets, tablets, software, training, room and maintenance costs"
readingTime: "27 minutes"
language: "en-IN"
countryFocus: "India"
priceResearchDate: "2026-07-30"
robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
primaryKeyword: "AR VR lab setup cost for schools in India"
secondaryKeywords:
  - "AR VR lab cost"
  - "AR VR lab price"
  - "AR VR lab budget"
  - "AR VR lab setup price"
  - "AR VR lab setup cost"
  - "AR VR lab cost in India"
  - "VR lab setup cost India"
  - "virtual reality lab cost"
  - "virtual reality lab setup cost"
  - "augmented reality lab cost"
  - "immersive learning lab cost"
  - "XR lab setup cost"
  - "school VR lab cost"
  - "VR classroom cost"
  - "VR classroom setup price"
  - "VR education lab price"
  - "AR VR lab package for school"
  - "AR VR school lab quotation"
  - "AR VR lab proposal for school"
  - "AR VR lab tender"
  - "AR VR lab tender specifications"
  - "AR VR lab bill of quantities"
  - "AR VR lab BOQ"
  - "AR VR lab procurement"
  - "school VR headset price India"
  - "VR headset for school price"
  - "educational VR headset price India"
  - "standalone VR headset price India"
  - "VR headset classroom set price"
  - "school tablet price India"
  - "VR charging case price"
  - "VR headset charging cabinet cost"
  - "VR headset accessories cost"
  - "VR hygiene cost school"
  - "VR lab room setup cost"
  - "VR lab interior cost"
  - "VR lab electrical cost"
  - "VR lab WiFi cost"
  - "VR lab network cost"
  - "VR casting display cost"
  - "VR device management cost"
  - "VR MDM licence cost"
  - "VR school software cost"
  - "VR educational content licence price"
  - "AR VR content subscription school"
  - "virtual science lab software price"
  - "VR teacher training cost"
  - "AR VR teacher training price"
  - "VR lab annual maintenance cost"
  - "VR lab AMC cost"
  - "VR lab support cost"
  - "VR lab recurring cost"
  - "VR lab replacement cost"
  - "VR lab total cost of ownership"
  - "AR VR lab five year cost"
  - "VR lab cost per student"
  - "VR lab cost per session"
  - "VR lab ROI school"
  - "AR VR lab cost benefit"
  - "low cost AR VR lab"
  - "budget VR lab for school"
  - "tablet AR lab cost"
  - "mobile AR lab school"
  - "small VR pilot cost"
  - "6 headset VR lab cost"
  - "10 headset VR lab cost"
  - "15 headset VR lab cost"
  - "20 headset VR lab cost"
  - "25 headset VR lab cost"
  - "30 headset VR lab cost"
  - "full classroom VR lab cost"
  - "shared VR headset school"
  - "VR lab for CBSE school cost"
  - "VR lab for ICSE school cost"
  - "VR lab for government school cost"
  - "VR lab for private school cost"
  - "PM SHRI AR VR funding"
  - "PM SHRI ICT grant AR VR"
  - "government grant for VR lab school"
  - "CSR funding AR VR lab"
  - "AR VR lab financing school"
  - "AR VR lab lease"
  - "AR VR lab subscription model"
  - "managed AR VR lab"
  - "turnkey AR VR lab cost"
  - "AR VR lab vendor comparison"
  - "VR lab quotation comparison"
  - "AR VR lab tender evaluation"
  - "VR lab warranty"
  - "VR lab content ownership"
  - "VR lab software renewal"
  - "VR lab vendor lock in"
  - "VR lab e waste cost"
  - "VR lab data privacy cost"
  - "VR lab cybersecurity budget"
  - "VR lab accessibility budget"
  - "AR VR budget calculator"
  - "school technology budget calculator"
searchIntent:
  - "cost research"
  - "procurement planning"
  - "budget calculator"
  - "vendor comparison"
  - "school implementation"
audiences:
  - "school management"
  - "principals"
  - "trustees"
  - "finance committees"
  - "procurement officers"
  - "ICT coordinators"
  - "teachers"
  - "CSR teams"
  - "education departments"
  - "school architects and integrators"
entities:
  - "augmented reality"
  - "virtual reality"
  - "head-mounted display"
  - "tablet"
  - "device management"
  - "content licence"
  - "annual maintenance contract"
  - "total cost of ownership"
  - "Government e Marketplace"
  - "PM SHRI"
  - "GST"
  - "Digital Personal Data Protection Act"
  - "E-Waste Management Rules"
schema:
  - "Article"
  - "BreadcrumbList"
  - "FAQPage-optional"
trendResearch:
  geography: "India"
  periods:
    - "Past 12 months"
    - "Past 5 years"
  queryGroups:
    - "AR VR lab cost"
    - "VR lab setup cost"
    - "VR headset price India"
    - "AR VR lab for school"
    - "VR lab tender"
    - "virtual science lab price"
  status: "REVIEW_QUARTERLY"
---

# AR/VR Lab Setup Cost for Schools in India: Equipment, Software and Budget

> **A school AR/VR lab in India can require roughly ₹2 lakh for a basic tablet/WebAR programme, ₹6–12 lakh for a small shared-headset pilot, ₹14–24 lakh for a managed 12–15-headset curriculum lab, and ₹25–40 lakh or more for a full 20–25-device classroom.** These are planning bands dated 30 July 2026—not quotations. Room work, content rights, device management, teacher training, taxes, support and replacement can cost as much as the headsets.

The first budgeting mistake is asking:

> What is the price of a VR headset?

The better question is:

> What will it cost our school to deliver approved immersive lessons reliably for five years?

A headset that costs ₹48,000 does not create a ₹48,000 lab. The school may also need:

- A teacher-control tablet
- charging and secure storage
- spare controllers and interfaces
- a managed account and device-management service
- curriculum-aligned content
- a casting display
- Wi-Fi and network segmentation
- room and electrical work
- teacher training
- implementation and data-protection review
- onsite support
- replacement devices
- annual licences
- cleaning consumables
- secure disposal

The final cost can also differ sharply by teaching model. A six-headset rotation used across an entire school may be more cost-effective than 30 devices used only for demonstrations. A tablet-based AR programme can cover some spatial-learning needs at a much lower cost. A specialist creator lab with powerful workstations, enterprise headsets and custom content can exceed ₹50 lakh.

This guide provides:

- Current public benchmarks
- Editable planning bands
- A line-item budget
- A five-year total-cost formula
- Sample pilot and full-lab budgets
- Quote-audit checks
- Procurement evaluation criteria
- Funding and CSR considerations
- A Codex-ready calculator specification

> **Pricing notice:** All prices in this guide are dated observations, public procurement examples or transparent planning estimates. They are not quotes, endorsements or guaranteed market prices. Obtain current technically comparable quotations and verify taxes, delivery, warranty, licences and support before approval.

## AR/VR school-lab budget calculator

`{{COMPONENT_AR_VR_LAB_BUDGET_CALCULATOR}}`

### Calculator modes

- **Estimate Year-0 setup cost**
- **Build a five-year total-cost model**
- **Compare tablet AR, shared VR and full-classroom options**
- **Audit a vendor quotation**
- **Calculate cost per completed student session**
- **Calculate an annual operating budget**
- **Model replacement and renewal**

### Required outputs

```text
Deployment model:
Device count:
Year-0 subtotal:
Taxes:
Freight and implementation:
Contingency:
Year-0 total:
Annual recurring cost:
Replacement events:
Five-year total cost:
Estimated completed student sessions:
Cost per completed student session:
Mandatory items excluded:
Price-research date:
Methodology version:
```

### Visible disclaimer

> Results are planning estimates based on the inputs and dated assumptions shown. They are not quotations or guarantees. Verify specifications, taxes, licences, warranty, support and current prices before procurement.

## Quick navigation

- [Current public price benchmarks](#current-public-price-benchmarks)
- [Planning cost bands](#arvr-lab-cost-ranges-for-schools-in-india)
- [What drives the cost](#what-determines-the-cost-of-a-school-arvr-lab)
- [Hardware budget](#hardware-and-equipment-budget)
- [Room and infrastructure](#room-electrical-network-and-storage-costs)
- [Software and content](#software-content-and-device-management-costs)
- [Training and implementation](#teacher-training-implementation-and-support-costs)
- [Annual recurring cost](#annual-recurring-operating-budget)
- [Five-year total cost](#how-to-calculate-five-year-total-cost-of-ownership)
- [Sample budgets](#sample-school-arvr-lab-budgets)
- [Quote comparison](#how-to-compare-arvr-lab-quotations)
- [Funding](#funding-grants-csr-and-payment-models)
- [Tender requirements](#arvr-lab-tender-and-procurement-requirements)
- [Calculator architecture](#recommended-budget-calculator-architecture)
- [Frequently asked questions](#frequently-asked-questions)

## Current public price benchmarks

Public examples can help a school test whether a budget is plausible. They
cannot replace a current quote because specifications and scope differ.

## Benchmark 1: Current GeM headset listing

On the research date, the Government e Marketplace category page displayed two
standalone education-oriented VR headset listings at approximately ₹47,999 and
₹48,300 per unit. [1]

Use this benchmark carefully:

- It is a marketplace listing, not an awarded institutional price.
- The listing can change.
- It may include content or specifications different from another headset.
- Quantity discounts, freight and warranty can differ.
- A headset listing does not include the complete lab.

For planning, this guide rounds the observation to **₹48,000 per standalone
education headset** in sample calculations.

## Benchmark 2: July 2025 GeM classroom contract

A GeM contract generated on 30 July 2025 shows six “Virtual Reality Classroom
Set Up” units at ₹24,94,200 per unit, for a total order of ₹1,49,65,200,
inclusive of duties and taxes. [2]

The specification describes a package containing:

- Standalone VR headsets
- teacher tablet
- router
- storage case
- charging
- content
- software
- bean-bag seating
- teacher training
- five years of OEM/seller support

The public contract does not establish that a different school will receive the
same device count, specification or price. It is useful as a **turnkey
classroom-package benchmark**, not a universal rate.

## Benchmark 3: Public school tender scope

A 2025 GeM school-lab specification from Dadra and Nagar Haveli and Daman and
Diu included:

- Room decoration
- 10-inch teacher tablet
- standalone VR headset
- storage case
- charging console
- Wi-Fi network device
- seating
- preloaded curriculum content
- teacher control over the local network
- offline content capability [3]

This confirms why comparing only headset prices understates the project scope.

## Benchmark 4: PM SHRI financial context

The PM SHRI framework provides:

- Up to ₹15,000 per tablet for up to 40 tablets under the cited digital-library norm
- Up to ₹50,000 per year for content upgrading and maintenance, including
  AR/VR/haptics and other techniques, in that context
- Up to ₹10 lakh as a non-recurring grant under the broader ICT and Digital
  Initiatives component, which includes futuristic technologies such as AR/VR [4]

These are framework ceilings and programme context. They are not an automatic
AR/VR allocation for every school. Confirm eligibility, approved activities,
state/central processes, matching requirements and permissible expenditure.

## Benchmark 5: A quote-arithmetic warning

A 2026 proposal on Rajasthan's eBazaar describes a school lab and states a total
of ₹30,12,540 including 18% GST. Its visible line items, quantities and totals
do not reconcile consistently. For example, the heading refers to 25 devices,
while one headset row's quantity, unit price and extended total do not multiply
correctly. [5]

This proposal should not be used as a reliable price benchmark. It is an
important procurement lesson:

> Recalculate every line, subtotal, discount and tax amount independently.

## Benchmark 6: Current school specification direction

A 2026 tender from Sanskriti School specified five education headsets with an
XR-class chipset, 6 GB RAM, built-in mobile-device management and three years
of curriculum content. [6]

The specification illustrates that the headset, management service and content
term may be bundled. Procurement must separate their renewal and exit costs.

## Benchmark 7: Warranty and maintenance expectations

A 2026 immersive-lab tender from INCOIS required a three-year warranty,
technical support, monthly preventive maintenance and separate post-warranty
comprehensive annual maintenance pricing. [7]

That facility is not a normal K–12 lab, but its contract structure is useful:
schools should price support beyond the initial equipment warranty.

## AR/VR lab cost ranges for schools in India

The following editorial ranges are dated **30 July 2026**. They are based on
public marketplace observations, public procurement examples and transparent
component assumptions.

| Deployment model | Typical scope | Year-0 planning range |
|---|---|---:|
| Tablet/WebAR starter | 6–12 tablets or existing devices, web/app content, cases, teacher training | ₹2–6 lakh |
| Small shared VR pilot | 4–8 standalone headsets, tablet, charging/storage, limited content, minor room changes | ₹6–12 lakh |
| Managed curriculum lab | 12–15 headsets, management, content, display, network, training and room work | ₹14–24 lakh |
| Full classroom lab | 20–25 managed headsets, broader content, charging fleet, support and room work | ₹25–40 lakh |
| Creator/specialist XR lab | Headsets, high-performance PCs, creation software, cameras, tracking and custom content | ₹40 lakh–₹1 crore+ |

## What the bands include

They generally assume:

- Taxes as a planning allowance
- Initial implementation
- A reasonable first-year content licence
- teacher training
- core accessories
- storage/charging
- network and casting
- modest room preparation
- contingency

They do not automatically include:

- Major civil construction
- central air-conditioning
- premium interiors
- auditorium AV
- custom simulation development
- high-end motion platforms
- specialised haptics
- enterprise spatial-computing systems
- large workstation fleets
- a second site
- long-term connectivity
- all annual renewals

## Why ranges overlap

A six-device pilot with premium content and strong support can cost more than a
basic 12-device package. Device count alone does not determine quality or cost.

## Low price can mean reduced scope

A low quotation may exclude:

- taxes
- shipping
- charging
- teacher tablet
- management
- content renewal
- classroom licence
- training
- onsite support
- spare parts
- accessibility
- data migration
- accidental damage
- security configuration
- room work

The budget must compare like with like.

## What determines the cost of a school AR/VR lab?

## 1. Teaching model

### Tablet or WebAR

Lower hardware cost, broader group participation and less physical isolation.

### Shared VR rotation

A small headset fleet serves groups through stations.

### One device per active learner

Higher hardware, management, charging and replacement cost.

### Creator lab

Students build 3D or immersive content using capable computers and software.

### Specialist simulation

Vocational, medical, engineering or safety simulation can require custom
software, controllers, trackers and haptics.

## 2. Number of simultaneous users

Use:

```text
Required active devices =
students in immersive station
/
students sharing one device
```

Then add spares:

```text
Procured devices =
required active devices × (1 + spare percentage)
```

Round upward.

## 3. Device type

- Standalone VR
- PC-connected VR
- tablet AR
- head-mounted AR/MR
- cardboard/mobile viewers
- projection-based immersion

## 4. Content model

- Per device
- per student
- per school
- per subject
- annual subscription
- perpetual offline licence
- custom development
- marketplace app purchase
- open educational content

## 5. Management model

- Consumer accounts
- managed shared-device service
- third-party MDM
- vendor teacher-control platform
- local/offline controller

A school fleet should not depend on unmanaged personal accounts.

## 6. Room condition

An existing safe room costs less than:

- new civil construction
- electrical redesign
- acoustic treatment
- HVAC
- custom lighting
- furniture
- premium graphics
- raised floor
- specialist tracking

## 7. Support and geography

Remote areas can add:

- freight
- travel
- onsite-support cost
- spare stock
- slower replacement
- local technician training

## 8. Procurement term

A three-year content and management bundle may reduce Year-1 cost but create a
renewal cliff later.

## 9. Taxes and exchange rates

Imported-device prices can change with currency, freight, customs, distributor
availability and tax treatment.

## 10. Accessibility and alternatives

Budget for:

- desktop/tablet equivalents
- captions/transcripts
- accessible controllers
- seated setup
- adjustable furniture
- assistive technology
- teacher/support time

Accessibility is part of the core scope.

## Hardware and equipment budget

## Standalone VR headsets

### Planning method

```text
Headset budget =
unit price × device quantity
```

Add:

```text
Spare budget =
unit price × spare quantity
```

### Sample assumption

```text
Unit planning price: ₹48,000
Active devices: 12
Spare devices: 2

Headset budget:
₹48,000 × 14
= ₹6,72,000
```

This sample uses the current GeM observation and does not represent a quote.

## How many spare headsets?

A school might start with:

- One spare for a small pilot
- 8–15% spare capacity for a larger fleet
- More where repair turnaround is slow

Use actual failure and service data after the first year.

## Tablet or teacher controller

Functions can include:

- Device pairing
- lesson control
- casting
- progress display
- support
- content selection

Planning range:

```text
₹15,000–₹45,000 per tablet
```

The PM SHRI digital-library norm cited above uses up to ₹15,000 per tablet as a
funding ceiling in its context. A teacher controller may require more memory,
battery or enterprise management.

## High-performance computers

Required for:

- PC-connected headsets
- 3D creation
- Unity/Unreal development
- high-fidelity simulation
- video editing
- 360 media
- local rendering

Planning range per workstation:

```text
₹1.2–3.5 lakh+
```

The required GPU, CPU, memory and support drive the range. Obtain application-
specific certification rather than buying a gaming PC from a generic label.

## Tablets for AR

Planning range:

```text
₹15,000–₹45,000 each
```

Add:

- Protective case
- screen protection
- charging
- keyboard where needed
- MDM
- warranty
- spare

## Cardboard or phone viewers

Low purchase price can be misleading because the school may still need:

- Compatible phones
- hygiene process
- secure accounts
- app licence
- safe fitting
- control method

Do not use students' personal phones as an assumed free fleet.

## Display and casting

A teacher-facing display supports supervision and discussion.

Possible items:

- Large display or interactive panel
- casting receiver
- audio
- cables
- wall mount
- UPS
- installation

Planning range:

```text
₹60,000–₹3 lakh+
```

Reuse an existing display only after testing latency, resolution and input.

## Charging and secure storage

Options:

- Lockable transport case with charging
- ventilated charging cabinet
- labelled shelving plus approved chargers
- mobile cart

Planning range:

```text
Small fleet: ₹50,000–₹1.5 lakh
Large fleet: ₹1.5–4 lakh+
```

The school must check:

- Ventilation
- electrical load
- surge protection
- approved chargers
- cable replacement
- lock
- wheels
- asset scanning
- fire policy

## Controllers and spares

Budget:

- Spare controllers
- wrist straps
- face interfaces
- head straps
- glasses spacers
- charging cables
- adapters
- batteries where applicable
- cases

Planning allowance:

```text
8–15% of headset hardware cost
```

This is an editorial reserve assumption, not a vendor price.

## Hygiene supplies

Include:

- Compatible wipes
- replaceable interfaces
- disposable covers only when approved
- drying/storage
- gloves where policy requires
- logs
- cleaning labour

Avoid cleaning chemicals that damage lenses or coatings.

## Optional equipment

- 360 camera
- tripod
- green screen
- spatial microphone
- haptic device
- tracking beacon
- document camera
- accessibility controller
- tactile models
- UPS
- air conditioning
- workstation

Keep optional items out of the mandatory base price.

## Room, electrical, network and storage costs

## Room models

### Reuse an existing room

Potential cost:

```text
₹50,000–₹3 lakh
```

Possible work:

- Remove hazards
- improve lighting
- electrical outlets
- paint/marking
- stable chairs
- storage
- display mount
- ventilation
- network point

### Dedicated lab renovation

Potential cost:

```text
₹3–12 lakh+
```

Possible work:

- Flooring
- electrical distribution
- HVAC
- acoustic control
- ceiling/lighting
- fire-safety work
- secure doors
- accessible entrance
- cabinets
- graphics
- teacher station

### New construction or premium experience centre

Cost can exceed:

```text
₹15 lakh
```

Obtain architectural, electrical and fire-safety estimates.

## Do not overpay for visual decoration

A school lab does not need expensive “futuristic” graphics to deliver effective
lessons.

Prioritise:

1. Safety
2. accessibility
3. power
4. network
5. ventilation
6. storage
7. teacher visibility
8. maintainability

## Electrical work

Include:

- Load assessment
- dedicated circuits where required
- sockets
- earthing
- surge protection
- UPS for critical controller/network
- approved charging
- emergency isolation
- fire-safety assessment

Do not use a chain of consumer extension boards as infrastructure.

## Network

Include:

- Wi-Fi site survey
- access point
- controller/cloud management
- switch
- cabling
- firewall configuration
- VLAN/segmentation
- secure DNS/filtering
- monitoring
- internet upgrade
- installation

Planning range for one lab:

```text
₹40,000–₹2.5 lakh+
```

A basic router price is not the complete network cost.

## Internet

Record:

- One-time installation
- annual connection
- data limits
- static IP where needed
- content download
- update windows
- authentication
- backup link

Offline-capable content can reduce recurring bandwidth risk.

## Storage

Secure storage must fit:

- Headsets
- controllers
- tablet
- chargers
- spare parts
- cleaning
- documents

Keep cleaning fluids away from charging equipment.

## Security

Include:

- Device-management setup
- admin MFA
- asset tags
- lock/cabinet
- network segmentation
- endpoint configuration
- logging
- incident response
- data wipe
- vendor review

Security is a project cost, not an optional IT favour.

## Software, content and device-management costs

## Content licence structures

### Per-device annual licence

```text
annual price × active devices
```

### Per-student annual licence

```text
annual price × eligible students
```

This can be expensive when only a small group uses the headset.

### School-site licence

One price for approved users at one site.

### Perpetual/offline licence

Check whether “perpetual” includes:

- updates
- support
- future device compatibility
- syllabus changes
- migration

### Custom content

Cost depends on:

- 3D modelling
- interaction
- narration
- languages
- assessment
- platform
- testing
- accessibility
- source-file rights

## Content planning bands

For a normal school curriculum lab:

```text
First-year content:
₹1.5–6 lakh
```

For custom or specialist simulation:

```text
₹5 lakh to several tens of lakhs
```

The number of modules is not sufficient to judge value.

## Content comparison table

| Question | Vendor A | Vendor B | Vendor C |
|---|---|---|---|
| Grades and subjects |  |  |  |
| Board/syllabus version |  |  |  |
| Languages |  |  |  |
| Interactive modules |  |  |  |
| Passive 360 videos |  |  |  |
| Offline rights |  |  |  |
| Teacher control |  |  |  |
| Accessibility |  |  |  |
| Assessments |  |  |  |
| Update frequency |  |  |  |
| Annual renewal |  |  |  |
| Renewal escalation |  |  |  |
| Post-termination access |  |  |  |
| Data collected |  |  |  |
| Source/ownership rights |  |  |  |

## Device-management licence

A managed school fleet may require:

- Enrolment
- shared-device reset
- app allow-list
- update scheduling
- remote lock/wipe
- kiosk mode
- account control
- inventory
- compliance status
- support

Planning range:

```text
₹2,000–₹12,000 per managed device per year
```

This is an editorial planning band. Obtain current service pricing and confirm
whether the service is available and supported in India.

## Teacher-control software

It may be bundled with content or management.

Required functions:

- Select lesson
- start/pause/stop
- monitor device
- cast view
- reset session
- manage local/offline class
- disable social functions

Ask whether the control service still works after the content subscription ends.

## LMS and analytics

Do not buy a second learning-management system unnecessarily.

Check:

- Existing LMS integration
- SSO
- roster sync
- assessment export
- data minimisation
- retention
- teacher workload

Avoid biometric-like attention analytics.

## App-store purchases

Low app prices can still create:

- Account-management problems
- device-by-device installation
- consumer licensing
- no classroom rights
- no support
- no central updates
- no offline continuity

Obtain institutional licence terms.

## AI features

AI-generated tutors, avatars and content can add:

- inference/API fees
- safety review
- moderation
- data-processing cost
- prompt security
- human review
- content QA

Do not accept “AI included” without usage limits and data terms.

## Teacher training, implementation and support costs

## Initial teacher training

Budget for:

- Pedagogy
- device operation
- safety
- safeguarding
- accessibility
- privacy
- lesson design
- assessment
- troubleshooting
- practice lesson

Planning range:

```text
₹50,000–₹3 lakh
```

The range depends on teacher count, duration, travel, coaching and lesson design.

## Teacher release time

Calculate:

```text
Teacher training cost =
trainer cost
+ teacher release-time cost
+ substitute/cover
+ travel
+ material
```

Do not count teacher time as zero.

## Curriculum integration

Budget for:

- Lesson mapping
- worksheets
- assessments
- alternatives
- local-language adaptation
- subject review

Planning range:

```text
₹50,000–₹4 lakh+
```

## Installation and commissioning

Include:

- Delivery inspection
- asset tagging
- enrolment
- network configuration
- content deployment
- account setup
- casting
- room testing
- acceptance test
- documentation

Planning range:

```text
₹50,000–₹3 lakh+
```

## Privacy, legal and security review

Include:

- Vendor data-flow review
- contract terms
- child-data requirements
- retention/deletion
- cyber-security review
- privacy notice/consent workflow
- incident response

Planning range varies by school and counsel. Make it a visible line item.

## Warranty

Ask:

- Start date
- onsite or carry-in
- parts and labour
- controller
- battery
- accidental damage
- turnaround
- replacement
- shipping
- dead-on-arrival
- exclusions

“One-year warranty” does not mean one year of complete lab support.

## AMC and support

### Basic remote support

- Business-hour helpdesk
- remote diagnosis
- ticketing

### Onsite support

- Scheduled preventive maintenance
- response in school location
- replacement parts
- training refresher

### Managed service

- Operation
- lesson scheduling
- teacher support
- reporting
- content management

Planning annual support range:

```text
₹75,000–₹4 lakh+
```

## Service-level agreement

Record:

| Incident | Response | Workaround | Resolution target | Onsite | Escalation |
|---|---|---|---|---|---|
| Entire lab unavailable | [TIME] | [TIME] | [TIME] | Yes/No | [ROLE] |
| One headset failed | [TIME] | [TIME] | [TIME] | Yes/No | [ROLE] |
| Content login failed | [TIME] | [TIME] | [TIME] | Yes/No | [ROLE] |
| Privacy/security event | Immediate | [PROCESS] | [PROCESS] | [RULE] | [ROLE] |

## Annual recurring operating budget

A lab that cannot fund Year 2 is not affordable.

## Annual cost categories

| Category | Typical planning approach |
|---|---|
| Content renewal | Current quote or scenario |
| Device management | Per device/year |
| Support/AMC | Contract |
| Internet/network | School allocation |
| Teacher refresher | Annual programme |
| Curriculum update | Subject review |
| Hygiene consumables | Per session/device |
| Spares and repair | Actual history plus reserve |
| Replacement reserve | Percentage of replaceable hardware |
| Security/privacy | Annual review |
| Insurance | School policy |
| Electricity | Measured/estimated |
| Evaluation | Term/annual review |

## Recurring-cost planning range

For a normal managed lab:

```text
₹2.5–8 lakh per year
```

A custom-content or managed-service lab can cost more.

## Replacement reserve

A planning formula:

```text
Annual replacement reserve =
replaceable hardware value / expected replacement years
```

Example:

```text
Replaceable hardware value: ₹10,00,000
Expected cycle: 4 years

Annual reserve:
₹2,50,000
```

This does not mean every device is replaced exactly in year four. It creates a
budget for breakage, end-of-support and battery decline.

## Renewal escalation

Model:

```text
Future licence =
current licence × (1 + escalation)^year
```

Use an editable rate. The contract should cap or define escalation where possible.

## Annual review

Compare budget with:

- Active devices
- completed sessions
- repair rate
- support tickets
- content usage
- teacher use
- accessibility
- learning evidence
- contract performance

Stop paying for unused content.

## How to calculate five-year total cost of ownership

## Formula

```text
Five-year TCO =
Year-0 setup
+ Year-1 operating cost
+ Year-2 operating cost
+ Year-3 operating cost
+ Year-4 operating cost
+ Year-5 operating cost
+ replacement events
+ migration/end-of-life
- approved residual or buyback value
```

Use zero residual value unless a contractual value is credible.

## Year-0 setup

```text
Year-0 =
hardware
+ spares
+ room
+ electrical
+ network
+ display
+ charging/storage
+ first-year content
+ first-year management
+ implementation
+ training
+ privacy/security
+ freight
+ tax
+ contingency
```

## Contingency

Potential planning allowance:

```text
5–15% of eligible project subtotal
```

Use a lower rate when the scope is proven and a higher rate for renovation,
imports or custom content.

Do not use contingency to hide undefined scope.

## Cost per completed student session

```text
Cost per completed student session =
five-year TCO
/
total completed student uses
```

A student use should be:

- Delivered
- curriculum-linked
- technically completed
- not cancelled
- recorded without personal surveillance

## Example

```text
Five-year TCO: ₹30,00,000
Completed student sessions over five years: 15,000

Cost per completed student session:
₹200
```

This does not prove educational effectiveness.

## Cost per completed lesson

```text
Cost per completed lesson =
five-year TCO / completed teacher-led lessons
```

## Utilisation

```text
Fleet utilisation =
completed device-hours
/
available scheduled device-hours
```

Low utilisation can indicate:

- insufficient teacher training
- timetable bottleneck
- unreliable devices
- irrelevant content
- long setup
- network failures
- poor support

## Cost effectiveness

Compare:

- Learning objective
- alternative method cost
- teacher time
- field-trip substitution where genuine
- safety benefit
- repeatability
- access/equity
- measured learning

Do not monetise “engagement” without a defensible method.

## Sample school AR/VR lab budgets

These are editable planning examples dated 30 July 2026.

## Budget A: Tablet/WebAR starter

### Use case

- Middle-school science and geography
- shared tablet stations
- no dedicated headset room
- existing classroom display

| Item | Planning amount |
|---|---:|
| 8 tablets at ₹20,000 | ₹1,60,000 |
| cases, screen protection and charging | ₹40,000 |
| Wi-Fi/network improvement | ₹40,000 |
| AR/content licence | ₹75,000 |
| teacher training | ₹60,000 |
| implementation and curriculum mapping | ₹50,000 |
| accessibility/alternative materials | ₹25,000 |
| contingency | ₹45,000 |
| **Year-0 planning total** | **₹4,95,000** |

Possible annual recurring:

```text
₹1–2 lakh
```

## Budget B: Six-headset shared pilot

### Use case

- Six active headsets
- one spare
- station rotation
- one teacher tablet
- existing room with minor changes

| Item | Planning amount |
|---|---:|
| 7 headsets at ₹48,000 | ₹3,36,000 |
| teacher tablet | ₹25,000 |
| charging/storage | ₹75,000 |
| spares, straps and hygiene | ₹60,000 |
| display/casting | ₹60,000 |
| network/security configuration | ₹60,000 |
| first-year content and management | ₹1,75,000 |
| teacher training/curriculum | ₹1,00,000 |
| room/electrical changes | ₹75,000 |
| implementation/privacy review | ₹75,000 |
| contingency | ₹85,000 |
| **Year-0 planning total** | **₹10,26,000** |

Possible annual recurring:

```text
₹2–3.5 lakh
```

A leaner pilot using fewer bundled services may fall near the lower ₹6 lakh end
of the planning range.

## Budget C: Fifteen-headset managed lab

### Use case

- 13 active devices
- two spares
- teacher control and casting
- curriculum library
- dedicated or adapted room

| Item | Planning amount |
|---|---:|
| 15 headsets at ₹48,000 | ₹7,20,000 |
| tablet and teacher station | ₹50,000 |
| charging/storage | ₹1,50,000 |
| spare accessories/hygiene | ₹1,10,000 |
| display/casting/audio | ₹1,00,000 |
| network/security | ₹1,00,000 |
| first-year content | ₹3,00,000 |
| first-year device management | ₹1,25,000 |
| teacher training/curriculum | ₹1,50,000 |
| room/electrical/accessibility | ₹2,50,000 |
| implementation/privacy/acceptance | ₹1,25,000 |
| contingency | ₹1,90,000 |
| **Year-0 planning total** | **₹22,70,000** |

Possible annual recurring:

```text
₹4–6 lakh
```

## Budget D: Twenty-five-device full classroom

Use a range rather than one example:

| Cost group | Planning range |
|---|---:|
| Headsets and spares | ₹11–14 lakh |
| storage/charging/accessories | ₹2.5–5 lakh |
| teacher station/display/network | ₹2–5 lakh |
| content and management | ₹4–9 lakh |
| room/electrical/accessibility | ₹3–8 lakh |
| training/implementation/privacy | ₹2–5 lakh |
| contingency/tax/freight variation | ₹2.5–6 lakh |
| **Year-0 planning range** | **₹25–40 lakh+** |

The July 2025 GeM turnkey contract at ₹24.94 lakh per classroom setup is a useful
lower public-package reference, but the exact quantity and specification must
be compared before using it as a budget ceiling.

## Budget E: Creator and specialist lab

Possible scope:

- 10–20 standalone headsets
- 4–10 high-performance workstations
- two PC-connected/enterprise headsets
- 360 camera
- content-creation software
- source-control/storage
- custom applications
- specialist support

Planning range:

```text
₹40 lakh–₹1 crore+
```

A specialist lab should have a separate requirements and business case.

## Five-year example

Assume:

```text
Year-0 setup: ₹22.70 lakh
Year-1 recurring: ₹4.00 lakh
Annual escalation: 5%
Replacement in Year 4: ₹3.00 lakh
Exit/wipe/e-waste in Year 5: ₹0.50 lakh
```

| Year | Cost |
|---|---:|
| Year 0 | ₹22.70 lakh |
| Year 1 | ₹4.00 lakh |
| Year 2 | ₹4.20 lakh |
| Year 3 | ₹4.41 lakh |
| Year 4 recurring | ₹4.63 lakh |
| Year 4 replacement | ₹3.00 lakh |
| Year 5 recurring | ₹4.86 lakh |
| Year 5 exit/e-waste | ₹0.50 lakh |
| **Five-year TCO** | **₹48.30 lakh** |

The five-year cost is more than twice the initial device price.

## Sensitivity analysis

Show the effect of:

- 10% hardware-price change
- content renewal doubling
- one-year device replacement delay
- two additional spares
- room already compliant
- existing display reuse
- no internet/offline content
- one additional teacher cohort
- higher utilisation
- lower utilisation

## How to compare AR/VR lab quotations

## Step 1: Create one school-owned BOQ

Do not ask vendors to define the entire scope independently.

The BOQ should state:

- Device function
- minimum technical requirements
- quantity
- spare quantity
- content
- management
- room
- network
- training
- support
- warranty
- taxes
- delivery
- acceptance
- recurring cost
- exit

## Step 2: Separate mandatory and optional

### Mandatory

Required for safe operational launch.

### Optional

Nice-to-have or later phase.

### Future

Priced for expansion but not part of the award.

## Step 3: Recalculate arithmetic

For every row:

```text
Extended amount =
unit price × quantity
```

Then:

```text
Subtotal =
sum of extended amounts
```

Then:

```text
Tax =
tax base × tax rate
```

The calculator should flag discrepancies automatically.

## Step 4: Normalise taxes

Mark:

- Inclusive
- exclusive
- exempt
- reverse charge if relevant
- tax not stated

Do not compare tax-inclusive and tax-exclusive totals directly.

## Step 5: Normalise licence periods

Convert to:

```text
cost per year
```

A three-year bundle should be compared with three annual renewals.

## Step 6: Normalise device count

Count:

- Active headsets
- spare headsets
- controllers
- tablet
- content users
- app users

A proposal title can be misleading.

## Step 7: Compare content depth

Count separately:

- Interactive simulations
- manipulable 3D models
- passive 360 videos
- virtual tours
- quizzes
- teacher-guided lessons
- accessible alternatives

Do not call every media file a VR module.

## Step 8: Compare support

| Support element | Quote A | Quote B | Quote C |
|---|---|---|---|
| Warranty years |  |  |  |
| Battery |  |  |  |
| Controller |  |  |  |
| Onsite response |  |  |  |
| Repair turnaround |  |  |  |
| Spare unit |  |  |  |
| Preventive visits |  |  |  |
| Software updates |  |  |  |
| Content updates |  |  |  |
| Security updates |  |  |  |
| Helpdesk hours |  |  |  |
| Post-warranty AMC |  |  |  |

## Step 9: Compare total cost

Use five years.

A low Year-0 price can have:

- High renewal
- no offline rights
- expensive management
- no support
- rapid end-of-life
- no migration

## Step 10: Check quote validity

Record:

- Date
- validity period
- exchange-rate clause
- freight
- delivery
- model substitution
- tax change
- price escalation
- minimum order

## Quote-audit checklist

- [ ] Unit × quantity reconciles
- [ ] subtotal reconciles
- [ ] discount basis clear
- [ ] GST/tax base clear
- [ ] freight included
- [ ] installation included
- [ ] room work defined
- [ ] exact headset count
- [ ] spare count
- [ ] controller count
- [ ] storage/charging capacity
- [ ] content term
- [ ] management term
- [ ] user/device licence basis
- [ ] teacher training hours
- [ ] teacher count
- [ ] warranty start
- [ ] support and SLA
- [ ] annual renewal
- [ ] escalation
- [ ] data/privacy work
- [ ] accessibility
- [ ] migration
- [ ] e-waste
- [ ] optional items separated

## Funding, grants, CSR and payment models

## School capital budget

Advantages:

- Ownership
- clear asset register
- no donor dependency

Questions:

- Capital approval
- annual operating funding
- depreciation/accounting
- replacement reserve

## Government programme

PM SHRI and other state/central programmes may support digital and futuristic
technology within approved norms. Verify:

- School eligibility
- component
- approved plan
- spending category
- procurement route
- recurring amount
- utilisation certificate
- ownership
- maintenance

Do not describe a framework ceiling as sanctioned funding.

## CSR funding

A CSR-funded lab still needs:

- School-owned requirements
- safety/privacy review
- recurring budget
- asset ownership
- support
- replacement
- vendor neutrality
- evaluation
- donor-exit plan

Avoid a launch-only donation with no Year-2 support.

## Cluster or hub-and-spoke model

One lab can serve several schools.

Budget:

- Transport
- timetable
- device reset
- staffing
- safeguarding
- content access
- insurance
- wear
- maintenance
- equity of use

## Subscription or managed service

Potential advantages:

- Lower upfront cost
- support included
- predictable annual payment

Risks:

- Higher long-term cost
- vendor lock-in
- loss of access
- unclear asset ownership
- data dependency
- price escalation

Compare five-year cost with purchase.

## Lease

Check:

- Asset ownership
- accidental damage
- replacement
- end-of-term
- return condition
- support
- tax
- content
- management
- termination

## Phased procurement

Recommended:

1. Readiness and pilot
2. validated content
3. managed operational fleet
4. expansion based on evidence

Do not purchase 30 devices before teachers have completed a pilot.

## Payment milestones

Illustrative structure:

- Contract/signing: limited or no advance according to policy
- Delivery and inventory
- installation
- technical acceptance
- teacher training
- successful pilot lesson
- final acceptance
- support milestone

The school's applicable procurement rules control the actual structure.

## AR/VR lab tender and procurement requirements

## Minimum technical schedule

### Headset

- Manufacturer/model
- support status
- age guidance
- resolution
- refresh rate
- storage
- memory
- tracking
- controllers
- passthrough
- fit
- glasses
- seated mode
- accessibility
- battery
- Wi-Fi
- ports
- warranty
- security updates
- BIS/other applicable compliance evidence

Do not copy an obsolete processor or connector specification into a new tender.

## Management schedule

- School account
- shared device
- enrolment
- app allow-list
- update control
- kiosk mode
- lock/wipe
- inventory
- data reset
- logs
- admin MFA
- India availability
- support/end date
- export/migration

## Content schedule

- Curriculum
- grades
- subjects
- languages
- interactive content
- offline content
- teacher control
- accessibility
- assessment
- updates
- licence term
- ownership
- data
- social features

## Room/electrical schedule

- Measured layout
- floor
- lighting
- ventilation
- accessible entry
- furniture
- display
- network
- charging
- storage
- fire safety
- signage

## Training schedule

- Teachers
- hours
- modules
- practical assessment
- refresher
- lesson plans
- troubleshooting
- safety
- privacy
- accessibility

## Support schedule

- Warranty
- AMC
- response
- resolution
- onsite
- spare
- escalation
- reports
- preventive maintenance
- security updates
- content updates
- end-of-support

## Privacy and security schedule

- Data inventory
- roles
- purpose
- hosting
- subprocessors
- retention
- deletion
- breach
- child-data process
- tracking
- advertising
- AI training
- audit
- exit

## Accessibility schedule

- Captions
- transcript
- audio alternative
- reduced motion
- seated mode
- height adjustment
- remapping
- one-handed use
- desktop/tablet equivalent
- accessible room
- documentation

## Acceptance tests

1. Verify serials and quantities.
2. Verify exact models.
3. inspect safety and fit documentation.
4. enrol every device.
5. deploy and block apps.
6. run offline lesson.
7. run casting.
8. run teacher controls.
9. test accessibility.
10. test cleaning/charging.
11. test security configuration.
12. export/delete session data.
13. run a full lesson.
14. verify documentation.
15. verify support ticket.
16. sign acceptance.

## Commercial evaluation

An illustrative weighting:

| Area | Weight |
|---|---:|
| Curriculum and content | 20 |
| Child safety and accessibility | 15 |
| Management, security and privacy | 15 |
| Hardware and room fitness | 10 |
| Training and implementation | 10 |
| Support and lifecycle | 10 |
| Five-year commercial cost | 15 |
| Exit and e-waste | 5 |
| **Total** | **100** |

Apply a minimum technical threshold before commercial comparison.

This is not a statutory formula.

## Red flags

- Only a per-headset price
- “Unlimited content” without a list
- no age documentation
- consumer social accounts
- no management
- no offline mode
- no renewal price
- no data deletion
- learning guarantees
- all-negative-review suppression
- payment to unrelated account
- substitute model after award
- no serials
- no end-of-support
- no battery terms
- no accessibility
- no quote arithmetic
- perpetual licence with cloud dependence
- free lab requiring student-data monetisation

## E-waste and lifecycle budgeting

India's E-Waste (Management) Rules, 2022 came into force on 1 April 2023 and
have subsequent amendments. They regulate relevant producers, refurbishers and
recyclers. [8]

A school should budget for:

- Asset retirement
- secure data wipe
- account removal
- storage-media removal
- transport
- producer take-back
- authorised/registered channel
- certificate/record
- battery handling
- reusable accessory separation

Do not send devices to informal dismantling.

## Repair before replacement

Ask for:

- Spare parts
- repair manual/service
- battery replacement
- controller replacement
- turnaround
- refurbished replacement
- warranty preservation

## Secure wipe

Record:

```text
Asset ID:
Serial:
Management removed:
Accounts removed:
Local data deleted:
Reset verified:
Storage removed:
Wipe evidence:
Destination:
Date:
Approver:
```

## Vendor exit budget

Include:

- Data export
- content export
- teacher files
- account migration
- re-enrolment
- new management
- device reset
- replacement
- contract/legal support
- training

## Recommended budget calculator architecture

## 1. Project schema

```ts
type DeploymentModel =
  | "tablet_ar"
  | "shared_vr_pilot"
  | "managed_vr_lab"
  | "full_classroom"
  | "creator_xr_lab";

interface ArVrBudgetProject {
  id: string;
  name: string;
  currency: "INR";
  priceResearchDate: string;
  deploymentModel: DeploymentModel;
  projectYears: number;
  schoolId?: string;
  classSize: number;
  studentToDeviceRatio: number;
  simultaneousClasses: number;
  sparePercent: number;
  annualStudentSessions: number;
  methodologyVersion: string;
}
```

## 2. Line-item schema

```ts
type CostCategory =
  | "headset"
  | "tablet"
  | "workstation"
  | "display"
  | "network"
  | "charging_storage"
  | "accessory"
  | "room"
  | "electrical"
  | "content"
  | "device_management"
  | "implementation"
  | "training"
  | "support"
  | "privacy_security"
  | "accessibility"
  | "freight"
  | "insurance"
  | "e_waste"
  | "other";

interface BudgetLine {
  id: string;
  category: CostCategory;
  description: string;
  mandatory: boolean;
  quantity: number;
  unitPrice: number;
  discountAmount: number;
  taxMode: "inclusive" | "exclusive" | "not_applicable" | "unknown";
  taxRate?: number;
  freight: number;
  year: number;
  recurring: boolean;
  sourceType:
    | "vendor_quote"
    | "public_contract"
    | "market_listing"
    | "editorial_assumption"
    | "school_actual";
  sourceUrl?: string;
  sourceDate?: string;
  quoteValidityEnd?: string;
  confidence: "high" | "medium" | "low";
}
```

## 3. Line calculation

```ts
function calculateLine(line: BudgetLine) {
  const gross = line.quantity * line.unitPrice;
  const discounted = Math.max(0, gross - line.discountAmount);

  if (line.taxMode === "inclusive") {
    return {
      preTax: undefined,
      tax: undefined,
      total: discounted + line.freight
    };
  }

  const tax =
    line.taxMode === "exclusive" && line.taxRate !== undefined
      ? discounted * (line.taxRate / 100)
      : 0;

  return {
    preTax: discounted,
    tax,
    total: discounted + tax + line.freight
  };
}
```

Do not treat unknown tax as zero without a visible warning.

## 4. Arithmetic validation

```ts
interface QuoteAuditFinding {
  lineId?: string;
  severity: "info" | "warning" | "error";
  code:
    | "ROW_TOTAL_MISMATCH"
    | "SUBTOTAL_MISMATCH"
    | "TAX_MISMATCH"
    | "QUANTITY_CONFLICT"
    | "LICENCE_PERIOD_MISSING"
    | "TAX_STATUS_UNKNOWN"
    | "RENEWAL_MISSING"
    | "MODEL_MISSING"
    | "SUPPORT_END_MISSING";
  message: string;
}
```

Allow a tolerance for rounding only.

## 5. Device quantity engine

```ts
function calculateDeviceQuantity(input: {
  classSize: number;
  studentsPerDevice: number;
  simultaneousClasses: number;
  sparePercent: number;
}) {
  const active = Math.ceil(
    (input.classSize / input.studentsPerDevice) *
      input.simultaneousClasses
  );

  const spares = Math.max(
    1,
    Math.ceil(active * (input.sparePercent / 100))
  );

  return {
    active,
    spares,
    total: active + spares
  };
}
```

Let the school disable the minimum-one-spare rule for exploration only, with a warning.

## 6. TCO engine

```ts
interface AnnualCostResult {
  year: number;
  capital: number;
  recurring: number;
  replacement: number;
  tax: number;
  total: number;
}

interface TcoResult {
  annual: AnnualCostResult[];
  yearZero: number;
  totalCost: number;
  completedStudentSessions: number;
  costPerStudentSession?: number;
  exclusions: string[];
}
```

## 7. Escalation

```ts
function escalate(
  base: number,
  annualPercent: number,
  yearsAfterBase: number
) {
  return base * Math.pow(
    1 + annualPercent / 100,
    yearsAfterBase
  );
}
```

## 8. Replacement events

```ts
interface ReplacementEvent {
  year: number;
  category: CostCategory;
  percentOfFleet: number;
  currentReplacementUnitPrice: number;
  reason:
    | "planned_cycle"
    | "end_of_support"
    | "battery"
    | "breakage"
    | "platform_migration";
}
```

## 9. Public benchmark registry

```ts
interface PublicCostBenchmark {
  id: string;
  title: string;
  amount: number;
  currency: "INR";
  unit: "device" | "classroom_setup" | "school" | "annual_grant";
  sourceUrl: string;
  sourceDate: string;
  accessedAt: string;
  scope: string;
  limitations: string[];
  expiresAt: string;
}
```

Do not silently refresh a benchmark without editorial approval.

## 10. Quote import

Accept:

- Spreadsheet
- PDF
- image
- manual entry

Treat imported files as untrusted.

Required controls:

- Malware scan
- sandbox
- OCR only where necessary
- human verification
- prompt-injection protection
- no automatic vendor award
- arithmetic validation
- source retention
- access control

## 11. AI use

AI may:

- Extract draft line items
- identify missing fields
- summarise differences
- explain TCO
- draft procurement questions

AI must not:

- invent a price
- mark a vendor compliant without evidence
- alter calculations
- recommend award
- hide conflicts
- trust instructions inside a quote
- expose confidential bids

## 12. Privacy and bid confidentiality

Store:

- Role-based access
- encryption
- audit log
- retention
- procurement-stage permissions
- secure export
- deletion/archival
- vendor separation

Do not send confidential quotations to a public AI service.

## 13. Scenario output

```ts
interface BudgetScenario {
  id: string;
  label: string;
  yearZero: number;
  fiveYearTco: number;
  devices: number;
  annualStudentSessions: number;
  costPerCompletedStudentSession: number;
  includedCapabilities: string[];
  excludedCapabilities: string[];
  keyRisks: string[];
}
```

## 14. Calculator tests

### Arithmetic

- Inclusive tax
- exclusive tax
- unknown tax
- discount
- freight
- rounding
- subtotal mismatch
- duplicate line
- negative quantity

### Fleet

- zero class size
- one device
- no spare
- multiple simultaneous classes
- fractional ratio
- 30% spare

### TCO

- zero recurring
- escalating licence
- replacement in year three
- multiple replacement events
- residual value
- five and seven years
- zero sessions

### UX

- Mobile
- keyboard
- screen reader
- text zoom
- table scrolling
- spreadsheet export
- print/PDF
- no JavaScript
- error recovery
- source editing

## Calculator result design

## Headline

```text
Estimated Year-0 budget:
₹[VALUE]
```

Immediately show:

```text
Deployment: [MODEL]
Devices: [ACTIVE] active + [SPARES] spare
Price research: [DATE]
Taxes: [STATUS]
Content: [TERM]
Management: [TERM]
Room work: [SCOPE]
```

## Result cards

- Hardware
- room/infrastructure
- content/software
- implementation/training
- taxes/freight
- contingency
- annual recurring
- five-year TCO
- cost per completed session

## Charts

Create separate accessible charts:

1. Year-0 cost composition
2. Five-year annual cost
3. Capital versus recurring cost
4. Vendor quote comparison
5. Sensitivity
6. Cost per session at different utilisation

Every chart requires a data table.

## Alerts

Examples:

> Annual content renewal is missing.

> Quote total does not match unit price × quantity.

> Tax status is unknown.

> No spare device is included.

> Management support ends before the hardware planning period.

> Student data deletion is not priced or confirmed.

> The five-year cost exceeds the approved budget by ₹[VALUE].

## Product actions

- Save budget
- import quote
- compare vendors
- download BOQ
- download five-year TCO
- run readiness assessment
- create procurement brief
- book implementation review

## Key takeaways

- A headset price is not a lab price.
- Current public observations place some education-oriented standalone headsets
  near ₹48,000 each, but scope and pricing change.
- A small shared pilot commonly needs ₹6–12 lakh when content, training,
  management and infrastructure are included.
- A managed 12–15-device lab can require ₹14–24 lakh.
- A full 20–25-device classroom can require ₹25–40 lakh or more.
- Public contracts are benchmarks, not rate cards.
- PM SHRI ceilings require eligibility and approval and are not automatic AR/VR grants.
- Content and device management create recurring costs.
- Model at least five years.
- Count teacher time, support, replacement, privacy, security and e-waste.
- Use completed student sessions to evaluate utilisation.
- Recalculate every quote independently.
- Compare technically equivalent scope before price.
- Build accessibility and offline continuity into the base budget.
- Do not promise learning outcomes or financial ROI from equipment.
- Procure a pilot before a large fleet.

**Primary CTA:**  
`{{CTA_CALCULATE_AR_VR_LAB_BUDGET}}`

Suggested heading: **Build a five-year AR/VR lab budget**

Suggested body: Select the teaching model, device count, room scope, content,
training and support. Compare Year-0 cost, annual renewals and cost per completed
student session with every assumption visible.

Suggested actions:

- `Estimate lab cost`
- `Download the BOQ`
- `Compare deployment models`
- `Start the readiness assessment`

## Frequently asked questions

### How much does an AR/VR lab cost for a school in India?

A basic tablet/WebAR programme may cost ₹2–6 lakh, a small shared-headset pilot
₹6–12 lakh, a managed 12–15-headset lab ₹14–24 lakh and a full 20–25-device
classroom ₹25–40 lakh or more. These are planning ranges, not quotes.

### How much does one educational VR headset cost in India?

On 30 July 2026, the GeM category page showed education-oriented standalone
headsets near ₹48,000 per unit. Current specifications, content, warranty,
quantity and availability must be checked.

### Is ₹10 lakh enough for a school VR lab?

It can fund a small shared pilot or a limited managed deployment when the room
and display already exist. It may not fund a full-classroom fleet with broad
content and several years of support.

### What is included in a turnkey VR classroom?

A package may include headsets, teacher tablet, router, charging/storage,
content, software, seating, installation, training and support. Confirm exact
quantities and terms.

### How many headsets does a school need?

The number depends on class size, sharing, rotation, simultaneous classes,
lesson frequency, charging and spares. A class of 30 does not automatically
need 30 headsets.

### Is a six-headset pilot useful?

Yes. Six active devices can support station rotation and paired observation.
The school can test curriculum, safety, support and utilisation before scaling.

### How much does a 15-headset VR lab cost?

A managed 12–15-device lab can require roughly ₹14–24 lakh in Year 0 depending
on devices, content, room work, management, taxes and training.

### How much does a 25-headset school lab cost?

A full 20–25-device classroom can require approximately ₹25–40 lakh or more.
Obtain current comparable quotes and calculate five-year cost.

### What is the cheapest way to start AR/VR in a school?

Use existing compatible tablets or computers, select a small number of
curriculum use cases, test web/desktop 3D or tablet AR, train teachers and add
a small shared-headset pilot only where immersion adds value.

### Does a school need one headset per student?

No. Rotation, pairs, observer tasks, casting and non-headset stations can reduce
device count and improve discussion.

### What hardware is needed besides headsets?

A school may need a teacher tablet, display, network, charging/storage,
controllers, spares, washable interfaces, cases, accessible alternatives and
sometimes computers.

### How much does VR educational content cost?

A school curriculum licence may range from roughly ₹1.5–6 lakh for the first
year, while custom simulations can cost much more. Compare interaction,
curriculum, accessibility, languages and rights—not only module count.

### Is VR content a one-time purchase?

Often not. Many platforms use annual per-device, per-student or school-site
licences. Confirm renewal, escalation, offline access and post-termination rights.

### What is a VR device-management licence?

It manages enrolment, apps, updates, shared-device reset, remote lock/wipe and
inventory. It is commonly a recurring service and must be priced separately.

### How much does teacher training cost?

A basic programme may cost ₹50,000–₹3 lakh depending on teacher count, duration,
travel, curriculum design and coaching. Include teacher release time.

### How much does room renovation cost?

Minor adaptation may cost ₹50,000–₹3 lakh. A dedicated renovation with
electrical, ventilation, accessible furniture, storage and AV can cost
₹3–12 lakh or more.

### Does a VR lab need air conditioning?

Not universally. The room needs suitable temperature and ventilation for people,
devices and charging. Obtain an assessment for the local climate and load.

### How much does charging and storage cost?

A small fleet may require ₹50,000–₹1.5 lakh; a larger charging cabinet or cart
can cost ₹1.5–4 lakh or more. Verify electrical and fire-safety requirements.

### How much should a school keep for spares?

An initial planning allowance of 8–15% of headset hardware cost can cover
controllers, straps, interfaces, cables and spare devices. Replace the estimate
with actual service data.

### What are the annual recurring costs?

Content, device management, support, internet, teacher refreshers, hygiene,
repairs, security and replacement reserve can require roughly ₹2.5–8 lakh a
year for a normal managed lab.

### What is five-year total cost of ownership?

It is the Year-0 setup plus all annual licences, support, maintenance,
replacement, training, security, migration and end-of-life costs over five years.

### How do I calculate cost per student?

Use total completed student sessions rather than total enrolment:
`five-year TCO ÷ completed student sessions`.

### Can a VR lab provide a financial return on investment?

Educational benefits are usually not direct cash returns. Measure learning,
access, safety, utilisation and cost effectiveness. Do not claim financial ROI
from assumed engagement.

### Does PM SHRI provide funding for AR/VR?

The PM SHRI framework includes AR/VR within broader digital/futuristic
technology norms and cites certain non-recurring and recurring ceilings.
Eligibility and sanctioned spending must be confirmed.

### Can CSR money fund an AR/VR lab?

Yes, subject to the donor's and school's rules. The plan still needs recurring
funding, asset ownership, safety, privacy, support and a donor-exit strategy.

### Is a managed-service subscription cheaper than buying?

It can reduce upfront cost but may increase long-term cost and lock-in. Compare
five-year payments, ownership, renewal, data, support and exit.

### How should schools compare vendor quotations?

Create one BOQ, verify technical compliance, normalise quantities and licence
terms, recalculate arithmetic, compare taxes/support and calculate five-year TCO.

### Should GST be included in the budget?

Yes, but tax treatment can differ by hardware, software and services. Require
line-level tax information and do not hard-code one percentage.

### What warranty should a school request?

Request clear hardware, controller, battery, onsite, turnaround and replacement
terms. Price post-warranty support separately.

### What is an AMC for a VR lab?

An annual maintenance contract can include remote/onsite support, preventive
maintenance, updates and parts. Confirm inclusions, exclusions and response time.

### What happens when the headset platform is discontinued?

The school may need to migrate management, accounts and content or replace
devices. Include an end-of-support and vendor-exit reserve.

### How should old headsets be disposed of?

Securely remove data and accounts, update the asset register and channel
equipment through applicable producer take-back or authorised/registered
e-waste routes under current Indian rules.

### Can AI compare AR/VR lab quotations?

AI can extract line items and identify inconsistencies, but a human must verify
the quote and technical compliance. Confidential bids should not be uploaded to
an unapproved public AI service.

### Can a low-cost lab improve learning as much as an expensive one?

Cost alone does not determine learning. Curriculum, teaching, accessibility,
content quality, safety, reliability and assessment matter more than premium
interiors or device count.

---

## Editorial and SEO notes for maintainers

### Search-intent coverage

This pillar targets:

- AR/VR school-lab cost
- headset and hardware price
- software/content licence
- room, network and charging
- training, support and AMC
- pilot, managed and classroom budgets
- five-year TCO
- PM SHRI and CSR funding
- quotation comparison
- BOQ and tender requirements
- e-waste and vendor exit

Do not create thin pages for every device count. The calculator can answer
quantity-specific questions without indexable personal result URLs.

### Recommended URL architecture

```text
/school-ar-vr-labs/
/school-ar-vr-labs/guides/setup-implementation/
/school-ar-vr-labs/guides/cost-india/
/school-ar-vr-labs/guides/learning-benefits/
/school-ar-vr-labs/budget-planner/
/school-ar-vr-labs/readiness-assessment/
/school-ar-vr-labs/procurement/boq-template/
/school-ar-vr-labs/procurement/tender-template/
/school-ar-vr-labs/guides/content-licensing/
/school-ar-vr-labs/guides/device-management/
/school-ar-vr-labs/guides/maintenance/
```

### Internal links

Add only when destinations exist:

- `/school-ar-vr-labs/guides/setup-implementation/`
- `/school-ar-vr-labs/guides/learning-benefits/`
- `/school-ar-vr-labs/readiness-assessment/`
- `/school-ar-vr-labs/budget-planner/`
- `/school-ar-vr-labs/procurement/boq-template/`
- `/school-ar-vr-labs/procurement/tender-template/`
- `/school-ar-vr-labs/guides/teacher-training/`
- `/school-ar-vr-labs/guides/privacy/`
- `/school-ar-vr-labs/guides/accessibility/`
- `/school-ar-vr-labs/guides/maintenance/`
- `/school-ar-vr-labs/consultation/`
- `/trust/education-technology-methodology/`

### Supporting content cluster

1. AR/VR Lab BOQ Template for Schools
2. School VR Lab Tender Specifications
3. How Many VR Headsets Does a School Need?
4. Six-Headset VR Pilot Budget
5. Fifteen-Headset School VR Lab Budget
6. Twenty-Five-Headset Classroom Budget
7. Tablet AR vs VR Headset Cost
8. VR Educational Content Licensing Guide
9. VR Device-Management Cost and Requirements
10. School VR Charging and Storage Guide
11. VR Lab Room Renovation Cost
12. VR Lab Network and Wi-Fi Budget
13. Teacher Training Cost for an AR/VR Lab
14. VR Lab AMC and Warranty Checklist
15. Five-Year TCO Calculator for School Technology
16. How to Audit an Education-Technology Quotation
17. PM SHRI Digital and AR/VR Funding Context
18. CSR Proposal for an AR/VR School Lab
19. Purchase vs Subscription vs Lease for School VR
20. AR/VR Lab E-Waste and Vendor Exit Plan
21. Cost per Student Session in an Immersive Lab
22. How to Evaluate AR/VR Cost Effectiveness
23. Low-Cost Immersive Learning for Rural Schools
24. Hub-and-Spoke AR/VR Lab Budget
25. Data Privacy and Cybersecurity Cost for School XR

### Featured-snippet targets

Provide concise answers below:

- How much does an AR/VR lab cost?
- How much is one school VR headset?
- Is ₹10 lakh enough?
- How many headsets are needed?
- What are annual recurring costs?
- What is five-year TCO?
- Does PM SHRI fund AR/VR?
- How should quotes be compared?

### E-E-A-T requirements

Before publication:

- Add education, procurement and finance reviewers.
- Verify all public-price pages.
- Date every benchmark.
- Recalculate every sample.
- Verify PM SHRI wording and context.
- Verify tax treatment with qualified review.
- Cite government and primary documents.
- Publish assumptions and methodology.
- Label vendor proposals and limitations.
- Correct arithmetic discrepancies transparently.
- Avoid endorsements and learning guarantees.
- Publish corrections and update history.

### Structured-data guidance

Recommended:

- `Article`
- `BreadcrumbList`

Optional:

- `FAQPage` when current policy and visible content support it

Do not add:

- Product
- Offer
- Review/AggregateRating
- vendor rankings
- price-valid-until without a live offer
- unsupported educational-programme markup
- HowTo solely for search appearance

### Google Trends research plan

Compare:

- AR VR lab cost
- VR lab setup cost
- VR headset price India
- VR lab for school
- virtual science lab price
- AR VR lab tender

Settings:

- India
- Past 12 months
- past five years
- Education category where useful
- Web Search

Record seasonality, state interest, rising queries and language variants. Do
not present the Trends index as absolute search volume.

### Original research opportunities

With confidential procurement data protected, publish aggregate analysis:

- Median Year-0 budget by deployment
- Hardware share of TCO
- content renewal share
- average devices per lab
- spare rates
- support response
- room cost
- teacher-training hours
- quote arithmetic error rate
- tax-inclusion clarity
- five-year renewal variation
- completed sessions
- cost per session
- repair and replacement rate

Publish:

- Date range
- sample size
- school type
- geography
- inclusion method
- outlier treatment
- privacy/confidentiality
- limitations

Do not identify bidders or reveal confidential quotations without authority.

### Recommended visuals

1. Headset price versus complete lab cost
2. Budget bands by deployment
3. Year-0 cost composition
4. Capital versus recurring cost
5. Five-year TCO curve
6. Device quantity formula
7. Quote-normalisation workflow
8. Tax-inclusive versus exclusive comparison
9. Content licence models
10. Purchase/subscription/lease
11. Acceptance-test workflow
12. Vendor evaluation matrix
13. Cost per session by utilisation
14. Replacement and e-waste lifecycle
15. Calculator architecture

### Freshness schedule

Review quarterly and immediately after:

- GeM listing changes
- new public contracts/tenders
- PM SHRI or ICT funding changes
- device-management changes
- device end-of-support announcements
- content licence changes
- tax changes
- DPDP commencement/guidance
- e-waste amendments
- internal procurement data
- methodology changes

## Sources

1. Government e Marketplace, Virtual Reality Headset category, accessed
   30 July 2026:  
   https://mkp.gem.gov.in/editorial-and-design-and-graphic-and-fine-art-services-graphic-design-three-dimensional-3d-visualization-services-virtual-reality-headset

2. Government e Marketplace contract generated 30 July 2025, Virtual Reality
   Classroom Set Up, six units at ₹24,94,200 each:  
   https://fulfilment.gem.gov.in/contract/fds?orderId=OGJpRlN5VWU2Q2Vld2lpV0Y1czNjZz09

3. Government e Marketplace, terms and technical specifications for setting up
   a virtual-reality lab in schools, 2025:  
   https://fulfilment.gem.gov.in/contract/slafds?fileDownloadPath=SLA_UPLOAD_PATH%2F2025%2FJan%2FGEM_2025_B_5837440%2FCLM0010%2FATCVR_9912f6e4-ab27-4de2-be371737187881881_DOE_SSA.pdf

4. Ministry of Education, Government of India, PM SHRI Framework Part 2:  
   https://pmshri.education.gov.in/assets/pdf/part2_pmshri.pdf

5. Rajasthan eBazaar, LearnXR school-lab proposal, 2026. Used only as a quote-
   audit example because the visible arithmetic is internally inconsistent:  
   https://ebazaar.rajasthan.gov.in/APIV2/Document/B2G/ServiceDoc/f4e4e4df-d286-46f8-a827-b8b42ab49d5e.pdf

6. Sanskriti School, New Delhi, Innovation Hub tender, 2026:  
   https://www.sanskritischool.edu.in/info/tender2026/Edited-Tender%20Notice%20for%20Innovation%20Hub%20in%20Sanskriti%20School.pdf

7. Indian National Centre for Ocean Information Services, AR/VR technical
   specifications and tender, 2026:  
   https://incois.gov.in/documents/Tenders/tender_20260112122759.pdf

8. Ministry of Environment, Forest and Climate Change, E-Waste (Management)
   Rules, 2022 and amendments:  
   https://www.moef.gov.in/index.php/rules-regulations-3

9. Ministry of Environment, Forest and Climate Change, E-Waste (Management)
   Rules, 2022 notification:  
   https://moef.gov.in/uploads/2022/11/E-Waste-Management-Rules-2022.pdf

10. Central Pollution Control Board, E-Waste Rules FAQ:  
    https://cpcb.nic.in/uploads/Projects/E-Waste/FAQ_ewaste_23012024.pdf

11. Ministry of Electronics and Information Technology, Digital Personal Data
    Protection Act, 2023:  
    https://www.meity.gov.in/digital-personal-data-protection-act

12. Ministry of Electronics and Information Technology, Digital Personal Data
    Protection Rules, 2025:  
    https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf

13. Central Board of Secondary Education, Circular Acad-18/2026:  
    https://www.cbse.gov.in/cbsenew/documents/18_Circular_2026_13042026.pdf

14. CISA, K-12 Cybersecurity Acquisition Guidance:  
    https://www.cisa.gov/sites/default/files/2023-08/K-12_Acquisition_Guidance.pdf

15. NIST, Cybersecurity Framework 2.0:  
    https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20

16. W3C, XR Accessibility User Requirements:  
    https://www.w3.org/TR/xaur/

17. Google Search Central, Creating helpful, reliable, people-first content:  
    https://developers.google.com/search/docs/fundamentals/creating-helpful-content

18. Google Search Central, Spam policies for Google Web Search:  
    https://developers.google.com/search/docs/essentials/spam-policies

19. Google Search Central, Optimizing for generative AI features:  
    https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

## Pre-publication checklist

- [ ] Replace every `{{PLACEHOLDER}}`.
- [ ] Confirm route and taxonomy.
- [ ] Add named education, procurement, finance and privacy reviewers.
- [ ] Recheck the GeM headset listing.
- [ ] Recheck the July 2025 GeM contract and scope.
- [ ] Recheck the 2026 tender examples.
- [ ] Recalculate every public and sample number.
- [ ] Clearly flag the inconsistent vendor proposal.
- [ ] Verify PM SHRI funding context and avoid entitlement claims.
- [ ] Verify current tax treatment and do not hard-code one GST rate.
- [ ] Verify DPDP commencement and child-data obligations.
- [ ] Verify current e-waste rules and channels.
- [ ] Add visible pricing and no-guarantee disclaimer.
- [ ] Publish methodology and research date.
- [ ] Connect budget, readiness and implementation CTAs.
- [ ] Add BOQ and TCO downloads.
- [ ] Add quote arithmetic validation.
- [ ] Separate mandatory, optional and future items.
- [ ] Add first-year and recurring licence terms.
- [ ] Add support, warranty and end-of-support fields.
- [ ] Add teacher time, privacy, accessibility and security costs.
- [ ] Add replacement, migration and e-waste.
- [ ] Keep confidential quotes out of public AI systems.
- [ ] Keep personal calculator-result URLs out of the index.
- [ ] Validate Article and BreadcrumbList schema.
- [ ] Ensure FAQ schema matches visible content if enabled.
- [ ] Confirm canonical, Open Graph and social metadata.
- [ ] Add accessible data tables for charts.
- [ ] Test tax-inclusive/exclusive, renewals and replacement scenarios.
- [ ] Test mobile, keyboard, screen reader, print and spreadsheet export.
- [ ] Check citations, spelling and broken links.
- [ ] Confirm no price, funding, learning, ROI, tax, safety, suitability or ranking guarantee appears.
