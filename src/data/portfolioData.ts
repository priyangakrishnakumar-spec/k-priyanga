import { ShootLook, ModelSpecs, ServicePackage } from '../types';

export const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1VqplBX5vnsCbZl3CwjvUUc8F_i_OOfPzw6b3oC_BSnhJvtaNsfbPzJvLArPs-IKYjEOXv78Qblfwy6WuyywQ3zgdObs--A5UiKCjphBvaZxIVf_7RZ_4DN0gsvzdHdYr8cJ3kuTPbc1k_AzxbOdN7GCytYoueiq2IQ7opIi64jdLp56lu9l4IiQ4Q5m643yzv95KAfYsTX4WlDoJXGh26Ja46DaD64qEt1AV6h-y3-Wlsps4o4SATKjSqLG1V76ZyJLvIfI7B4mQ';

export const SHOOT_LOOKS: ShootLook[] = [
  {
    id: 'look-1',
    lookNumber: 'Look 01',
    title: 'Regal Silk & Temple Aura',
    category: 'traditional',
    badgeCategory: 'Ethnic • Bridal Couture',
    themeTag: 'Festive • Bridal',
    description:
      'High-definition handloom silk saree campaign styled with authentic antique kundan and temple choker necklaces. Vibrant expression framed by peacock motif styling.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIyoUzLBzkxgndd5C-v2kIQd7chH8q8pXlPJ5OD5en14W8_Us44L_LOEe2NerMn9yFBZJq-P65NTy0kUNIR2E2ntpDGqorgYU5SVSsu-UeWw8-4LkTu-kesk659sOyVEk7jaKFtpDzQnzVm9AKWKXsYYGXJLfmQuBGVoNCuspchax0Hgp5JcWl9Q9SAVGYwW_H7A7vms3yNwP0KMH2W9td1rhiCCYoCHZWGmEDYue8NQbhC71WSz_ZMaDAMT0qE3T4i8A',
    imageAlt:
      'Priyanga posing gracefully in an opulent turquoise and gold silk saree, holding a peacock feather with intricate temple gold jewelry',
    tags: ['Silk Sarees', 'Bridal Makeup', 'Peacock Theme'],
    stylingDetails: {
      outfit: 'Pure Kanchipuram Handloom Silk Saree in Peacock Teal with Zari Border',
      jewellery: '22K Antique Temple Choker, Kundan Matha Patti, Emerald drops & Jhumkas',
      makeup: 'Warm glowing bridal foundation, winged kohl, bold crimson lip',
      lighting: 'Warm key light with subtle gold rim bounce for jewelry sheen',
      location: 'Heritage Studio Set, Coimbatore',
    },
    initialLikes: 142,
  },
  {
    id: 'look-2',
    lookNumber: 'Look 02',
    title: 'Kundan & Fine Ornamentation',
    category: 'jewellery',
    badgeCategory: 'Jewellery • Close-Up Glow',
    themeTag: 'Jewellery Brand Ad',
    description:
      'Showcasing statement maang tikka, heavy jhumkas, and multi-tier uncut gem necklaces. Perfect posture and facial angles crafted for luxury jewellery retail catalogues.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfiDTHXJwoVTnwTqIBVZOUo8x3AVzK2oX3OcZFNgQ1J81gVWGUUhC_6v3u_KXSU7Qkya4EuuvrNrUeKva4YIuknxNsnT9rWybf0Cnl6MsVUNFSxzTd7jwApetYmfXs3Z2oJR5GKoOw4qaGz3GrAmRp7ZWbdLmhWiJoaLFuOQJHSLRP8fjhjFn3xS2GdUB9SIsA9SxUZOHgwiez7e-q0wC1Ayy2ZW1Tt4vqTKQYXXwPeOemEFGbwn08KohSmo9f3tfKy1E',
    imageAlt:
      'Close up portrait of Priyanga highlighting heavy uncut diamond kundan jewelry, maang tikka, soft glow bridal cosmetics under dramatic studio light',
    tags: ['Fine Jewellery', 'Editorial Close-up', 'Glamour Glow'],
    stylingDetails: {
      outfit: 'Pale Golden Raw Silk Blouse with Muted Brocade Drapes',
      jewellery: 'Polki Diamond & Kundan Choker, Statement Maang Tikka, Matching Chandbalis',
      makeup: 'Dewy glass-skin base, soft berry tones, defined eyebrows and sculpted jawline',
      lighting: 'Dual softbox strobe lighting to illuminate gemstone facets without glare',
      location: 'Commercial Ad Production Studio, Bangalore',
    },
    initialLikes: 218,
  },
  {
    id: 'look-3',
    lookNumber: 'Look 03',
    title: 'Sunflower Field Romance',
    category: 'western',
    badgeCategory: 'Outdoor • Casual Chic',
    themeTag: 'Western • Summer',
    description:
      'Candid, warm daylight mood in blooming sunflower blossoms. Tailored for youthful western wear, resort wear collections, and lifestyle brand storytelling.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKlDdkVG68nunWCpFPQZObkkUgrmh1S1V-XZmz009hSY2XtgfauP8lGQPXPPloq2hMC2hftNZ2_Bc-svHfLIIRmOwlkPtkN46aFEPUv9w1KV-VsVS9Sy_XNkzmXRprHEuVnTzd6fjMllEYU0VXogE2qg50JCVMqa5k_lDZdQxrp2LrHlgmJmKy1Psn9LQtNXR2yd4RjZ316u6s6u9uazn5dLDyuF_ID-ulEJL2GFBgLziJeocoUxRvHaAoJPa2dUnS0lg',
    imageAlt:
      'Priyanga smiling joyfully in a vibrant sunny sunflower field wearing an elegant white lace sleeveless dress',
    tags: ['Lace Dresses', 'Natural Daylight', 'Casual Lifestyle'],
    stylingDetails: {
      outfit: 'Ivory Sleeveless Floral Lace Midi Dress with delicate sweetheart neckline',
      jewellery: 'Minimalist silver pendant with dainty huggie earrings',
      makeup: 'Sun-kissed peach blush, hydrated lip tint, effortless natural waves',
      lighting: 'Golden hour open-sky daylight with gentle fill reflector',
      location: 'Sunflower Plantations, Gundlupet / Nilgiri Foothills',
    },
    initialLikes: 189,
  },
];

