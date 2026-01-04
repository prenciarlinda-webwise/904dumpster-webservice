export interface BlogCategory {
  slug: string
  name: string
  description: string
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  category: string
  author: string
  publishedDate: string
  updatedDate?: string
  readTime: string
  featuredImage?: string
  content: string
  tags: string[]
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'home-improvement',
    name: 'Home Improvement',
    description: 'Tips and guides for home renovation and cleanout projects',
  },
  {
    slug: 'dumpster-rental-tips',
    name: 'Dumpster Rental Tips',
    description: 'Expert advice on choosing and using roll-off dumpsters',
  },
  {
    slug: 'construction-waste',
    name: 'Construction Waste',
    description: 'Managing debris from construction and demolition projects',
  },
  {
    slug: 'local-guides',
    name: 'Local Guides',
    description: 'Jacksonville area guides for waste disposal and permits',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  // Local Guides Category - Paint Disposal
  {
    slug: 'how-to-dispose-of-paint-jacksonville',
    title: 'How to Dispose of Paint in Jacksonville, FL: The Complete 2026 Guide',
    metaTitle: 'How to Dispose of Paint in Jacksonville FL - Old Paint, Spray Cans & Thinner',
    metaDescription: 'How to dispose of old paint in Jacksonville FL. Learn how to dispose of latex paint, spray paint cans, and paint thinner at local drop-off sites. Free disposal options.',
    excerpt: 'To dispose of old paint in Jacksonville, FL, you must take wet paint to the Household Hazardous Waste Facility at 2675 Commonwealth Ave. Learn how to dispose of latex paint by drying it with kitty litter, how to dispose of spray paint cans, and how to dispose of paint thinner safely.',
    category: 'local-guides',
    author: '904 Dumpster Team',
    publishedDate: '2026-01-04',
    updatedDate: '2026-01-04',
    readTime: '8 min read',
    tags: ['how to dispose of paint', 'how to dispose of old paint', 'how to dispose of latex paint', 'how to dispose of spray paint', 'how to dispose of paint thinner', 'how to dispose of paint cans', 'paint disposal jacksonville'],
    content: `
## How to Dispose of Paint in Jacksonville: Quick Answer

**How to dispose of old paint in Jacksonville, FL**: Take wet paint to the Household Hazardous Waste Facility at 2675 Commonwealth Ave. While wet paint is prohibited in curbside bins and 904 Dumpster rentals, you can dispose of dried latex paint in your regular trash once solidified with cat litter.

**Find your nearest drop-off location**: Use the official [PaintCare Drop-Off Locator Tool](https://www.paintcare.org/drop-off-sites/) to find participating retailers and facilities near your Jacksonville zip code.

## How to Dispose of Latex Paint (Water-Based)

Learning **how to dispose of latex paint** is simple because it is not classified as hazardous waste. If the paint is dry, it can go in the trash.

**The Lowe's Method**: If you have less than an inch of paint remaining, just leave the lid off and let it air dry completely.

**The "904" Pro Tip**: For fuller cans, mix in kitty litter or a commercial paint hardener (available at the Lowe's on Philips Hwy or any hardware store). Once it reaches an "oatmeal" consistency and is fully solidified, it is safe for your regular trash can.

**Drying Time Guidelines**:
- Less than 1 inch: 2-3 days with lid off
- 1-2 inches: Add hardener, 3-5 days
- Half full or more: Pour into cardboard box with kitty litter, 5-7 days

## How to Dispose of Paint Thinner and Oil-Based Paints

Understanding **how to dispose of paint thinner** is critical because these materials are flammable and toxic. You cannot dry these out like latex. They must be taken to the city's specialized facility.

**Materials requiring hazardous waste disposal**:
- **Paint thinner and mineral spirits**
- **Turpentine**
- **Oil-based paints and stains**
- **Varnishes and Shellacs**
- **Wood stains and sealers**
- **Polyurethane coatings**

**Where to take paint thinner in Jacksonville**: The Household Hazardous Waste Facility at 2675 Commonwealth Ave accepts all paint thinners and solvents free of charge for Duval County residents.

## How to Dispose of Spray Paint Cans

Knowing **how to dispose of spray paint cans** correctly prevents safety hazards. The rules differ based on whether the can is empty or still contains product.

### How to Dispose of Empty Spray Paint Cans

**How to dispose of empty spray paint cans** is straightforward:
- Ensure the can is completely empty (no hissing when you press the nozzle)
- Empty aerosol cans can be recycled with metal recycling
- Remove plastic caps and recycle separately
- Place in your curbside recycling bin

### Spray Paint Cans with Product Remaining

If your spray paint can still has paint or pressure inside:
- **Do NOT puncture the can** - explosion and fire hazard
- Take to the HHW Facility at 2675 Commonwealth Ave
- Hours: Tuesday – Saturday, 8:00 AM – 5:00 PM

## How to Dispose of Paint Cans (Metal Containers)

Learning **how to dispose of paint cans** properly depends on what is inside:

**Empty latex paint cans**:
- Let any residue dry completely (2-3 days with lid off)
- Once fully dry, place in recycling or trash
- Remove lid and place separately

**Paint cans with dried latex paint**:
- Can go in regular trash if paint is fully hardened
- Leave lid off so sanitation workers can verify it is dry

**Paint cans with wet paint or oil-based products**:
- Must go to HHW Facility
- Do not put in trash or recycling

## Where to Take Old Paint in Duval County

Unlike generic guides from other states, here is exactly where to go in Jacksonville to **dispose of old paint**:

### The Main Hub: Household Hazardous Waste (HHW) Facility

**Address**: 2675 Commonwealth Ave, Jacksonville, FL 32254

**Hours**: Tuesday – Saturday, 8:00 AM – 5:00 PM

**Requirements**: Duval County resident ID required. Commercial contractors not accepted.

**What They Accept**:
- All oil-based paints and stains
- Wet latex paint (if you prefer not to dry it)
- Paint thinners, mineral spirits, and solvents
- Spray paint cans (full or partial)
- Varnishes and shellacs

### Mobile Collection Events

If you live in Jacksonville Beach, Atlantic Beach, or Neptune Beach, the drive to Commonwealth Ave is long. The city hosts mobile collection events at Jarboe Park and Beach Blvd.

Check the [City of Jacksonville Solid Waste Division website](https://www.coj.net/departments/neighborhoods/solid-waste) monthly for the 2026 schedule, as dates change based on storm seasons.

### Retail Drop-offs: The PaintCare Program

Jacksonville participates in the **PaintCare program**. Certain local retailers will take back your old paint for free, regardless of where you bought it.

**Participating Stores** (limits apply, usually 5 gallons per visit):

- **Sherwin-Williams (Mandarin)**: 10960 San Jose Blvd
- **PPG Paints (Southside)**: 8234 Philips Hwy
- **Sherwin-Williams (Jax Beach)**: 1316 3rd St S
- **Sherwin-Williams (Orange Park)**: 1910 Park Ave
- **Various Ace Hardware locations**

**Use the official tool**: [PaintCare Drop-Off Site Locator](https://www.paintcare.org/drop-off-sites/) - Enter your zip code for the complete, up-to-date list.

## What About the Rest of Your Renovation Debris?

Now that you know how to dispose of paint, what about the ripped-out drywall, old cabinets, and saturated drop cloths from your renovation?

The City of Jacksonville's curbside pickup is extremely limited for "Construction and Demolition" (C&D) waste. If you leave flooring or cabinets on the curb in Arlington or Northside, they will likely stay there with a non-compliance tag.

For these projects, a [10-yard dumpster rental](/10-yard-dumpster-rental) is the most popular choice for Jacksonville homeowners. It fits in a standard driveway and handles all the non-hazardous debris that the HHW facility won't take.

**Remember**: Wet paint is prohibited in all dumpster rentals. Make sure any paint residue on materials is fully dried before disposal.

## Paint Disposal Cost Summary

| Disposal Method | Cost | Best For |
|-----------------|------|----------|
| Dry latex in trash | Free | 1-2 cans |
| HHW Facility | Free | Oil-based, paint thinner, spray cans |
| PaintCare Retailers | Free | 1-5 gallons latex or oil |
| Commercial Hauler | $50-200+ | Contractor quantities |

## Frequently Asked Questions

### How do I dispose of old paint from my garage cleanout?

To **dispose of old paint** from a garage cleanout, first identify latex vs oil-based. Dry latex with kitty litter for trash disposal. Take oil-based paints to the HHW Facility at 2675 Commonwealth Ave.

### Can I return paint to Sherwin-Williams in Jacksonville?

Yes, if they are a PaintCare participant. They accept most latex and oil-based paints in original containers with readable labels. Call ahead to confirm current limits (typically 5 gallons per visit).

### Is it illegal to put wet paint in a dumpster in Florida?

Yes. Environmental regulations prohibit wet paint in landfills due to soil and groundwater contamination risks. Always dry latex paint with hardener or kitty litter, or take it to the HHW facility.

### How do I dispose of spray paint that is not empty?

**How to dispose of spray paint** that still contains product: Take it to the HHW Facility. Never puncture aerosol cans - they can explode and cause fires.

### Can I pour old paint or paint thinner down the drain?

**Never.** Neither latex paint nor paint thinner should go down drains. Paint clogs pipes, and paint thinner contaminates water treatment systems. Dry latex paint or take all materials to proper disposal.

### What about primer, wood stain, or polyurethane?

Most of these are oil-based and must go to the HHW facility. Check the can label - if it says "clean up with mineral spirits" or "flammable," it requires hazardous waste disposal.

## Related Jacksonville Disposal Guides

After your painting project, you may have other debris to handle:

- [What Cannot Go in a Dumpster](/blog/what-cannot-go-in-dumpster) - Complete prohibited items list
- [Kitchen Renovation Debris Guide](/blog/kitchen-renovation-debris-disposal-guide) - Managing remodel waste
- [Jacksonville Dumpster Permit Guide](/blog/jacksonville-dumpster-permit-guide) - When you need permits

## Ready to Handle the Rest of Your Project Debris?

Paint disposal is just one part of renovation cleanup. For everything else - drywall, cabinets, flooring, and construction debris - 904 Dumpster provides same-day delivery throughout Jacksonville.

**Our Dumpster Options**:
- [10-Yard Dumpster](/10-yard-dumpster-rental) - $275, perfect for single-room projects
- [15-Yard Dumpster](/15-yard-dumpster-rental) - $325, our most popular for renovations
- [20-Yard Dumpster](/20-yard-dumpster-rental) - $375, for major projects

Call (904) 240-5598 or [book online](https://checkout.wayste.com/checkout/t6aNhsV7NMOF9uw9) for fast delivery to your Jacksonville project site.
    `,
  },
  // Home Improvement Category
  {
    slug: 'complete-guide-home-cleanout-jacksonville',
    title: 'The Complete Guide to Home Cleanouts in Jacksonville',
    metaTitle: 'Home Cleanout Guide Jacksonville FL - 904 Dumpster',
    metaDescription: 'Learn how to plan and execute a successful home cleanout in Jacksonville. Tips for decluttering, what to donate, and how to choose the right dumpster size.',
    excerpt: 'Whether you are downsizing, preparing to sell, or simply decluttering, a home cleanout can feel overwhelming. This comprehensive guide walks you through every step of the process.',
    category: 'home-improvement',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-15',
    readTime: '8 min read',
    tags: ['home cleanout guide', 'decluttering tips', 'estate cleanout', 'whole house cleanout'],
    content: `
## Planning Your Home Cleanout

A successful home cleanout starts with a solid plan. Whether you are tackling a single room or an entire house, having a strategy saves time, money, and stress. Jacksonville homeowners frequently undertake cleanout projects for various reasons: downsizing to a smaller home, preparing a property for sale, clearing out an estate, or simply reclaiming space from years of accumulated belongings.

### Step 1: Assess the Scope

Before ordering a dumpster or gathering supplies, walk through every room and assess what needs to go. Make notes about:

- **Large furniture pieces** that need removal
- **Appliances** that are outdated or broken
- **Boxes of stored items** in closets, attics, and garages
- **Yard debris** and outdoor items

This assessment helps you estimate the right dumpster size and plan your timeline.

### Step 2: Sort and Categorize

Create four categories for everything in your home:

1. **Keep**: Items you use regularly or have significant value
2. **Donate**: Gently used items that others can benefit from
3. **Sell**: Valuable items worth the effort of selling
4. **Dispose**: Broken, worn out, or unusable items

Jacksonville has numerous donation centers including Goodwill, Salvation Army, and local charities that accept furniture, clothing, and household goods in good condition.

### Step 3: Choose the Right Dumpster Size

For most whole-home cleanouts in Jacksonville, we recommend:

- **[10-yard dumpster](/10-yard-dumpster-rental)**: Single room or small apartment cleanout - starting at $275
- **[15-yard dumpster](/15-yard-dumpster-rental)**: Multiple rooms or small house cleanout - our most popular size at $325
- **[20-yard dumpster](/20-yard-dumpster-rental)**: Whole house cleanout or large estate cleanout - $375 for maximum capacity

Not sure which size fits your project? Check out our complete [dumpster size comparison guide](/blog/how-to-choose-right-dumpster-size) for detailed dimensions and project examples.

## Tips for an Efficient Cleanout

### Start with the Easiest Areas

Build momentum by tackling easier spaces first. The garage or a spare bedroom often provides a satisfying start without the emotional attachment of more personal spaces.

### Use the One-Year Rule

If you have not used an item in the past year and it does not hold significant sentimental value, it is likely time to let it go.

### Take Photos of Sentimental Items

For items with sentimental value that you do not have space to keep, take photos before disposing of them. This preserves the memory without the physical clutter.

### Do Not Forget Hidden Spaces

Attics, crawl spaces, under beds, and the backs of closets often harbor forgotten items. Make sure to check these areas during your cleanout.

## Jacksonville-Specific Considerations

### Donation Drop-Off Locations

- **Goodwill**: Multiple locations throughout Jacksonville
- **Salvation Army**: Free pickup available for large items
- **Habitat for Humanity ReStore**: Accepts building materials and home goods
- **Local churches**: Many accept clothing and household items

### What Cannot Go in the Dumpster

Some items require special disposal in Jacksonville. See our complete guide on [prohibited dumpster items](/blog/what-cannot-go-in-dumpster) for details:

- Hazardous materials (paint, chemicals, oil)
- Electronics (take to e-waste recycling)
- Appliances with refrigerants (special handling required)
- Tires (recycling facilities available)

### Timing Your Cleanout

Jacksonville weather plays a role in planning your cleanout. Avoid scheduling during peak hurricane season (August-October) when storms could delay your project. Spring and fall offer the most comfortable working conditions.

## When to Call the Professionals

While many homeowners successfully complete cleanouts themselves, some situations benefit from professional help:

- **Estate cleanouts** with emotional challenges
- **Hoarding situations** requiring specialized expertise
- **Time-sensitive sales** that need quick turnaround
- **Physical limitations** that prevent heavy lifting

904 Dumpster can recommend trusted cleanout services in Jacksonville if you need additional help beyond dumpster rental.

## Ready to Start Your Cleanout?

A dumpster on-site makes any cleanout project more efficient. No trips to the dump, no overloaded vehicles, and no waiting for trash day. Call 904 Dumpster at (904) 240-5598 to schedule your delivery and make your Jacksonville home cleanout a success.
    `,
  },
  {
    slug: 'kitchen-renovation-debris-disposal-guide',
    title: 'Kitchen Renovation Debris: What to Expect and How to Dispose',
    metaTitle: 'Kitchen Renovation Debris Disposal Guide - 904 Dumpster',
    metaDescription: 'Planning a kitchen renovation in Jacksonville? Learn what debris to expect, which dumpster size you need, and how to properly dispose of cabinets, countertops, and appliances.',
    excerpt: 'Kitchen renovations generate more debris than most homeowners expect. From cabinets and countertops to flooring and appliances, here is everything you need to know about managing kitchen renovation waste.',
    category: 'home-improvement',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-10',
    readTime: '6 min read',
    tags: ['kitchen renovation debris', 'cabinet disposal', 'countertop removal', 'kitchen remodel waste'],
    content: `
## Understanding Kitchen Renovation Debris

Kitchen renovations are among the most popular home improvement projects in Jacksonville, and for good reason. An updated kitchen increases home value and improves daily life. However, the demolition and construction process generates significant debris that requires proper planning and disposal.

### Common Types of Kitchen Debris

A typical kitchen renovation produces several categories of waste:

**Cabinets and Woodwork**
- Upper and lower cabinets
- Cabinet hardware
- Wood trim and molding
- Pantry shelving

**Countertops**
- Laminate, granite, or quartz surfaces
- Sink and faucet fixtures
- Backsplash tiles

**Flooring**
- Vinyl, tile, or hardwood flooring
- Underlayment materials
- Transition strips

**Appliances**
- Refrigerators
- Dishwashers
- Stoves and ovens
- Microwaves

**Drywall and Structural Materials**
- Damaged drywall
- Insulation behind walls
- Electrical and plumbing components

## Choosing the Right Dumpster Size

For kitchen renovations, we typically recommend:

**[10-Yard Dumpster](/10-yard-dumpster-rental)** - Minor updates like cabinet refacing, new countertops only, or small kitchens with minimal demolition. Starting at $275.

**[15-Yard Dumpster](/15-yard-dumpster-rental)** - Standard kitchen gut renovations. This is our most popular size for kitchen remodels in Duval County. It handles cabinets, countertops, flooring, and some drywall for most kitchens. Just $325 flat rate.

**[20-Yard Dumpster](/20-yard-dumpster-rental)** - Large kitchens, whole-floor renovations that include the kitchen, or projects involving structural changes. $375 for maximum capacity.

## Special Disposal Considerations

### Appliances

Refrigerators, freezers, and air conditioning units contain refrigerants that require special handling under EPA regulations. In Jacksonville, you have options:

- **JEA bulk pickup**: Available for some appliances
- **Appliance recyclers**: Many will pick up for free or small fee
- **Scrap metal dealers**: Often pay for old appliances

We can accept appliances in our dumpsters if refrigerants have been properly removed and certified by a technician.

### Countertops

Different countertop materials have different disposal requirements:

- **Laminate**: Goes directly in the dumpster
- **Granite/Quartz**: Heavy but disposable in dumpster (watch weight limits)
- **Solid surface (Corian)**: Can be recycled by some facilities

### Cabinets

Cabinets in good condition can often be donated to organizations like Habitat for Humanity ReStore. This reduces your disposal costs and helps others.

## Timeline for Debris Management

**Day 1-2: Demolition**
Most kitchen debris is generated during the first two days. Plan to have your dumpster delivered before demolition begins.

**Days 3-10: Construction**
New construction generates less debris but adds up over time. Packaging from new materials, cut-offs, and minor waste accumulate.

**Final Day: Cleanup**
Reserve space for final cleanup debris, damaged materials discovered during installation, and packaging from finishing touches.

## Cost-Saving Tips

1. **Schedule efficiently**: Rent the dumpster for the minimum days needed to avoid extra fees
2. **Donate first**: Remove donatable items before demolition day
3. **Break down materials**: Flatten boxes and break down cabinets to maximize space
4. **Load strategically**: Place heavy items on the bottom and fill gaps with smaller debris

## Ready for Your Kitchen Renovation?

Having a dumpster on-site from day one makes your kitchen renovation smoother and keeps the project on schedule. Most Jacksonville kitchen remodels work best with our [15-yard dumpster](/15-yard-dumpster-rental) - it fits in standard driveways and handles the full project.

Before you start loading, review our guide on [what items cannot go in a dumpster](/blog/what-cannot-go-in-dumpster) to avoid disposal issues.

Call 904 Dumpster at (904) 240-5598 for same-day delivery throughout [Jacksonville](/dumpster-rental-jacksonville-beach-fl) and Northeast Florida, including [Orange Park](/dumpster-rental-orange-park-fl), [St. Augustine](/dumpster-rental-st-augustine-fl), and [Ponte Vedra](/dumpster-rental-ponte-vedra-fl).
    `,
  },
  // Dumpster Rental Tips Category
  {
    slug: 'how-to-choose-right-dumpster-size',
    title: 'How to Choose the Right Dumpster Size for Your Project',
    metaTitle: 'Dumpster Size Guide: 10, 15, 20 Yard Comparison - 904 Dumpster',
    metaDescription: 'Not sure what size dumpster you need? Our complete guide compares 10, 15, and 20 yard dumpsters with real project examples to help you choose correctly.',
    excerpt: 'Choosing the wrong dumpster size can cost you time and money. Learn how to accurately estimate your debris volume and select the perfect dumpster for any project.',
    category: 'dumpster-rental-tips',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-12',
    readTime: '7 min read',
    tags: ['dumpster size', 'how to choose', 'dumpster rental guide', '10 yard', '15 yard', '20 yard'],
    content: `
## Understanding Dumpster Sizes

Dumpster sizes are measured in cubic yards, which represents the volume of debris the container can hold. While this measurement is standard across the industry, visualizing what it means for your project can be challenging.

### [10-Yard Dumpster](/10-yard-dumpster-rental)

**Dimensions**: 12 feet long x 7.5 feet wide x 3.6 feet high

**Capacity**: 10 cubic yards (approximately 3 pickup truck loads)

**Weight Limit**: Up to 3,000 pounds (1.5 tons)

**Price**: $275 flat rate with 5-day rental

**Ideal Projects**:
- Small bathroom remodels
- Single room cleanouts
- Garage decluttering
- Small landscaping projects
- Minor roofing repairs (up to 1,500 sq ft)

The [10-yard dumpster](/10-yard-dumpster-rental) is our most compact option, making it perfect for [Jacksonville Beach](/dumpster-rental-jacksonville-beach-fl), [Neptune Beach](/dumpster-rental-neptune-beach-fl), and [Atlantic Beach](/dumpster-rental-atlantic-beach-fl) homes with smaller driveways. Its lower height makes loading easier without needing to lift items over your head.

### [15-Yard Dumpster](/15-yard-dumpster-rental)

**Dimensions**: 14 feet long x 7.5 feet wide x 4.5 feet high

**Capacity**: 15 cubic yards (approximately 5 pickup truck loads)

**Weight Limit**: Up to 4,000 pounds (2 tons)

**Price**: $325 flat rate - our most popular size

**Ideal Projects**:
- Full roof replacements (up to 3,000 sq ft)
- Kitchen or bathroom gut renovations
- Medium home cleanouts (2-3 bedrooms)
- Deck removal
- Flooring replacement projects

The [15-yard dumpster](/15-yard-dumpster-rental) is our most popular size in Jacksonville. It provides significantly more capacity than the 10-yard while still fitting in most residential driveways. Perfect for projects in [Riverside, San Marco](/dumpster-rental-jacksonville-beach-fl), and other established Jacksonville neighborhoods.

### [20-Yard Dumpster](/20-yard-dumpster-rental)

**Dimensions**: 14 feet long x 7.5 feet wide x 5.8 feet high

**Capacity**: 20 cubic yards (approximately 7 pickup truck loads)

**Weight Limit**: Up to 4,000 pounds (2 tons)

**Price**: $375 flat rate for maximum capacity

**Ideal Projects**:
- Whole-house cleanouts
- Large construction projects
- Major home renovations
- Commercial cleanouts
- Estate cleanouts
- Storm debris cleanup

The [20-yard dumpster](/20-yard-dumpster-rental) handles the biggest residential projects. Popular in [Clay County](/dumpster-rental-orange-park-fl) and [St. Johns County](/dumpster-rental-st-augustine-fl) where larger properties are common.

## How to Estimate Your Debris Volume

### Method 1: The Room Count

For cleanout projects, use this rough guide:
- 1 room = 10-yard dumpster
- 2-3 rooms = 15-yard dumpster
- 4+ rooms or whole house = 20-yard dumpster

### Method 2: The Pickup Truck Comparison

If you have ever loaded a pickup truck with debris, use this conversion:
- 3 pickup loads = 10-yard dumpster
- 5 pickup loads = 15-yard dumpster
- 7 pickup loads = 20-yard dumpster

### Method 3: Square Footage for Roofing

For roofing projects, base your choice on roof size:
- Up to 1,500 sq ft = 10-yard dumpster
- 1,500-3,000 sq ft = 15-yard dumpster
- 3,000+ sq ft = 20-yard dumpster

## Common Mistakes to Avoid

### Going Too Small

The most common mistake is underestimating debris volume. Once a dumpster is full, you will need to pay for a swap or haul-away and get a second dumpster. This costs more than renting the larger size from the start.

**Tip**: When in doubt, go one size up. The price difference is usually less than the cost of a second dumpster.

### Ignoring Weight Limits

Cubic yard capacity and weight limits are different constraints. Heavy materials like concrete, dirt, roofing shingles, and drywall can hit weight limits before filling the container.

**Heavy Material Guidelines**:
- Concrete/brick: 10-yard maximum, load only 1/4 full
- Dirt/sand: 10-yard maximum, load only 1/3 full
- Roofing shingles: Account for 100-200 lbs per square

### Forgetting About Access

Make sure the dumpster you choose will fit in your delivery location:
- Measure your driveway length and width
- Check for overhead obstructions (tree branches, power lines)
- Ensure the delivery truck can access your property

## When to Call Us

Still not sure which size you need? Call 904 Dumpster at (904) 240-5598. Describe your project and we will recommend the right size based on our experience with similar Jacksonville-area projects. We would rather help you choose correctly than have you pay for the wrong size.

Before loading your dumpster, review our guide on [prohibited items](/blog/what-cannot-go-in-dumpster) to ensure smooth disposal. And if you are unsure about [permit requirements](/blog/jacksonville-dumpster-permit-guide), we can help with that too.
    `,
  },
  {
    slug: 'what-cannot-go-in-dumpster',
    title: 'What Cannot Go in a Dumpster: Prohibited Items Guide',
    metaTitle: 'Prohibited Dumpster Items: What You Cannot Throw Away - 904 Dumpster',
    metaDescription: 'Before loading your dumpster, know what items are prohibited. Learn about hazardous materials, electronics, and other items that require special disposal in Jacksonville.',
    excerpt: 'Knowing what you cannot put in a dumpster is just as important as knowing what you can. This guide covers prohibited items and how to properly dispose of them in Jacksonville.',
    category: 'dumpster-rental-tips',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-08',
    readTime: '5 min read',
    tags: ['prohibited items', 'hazardous waste', 'disposal rules', 'jacksonville disposal'],
    content: `
## Why Some Items Are Prohibited

Landfills have strict regulations about what they can accept. Prohibited items fall into several categories:

- **Environmental hazards**: Items that could contaminate soil or groundwater
- **Safety risks**: Materials that could injure workers or cause fires
- **Regulatory requirements**: Items requiring special handling by law
- **Recycling mandates**: Materials that must be recycled rather than landfilled

Understanding these restrictions helps protect the environment, keeps workers safe, and ensures your dumpster rental goes smoothly.

## Hazardous Materials

The following hazardous materials are never allowed in dumpsters:

### Chemicals and Liquids
- Paint (latex or oil-based)
- Paint thinners and solvents
- Motor oil and automotive fluids
- Pesticides and herbicides
- Pool chemicals
- Cleaning chemicals in liquid form
- Gasoline and other fuels

### Batteries
- Car batteries
- Lithium batteries
- Rechargeable batteries
- Industrial batteries

### Other Hazardous Items
- Propane tanks
- Fire extinguishers
- Aerosol cans with contents
- Fluorescent light bulbs
- Mercury thermometers

**Where to Dispose in Jacksonville**:
Duval County Household Hazardous Waste facility accepts these items from residents. Check the COJ website for hours and locations.

## Electronics (E-Waste)

Florida law prohibits the disposal of certain electronics in landfills:

- Computers and monitors
- Televisions
- Printers and copiers
- Cell phones and tablets
- DVD and gaming equipment

**Jacksonville E-Waste Options**:
- Best Buy: Free recycling for small electronics
- Office Depot: Printer and computer recycling
- Goodwill: Accepts working electronics
- City e-waste events: Periodic collection days

## Appliances with Refrigerants

Appliances containing refrigerants (Freon) require special handling under EPA regulations:

- Refrigerators
- Freezers
- Air conditioners (window and central)
- Dehumidifiers
- Water coolers

**How to Dispose**:
A certified technician must remove refrigerants before disposal. Many appliance recyclers and scrap metal dealers offer this service. Once properly evacuated and certified, these appliances can go in your dumpster.

## Medical Waste

Medical waste requires specialized disposal:

- Syringes and needles (sharps)
- Medications and prescriptions
- Medical equipment
- Biohazardous materials

**Jacksonville Options**:
- Pharmacies: Many accept unused medications
- Hospital collection: Some facilities accept sharps
- CVS and Walgreens: Drug disposal kiosks available

## Tires

Tires are banned from Florida landfills due to their tendency to rise to the surface and harbor pests.

**Where to Take Tires**:
- Tire retailers (often charge a fee)
- Duval County facilities
- Tire recycling companies

## What About These Common Items?

### Mattresses
**Allowed** in most cases. Some landfills restrict them, but our standard service accepts mattresses.

### Furniture
**Allowed**. Couches, chairs, tables, and other furniture can go in the dumpster.

### Carpet and Padding
**Allowed**. Roll carpet tightly to maximize space.

### Construction Materials
**Allowed** with some exceptions:
- Asbestos: Requires special handling and testing
- Treated lumber: Check with us first
- Concrete/brick: Allowed but counts heavily toward weight limits

### Yard Waste
**Allowed** in most cases. Grass, branches, and landscaping debris are accepted.

## What Happens If Prohibited Items Are Found?

When we deliver your dumpster contents to the landfill, the facility inspects the load. If prohibited items are discovered:

1. The load may be rejected
2. Additional fees may apply
3. Items must be separated for proper disposal
4. Additional hauling charges may be incurred

To avoid these issues, keep prohibited items separate and use appropriate disposal methods.

## Have Questions About Specific Items?

Not sure if something can go in your dumpster? Call us at (904) 240-5598 before loading it. We are happy to clarify what is allowed and suggest alternatives for prohibited items.
    `,
  },
  // Construction Waste Category
  {
    slug: 'roofing-project-waste-management',
    title: 'Managing Roofing Project Waste: A Contractor and Homeowner Guide',
    metaTitle: 'Roofing Debris Disposal Guide Jacksonville - 904 Dumpster',
    metaDescription: 'Roofing projects generate heavy debris that requires proper planning. Learn how to estimate shingle weight, choose the right dumpster, and keep your project on schedule.',
    excerpt: 'Roofing debris is one of the heaviest materials contractors and homeowners deal with. Proper waste management keeps your project safe and on schedule.',
    category: 'construction-waste',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-05',
    readTime: '6 min read',
    tags: ['roofing', 'shingle disposal', 'contractor tips', 'construction debris'],
    content: `
## Understanding Roofing Debris Weight

Roofing materials are deceptively heavy. A dumpster can reach its weight limit long before it appears full, making proper planning essential for roofing projects.

### Shingle Weight Calculations

Standard asphalt shingles weigh approximately 200-300 pounds per "square" (100 square feet of coverage). A typical Jacksonville home has:

- **1,500 sq ft roof**: 15 squares = 3,000-4,500 lbs of shingles
- **2,500 sq ft roof**: 25 squares = 5,000-7,500 lbs of shingles
- **3,500 sq ft roof**: 35 squares = 7,000-10,500 lbs of shingles

These weights assume a single layer. Homes with multiple layers of shingles can have double or triple the weight.

### Additional Debris

Beyond shingles, roofing projects generate:
- Underlayment (felt or synthetic)
- Flashing and drip edge
- Damaged decking/plywood
- Nails and fasteners
- Ridge vents and caps

## Choosing the Right Dumpster

For roofing projects, we recommend:

**[15-Yard Dumpster](/15-yard-dumpster-rental)** - $325 flat rate
- Best for: Roofs up to 25 squares (2,500 sq ft)
- Weight limit: 4,000 lbs (2 tons)
- Single-layer removal only
- Our most popular choice for Jacksonville roofing contractors

**[20-Yard Dumpster](/20-yard-dumpster-rental)** - $375 flat rate
- Best for: Roofs over 25 squares
- Weight limit: 4,000 lbs (2 tons)
- Can handle some multi-layer removal
- Ideal for larger homes in [St. Johns County](/dumpster-rental-st-augustine-fl) and [Ponte Vedra](/dumpster-rental-ponte-vedra-fl)

**Multiple Dumpsters**
Large commercial roofs or multi-layer residential roofs may require multiple dumpsters or scheduled swap-outs. Need help estimating? See our [dumpster size comparison guide](/blog/how-to-choose-right-dumpster-size).

## Dumpster Placement for Roofing

Strategic dumpster placement makes the job safer and faster:

### Ideal Placement
- Close to the work area but not blocking crew movement
- Away from overhead lines and tree branches
- On stable, level ground
- Accessible for pickup truck

### Protection Tips
- Place plywood under the dumpster to protect driveways
- Consider where debris will land during tear-off
- Keep the area around the dumpster clear of nails and debris

## Jacksonville Weather Considerations

Northeast Florida weather impacts roofing projects:

**Summer (June-September)**
- Schedule work for early morning hours
- Secure tarps for afternoon thunderstorms
- Have the dumpster ready for quick cleanup before storms

**Hurricane Season (June-November)**
- Monitor weather forecasts closely
- Consider project timing carefully
- Have plans for securing the dumpster if storms approach

**Winter (December-February)**
- Ideal working conditions
- Fewer weather delays
- Higher demand from contractors

## Tips for Contractors

### Efficient Loading
- Drop debris directly into the dumpster from the roof edge when possible
- Load heavy materials first
- Distribute weight evenly across the dumpster
- Fill gaps with lighter materials

### Scheduling
- Order the dumpster 1-2 days before project start
- Confirm pickup timing based on project completion
- Build in buffer for weather delays

### Safety
- Keep the dumpster clear of the work zone
- Mark any nails or sharp debris areas
- Ensure crew knows weight limits

## For Homeowners

If you are hiring a roofing contractor, understand how debris disposal is handled:

**Contractor-Provided Dumpster**
Many roofers include dumpster rental in their quote. Confirm what is included and whether there are weight overage fees.

**Homeowner-Provided Dumpster**
Some homeowners prefer to rent their own dumpster. This can save money but makes you responsible for the dumpster rental.

**Questions to Ask Your Roofer**:
1. Is debris removal included in the quote?
2. Are there potential overage charges?
3. How will my property be protected?
4. What happens to the old roofing materials?

## Scheduling Your Roofing Dumpster

For roofing projects in Jacksonville and Northeast Florida, call 904 Dumpster at (904) 240-5598. We offer:

- Same-day delivery for urgent projects
- Flexible rental periods
- Weight limit guidance based on your specific roof
- Convenient scheduling for pickup when the job is done

We serve all of Duval County including [Jacksonville Beach](/dumpster-rental-jacksonville-beach-fl), [Atlantic Beach](/dumpster-rental-atlantic-beach-fl), plus [Orange Park](/dumpster-rental-orange-park-fl) in Clay County and [Fleming Island](/dumpster-rental-fleming-island-fl).

Before your project, review our guide on [what items cannot go in a dumpster](/blog/what-cannot-go-in-dumpster) and check if you need a [dumpster permit in Jacksonville](/blog/jacksonville-dumpster-permit-guide).
    `,
  },
  {
    slug: 'demolition-debris-disposal-best-practices',
    title: 'Demolition Debris Disposal: Best Practices for Jacksonville Projects',
    metaTitle: 'Demolition Debris Disposal Guide - 904 Dumpster Jacksonville',
    metaDescription: 'Managing demolition debris requires proper planning and compliance. Learn about Jacksonville permits, debris separation, and choosing the right dumpster for demo projects.',
    excerpt: 'Demolition projects create unique waste management challenges. From concrete and drywall to metal and wood, understanding how to handle different materials keeps your project compliant and cost-effective.',
    category: 'construction-waste',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-02',
    readTime: '7 min read',
    tags: ['demolition', 'debris disposal', 'construction waste', 'jacksonville permits'],
    content: `
## Types of Demolition Debris

Demolition projects generate a diverse mix of materials, each with different disposal requirements:

### Heavy Materials
- **Concrete**: Foundation pieces, sidewalks, driveways
- **Brick and block**: Walls, chimneys, decorative features
- **Asphalt**: Driveway and parking lot surfaces
- **Stone**: Landscaping materials, countertops

### Standard Debris
- **Wood**: Framing, siding, trim, decking
- **Drywall**: Interior walls and ceilings
- **Roofing**: Shingles, underlayment, flashing
- **Flooring**: Carpet, vinyl, tile, hardwood

### Metals
- **Steel and iron**: Structural elements, rebar
- **Copper**: Plumbing, electrical wiring
- **Aluminum**: Siding, gutters, window frames

### Special Handling Required
- **Asbestos**: Pre-1980 buildings may contain asbestos
- **Lead paint**: Homes built before 1978
- **Treated lumber**: Pressure-treated wood products

## Dumpster Recommendations by Project

### Interior Demolition
For gutting rooms or removing non-structural elements:
- **[15-yard dumpster](/15-yard-dumpster-rental)**: Sufficient for most single-room projects - $325
- **[20-yard dumpster](/20-yard-dumpster-rental)**: Multiple rooms or extensive drywall removal - $375

### Exterior Demolition
For decks, sheds, or outbuildings:
- **[15-yard dumpster](/15-yard-dumpster-rental)**: Small shed or single deck
- **[20-yard dumpster](/20-yard-dumpster-rental)**: Large decks, multiple structures

### Full Structure Demolition
For complete building demolition:
- **Multiple [20-yard dumpsters](/20-yard-dumpster-rental)**: Scheduled swap-outs
- **Heavy debris dumpster**: Separate container for concrete/masonry
- Consider 904 Dumpster's full [demolition services](/demolition-services-jacksonville)

Not sure which size? Check our [complete dumpster size guide](/blog/how-to-choose-right-dumpster-size) for detailed comparisons.

## Working with Heavy Materials

Concrete, brick, and other masonry require special consideration:

### Weight Limits
Heavy materials can easily exceed dumpster weight limits:
- Concrete weighs approximately 150 lbs per cubic foot
- A small 10-yard dumpster loaded 1/4 full with concrete = 3,500+ lbs

### Best Practices
1. Request a "heavy debris" dumpster designed for masonry
2. Keep heavy materials in a separate container from general debris
3. Load heavy items on the bottom, distributed evenly
4. Never exceed the fill line, regardless of weight

### Cost Considerations
Heavy material disposal often costs more per ton than general debris. Separating materials can reduce overall costs.

## Jacksonville Demolition Permits

Before starting any demolition project in Jacksonville/Duval County:

### When Permits Are Required
- Demolition of any structure over 120 square feet
- Removal of load-bearing walls
- Any work affecting utilities
- Projects in historic districts

### How to Obtain Permits
1. Contact the City of Jacksonville Building Inspection Division
2. Submit demolition plans and permit application
3. Schedule required inspections
4. Display permit on site during work

### Utility Disconnection
Before demolition:
- Contact JEA for electric and water disconnection
- Notify gas company if applicable
- Confirm all utilities are properly capped

## Environmental Considerations

### Asbestos Testing
Buildings constructed before 1980 may contain asbestos in:
- Floor tiles and adhesives
- Insulation
- Roofing materials
- Siding and shingles
- Ceiling tiles

**Requirement**: Florida law requires asbestos testing before demolition of structures built before 1980.

### Lead Paint
Homes built before 1978 may contain lead paint:
- Hire certified contractors for lead abatement
- Follow EPA RRP (Renovation, Repair, and Painting) rules
- Proper disposal of lead-contaminated materials

### Storm Water Protection
Demolition sites must prevent sediment runoff:
- Install silt fencing around the perimeter
- Cover soil piles during rain
- Sweep streets to prevent debris entering storm drains

## Working with 904 Dumpster on Demolition Projects

We support demolition projects throughout Jacksonville with:

- **Flexible dumpster scheduling**: Swap-outs when containers fill
- **Heavy debris options**: Containers rated for concrete and masonry
- **[Demolition services](/demolition-services-jacksonville)**: Full-service demolition available
- **Permit guidance**: Help navigating [local permit requirements](/blog/jacksonville-dumpster-permit-guide)

We serve all of Northeast Florida including [Jacksonville Beach](/dumpster-rental-jacksonville-beach-fl), [Orange Park](/dumpster-rental-orange-park-fl), [St. Augustine](/dumpster-rental-st-augustine-fl), [Fleming Island](/dumpster-rental-fleming-island-fl), and [Green Cove Springs](/dumpster-rental-green-cove-springs-fl).

Call (904) 240-5598 to discuss your demolition project and get a customized waste management plan.
    `,
  },
  // Local Guides Category
  {
    slug: 'jacksonville-dumpster-permit-guide',
    title: 'Do You Need a Permit for a Dumpster in Jacksonville?',
    metaTitle: 'Jacksonville Dumpster Permit Guide - When You Need One - 904 Dumpster',
    metaDescription: 'Wondering if you need a permit for your dumpster rental in Jacksonville? This guide covers Duval County requirements, HOA rules, and how to get permits when needed.',
    excerpt: 'Understanding Jacksonville dumpster permit requirements prevents delays and fines. Learn when permits are required, how to obtain them, and how to work with your HOA.',
    category: 'local-guides',
    author: '904 Dumpster Team',
    publishedDate: '2025-01-01',
    readTime: '5 min read',
    tags: ['permits', 'jacksonville', 'regulations', 'dumpster placement'],
    content: `
## When Permits Are Required in Jacksonville

The general rule for Jacksonville/Duval County dumpster permits is straightforward:

### No Permit Needed
- Dumpster placed on your private property (driveway, yard)
- Duration of 30 days or less
- Does not obstruct sidewalks or rights-of-way

### Permit Required
- Dumpster placed in the street or public right-of-way
- Dumpster blocking sidewalks, even partially
- Extended rentals beyond 30 days
- Commercial locations in some zones

## How to Obtain a Street Placement Permit

If you need to place a dumpster on the street:

### Step 1: Contact the City
City of Jacksonville Public Works Department handles right-of-way permits.

**Contact Information**:
- Phone: (904) 255-8200
- Online: COJ.net permit portal
- In-person: Downtown Jacksonville offices

### Step 2: Application Requirements
You will typically need:
- Property address
- Dumpster size and dimensions
- Planned placement location (site sketch helpful)
- Duration of rental
- Permit fee payment

### Step 3: Approval and Conditions
Once approved, you will receive:
- Permit document to display
- Required safety measures (cones, reflectors)
- Any placement restrictions

### Typical Processing Time
- Standard: 3-5 business days
- Expedited: May be available for additional fee

## Beach Communities: Special Considerations

Jacksonville's beach communities have their own regulations:

### Jacksonville Beach
- Street permits required for public road placement
- Contact City of Jacksonville Beach: (904) 247-6100
- HOA notification often required

### Neptune Beach
- Very limited street space
- Strong preference for driveway placement
- Contact City Hall for specific requirements

### Atlantic Beach
- Similar to Neptune Beach restrictions
- Historic district may have additional rules
- Advance coordination recommended

## St. Johns County (Ponte Vedra, St. Augustine)

If your project is in St. Johns County:

### Ponte Vedra Beach
- Many gated communities require HOA approval
- Nocatee has specific dumpster guidelines
- Allow extra time for community approval

### St. Augustine
- Historic district has strict placement rules
- Street permits through city offices
- May require specific colors or screening

## Clay County (Orange Park, Middleburg)

Clay County generally has more relaxed requirements:

- Private property placement rarely requires permits
- Rural areas have minimal restrictions
- Check with HOA if applicable

## Working with Your HOA

Many Jacksonville-area neighborhoods have HOAs with dumpster rules:

### Common HOA Requirements
- Written approval before delivery
- Maximum rental duration (typically 5 days)
- Specific placement locations
- Required screening or covers
- Cleanup requirements

### Tips for HOA Approval
1. Request permission in writing
2. Provide project timeline
3. Explain dumpster size and placement
4. Offer to notify neighbors
5. Commit to prompt removal after project

### What If HOA Denies Permission?
- Ask for specific concerns to address
- Propose alternatives (different placement, shorter duration)
- Review HOA governing documents for your rights
- Consider placing dumpster at the curb just before pickup

## 904 Dumpster Helps with Permit Questions

Unsure about permit requirements for your location? Call us at (904) 240-5598. We deliver dumpsters throughout Jacksonville and can share our experience with:

- Which areas typically require permits
- HOA guidelines we have encountered
- Alternative placement options
- Timing strategies to minimize permit needs

We serve homeowners and contractors across Northeast Florida:
- **Duval County**: [Jacksonville Beach](/dumpster-rental-jacksonville-beach-fl), [Atlantic Beach](/dumpster-rental-atlantic-beach-fl), [Neptune Beach](/dumpster-rental-neptune-beach-fl)
- **Clay County**: [Orange Park](/dumpster-rental-orange-park-fl), [Fleming Island](/dumpster-rental-fleming-island-fl), [Green Cove Springs](/dumpster-rental-green-cove-springs-fl)
- **St. Johns County**: [St. Augustine](/dumpster-rental-st-augustine-fl), [Ponte Vedra](/dumpster-rental-ponte-vedra-fl)

Ready to rent? Check out our [dumpster sizes and pricing](/blog/how-to-choose-right-dumpster-size) or call for same-day delivery. We want your project to go smoothly from delivery to pickup, and that starts with understanding local requirements.
    `,
  },
  {
    slug: 'hurricane-debris-cleanup-jacksonville',
    title: 'Hurricane Debris Cleanup: What Jacksonville Homeowners Need to Know',
    metaTitle: 'Hurricane Debris Cleanup Jacksonville - Storm Damage Disposal',
    metaDescription: 'After a hurricane hits Jacksonville, proper debris cleanup is essential. Learn about city programs, dumpster options, and how to safely clear storm damage from your property.',
    excerpt: 'Jacksonville sits in a hurricane-prone region. When storms strike, knowing how to properly handle debris cleanup helps you recover faster and avoid problems with improper disposal.',
    category: 'local-guides',
    author: '904 Dumpster Team',
    publishedDate: '2024-12-28',
    readTime: '6 min read',
    tags: ['hurricane debris cleanup', 'storm damage disposal', 'florida hurricane recovery', 'disaster debris removal'],
    content: `
## Preparing Before the Storm

Smart Jacksonville homeowners think about debris management before hurricanes arrive:

### Pre-Storm Checklist
- Secure loose outdoor items
- Trim dead tree branches
- Document your property with photos/video
- Know your insurance policy details
- Have contractor contacts ready

### Pre-Position a Dumpster?
For properties with known tree hazards or aging structures, some homeowners arrange for a dumpster to be delivered immediately after the storm passes. Call 904 Dumpster before storm season to discuss pre-positioning arrangements.

## Immediately After the Storm

### Safety First
Before beginning any cleanup:
- Wait for official all-clear from authorities
- Watch for downed power lines (assume all wires are live)
- Wear protective gear (gloves, boots, eye protection)
- Check for structural damage before entering buildings
- Document all damage for insurance claims

### Assess the Damage
Common hurricane debris categories:
- **Vegetative debris**: Trees, branches, leaves, plants
- **Construction debris**: Roofing, siding, fencing, drywall
- **Household goods**: Furniture, appliances, personal items
- **Hazardous materials**: Fuel, chemicals, propane tanks

## City of Jacksonville Debris Programs

After significant storms, Jacksonville typically activates special debris removal programs:

### Curbside Debris Collection
- City contracts with debris removal companies
- Specific pickup schedules announced by zone
- Debris must be separated by type
- Check COJ.net for current program status

### Debris Separation Requirements
To participate in city programs, separate debris into:
1. **Vegetative**: Keep separate from other materials
2. **Construction**: Roofing, building materials, fencing
3. **Household**: Furniture, carpeting, household items
4. **Appliances**: White goods collected separately
5. **Hazardous**: Special collection required

### Timeline Expectations
City debris removal can take weeks or months depending on storm severity. Plan for extended cleanup periods.

## When to Rent a Dumpster

Private dumpster rental makes sense when:

### Faster Cleanup Needed
If you cannot wait for city programs:
- Insurance company requires quick cleanup
- Property must be secured
- Health hazards need immediate removal
- Reconstruction needs to begin

### Large Volume of Debris
City curbside pickup has volume limits:
- Very large trees require commercial equipment
- Extensive building damage exceeds curbside capacity
- Multiple properties need simultaneous cleanup

For major storm damage, our [20-yard dumpster](/20-yard-dumpster-rental) provides maximum capacity at $375 flat rate.

### Convenience and Control
A dumpster on your property allows:
- Work at your own pace
- Secure storage of debris
- No waiting for city trucks
- Privacy for personal items disposal

Review our [dumpster size guide](/blog/how-to-choose-right-dumpster-size) to choose the right container for your cleanup.

## Insurance and Debris Removal

### Document Everything
Before moving any debris:
- Take photos from multiple angles
- Video walk-throughs of damage
- Keep a written inventory
- Save receipts for all cleanup expenses

### Debris Removal Coverage
Most homeowner policies include debris removal:
- Typically a separate coverage amount
- May have per-occurrence limits
- Keep all receipts for reimbursement
- Ask about additional living expenses if applicable

### Working with Your Adjuster
- Request adjuster visit before major cleanup if possible
- Get approval before hiring contractors
- Understand coverage limits for debris removal
- Ask about dumpster rental reimbursement

## Specific Debris Types

### Tree Debris
- Large trees may require professional removal
- Cut branches to manageable lengths for city pickup
- Root balls may require excavation equipment
- Stumps can often be ground in place

### Flood-Damaged Items
Items exposed to flood water are typically unsalvageable:
- Upholstered furniture
- Mattresses and bedding
- Carpet and padding
- Drywall below water line
- Particleboard furniture

### Contaminated Materials
Some items require special handling:
- Fuel containers
- Pesticides and fertilizers
- Pool chemicals
- Refrigerators with spoiled food

## 904 Dumpster Hurricane Response

When storms affect Jacksonville, 904 Dumpster responds:

- **Extended hours** during recovery periods
- **Priority delivery** for emergency situations
- **Flexible rentals** for uncertain timelines
- **Volume pricing** for multiple dumpsters

Call (904) 240-5598 for hurricane debris cleanup support. We understand the urgency and work to get dumpsters delivered as quickly as conditions allow.

### Storm Season Preparation
Contact us before hurricane season to:
- Set up an account for faster ordering
- Discuss pre-positioning options
- Get priority status for post-storm delivery
- Understand pricing during disaster response

We serve all of Northeast Florida including [Jacksonville Beach](/dumpster-rental-jacksonville-beach-fl), [Orange Park](/dumpster-rental-orange-park-fl), [St. Augustine](/dumpster-rental-st-augustine-fl), [Fleming Island](/dumpster-rental-fleming-island-fl), and surrounding areas.

**Related Resources:**
- [How to Choose the Right Dumpster Size](/blog/how-to-choose-right-dumpster-size)
- [What Cannot Go in a Dumpster](/blog/what-cannot-go-in-dumpster)
- [Jacksonville Dumpster Permit Guide](/blog/jacksonville-dumpster-permit-guide)
    `,
  },
]

// Helper functions
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug)
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === categorySlug)
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug)
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count)
}
