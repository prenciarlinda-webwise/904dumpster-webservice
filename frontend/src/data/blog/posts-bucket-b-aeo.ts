import { BlogPost } from './types'

// Bucket-B AEO posts: general waste-management PROCESS/informational queries
// (landfill, recycling center, hazardous waste, battery, sharps disposal "near me").
// These are NOT about the company Waste Management — they target the activity of
// managing waste, matched against Ahrefs gap data pulled from wm.com. Each post
// front-loads the booking link inside the first ~60 words per the site's AEO/GEO
// standard, explains what items are prohibited in a roll-off dumpster and why, and
// routes readers to the 904 Dumpster booking link for the rest of their cleanout.
export const BUCKET_B_AEO_POSTS: BlogPost[] = [
  {
    slug: 'landfill-dump-near-me-jacksonville-fl',
    title: 'Landfill and Dump Near Me in Jacksonville, FL: Where Trash Actually Goes',
    metaTitle: 'Landfill & Dump Near Me in Jacksonville FL: Where Trash Goes',
    metaDescription: 'Searching "landfill near me" or "dump near me" in Jacksonville? Here is where household trash and construction debris actually go, and how a 904 Dumpster roll-off compares to hauling it yourself.',
    excerpt: 'Jacksonville-area trash generally ends up at Trail Ridge Landfill on the Westside or at a city-permitted transfer station. Here is how the system works, when a personal dump run makes sense, and when a roll-off dumpster from 904 Dumpster is the cheaper option.',
    category: 'sustainability',
    author: '904 Dumpster',
    publishedDate: '2026-07-12T08:00:00-04:00',
    readTime: '6 min read',
    featuredImage: '/images/dumpster-rental-jacksonville.jpg',
    featuredImageAlt: 'Roll-off dumpster loaded for a Jacksonville FL debris haul',
    tags: ['landfill near me jacksonville', 'dump near me jacksonville fl', 'dumps near me', 'garbage dump near me', 'trash dump near me jacksonville', 'waste trash dump'],
    status: 'published' as const,
    relatedSlugs: ['where-does-trash-go-after-you-throw-it-away', 'what-can-and-cannot-go-in-a-dumpster-rules', 'dumpster-rental-cost-complete-pricing-guide'],
    about: [
      { name: 'Landfill', sameAs: 'https://en.wikipedia.org/wiki/Landfill' },
      { name: 'Jacksonville, Florida', type: 'Place', sameAs: 'https://en.wikipedia.org/wiki/Jacksonville,_Florida' },
    ],
    mentions: [
      { name: 'Waste management', sameAs: 'https://en.wikipedia.org/wiki/Waste_management' },
      { name: 'Roll-off container', sameAs: 'https://en.wikipedia.org/wiki/Roll-off_(dumpster)' },
    ],
    content: `
If you are searching "landfill near me" or "dump near me" in Jacksonville, the short answer is Trail Ridge Landfill on the Westside, the regional facility most Duval County trash and construction debris eventually reaches, often by way of a city transfer station first. For a full cleanout, renovation, or debris haul, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) or call **(904) 240-5598** and skip the gate fees and truck trips entirely.

## Where Does Jacksonville's Trash Actually Go?

Most Duval County residential trash does not go straight to a landfill. It is collected curbside, hauled to a **transfer station** where it is consolidated into larger loads, then trucked to Trail Ridge Landfill for final disposal. Construction and demolition debris follows a similar path when it is not diverted for recycling. Our companion guide on [what a transfer station is and how waste reaches its final destination](/blog/where-does-trash-go-after-you-throw-it-away) covers that middle step in more detail.

If you are hauling debris yourself rather than using curbside pickup, the City of Jacksonville's [Solid Waste Division](https://www.coj.net/departments/solid-waste-division) is the authoritative source for current landfill and transfer station hours, accepted materials, and gate fees, since these change periodically.

## Can I Just Take My Debris to the Dump Myself?

For a single load that fits in a pickup truck, yes — a personal dump run is usually the cheapest option. But the math flips quickly once a project generates more than one or two truckloads:

- Each landfill or transfer station trip typically costs **$35-$75 in gate fees**, on top of fuel and your own time
- A midsize kitchen remodel, roof tear-off, or garage cleanout usually fills 3-7 pickup truck loads
- Multiple trips mean multiple gate fees, multiple hours of loading and driving, and no guarantee the facility accepts everything you are hauling

Most Jacksonville homeowners hit the break-even point at 2-3 truckloads, after which a flat-rate roll-off dumpster from 904 Dumpster costs less than the combined fuel, time, and gate fees of doing it yourself — and the container sits in your driveway so you load it once instead of your truck bed repeatedly.

## What Cannot Go to the Landfill (or in a Dumpster)

Not everything belongs in general household trash, at either the curb or the landfill gate. Items that require special handling instead of standard disposal include:

- Household hazardous waste — paint, solvents, pesticides, propane tanks
- Car batteries and most rechargeable batteries
- Electronics and e-waste
- Tires
- Medical sharps and syringes

We cover each of those categories, with Jacksonville-specific disposal guidance, in separate guides linked at the end of this article. None of these can go in a 904 Dumpster roll-off container either — see our full [prohibited items list](/rules/prohibited-items-list) before you load.

## Construction Debris Gets Diverted Before It Reaches the Landfill

Not all construction and demolition debris ends up buried. Clean concrete gets crushed and reused as road base, clean wood gets ground into mulch, and scrap metal gets pulled for recycling before the rest reaches the landfill. This diversion happens at the transfer station or a dedicated C&D recycling facility, not curbside, which is one more reason a roll-off dumpster routed through a hauler that sorts loads can recover more material than a straight-to-landfill personal haul. Our [recycling guide for Jacksonville construction projects](/blog/recycling-guide-jacksonville-construction-projects) covers which materials get diverted and how to keep loads separated if you want to maximize what gets recycled instead of landfilled.

## What Counts as Construction Debris vs. Household Trash

The dividing line matters because it determines which disposal path applies. Drywall, lumber, flooring, roofing material, and tile all count as construction and demolition debris and require a dumpster or dedicated drop-off, not curbside pickup, regardless of volume. See our [full guide to what can and cannot go in a dumpster](/blog/what-can-and-cannot-go-in-a-dumpster-rules) for the complete breakdown by material.

## Sizing a Dumpster Instead of Multiple Landfill Runs

Once you have decided a roll-off makes more sense than repeated dump runs, the next question is size. A [10-yard](/10-yard-dumpster-rental) replaces roughly 3 pickup truck loads, a [15-yard](/15-yard-dumpster-rental) about 5, and a [20-yard](/20-yard-dumpster-rental) about 7, at flat rates from $299. See our [full pricing breakdown](/blog/dumpster-rental-cost-complete-pricing-guide) for how these compare county by county.

## A Personal Dump Run Costs More Time Than People Expect

Between loading the truck, driving to Trail Ridge or a transfer station, waiting in the gate line, unloading, and driving back, a single trip routinely takes an hour or more, longer during peak weekend hours when other homeowners are making the same run. Multiply that by 3 to 7 trips for a midsize project and the time cost alone often exceeds what a flat-rate roll-off would have cost, before counting gate fees or fuel.

## Dumpster Rental vs. Landfill Runs: Quick Comparison

| | DIY Landfill Run | 904 Dumpster Roll-Off |
|---|---|---|
| Cost for 3+ loads | $150-$300+ in gate fees alone | Flat $299-$399 |
| Your time | 1-2 hours per trip | Load on your own schedule |
| Vehicle needed | Pickup truck | None |
| Weight limits | Per-trip gate fee | 1-2 tons included |

## Frequently Asked Questions

### Where is the closest landfill to Jacksonville, FL?
Trail Ridge Landfill on the Westside is the primary regional landfill serving Duval County. Many residential loads route through a transfer station first rather than going directly to the landfill. Check the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) for current hours and accepted materials before hauling a load yourself.

### Is it cheaper to rent a dumpster or go to the dump?
For a single small load that fits in a pickup truck, a dump run is usually cheaper. For 2 or more truckloads, a flat-rate roll-off dumpster from 904 Dumpster is typically cheaper once you factor in gate fees, fuel, and your time.

### Can I put construction debris in a regular dumpster or trash can?
No. Construction and demolition debris — drywall, lumber, roofing, flooring — needs a roll-off dumpster or a dedicated landfill drop-off. Standard curbside trash service is not built for renovation-volume debris.

### What can't I take to the landfill or put in a dumpster?
Hazardous materials like paint, chemicals, and propane, along with batteries, electronics, tires, and medical sharps, all require separate disposal streams. See our [prohibited items list](/rules/prohibited-items-list) for the full rundown of what a 904 Dumpster roll-off cannot accept.

## Skip the Gate Fees — Book a Roll-Off Instead

For any project generating more than a truckload or two of debris, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) with flat-rate pricing from $299 and same-day delivery across Jacksonville. Call **(904) 240-5598** with questions about what fits.`,
  },
  {
    slug: 'recycling-center-near-me-jacksonville-fl',
    title: 'Recycling Center Near Me in Jacksonville, FL: Curbside vs. Drop-Off Guide',
    metaTitle: 'Recycling Center Near Me in Jacksonville FL - Curbside & Drop-Off',
    metaDescription: 'Looking for a recycling center near you in Jacksonville FL? Here is what goes in your curbside bin, what needs a drop-off center, and what to do with renovation-volume recyclables.',
    excerpt: 'Curbside recycling in Jacksonville covers the basics — cans, bottles, cardboard, paper. Bulk cardboard, scrap metal, and renovation-volume recyclables usually need a drop-off center instead. Here is how to tell the difference.',
    category: 'sustainability',
    author: '904 Dumpster',
    publishedDate: '2026-07-12T18:00:00-04:00',
    readTime: '6 min read',
    featuredImage: '/images/affordable-dumpster-rental-jacksonville-fl.jpg',
    featuredImageAlt: 'Sorted recyclables ready for drop-off in Jacksonville FL',
    tags: ['recycling center near me jacksonville', 'recycle near me jacksonville fl', 'recycling centers near me', 'cardboard recycling near me', 'recyclers close to me'],
    status: 'published' as const,
    relatedSlugs: ['recycling-guide-jacksonville-construction-projects', 'scrap-metal-recycling-near-me-jacksonville-fl', 'what-can-and-cannot-go-in-a-dumpster-rules'],
    about: [
      { name: 'Recycling', sameAs: 'https://en.wikipedia.org/wiki/Recycling' },
      { name: 'Duval County, Florida', type: 'Place', sameAs: 'https://en.wikipedia.org/wiki/Duval_County,_Florida' },
    ],
    mentions: [
      { name: 'Cardboard', sameAs: 'https://en.wikipedia.org/wiki/Corrugated_fiberboard' },
    ],
    content: `
Searching "recycling center near me" in Jacksonville usually means one of two things: you need a place for a small drop-off, or your curbside bin cannot handle what you have. For the second case — bulk cardboard from a move, renovation debris, or an oversized cleanout — [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) or call **(904) 240-5598** and skip the multiple car trips.

## Curbside Recycling vs. a Recycling Center: What's the Difference?

**Curbside recycling** is your weekly or biweekly single-stream cart, collected by the city's contracted hauler. It is built for ongoing household volume: aluminum and steel cans, plastic bottles and jugs, cardboard, paper, and glass in most Duval County service areas.

**A drop-off recycling center** handles what curbside cannot: large batches of cardboard from a move, scrap metal, bulk glass, or materials your specific service area does not collect curbside. The [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) publishes current drop-off locations and accepted materials, since these vary by neighborhood and change periodically — check there before a special trip.

## What Actually Goes in Your Curbside Bin

Rules vary slightly by hauler, but across most of Jacksonville, curbside single-stream recycling generally accepts:

- Aluminum and steel cans
- Plastic bottles and jugs (check the number on the bottom against your provider's current list)
- Cardboard and paperboard, flattened
- Newspaper, magazines, and mixed paper
- Glass bottles and jars (some service areas only)

**Common contaminants to keep out:** plastic bags and film, styrofoam, food-soiled cardboard or paper, garden hoses, and "wishcycled" items that seem recyclable but are not accepted locally. Contamination is one of the most common reasons a load of otherwise-good recycling gets rejected, so when in doubt, leave it out of the bin.

## When Renovation Debris Needs More Than a Recycling Bin

A single moving box or two of packing material fits your curbside cart. A whole-house move, kitchen renovation, or garage cleanout does not. Once cardboard, packaging, or clean scrap material exceeds what your cart holds in a week, a drop-off center or a dedicated roll-off dumpster becomes the practical option. For construction and demolition projects specifically, our [construction and demolition recycling guide](/blog/recycling-guide-jacksonville-construction-projects) covers which materials (concrete, metal, clean wood) are worth separating for recycling versus disposing of together.

904 Dumpster roll-off containers are built for mixed debris, not sorted recyclables — see our guide on [what you can actually recycle from your Jacksonville project](/blog/recycling-guide-jacksonville-construction-projects) for how to separate recyclable material before it goes in the bin.

## Where Duval County Recycling Actually Gets Processed

Curbside recycling collected in Duval County is sorted at a materials recovery facility before being sold to buyers who reprocess it into new material, a step most residents never see between the truck picking up the cart and the material eventually becoming something else. Understanding this middle step matters for one practical reason: local hauler and facility contracts occasionally change which materials are accepted, so a Jacksonville-specific list can shift year to year even when the general categories, cans, bottles, cardboard, paper, stay the same. Checking the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) site periodically, not just once, keeps your sorting habits current.

## Bulk Recycling Pickup Versus a Drop-Off Trip

Some Jacksonville service areas offer a scheduled bulk recycling pickup for a larger-than-normal load, separate from both weekly curbside and a drop-off center run. This option exists specifically for situations like a post-holiday cardboard surge or a one-time large batch that does not justify renting a dumpster but exceeds what the weekly cart holds. Availability and scheduling requirements vary by provider, so confirming with your specific hauler before assuming it is offered saves a wasted call.

## When to Just Use the Dumpster Instead

For a full renovation or cleanout where recyclable material is mixed in with genuine debris throughout, drywall next to cardboard, old furniture next to scrap metal, sorting for a separate recycling trip is often not worth the time compared to letting the roll-off take everything and letting the disposal facility handle recovery. Pulling out only the highest-value separable items, clean scrap metal in particular, while sending the rest to the dumpster as mixed debris is usually the more realistic approach for a real project rather than trying to sort every material into its ideal stream.

## Frequently Asked Questions

### Where can I recycle cardboard in Jacksonville?
Small amounts of flattened cardboard go in your curbside recycling cart. For large volumes — after a move or a big delivery — check the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) for current drop-off recycling center locations, since bulk cardboard often exceeds curbside cart capacity.

### What can I put in my curbside recycling bin in Jacksonville?
Most Duval County service areas accept aluminum and steel cans, plastic bottles and jugs, cardboard, paper, and glass. Rules vary by provider, so check your specific hauler's current list, and avoid bagging recyclables in plastic film, which most facilities cannot process.

### Can I recycle construction debris?
Some construction materials — clean metal, concrete, and untreated wood — can be recycled, but usually through a specialty recycler or transfer station rather than curbside pickup. Mixed demolition debris is generally better suited to a roll-off dumpster.

### Do I need a recycling center or a dumpster for a home cleanout?
If your project is generating sorted, clean recyclable material in large volume (cardboard from a move, scrap metal), a drop-off recycling center is the right destination. If your project is generating mixed debris — old furniture, drywall, flooring, general clutter — a roll-off dumpster from 904 Dumpster is the faster, cheaper option.

## Scrap Metal Deserves Its Own Trip

Scrap metal is worth calling out separately from general recycling, since it is one of the few materials that pays you back rather than just being free to drop off. Old appliances, pipe, and metal furniture are also allowed straight in a roll-off dumpster if separating them out is not worth the trip — see our [scrap metal recycling guide](/blog/scrap-metal-recycling-near-me-jacksonville-fl) for when it makes sense to haul metal to a scrap yard instead.

## Why Contaminated Loads Sometimes Get Landfilled Anyway

Single-stream recycling gets sorted at a materials recovery facility using a mix of optical scanners, magnets, and manual sorting, and the process breaks down when a load is too contaminated to sort economically. A bin heavy with food residue, plastic bags tangled in the equipment, or non-recyclable items mixed in can result in the whole load, not just the bad items, getting diverted to the landfill instead of processed. This is why keeping obvious contaminants like greasy pizza boxes and plastic film out of your cart matters more than people expect: it is not just about your one bin, it protects the batch it gets combined with at the facility.

## Electronics Need a Different Drop-Off Than General Recycling

Old TVs, computers, and monitors are not accepted in curbside recycling or a standard drop-off center, and most haulers will not take them in a roll-off dumpster either, since they can contain materials that require dedicated e-waste processing. See our [electronics and e-waste disposal guide](/blog/how-to-dispose-of-electronics-e-waste) for where these go in Jacksonville.

## Have More Debris Than Your Recycling Bin Can Handle?

For moves, renovations, and cleanouts that produce more than curbside recycling can absorb, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) with flat-rate pricing from $299 and same-day delivery across Jacksonville. Call **(904) 240-5598** with questions.`,
  },
  {
    slug: 'hazardous-waste-disposal-near-me-jacksonville-fl',
    title: 'Hazardous Waste Disposal Near Me in Jacksonville, FL: Paint, Chemicals & Propane',
    metaTitle: 'Hazardous Waste Disposal Near Me in Jacksonville FL',
    metaDescription: 'Old paint, pool chemicals, pesticides, or a propane tank to get rid of in Jacksonville? Household hazardous waste cannot go in a roll-off dumpster or curbside trash. Here is what to do instead.',
    excerpt: 'Paint, chemicals, pesticides, and propane tanks cannot go in curbside trash or a roll-off dumpster in Jacksonville. Here is why, and what to do with the hazardous items so 904 Dumpster can handle the rest of your cleanout.',
    category: 'sustainability',
    author: '904 Dumpster',
    publishedDate: '2026-07-13T08:00:00-04:00',
    readTime: '5 min read',
    featuredImage: '/images/dumpster-service-jacksonville-fl.jpg',
    featuredImageAlt: 'Household hazardous waste sorted for proper disposal in Jacksonville FL',
    tags: ['hazardous waste disposal near me jacksonville', 'household hazardous waste jacksonville fl', 'where to dispose of paint jacksonville', 'how to dispose of pool chemicals'],
    status: 'published' as const,
    relatedSlugs: ['where-to-dispose-of-old-paint-jacksonville', 'battery-disposal-near-me-jacksonville-fl', 'what-can-and-cannot-go-in-a-dumpster-rules'],
    about: [
      { name: 'Hazardous waste', sameAs: 'https://en.wikipedia.org/wiki/Hazardous_waste' },
      { name: 'Jacksonville, Florida', type: 'Place', sameAs: 'https://en.wikipedia.org/wiki/Jacksonville,_Florida' },
    ],
    mentions: [
      { name: 'Household hazardous waste', sameAs: 'https://en.wikipedia.org/wiki/Household_hazardous_waste' },
    ],
    content: `
If you are clearing out a garage or shed and found old paint cans, pool chemicals, pesticides, or a propane tank, here is the short version: none of it can go in curbside trash or a roll-off dumpster. For the rest of the cleanout — furniture, boxes, general clutter — [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) or call **(904) 240-5598**, and we will handle everything except the hazardous items themselves.

## Why Hazardous Waste Can't Go in a Dumpster

Roll-off dumpster companies, including 904 Dumpster, are prohibited from accepting hazardous materials for legal and environmental reasons. These materials can react dangerously with other debris, contaminate landfill sites, or create hazards for our drivers and disposal partners. This is standard across the industry, not a 904 Dumpster-specific restriction — see our full [prohibited items list](/rules/prohibited-items-list) for everything a roll-off cannot accept.

## What Counts as Household Hazardous Waste?

Common items found during a Jacksonville garage or shed cleanout that require special disposal:

- **Paint and stain** — latex and oil-based, plus paint thinner and solvents
- **Pool and lawn chemicals** — chlorine, algaecides, pesticides, herbicides, fertilizer concentrate
- **Propane tanks and fuel** — grill tanks, gasoline, kerosene, motor oil
- **Automotive fluids** — antifreeze, brake fluid, car batteries
- **Cleaning chemicals** — ammonia, bleach concentrate, drain cleaner
- **Aerosol cans** with hazardous contents

For paint specifically, we have a dedicated guide on [where to dispose of old paint in Jacksonville FL](/blog/where-to-dispose-of-old-paint-jacksonville) covering dry-out and drop-off options.

## Where Household Hazardous Waste Actually Goes

Household hazardous waste requires a dedicated collection stream rather than standard trash or recycling pickup. The [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) maintains current information on household hazardous waste collection options and events for Duval County residents — check there for what is currently accepted, since programs and locations are updated periodically. Some items, like partially-used propane tanks, can often be returned to the retailer or exchange location where you would buy a replacement.

## What 904 Dumpster Can Still Handle

Separating out the hazardous items does not mean you need a second hauler for everything else. A 904 Dumpster roll-off handles the rest of a garage, shed, or estate cleanout — old furniture, boxes, scrap wood, general clutter, and non-hazardous debris — at the same flat rate as any other project. Pull hazardous items aside first, and load everything else as usual.

## How to Tell If Something Counts as Hazardous

When a product's original container is gone or the label has faded, check for signal words like "danger," "warning," "caution," "flammable," "corrosive," "toxic," or "poison," any of which mean the product needs hazardous handling rather than the trash. If you genuinely cannot identify a chemical, do not guess: treat it as hazardous and bring it to a collection event, since misjudging it wrong in the direction of "probably fine" is the mistake that causes contamination or injury.

## Storing Hazardous Items Safely Until Drop-Off

Keep hazardous materials in their original, labeled containers whenever possible; a label is often the only way a collection facility can tell what they are receiving. Store them upright, away from heat and direct sun (a hot Florida garage or shed is not ideal for propane or aerosols), and keep incompatible chemicals apart, since some household products react dangerously if mixed, even by accident during storage. Never combine leftover paint, chemicals, or fuels into a single container to save space.

## Dried Latex Paint Is the One Exception

Wet, liquid paint of any kind is hazardous waste. But fully dried latex (water-based) paint is generally treated as solid waste once it has hardened all the way through, since it is no longer a liquid that can leak or react. That distinction is why our [paint disposal guide](/blog/where-to-dispose-of-old-paint-jacksonville) walks through the dry-out process: it is often the fastest legal path to getting old latex paint into a regular trash or dumpster load instead of a hazardous waste drop-off.

## Battery Disposal Follows Similar Rules

Batteries are technically a separate category from household chemicals, but they get grouped with hazardous waste for the same practical reason: fire and reactivity risk in a dumpster or trash truck. Car batteries, rechargeables, and household batteries each have a slightly different drop-off path; see our [battery disposal guide](/blog/battery-disposal-near-me-jacksonville-fl) for the breakdown by battery type.

## Hazardous Waste Collection Events

Beyond year-round drop-off options, Duval County periodically runs household hazardous waste collection events that accept a broader range of materials in one visit than a standard drop-off location, sometimes including items that otherwise require a special trip to a specific facility. These events are announced through the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division), so checking their current schedule before assuming you need to find an everyday drop-off point can save a trip if an event is coming up.

## Frequently Asked Questions

### Can I put old paint cans in a dumpster rental?
No. Paint, especially oil-based paint and solvents, is considered household hazardous waste and cannot go in a roll-off dumpster. Latex paint can sometimes be dried out and disposed of as solid waste once fully hardened — see our [paint disposal guide](/blog/where-to-dispose-of-old-paint-jacksonville) for the process.

### Can I throw away a propane tank?
No, propane tanks cannot go in curbside trash or a dumpster, even if empty. Many retailers that sell propane exchanges will accept old or damaged tanks. Check with your local retailer or the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) for current disposal options.

### What household chemicals count as hazardous waste?
Pool chemicals, pesticides, herbicides, concentrated cleaning products, automotive fluids, and solvents all count as household hazardous waste. If a product's label includes warnings like "flammable," "corrosive," or "toxic," treat it as hazardous rather than putting it in the trash or a dumpster.

### Will 904 Dumpster still deliver a dumpster if I have some hazardous items in my cleanout?
Yes. Just set hazardous items aside and dispose of them separately. Everything else — furniture, boxes, general debris — can go in your roll-off dumpster as normal.

## Book Your Jacksonville Cleanout Dumpster

Once the hazardous items are set aside, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) for everything else, with flat-rate pricing from $299 and same-day delivery across Jacksonville. Call **(904) 240-5598** if you are unsure whether something is allowed.`,
  },
  {
    slug: 'battery-disposal-near-me-jacksonville-fl',
    title: 'Battery Disposal Near Me in Jacksonville, FL: How to Recycle Batteries Safely',
    metaTitle: 'Battery Disposal Near Me in Jacksonville FL - Recycling Guide',
    metaDescription: 'Car batteries, rechargeable batteries, and household batteries all need separate disposal in Jacksonville FL. Here is how to recycle each type safely, and what to do with the rest of your cleanout.',
    excerpt: 'Batteries cannot go in curbside trash or a roll-off dumpster because of fire risk. Car batteries, rechargeables, and household alkaline batteries each have a different Jacksonville disposal path — here is how to sort them.',
    category: 'sustainability',
    author: '904 Dumpster',
    publishedDate: '2026-07-13T18:00:00-04:00',
    readTime: '5 min read',
    featuredImage: '/images/dumpster-bag-rental.png',
    featuredImageAlt: 'Household batteries sorted for recycling in Jacksonville FL',
    tags: ['battery disposal near me jacksonville', 'battery recycling near me jacksonville fl', 'where to recycle car battery jacksonville', 'rechargeable battery disposal'],
    status: 'published' as const,
    relatedSlugs: ['how-to-dispose-of-electronics-e-waste', 'what-can-and-cannot-go-in-a-dumpster-rules', 'hazardous-waste-disposal-near-me-jacksonville-fl'],
    about: [
      { name: 'Battery recycling', sameAs: 'https://en.wikipedia.org/wiki/Battery_recycling' },
      { name: 'Jacksonville, Florida', type: 'Place', sameAs: 'https://en.wikipedia.org/wiki/Jacksonville,_Florida' },
    ],
    mentions: [
      { name: 'Lithium-ion battery', sameAs: 'https://en.wikipedia.org/wiki/Lithium-ion_battery' },
    ],
    content: `
Clearing out a garage or junk drawer in Jacksonville almost always turns up a pile of batteries — old car batteries, dead power tool packs, AA and AAA cells. None of them belong in curbside trash or a roll-off dumpster. For everything else in the cleanout, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) or call **(904) 240-5598**, and handle the batteries separately using the guide below.

## Why Batteries Can't Go in the Trash or a Dumpster

Batteries, especially lithium-ion and rechargeable types, can short-circuit and ignite when crushed or exposed to other metal debris — a real fire risk in a collection truck, a landfill, or a loaded roll-off dumpster. That is why batteries are on every hauler's prohibited items list, 904 Dumpster included. See our [prohibited items list](/rules/prohibited-items-list) for the full rundown of what cannot go in a roll-off.

## How to Dispose of Each Type of Battery in Jacksonville

**Car and marine batteries (lead-acid).** Nearly any auto parts store or retailer that sells replacement batteries — AutoZone, O'Reilly, Advance Auto Parts, and similar chains — will accept your old lead-acid battery for recycling, often for free and sometimes with a small core-return credit.

**Rechargeable batteries (lithium-ion, NiMH, power tool packs).** Many hardware and electronics retailers host battery take-back bins through recycling programs like Call2Recycle. Check with your local hardware store or big-box retailer for an in-store collection bin before assuming curbside disposal is an option — it is not.

**Household alkaline batteries (AA, AAA, 9V, C, D).** These are lower-risk than rechargeables, but many Florida municipalities still recommend separate disposal rather than curbside trash. The [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) publishes current guidance on household battery disposal for Duval County residents.

**Electronics with built-in batteries.** Laptops, phones, and similar devices should go through electronics recycling rather than the trash, since the battery cannot easily be removed. See our guide on [how to dispose of electronics and e-waste responsibly](/blog/how-to-dispose-of-electronics-e-waste) for drop-off options.

## Battery Fires Are More Common Than You'd Think

Lithium-ion battery fires in waste and recycling trucks have become a documented, growing problem nationally as more devices — power tools, e-bikes, laptops — rely on them. A single damaged or crushed battery can ignite an entire load. Taking the extra step to recycle batteries properly instead of tossing them in with general debris protects the crews handling your trash, recycling, and dumpster loads.

## Tape the Terminals Before You Transport Batteries

Loose batteries touching each other, or touching loose change or keys in the same bag, can short-circuit through their exposed terminals. Cover the terminals of car and lead-acid batteries with electrical tape, and bag rechargeable batteries individually or tape over the contacts before carrying a batch to a drop-off point. It takes an extra minute and meaningfully reduces the fire risk during the trip itself, not just at the collection facility.

## Check for Swelling or Damage Before Handling

A lithium-ion battery that is swollen, dented, punctured, or feels unusually hot is more likely to ignite when handled or transported. If a battery from a power tool, laptop, or e-bike looks physically damaged, do not put it in a bag with other batteries or toss it loosely in your car. Many battery take-back programs and household hazardous waste events have a protocol for damaged batteries specifically, so call ahead and mention the damage before you show up.

## The Prohibited List Is Only Half the Answer

Knowing a battery is prohibited is only half the practical question; the other half is what happens if one ends up in a load anyway. If a battery is found during loading or at pickup, it needs to come back out before the container is picked up, since a hauler cannot legally transport it mixed with general debris. See our [complete guide to what can and cannot go in a dumpster](/blog/what-can-and-cannot-go-in-a-dumpster-rules) for the rest of the prohibited-items list and why each category is restricted.

## E-Bike and Scooter Batteries Need Extra Care

E-bike and electric scooter battery packs are larger and hold significantly more energy than a laptop or power tool battery, which makes a damaged or improperly stored pack a bigger fire risk during transport and storage. These typically need to go through a specialized recycler or the manufacturer's take-back program rather than a general battery drop-off bin, since many retail collection bins are not rated for packs that size. Check with the manufacturer or retailer directly before assuming a standard battery bin will accept one.

## Why Some Retailers Charge a Core Fee for Old Batteries

Some auto parts stores charge a small deposit or "core fee" if you buy a replacement car battery without turning in the old one, refunded once you bring the old battery back. This is not a disposal fee; it is designed to guarantee the old battery actually gets recycled rather than thrown away, since lead-acid batteries contain recoverable lead and acid that most retailers are required to process correctly rather than landfill.

## Frequently Asked Questions

### Can I put batteries in my 904 Dumpster rental?
No. All battery types — car, rechargeable, and household — are prohibited in roll-off dumpsters due to fire risk. Set batteries aside and recycle them through a dedicated program before loading the rest of your debris.

### Where can I recycle a car battery in Jacksonville?
Most auto parts stores and retailers that sell replacement batteries, including national chains with Jacksonville locations, accept old lead-acid car batteries for recycling, often free of charge.

### What do I do with old power tool batteries?
Rechargeable power tool batteries should go to a retailer or hardware store battery take-back bin rather than the trash. Many home improvement stores participate in battery recycling programs like Call2Recycle.

### Are household AA and AAA batteries hazardous waste?
Standard alkaline batteries are lower-risk than rechargeables, but many places still recommend recycling rather than trashing them. Check the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) for current local guidance.

## Batteries Are One of Several Cleanout Exceptions

Batteries are just one item on the short list of things that cannot go in a roll-off dumpster alongside your general debris. Paint, pool chemicals, propane, and other household chemicals follow the same rule — see our [hazardous waste disposal guide](/blog/hazardous-waste-disposal-near-me-jacksonville-fl) for the full list of what needs a separate drop-off before you start loading the dumpster.

## Everything Else Goes in Your Roll-Off

Once batteries are set aside for proper recycling, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) for the rest of your Jacksonville cleanout, with flat-rate pricing from $299 and same-day delivery. Call **(904) 240-5598** with questions.`,
  },
  {
    slug: 'sharps-medical-waste-disposal-near-me-jacksonville-fl',
    title: 'Sharps Disposal Near Me in Jacksonville, FL: Safe Needle & Medical Waste Guide',
    metaTitle: 'Sharps Disposal Near Me in Jacksonville FL - Medical Waste Guide',
    metaDescription: 'Needles, syringes, and other sharps require special disposal in Jacksonville FL and cannot go in curbside trash or a dumpster. Here is how to dispose of them safely, plus what 904 Dumpster can still help with.',
    excerpt: 'Needles and syringes are never safe to put in curbside trash or a roll-off dumpster. Here is how Jacksonville residents can dispose of sharps safely, and what 904 Dumpster can handle for the rest of a cleanout.',
    category: 'sustainability',
    author: '904 Dumpster',
    publishedDate: '2026-07-14T08:00:00-04:00',
    readTime: '5 min read',
    featuredImage: '/images/dumpster-rental-near.jpg',
    featuredImageAlt: 'Sharps container for safe medical waste disposal in Jacksonville FL',
    tags: ['sharps disposal near me jacksonville', 'medical waste disposal jacksonville fl', 'needle disposal near me', 'where to dispose of syringes'],
    status: 'published' as const,
    relatedSlugs: ['what-can-and-cannot-go-in-a-dumpster-rules', 'hazardous-waste-disposal-near-me-jacksonville-fl', 'hoarder-house-cleanout-dumpster-jacksonville'],
    about: [
      { name: 'Sharps waste', sameAs: 'https://en.wikipedia.org/wiki/Sharps_waste' },
      { name: 'Jacksonville, Florida', type: 'Place', sameAs: 'https://en.wikipedia.org/wiki/Jacksonville,_Florida' },
    ],
    mentions: [
      { name: 'Medical waste', sameAs: 'https://en.wikipedia.org/wiki/Medical_waste' },
    ],
    content: `
If a Jacksonville cleanout — a family member's home, an estate, a rental turnover — has turned up needles, syringes, or other medical sharps, they cannot go in curbside trash or a roll-off dumpster under any circumstances. For the rest of the property, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) or call **(904) 240-5598** once sharps are set aside and disposed of properly using the guide below.

## Why Sharps Never Go in Regular Trash or a Dumpster

Loose needles and syringes create a genuine puncture and infection risk for sanitation workers, dumpster loaders, and anyone who later sorts debris — including our own crews. This is a strict, non-negotiable exclusion on every roll-off dumpster's prohibited items list, 904 Dumpster included. See our full [prohibited items list](/rules/prohibited-items-list) for everything else that requires separate handling.

## How to Dispose of Sharps Safely in Jacksonville

**Use a proper sharps container.** Never place loose needles directly in any trash bag or bin. FDA-cleared sharps containers are sold at most pharmacies, or a heavy-duty plastic container with a secure, puncture-resistant lid (like a detergent bottle) can work as a temporary measure — never use glass or thin plastic.

**Check pharmacy take-back programs.** Many pharmacies, including national chains with Jacksonville locations, offer sharps take-back or mail-back programs. Call ahead to confirm your local pharmacy participates before making a trip.

**Contact your healthcare provider.** If the sharps are related to a specific medical condition (diabetes supplies, injectable medication), your prescribing provider or home health company can often advise on or provide disposal containers and take-back options.

**Check with the City of Jacksonville.** The [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) can direct you to current household sharps and medical waste disposal guidance for Duval County, since accepted drop-off points can change.

## Cleaning Out a Property With Medical Supplies

Estate cleanouts, hoarder house cleanouts, and rental turnovers sometimes involve more than a few loose needles — insulin supplies, home health equipment, or accumulated medical waste from a long illness. In these situations:

1. Set aside all sharps and medical waste first, before any general cleanout begins
2. Use a rigid, sealed container for transport — never a garbage bag
3. Contact a pharmacy or the city's solid waste division for proper disposal before loading the rest of the debris
4. Once sharps are removed, everything else — furniture, medical equipment packaging, general clutter — can go in a standard 904 Dumpster roll-off

Our [hoarder house cleanout guide](/blog/hoarder-house-cleanout-dumpster-jacksonville) covers the broader process for properties with this level of accumulation.

## Sharps Containers Should Never Be Overfilled

A sharps container is designed to be sealed and disposed of once it reaches about three-quarters full, not packed to the top. Overfilling makes it easier for a needle tip to poke through the opening or for the lid to fail to seal properly, defeating the point of using a rigid container in the first place. If you find a container that is already full or overfilled during a cleanout, treat it carefully and avoid pressing down on the contents to make room for more.

## What Else Counts as a Sharp

Beyond hypodermic needles and syringes, sharps disposal also applies to lancets from diabetes test kits, insulin pen needles, and auto-injectors like EpiPens once they have been used. Any of these found during a cleanout should go into the same rigid container and follow the same disposal path as loose needles, rather than being separated out as "probably fine" because they look different from a syringe.

## Sharps vs. Other Hazardous Cleanout Items

Sharps are handled separately from other prohibited materials like paint, batteries, and chemicals, since the risk they pose, puncture and infection, is different from a fire or chemical hazard. See our [full guide to what can and cannot go in a dumpster](/blog/what-can-and-cannot-go-in-a-dumpster-rules) for the complete prohibited-items list, and our [household hazardous waste guide](/blog/hazardous-waste-disposal-near-me-jacksonville-fl) for the other category of items that need separate handling during the same cleanout.

## Home Health Equipment Beyond Sharps

Estate and hoarder cleanouts involving a long illness sometimes include home health equipment beyond sharps: oxygen concentrators, hospital beds, mobility aids, that may still have medical or resale value rather than belonging in general debris. Many medical equipment suppliers and some nonprofit organizations accept donated durable medical equipment in working condition, which is worth checking before treating it as disposal alongside general cleanout debris.

## Coordinating Sharps Removal With a Cleanout Timeline

For a hoarder or estate cleanout where sharps are mixed throughout the property rather than contained in one spot, plan a dedicated pass to locate and remove them before the main cleanout crew starts loading the dumpster, rather than expecting general laborers to identify and safely handle sharps as they come across them mid-task. This is especially worth building into the timeline for severe accumulations where sorting happens quickly under time pressure.

## Frequently Asked Questions

### Can I put needles or syringes in a dumpster rental?
No, never. Sharps are strictly prohibited in every roll-off dumpster because of puncture and infection risk to anyone handling the load, including our crews. They must go through a dedicated sharps disposal program.

### What do I do with a jar of old needles I found while cleaning out a house?
Do not transfer them into a trash bag. Transfer them carefully into a rigid, sealed container if they are not already in one, then take them to a participating pharmacy or contact the [City of Jacksonville Solid Waste Division](https://www.coj.net/departments/solid-waste-division) for current sharps disposal guidance.

### Do pharmacies in Jacksonville take back used sharps?
Many do, often through a mail-back or in-store take-back program. Call your local pharmacy directly to confirm participation and any requirements before dropping off or mailing sharps.

### Will 904 Dumpster still deliver a dumpster for a cleanout that involved medical waste?
Yes. Once sharps and medical waste are removed and disposed of properly, everything else in the property — furniture, packaging, general debris — can go in a standard roll-off dumpster rental.

## Book the Rest of Your Cleanout

Once sharps are safely removed from the property, [book a 904 Dumpster roll-off online](https://app.icans.ai/customer-portal/904dumpster/book/) for everything else, with flat-rate pricing from $299 and same-day delivery across Jacksonville. Call **(904) 240-5598** with questions about what else is allowed.`,
  },
]