export const MODEL_SPECS: ModelSpecs = {
  height: '5\'6"',
  heightCm: '168 cm',
  bust: '32"',
  waist: '26"',
  hips: '36"',
  shoeSize: '6 UK / 39 EU',
  eyeColor: 'Deep Brown',
  hair: 'Dark Brown, Long Natural Waves',
  complexion: 'Warm Dusky / Radiant Golden Undertone',
  baseCity: 'Coimbatore',
  baseState: 'Tamil Nadu',
  mobility: 'Flexible (BLR • MAA • KL)',
  languages: ['English', 'Tamil'],
};

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-jewellery',
    title: 'Jewellery & Luxury Ornamentation',
    icon: 'diamond',
    tagline: 'High-Glow Macro & Retail Catalogues',
    description:
      'Engineered specifically for fine jewelry houses. Focuses on graceful hand poses, neckline symmetry, sculpted jawline profiles, and gemstone brilliance.',
    duration: 'Full Day (8 Hours)',
    deliverables: [
      'Up to 6 Jewellery Set Changes',
      'Macro close-up facial crops & neckpiece poses',
      'Ring & Bangle hand poses',
      '1 Year Commercial Digital & Retail Usage',
    ],
    bestFor: 'Bridal Jewellers, Gold & Diamond Boutiques, Luxury Retailers',
  },
  {
    id: 'pkg-bridal-silk',
    title: 'Heritage Silk & Bridal Drapes',
    icon: 'styler',
    tagline: 'Traditional Kanchipuram & Wedding Campaigns',
    description:
      'Specialized in traditional South Indian bridal postures, intricate saree drape showcasing, temple aesthetics, and authentic cultural poise.',
    duration: 'Full Day (8 Hours)',
    deliverables: [
      'Up to 8 Saree / Lehengas Changes',
      'Full body & architectural posture portraits',
      'Pallu drape detail and pleat movement shots',
      'Commercial Print & Social Media Usage',
    ],
    bestFor: 'Handloom Weavers, Silk Emporiums, Bridal Designers',
  },
  {
    id: 'pkg-western-resort',
    title: 'Western, Resort & Street Style',
    icon: 'wb_sunny',
    tagline: 'Contemporary Casuals & Summer Lines',
    description:
      'Natural, expressive daylight lifestyle shots. Great for youthful e-commerce catalogs, seasonal lookbooks, and influencer-style brand campaigns.',
    duration: 'Half Day (4-5 Hours)',
    deliverables: [
      'Up to 10 Quick Look Changes',
      'Dynamic walking & outdoor lifestyle poses',
      'Natural daylight mood grading coordination',
      'Instagram, Website & E-commerce Licensing',
    ],
    bestFor: 'Fashion Brands, Boutique Labels, Summer Resort Lines',
  },
  {
    id: 'pkg-tv-commercial',
    title: 'TVC & Digital Commercial Shorts',
    icon: 'videocam',
    tagline: 'Social Reels, Brand Storytelling & Video Ads',
    description:
      'On-camera poise, graceful movement, expressive facial acting, and dialogue delivery in Tamil or English for digital brand commercials.',
    duration: 'Full Day Production',
    deliverables: [
      'Brand Commercial Video Shoots',
      'Social Media Hook & Trending Reels (3-5 clips)',
      'B-roll & candid brand interaction',
      'OTT & Digital Ad Broadcast Rights',
    ],
    bestFor: 'Creative Ad Agencies, Consumer Brands, E-commerce Platforms',
  },
];
