export interface FAQ {
  question: string
  answer: string
}

export interface Location {
  slug: string
  name: string
  city: string
  county: string
  state: string
  geo: {
    latitude: number
    longitude: number
  }
  zipCodes: string[]
  phone: string
  keywords: string[]
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  nearbyAreas: string[]
  serviceRadius: string
  // Extended content for SEO
  aboutCity: string
  whyChooseUs: string[]
  commonProjects: string[]
  localInfo: string
  faqs: FAQ[]
}

export const LOCATIONS: Location[] = [
  {
    slug: 'dumpster-rental-st-augustine-fl',
    name: 'St. Augustine',
    city: 'St. Augustine',
    county: 'St. Johns',
    state: 'FL',
    geo: {
      latitude: 29.8916,
      longitude: -81.3146,
    },
    zipCodes: ['32084', '32086', '32080', '32095'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental st augustine',
      'roll off dumpster st augustine fl',
      'st augustine dumpster rental',
      'dumpster rental st augustine fl',
      'roll off container st augustine',
      'waste removal st augustine',
    ],
    metaTitle: 'Dumpster Rental St. Augustine FL',
    metaDescription: 'Dumpster rental in St. Augustine FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Fast, affordable roll-off dumpster service for St. Augustine and St. Johns County. Same-day delivery available for residential and commercial projects.',
    nearbyAreas: ['Ponte Vedra Beach', 'Nocatee', 'World Golf Village', 'Hastings', 'Elkton'],
    serviceRadius: '15 miles',
    aboutCity: 'St. Augustine, known as the oldest city in the United States, is a vibrant community in St. Johns County with a rich history dating back to 1565. The city attracts millions of tourists annually and features a unique blend of historic architecture, beautiful beaches, and modern amenities. Whether you are renovating a historic downtown property, cleaning out a vacation rental, or tackling a construction project near the beach, 904 Dumpster provides reliable roll-off container service throughout St. Augustine and the surrounding areas. Our local knowledge of St. Augustine neighborhoods, from the historic district to Anastasia Island, ensures efficient delivery and pickup for your project.',
    whyChooseUs: [
      'Same-day delivery available throughout St. Augustine',
      'Experience with historic district renovation projects',
      'Knowledge of St. Johns County permit requirements',
      'Flexible scheduling for vacation rental turnovers',
      'Competitive pricing for St. Augustine residents',
      'Beach-friendly service for Anastasia Island projects',
    ],
    commonProjects: [
      'Historic home renovations in downtown St. Augustine',
      'Beach house cleanouts on Anastasia Island',
      'Vacation rental property turnovers',
      'Hurricane debris cleanup',
      'Estate cleanouts and downsizing',
      'Roofing projects for coastal homes',
      'New construction in Nocatee and World Golf Village',
      'Commercial renovations on St. George Street',
    ],
    localInfo: 'St. Augustine residents should note that dumpster placement in the historic district may require permits from the City of St. Augustine. Our team is familiar with local regulations and can help guide you through the process. For properties on Anastasia Island or near the beach, we recommend our 10-yard dumpster for tight driveways and limited access areas.',
    faqs: [
      {
        question: 'Do I need a permit for a dumpster in St. Augustine?',
        answer: 'If placing a dumpster on private property like your driveway, typically no permit is needed. However, dumpsters placed on public streets or in the St. Augustine historic district may require a permit from the city. We can help you determine if a permit is necessary for your specific location.',
      },
      {
        question: 'How quickly can you deliver to St. Augustine?',
        answer: 'We offer same-day delivery to St. Augustine for orders placed before noon. Next-day delivery is available for afternoon orders. Our trucks service the entire St. Johns County area including Anastasia Island, World Golf Village, and Nocatee.',
      },
      {
        question: 'What areas in St. Augustine do you serve?',
        answer: 'We serve all of St. Augustine including downtown, Anastasia Island, Davis Shores, Lincolnville, West Augustine, Vilano Beach, and surrounding communities like Hastings, Elkton, and the World Golf Village area.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-middleburg-fl',
    name: 'Middleburg',
    city: 'Middleburg',
    county: 'Clay',
    state: 'FL',
    geo: {
      latitude: 30.0688,
      longitude: -81.8604,
    },
    zipCodes: ['32068', '32234'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental middleburg fl',
      'middleburg dumpster rental',
      'roll off dumpster middleburg',
      'waste removal middleburg fl',
      'dumpster service middleburg',
      'middleburg waste disposal',
    ],
    metaTitle: 'Dumpster Rental Middleburg FL',
    metaDescription: 'Dumpster rental in Middleburg FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Dependable roll-off dumpster service for Middleburg and Clay County. We serve rural properties and residential areas with prompt delivery.',
    nearbyAreas: ['Orange Park', 'Green Cove Springs', 'Fleming Island', 'Keystone Heights', 'Black Creek'],
    serviceRadius: '20 miles',
    aboutCity: 'Middleburg is a charming rural community in Clay County, Florida, known for its equestrian heritage, sprawling properties, and small-town atmosphere. Located about 25 miles southwest of downtown Jacksonville, Middleburg offers residents a peaceful country lifestyle while remaining close to urban amenities. The area features a mix of historic homes, newer developments, and large agricultural properties. Whether you are cleaning out a barn, renovating a farmhouse, or tackling a construction project on your acreage, 904 Dumpster provides reliable roll-off container service throughout Middleburg and the surrounding Clay County communities. Our drivers are experienced with rural deliveries and can navigate long driveways and unpaved roads to get your dumpster exactly where you need it.',
    whyChooseUs: [
      'Experience with rural and large property deliveries',
      'Flexible scheduling for farm and ranch projects',
      'Knowledge of Clay County regulations',
      'Competitive pricing for Middleburg residents',
      'Same-day delivery available throughout Clay County',
      'Drivers experienced with unpaved roads and long driveways',
    ],
    commonProjects: [
      'Barn and outbuilding cleanouts',
      'Farmhouse renovations',
      'Land clearing and brush removal',
      'Estate cleanouts for large properties',
      'Horse farm debris removal',
      'New home construction in rural areas',
      'Shed demolition and removal',
      'Storm debris cleanup',
    ],
    localInfo: 'Middleburg residents with large properties often benefit from our 20-yard dumpster for extensive cleanout projects. For properties with weight restrictions on driveways or septic systems, our team can recommend optimal placement locations. Clay County typically does not require permits for dumpsters placed on private property, but always check with the county if placing near road right-of-ways.',
    faqs: [
      {
        question: 'Can you deliver to rural properties in Middleburg?',
        answer: 'Yes! Our drivers are experienced with rural deliveries throughout Clay County. We can navigate long driveways, unpaved roads, and deliver to properties with acreage. Just let us know about any access considerations when ordering.',
      },
      {
        question: 'What size dumpster is best for barn cleanouts?',
        answer: 'For most barn cleanouts in Middleburg, we recommend starting with a 15 or 20-yard dumpster. Barns often accumulate more debris than expected over the years. Our team can help you estimate the right size based on your specific project.',
      },
      {
        question: 'Do you serve all of Clay County from Middleburg?',
        answer: 'Yes, we serve all of Clay County including Middleburg, Orange Park, Green Cove Springs, Fleming Island, Keystone Heights, and the Black Creek area. Same-day delivery is available for most locations.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-atlantic-beach-fl',
    name: 'Atlantic Beach',
    city: 'Atlantic Beach',
    county: 'Duval',
    state: 'FL',
    geo: {
      latitude: 30.3350,
      longitude: -81.3983,
    },
    zipCodes: ['32233'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental atlantic beach fl',
      'atlantic beach dumpster rental',
      'roll off dumpster atlantic beach',
      'beach dumpster rental',
      'atlantic beach waste removal',
      'dumpster service atlantic beach',
    ],
    metaTitle: 'Dumpster Rental Atlantic Beach FL',
    metaDescription: 'Dumpster rental in Atlantic Beach FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Premium dumpster service for Atlantic Beach residents and businesses. We navigate tight beach community streets with care and professionalism.',
    nearbyAreas: ['Neptune Beach', 'Jacksonville Beach', 'Mayport', 'Fort George Island'],
    serviceRadius: '10 miles',
    aboutCity: 'Atlantic Beach is a picturesque coastal community in Duval County, Florida, known for its laid-back beach lifestyle, charming downtown area, and beautiful oceanfront properties. As the northernmost of Jacksonville\'s beach communities, Atlantic Beach offers a quieter, more residential atmosphere compared to its southern neighbors. The town features a mix of historic beach cottages, mid-century homes, and newer coastal construction. From Seminole Road to the Town Center, Atlantic Beach homeowners frequently undertake renovation projects to update their properties or prepare for hurricane season. 904 Dumpster provides professional roll-off container service throughout Atlantic Beach, with drivers who understand the unique challenges of navigating narrow beach community streets and tight driveways.',
    whyChooseUs: [
      'Familiar with Naval Station Mayport area access',
      'Experience navigating narrow Selva Marina streets',
      'Compact 10-yard dumpsters for tight beach driveways',
      'Quick turnaround for military PCS moves',
      'Same-day delivery from North Beach to Dutton Island',
      'Knowledge of Atlantic Beach permit requirements',
    ],
    commonProjects: [
      'Military PCS move cleanouts near Mayport',
      'Selva Marina home renovations',
      'Salt-damaged deck and fence demolition',
      'Beach cottage restoration projects',
      'Hurricane debris removal',
      'North Beach historic home updates',
      'Vacation rental property turnovers',
      'Beachfront demolition debris removal',
    ],
    localInfo: 'Atlantic Beach has specific regulations regarding dumpster placement and duration. Dumpsters on private property typically don\'t require permits, but street placement requires approval from the city. Our 10-yard dumpster is the most popular choice in Atlantic Beach due to the compact driveways common in older beach neighborhoods. We recommend scheduling delivery for early morning to avoid beach traffic during peak hours.',
    faqs: [
      {
        question: 'What size dumpster fits in Atlantic Beach driveways?',
        answer: 'Most Atlantic Beach homes work best with our 10-yard dumpster, which measures 12 feet long and fits comfortably in typical beach community driveways. For larger projects, we can often position a 15-yard dumpster if you have adequate space.',
      },
      {
        question: 'Do I need a permit for a dumpster in Atlantic Beach?',
        answer: 'If the dumpster is placed on your private driveway, no permit is typically needed. However, if you need to place the dumpster on the street or public right-of-way, you\'ll need to contact Atlantic Beach City Hall for approval. We can help guide you through this process.',
      },
      {
        question: 'How quickly can you deliver to Atlantic Beach?',
        answer: 'We offer same-day delivery to Atlantic Beach for orders placed before noon. We recommend early morning deliveries to avoid beach traffic, especially during summer months. Our drivers know the area well and can navigate efficiently through the beach neighborhoods.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-neptune-beach-fl',
    name: 'Neptune Beach',
    city: 'Neptune Beach',
    county: 'Duval',
    state: 'FL',
    geo: {
      latitude: 30.3119,
      longitude: -81.3967,
    },
    zipCodes: ['32266'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental neptune beach fl',
      'neptune beach dumpster rental',
      'roll off dumpster neptune beach',
      'neptune beach fl dumpster',
      'beach community dumpster rental',
      'neptune beach waste removal',
    ],
    metaTitle: 'Dumpster Rental Neptune Beach FL',
    metaDescription: 'Dumpster rental in Neptune Beach FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Local dumpster service for Neptune Beach homeowners. Our compact 10-yard dumpsters fit perfectly in beach community driveways.',
    nearbyAreas: ['Jacksonville Beach', 'Atlantic Beach', 'Ponte Vedra Beach', 'Intracoastal West'],
    serviceRadius: '10 miles',
    aboutCity: 'Neptune Beach is a small, tight-knit coastal community nestled between Atlantic Beach and Jacksonville Beach in Duval County, Florida. With just over one square mile of land area, Neptune Beach is known for its walkable streets, family-friendly atmosphere, and beautiful beaches. The town features a charming mix of original beach bungalows from the 1950s and 1960s alongside modern coastal homes. Many Neptune Beach residents are renovating older homes to take advantage of the prime beach location, while others are building new construction on teardown lots. 904 Dumpster serves Neptune Beach with reliable roll-off container service, and our compact dumpster sizes are perfectly suited for the intimate streets and smaller properties typical of this beloved beach community.',
    whyChooseUs: [
      'Compact 10-yard dumpsters ideal for small beach lots',
      'Drivers familiar with Neptune Beach street layouts',
      'Flexible rental periods for renovation projects',
      'Same-day delivery throughout the beaches area',
      'Careful delivery to protect coastal landscaping',
      'Weekend delivery available for DIY projects',
    ],
    commonProjects: [
      'Beach bungalow renovations',
      'Kitchen and bathroom updates',
      'Flooring replacement projects',
      'Garage conversions',
      'Hurricane damage cleanup',
      'Downsizing and estate cleanouts',
      'New construction debris removal',
      'Landscaping and yard cleanups',
    ],
    localInfo: 'Neptune Beach properties often have limited driveway space, making our 10-yard dumpster the most popular choice. This compact size fits perfectly in most Neptune Beach driveways while still providing ample capacity for renovation debris. For larger projects like whole-home renovations or new construction, we can coordinate multiple dumpster swaps to keep your project moving. Street placement may require coordination with the City of Neptune Beach.',
    faqs: [
      {
        question: 'What\'s the best dumpster size for Neptune Beach homes?',
        answer: 'Our 10-yard dumpster is the most popular choice in Neptune Beach. At 12 feet long, it fits in most beach community driveways while providing enough capacity for typical renovation projects. For larger jobs, we can arrange dumpster swaps to avoid overfilling.',
      },
      {
        question: 'Can you deliver on weekends in Neptune Beach?',
        answer: 'Yes, we offer Saturday delivery and pickup in Neptune Beach. This is especially popular with homeowners doing DIY projects on weekends. Just let us know your preferred delivery time when ordering.',
      },
      {
        question: 'How do I prepare for dumpster delivery?',
        answer: 'Clear your driveway of vehicles and ensure there\'s at least 12 feet of length and 8 feet of width available. Our drivers will place boards under the dumpster to protect your driveway. Make sure there are no low-hanging branches or wires in the delivery path.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-jacksonville-beach-fl',
    name: 'Jacksonville Beach',
    city: 'Jacksonville Beach',
    county: 'Duval',
    state: 'FL',
    geo: {
      latitude: 30.2832,
      longitude: -81.3962,
    },
    zipCodes: ['32250', '32240'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental jacksonville beach fl',
      'jacksonville beach dumpster rental',
      'jax beach dumpster rental',
      'roll off dumpster jacksonville beach',
      'beach dumpster rental jacksonville',
      'jacksonville beach waste removal',
    ],
    metaTitle: 'Dumpster Rental Jacksonville Beach FL',
    metaDescription: 'Dumpster rental in Jacksonville Beach FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Trusted dumpster rental service for Jacksonville Beach. From beachfront renovations to whole-home cleanouts, we have the right size for your project.',
    nearbyAreas: ['Neptune Beach', 'Atlantic Beach', 'Ponte Vedra Beach', 'Intracoastal West', 'Southside'],
    serviceRadius: '12 miles',
    aboutCity: 'Jacksonville Beach, locally known as "Jax Beach," is the largest and most vibrant of Northeast Florida\'s beach communities. Located in Duval County, Jacksonville Beach offers a dynamic mix of oceanfront living, bustling commercial districts, and diverse residential neighborhoods. From the historic SeaWalk Pavilion to the restaurants and shops along Beach Boulevard, Jax Beach is a destination for both residents and visitors. The housing stock ranges from classic beach cottages near the ocean to newer developments west of 3rd Street. Jacksonville Beach sees constant renovation activity as homeowners update older properties to maximize their coastal lifestyle. 904 Dumpster is proud to serve Jacksonville Beach with fast, professional roll-off container service for projects of all sizes, from small bathroom remodels to major beachfront renovations.',
    whyChooseUs: [
      'Deep knowledge of Jacksonville Beach neighborhoods',
      'Multiple dumpster sizes for any project scope',
      'Experience with beachfront property renovations',
      'Same-day delivery throughout Jax Beach',
      'Competitive pricing for local residents',
      'Flexible scheduling around beach traffic patterns',
    ],
    commonProjects: [
      'Beachfront home renovations',
      'Commercial property cleanouts',
      'Restaurant and retail renovations',
      'Roofing projects for coastal properties',
      'Hurricane preparation and cleanup',
      'Investment property turnovers',
      'New construction debris removal',
      'Large estate cleanouts',
    ],
    localInfo: 'Jacksonville Beach offers a variety of property sizes, from compact beach cottages to larger homes west of the Intracoastal. Our 10-yard dumpster is popular for homes near the ocean with smaller driveways, while the 15 and 20-yard sizes work well for larger properties toward the Intracoastal Waterway. For commercial projects along Beach Boulevard or in the Town Center area, we can coordinate delivery times to minimize impact on your business operations.',
    faqs: [
      {
        question: 'Do you service all of Jacksonville Beach?',
        answer: 'Yes, we service all Jacksonville Beach neighborhoods from the oceanfront to the Intracoastal Waterway. Whether you\'re on 1st Street near the beach or in newer developments west of 3rd Street, we provide reliable delivery and pickup service.',
      },
      {
        question: 'What about commercial projects in Jax Beach?',
        answer: 'We frequently serve commercial clients in Jacksonville Beach, including restaurants, retail stores, and offices along Beach Boulevard and 3rd Street. We can schedule deliveries during off-peak hours to minimize disruption to your business.',
      },
      {
        question: 'How do I know what size dumpster I need?',
        answer: 'For typical Jacksonville Beach renovation projects, our 10-yard handles one room remodels, 15-yard works for multi-room projects or roofing, and 20-yard is ideal for whole-house renovations or construction. Call us to discuss your specific project and we\'ll recommend the right size.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-ponte-vedra-fl',
    name: 'Ponte Vedra Beach',
    city: 'Ponte Vedra Beach',
    county: 'St. Johns',
    state: 'FL',
    geo: {
      latitude: 30.2396,
      longitude: -81.3857,
    },
    zipCodes: ['32082', '32081'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental ponte vedra beach fl',
      'ponte vedra dumpster rental',
      'roll off dumpster ponte vedra',
      'ponte vedra beach fl dumpster',
      'dumpster service ponte vedra',
      'ponte vedra waste removal',
    ],
    metaTitle: 'Dumpster Rental Ponte Vedra Beach FL',
    metaDescription: 'Dumpster rental in Ponte Vedra Beach FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Premium dumpster service for Ponte Vedra Beach and Nocatee. We understand the needs of upscale properties and provide discrete, professional service.',
    nearbyAreas: ['Nocatee', 'Jacksonville Beach', 'St. Augustine', 'Palm Valley', 'Sawgrass'],
    serviceRadius: '15 miles',
    aboutCity: 'Ponte Vedra Beach is one of Northeast Florida\'s most prestigious coastal communities, located in St. Johns County between Jacksonville Beach and St. Augustine. Known for its world-class golf courses, including TPC Sawgrass (home of THE PLAYERS Championship), luxury oceanfront estates, and the master-planned community of Nocatee, Ponte Vedra Beach attracts discerning homeowners who expect premium service. The area features a mix of established estates along the ocean, golf course communities, and newer developments in Nocatee. Whether you are renovating a luxury home, updating a vacation property, or completing construction on new development, 904 Dumpster provides discrete, professional roll-off container service that meets the high standards of Ponte Vedra Beach residents.',
    whyChooseUs: [
      'Premium service for upscale properties',
      'Discrete delivery and placement',
      'Experience with luxury home renovations',
      'Knowledge of Nocatee and golf community access',
      'Flexible scheduling for your convenience',
      'Clean, well-maintained dumpster inventory',
    ],
    commonProjects: [
      'Luxury home renovations',
      'Golf course property remodels',
      'Nocatee new construction cleanup',
      'High-end kitchen and bath renovations',
      'Pool house and cabana projects',
      'Estate cleanouts and transitions',
      'Landscaping and outdoor living projects',
      'Hurricane damage restoration',
    ],
    localInfo: 'Ponte Vedra Beach properties, particularly in gated communities and Nocatee, may have HOA requirements regarding dumpster placement and duration. We recommend checking with your HOA before scheduling delivery. Our drivers are familiar with the access requirements for most Ponte Vedra communities and can coordinate gate codes and delivery times. For oceanfront properties with challenging access, we offer consultation to determine the best dumpster size and placement strategy.',
    faqs: [
      {
        question: 'Can you deliver to gated communities in Ponte Vedra?',
        answer: 'Yes, we regularly deliver to gated communities throughout Ponte Vedra Beach and Nocatee. We\'ll coordinate gate access with you prior to delivery. Many communities require advance notice for delivery vehicles, so we recommend booking at least 24-48 hours ahead.',
      },
      {
        question: 'Do Ponte Vedra HOAs allow dumpsters?',
        answer: 'Most Ponte Vedra HOAs allow temporary dumpsters for renovation projects, but requirements vary. Some communities limit rental duration or specify placement locations. We recommend checking with your HOA before ordering, and we\'re happy to work within any restrictions they may have.',
      },
      {
        question: 'What size dumpster for a luxury home renovation?',
        answer: 'For comprehensive Ponte Vedra luxury home renovations, our 20-yard dumpster is typically the best choice. It handles large volumes of construction debris while keeping your project on schedule. For smaller projects like a single bathroom or kitchen, our 10 or 15-yard options work well.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-orange-park-fl',
    name: 'Orange Park',
    city: 'Orange Park',
    county: 'Clay',
    state: 'FL',
    geo: {
      latitude: 30.1663,
      longitude: -81.7065,
    },
    zipCodes: ['32073', '32065', '32067'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental orange park fl',
      'orange park dumpster rental',
      'roll off dumpster orange park',
      'orange park fl dumpster',
      'clay county dumpster rental',
      'orange park waste removal',
    ],
    metaTitle: 'Dumpster Rental Orange Park FL',
    metaDescription: 'Dumpster rental in Orange Park FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Reliable dumpster service for Orange Park and Clay County. Fast delivery for residential renovations, estate cleanouts, and construction projects.',
    nearbyAreas: ['Fleming Island', 'Middleburg', 'Green Cove Springs', 'Oakleaf', 'Lakeside'],
    serviceRadius: '15 miles',
    aboutCity: 'Orange Park is a thriving suburb located in Clay County, Florida, just south of Jacksonville across the Buckman Bridge. As the commercial hub of Clay County, Orange Park offers residents a perfect blend of suburban convenience and easy access to Jacksonville\'s employment centers. The town features established neighborhoods with mature trees, newer developments in areas like Oakleaf Plantation, and a vibrant commercial corridor along Blanding Boulevard. Orange Park homeowners frequently undertake renovation projects to update older homes or expand living spaces, while new construction continues in the growing areas west of town. 904 Dumpster provides reliable roll-off container service throughout Orange Park and Clay County, with prompt delivery and competitive pricing for all residential and commercial projects.',
    whyChooseUs: [
      'Local service throughout Clay County',
      'Competitive pricing for Orange Park residents',
      'Same-day delivery available',
      'Experience with subdivision requirements',
      'Flexible rental periods',
      'Multiple dumpster sizes for any project',
    ],
    commonProjects: [
      'Whole-home renovations',
      'Kitchen and bathroom remodels',
      'Garage cleanouts',
      'Roofing replacement projects',
      'Landscaping debris removal',
      'New construction cleanup',
      'Estate and moving cleanouts',
      'Commercial property renovations',
    ],
    localInfo: 'Orange Park residents enjoy convenient access from our Jacksonville headquarters, with delivery times typically within a few hours of ordering. Clay County generally does not require permits for dumpsters placed on private property. For homes in HOA communities like Oakleaf Plantation or Fleming Island, check with your association regarding any dumpster placement guidelines. Our 15-yard dumpster is the most popular size in Orange Park, offering a good balance of capacity and footprint for typical suburban driveways.',
    faqs: [
      {
        question: 'How quickly can you deliver to Orange Park?',
        answer: 'We offer same-day delivery to Orange Park for orders placed before noon. Our central Jacksonville location provides quick access to all Clay County communities. Next-day delivery is always available for later orders.',
      },
      {
        question: 'What areas of Clay County do you serve?',
        answer: 'We serve all of Clay County including Orange Park, Fleming Island, Middleburg, Green Cove Springs, Oakleaf Plantation, Lakeside, and Keystone Heights. Our drivers know the area well and can reach any location efficiently.',
      },
      {
        question: 'Do I need HOA approval in Orange Park?',
        answer: 'If you live in an HOA community in Orange Park, such as Oakleaf Plantation or Fleming Island subdivisions, you should check with your association before ordering. Some HOAs have guidelines about dumpster placement, duration, or notification requirements. We can work around any restrictions your HOA may have.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-fleming-island-fl',
    name: 'Fleming Island',
    city: 'Fleming Island',
    county: 'Clay',
    state: 'FL',
    geo: {
      latitude: 30.0933,
      longitude: -81.7187,
    },
    zipCodes: ['32003', '32006'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental fleming island fl',
      'fleming island dumpster rental',
      'roll off dumpster fleming island',
      'fleming island fl dumpster',
      'clay county dumpster rental',
      'fleming island waste removal',
    ],
    metaTitle: 'Dumpster Rental Fleming Island FL',
    metaDescription: 'Dumpster rental in Fleming Island FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available throughout Clay County.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Professional dumpster service for Fleming Island residents. Fast delivery for home renovations, construction projects, and cleanouts in this premier Clay County community.',
    nearbyAreas: ['Orange Park', 'Green Cove Springs', 'Middleburg', 'Jacksonville', 'Oakleaf'],
    serviceRadius: '15 miles',
    aboutCity: 'Fleming Island is an affluent master-planned community located in Clay County, Florida, just south of Jacksonville along the St. Johns River. Known for its excellent schools, beautiful golf courses, and family-friendly neighborhoods, Fleming Island has become one of the most desirable communities in Northeast Florida. The area features a mix of upscale single-family homes, townhomes, and waterfront properties. Fleming Island residents frequently undertake home improvement projects, from kitchen renovations to outdoor living space upgrades. 904 Dumpster provides reliable roll-off container service throughout Fleming Island, with drivers who understand the community\'s standards and HOA requirements. Whether you\'re renovating your Fleming Island home, clearing out before a move, or managing a construction project, we deliver the right size dumpster to keep your project on track.',
    whyChooseUs: [
      'Familiar with Fleming Island subdivision requirements',
      'Experience navigating HOA guidelines',
      'Same-day delivery throughout Clay County',
      'Clean, well-maintained dumpsters for upscale neighborhoods',
      'Flexible scheduling for busy families',
      'Competitive pricing for Fleming Island residents',
    ],
    commonProjects: [
      'Home renovations and remodels',
      'Kitchen and bathroom updates',
      'Garage cleanouts and organization',
      'Landscaping and outdoor living projects',
      'Moving and downsizing cleanouts',
      'New construction debris removal',
      'Roofing replacement projects',
      'Pool area renovations',
    ],
    localInfo: 'Fleming Island is a master-planned community with active HOAs that may have specific requirements for dumpster placement and duration. We recommend checking with your neighborhood association before scheduling delivery. Our drivers are experienced with Fleming Island neighborhoods and can recommend optimal placement to comply with community guidelines. The 15-yard dumpster is our most popular size for Fleming Island projects, offering ample capacity while maintaining a professional appearance.',
    faqs: [
      {
        question: 'Do I need HOA approval for a dumpster in Fleming Island?',
        answer: 'Most Fleming Island neighborhoods have HOA guidelines regarding dumpsters. While requirements vary by subdivision, many allow temporary dumpsters for renovation projects with advance notice. We recommend contacting your HOA before ordering, and we\'re happy to work within any restrictions they may have.',
      },
      {
        question: 'How quickly can you deliver to Fleming Island?',
        answer: 'We offer same-day delivery to Fleming Island for orders placed before noon. Our location provides quick access to all Clay County communities. Next-day delivery is always available for later orders.',
      },
      {
        question: 'What size dumpster works best for Fleming Island homes?',
        answer: 'For most Fleming Island renovation projects, our 15-yard dumpster is the ideal choice. It provides ample capacity for kitchen remodels, bathroom renovations, and general cleanouts while fitting comfortably in standard driveways. For larger projects like whole-home renovations, our 20-yard option works well.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-green-cove-springs-fl',
    name: 'Green Cove Springs',
    city: 'Green Cove Springs',
    county: 'Clay',
    state: 'FL',
    geo: {
      latitude: 29.9922,
      longitude: -81.6837,
    },
    zipCodes: ['32043'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental green cove springs fl',
      'green cove springs dumpster rental',
      'roll off dumpster green cove springs',
      'green cove springs fl dumpster',
      'clay county dumpster rental',
      'green cove springs waste removal',
    ],
    metaTitle: 'Dumpster Rental Green Cove Springs FL',
    metaDescription: 'Dumpster rental in Green Cove Springs FL. 10, 15 & 20 yard roll-off containers. Same-day delivery available throughout Clay County.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Dependable dumpster service for Green Cove Springs and Clay County. We serve the county seat with fast, professional roll-off container delivery.',
    nearbyAreas: ['Orange Park', 'Fleming Island', 'Middleburg', 'Penney Farms', 'Keystone Heights'],
    serviceRadius: '20 miles',
    aboutCity: 'Green Cove Springs is the historic county seat of Clay County, Florida, nestled along the western bank of the St. Johns River. Known for its charming downtown, natural mineral springs, and rich history, Green Cove Springs offers residents a small-town atmosphere with easy access to Jacksonville. The city features a diverse mix of historic homes in the downtown area, established neighborhoods, and newer developments on the outskirts. Green Cove Springs is experiencing renewed growth as families discover its affordable housing, excellent location, and community-oriented lifestyle. 904 Dumpster serves Green Cove Springs with reliable roll-off container service for renovation projects, cleanouts, and construction. Our drivers are familiar with the area and can navigate both the historic downtown streets and rural properties outside of town.',
    whyChooseUs: [
      'Experience with historic home renovations',
      'Service for both in-town and rural properties',
      'Same-day delivery throughout Clay County',
      'Knowledge of local regulations and requirements',
      'Competitive pricing for Green Cove Springs residents',
      'Flexible rental periods for any project size',
    ],
    commonProjects: [
      'Historic home renovations downtown',
      'Estate cleanouts and property transitions',
      'New construction debris removal',
      'Storm debris cleanup',
      'Roofing replacement projects',
      'Garage and shed cleanouts',
      'Landscaping and yard debris removal',
      'Commercial property cleanouts',
    ],
    localInfo: 'Green Cove Springs has a charming historic downtown with narrower streets that work well with our 10-yard dumpster. For properties outside of town or larger projects, our 15 and 20-yard dumpsters provide ample capacity. Clay County typically does not require permits for dumpsters placed on private property. If you\'re renovating a historic property in the downtown area, our team can help coordinate delivery times to minimize disruption.',
    faqs: [
      {
        question: 'Do you deliver to rural areas around Green Cove Springs?',
        answer: 'Yes, we serve all of Green Cove Springs and the surrounding Clay County area, including rural properties. Our drivers are experienced with country roads and longer driveways. Just let us know about any access considerations when ordering.',
      },
      {
        question: 'What size dumpster is best for historic home projects?',
        answer: 'For renovation projects in Green Cove Springs\' historic downtown area, our 10-yard dumpster is often ideal due to tighter driveways and street access. For larger historic home renovations or properties with more space, our 15-yard dumpster provides excellent capacity.',
      },
      {
        question: 'How quickly can you deliver to Green Cove Springs?',
        answer: 'We offer same-day delivery to Green Cove Springs for orders placed before noon. The city is centrally located in our Clay County service area, allowing for efficient delivery and pickup. Next-day delivery is always available for later orders.',
      },
    ],
  },
  {
    slug: 'dumpster-rental-fernandina-beach-fl',
    name: 'Fernandina Beach',
    city: 'Fernandina Beach',
    county: 'Nassau',
    state: 'FL',
    geo: {
      latitude: 30.6698,
      longitude: -81.4626,
    },
    zipCodes: ['32034', '32035'],
    phone: '(904) 240-5598',
    keywords: [
      'dumpster rental fernandina beach fl',
      'fernandina beach dumpster rental',
      'roll off dumpster fernandina beach',
      'amelia island dumpster rental',
      'nassau county dumpster rental',
      'fernandina beach waste removal',
      'dumpster rental amelia island fl',
    ],
    metaTitle: 'Dumpster Rental Fernandina Beach FL | Amelia Island Service',
    metaDescription: 'Dumpster rental in Fernandina Beach & Amelia Island FL. 10, 15 & 20 yard roll-off containers with same-day delivery. Serving Nassau County residential and commercial projects.',
    heroTitle: 'Dumpster Rental in',
    heroSubtitle: 'Reliable roll-off dumpster service for Fernandina Beach and Amelia Island. From historic downtown renovations to beachfront cleanouts, we deliver fast and professional service throughout Nassau County.',
    nearbyAreas: ['Amelia Island', 'Yulee', 'Callahan', 'Hilliard', 'Nassau Village-Ratliff'],
    serviceRadius: '25 miles',
    aboutCity: 'Fernandina Beach is a charming historic city located on Amelia Island in Nassau County, Florida. As the northernmost city on Florida\'s Atlantic coast, Fernandina Beach is renowned for its stunning Victorian architecture, vibrant downtown Centre Street district, and rich maritime heritage as a historic shrimping port. The city offers a unique blend of small-town charm, beautiful beaches, and historic character that attracts both full-time residents and vacation homeowners. From the stately Victorian homes in the historic district to the newer developments throughout Amelia Island, Fernandina Beach homeowners frequently undertake renovation projects to preserve historic character or update coastal properties. 904 Dumpster proudly serves Fernandina Beach and all of Amelia Island with professional roll-off container service. Our drivers are experienced with the island\'s historic neighborhoods, beach communities, and the specific requirements for working in this treasured coastal destination.',
    whyChooseUs: [
      'Experience with historic district renovation projects',
      'Knowledge of Amelia Island community requirements',
      'Same-day delivery throughout Nassau County',
      'Compact dumpsters for tight historic district driveways',
      'Beach property renovation expertise',
      'Flexible scheduling for vacation rental turnovers',
    ],
    commonProjects: [
      'Victorian home restorations in the historic district',
      'Beach house renovations on Amelia Island',
      'Vacation rental property cleanouts',
      'Hurricane debris cleanup',
      'Estate cleanouts and downsizing',
      'New construction in Amelia Island communities',
      'Commercial renovations on Centre Street',
      'Roofing projects for coastal properties',
    ],
    localInfo: 'Fernandina Beach has a distinctive historic district with Victorian-era homes that may require special consideration for dumpster placement. Our 10-yard dumpster is popular for these properties due to compact driveways and narrow streets. For beach properties and newer developments on Amelia Island, our 15 and 20-yard dumpsters provide excellent capacity for larger renovation projects. Nassau County generally does not require permits for dumpsters on private property, but street placement in the historic downtown area may require city approval. Our team can advise on the best approach for your specific location.',
    faqs: [
      {
        question: 'Do you deliver to all of Amelia Island?',
        answer: 'Yes, we serve all of Amelia Island including Fernandina Beach, the Amelia Island Plantation, Summer Beach, and all communities throughout the island. We also serve mainland Nassau County areas including Yulee, Callahan, and Hilliard.',
      },
      {
        question: 'What size dumpster works best for historic home projects?',
        answer: 'For renovation projects in Fernandina Beach\'s historic district, our 10-yard dumpster is often the best choice due to narrower driveways and limited space typical of Victorian-era properties. For larger historic home renovations or properties with more room, our 15-yard dumpster offers excellent capacity.',
      },
      {
        question: 'How quickly can you deliver to Fernandina Beach?',
        answer: 'We offer same-day delivery to Fernandina Beach and Amelia Island for orders placed before noon. Nassau County is within our regular service area, and our drivers know the island well. Next-day delivery is always available for later orders.',
      },
      {
        question: 'Do I need a permit for a dumpster in Fernandina Beach?',
        answer: 'Dumpsters placed on private property like your driveway typically do not require a permit. However, if you need to place a dumpster on a public street, especially in the historic downtown area, you may need approval from the City of Fernandina Beach. We can help you determine the requirements for your specific situation.',
      },
      {
        question: 'Can you accommodate vacation rental schedules on Amelia Island?',
        answer: 'Absolutely! We understand vacation rental turnovers require precise timing. We offer flexible scheduling and can coordinate delivery and pickup to align with your rental calendar, ensuring the dumpster is removed before your next guests arrive.',
      },
    ],
  },
]

// Helper function to get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug)
}

// Get all location slugs for generateStaticParams
export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((location) => location.slug)
}
