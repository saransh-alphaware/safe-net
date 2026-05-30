export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  gallery: string[];
  category: 'Invisible Grill' | 'Bird Net' | 'Mosquito Net' | 'Security Mesh' | 'Zip Screen';
  colors: string[];
  fabrics: string[];
  rating: number;
  slug: string;
  badge?: 'new' | 'sale' | 'hot';
  sku: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Invisible Grill SS316',
    price: 65.00,
    originalPrice: 85.00,
    imageUrl: '/images/products/invisible_grill_wire_rope.png',
    gallery: [
      '/images/products/invisible_grill_wire_rope.png',
      '/images/products/invisible_grill_hero.png',
      '/images/products/invisible_grill_thumb.png'
    ],
    category: 'Invisible Grill',
    colors: ['Silver'],
    fabrics: ['Stainless Steel'],
    rating: 5,
    slug: 'invisible-grill-ss316',
    badge: 'hot',
    sku: 'SG-IG-316',
    description: 'High-tensile stainless steel wire rope (Grade SS 316) coated with nanotechnology nylon. Provides premium balcony and window safety without blocking your panoramic view.'
  },
  {
    id: '2',
    name: 'Bird Net (HDPE)',
    price: 38.00,
    originalPrice: 48.00,
    imageUrl: '/images/products/bird_net_hdpe.png',
    gallery: [
      '/images/products/bird_net_hdpe.png',
      '/images/products/bird_net_hero.png'
    ],
    category: 'Bird Net',
    colors: ['Black', 'White'],
    fabrics: ['HDPE'],
    rating: 4,
    slug: 'bird-net-hdpe',
    sku: 'SG-BN-HDPE',
    description: 'Heavy-duty HDPE bird netting with 1mm twine thickness. Designed in square mesh patterns (19mm - 50mm) to prevent bird access to balconies, open shafts, and windows.'
  },
  {
    id: '3',
    name: 'Pleated Mosquito Net',
    price: 75.00,
    originalPrice: 95.00,
    imageUrl: '/images/products/mosquito_net_thumb.png',
    gallery: [
      '/images/products/mosquito_net_thumb.png',
      '/images/products/mosquito_net_hero.png'
    ],
    category: 'Mosquito Net',
    colors: ['Black', 'White', 'Silver'],
    fabrics: ['Polyester'],
    rating: 5,
    slug: 'pleated-mosquito-net',
    badge: 'new',
    sku: 'SG-MN-PLT',
    description: 'Space-saving folded zigzag polyester pleated screen with tensioned cords. Moves smoothly in an aluminum guide track to keep out insects while letting fresh air flow.'
  },
  {
    id: '4',
    name: 'Nylon Net (Diamond)',
    price: 28.00,
    imageUrl: '/images/products/bird_net_nylon.png',
    gallery: [
      '/images/products/bird_net_nylon.png',
      '/images/products/bird_net_hero.png'
    ],
    category: 'Bird Net',
    colors: ['Black', 'Transparent'],
    fabrics: ['Nylon'],
    rating: 5,
    slug: 'nylon-net-diamond',
    sku: 'SG-BN-NYD',
    description: 'Premium transparent and black copolymer nylon monofilament nets in diamond mesh shapes. Extremely durable and nearly invisible bird protection.'
  },
  {
    id: '5',
    name: 'Aluminium Security Mesh',
    price: 110.00,
    imageUrl: '/images/products/aluminium_mesh_thumb.png',
    gallery: [
      '/images/products/aluminium_mesh_thumb.png',
      '/images/products/aluminium_mesh_hero.png'
    ],
    category: 'Security Mesh',
    colors: ['Black', 'Silver'],
    fabrics: ['Aluminium'],
    rating: 4,
    slug: 'aluminium-security-mesh',
    sku: 'SG-SM-AL',
    description: 'Heavy-duty premium aluminium screen featuring a dual locking security system. Provides 100% insect protection and acts as a strong physical barrier for doors and windows.'
  },
  {
    id: '6',
    name: 'Motorised Zip Screen',
    price: 180.00,
    originalPrice: 220.00,
    imageUrl: '/images/products/zip_screen_hero.png',
    gallery: [
      '/images/products/zip_screen_hero.png',
      '/images/products/zip_screen_thumb.png'
    ],
    category: 'Zip Screen',
    colors: ['Black', 'White', 'Silver'],
    fabrics: ['Polyester'],
    rating: 5,
    slug: 'motorised-zip-screen',
    badge: 'new',
    sku: 'SG-ZS-MOT',
    description: 'Remote-controlled retractable zip screen system for patios, verandahs, and large windows. Available with sunshade, rainproof PVC, and blackout fabrics.'
  },
  {
    id: '7',
    name: 'Wire Rope Grill',
    price: 40.00,
    imageUrl: '/images/products/invisible_grill_wire_rope.png',
    gallery: [
      '/images/products/invisible_grill_wire_rope.png',
      '/images/products/invisible_grill_hero.png'
    ],
    category: 'Invisible Grill',
    colors: ['Silver'],
    fabrics: ['Stainless Steel'],
    rating: 5,
    slug: 'wire-rope-grill',
    sku: 'SG-IG-WR',
    description: 'Replacement wire rope coils made of Nanotechnology Nylon coated SS316. Available in 2mm, 2.5mm and 3mm diameters for maximum safety.'
  },
  {
    id: '8',
    name: 'Aluminium Track',
    price: 45.00,
    originalPrice: 55.00,
    imageUrl: '/images/products/invisible_grill_track.png',
    gallery: [
      '/images/products/invisible_grill_track.png',
      '/images/products/invisible_grill_hero.png'
    ],
    category: 'Invisible Grill',
    colors: ['Silver'],
    fabrics: ['Aluminium'],
    rating: 4,
    slug: 'aluminium-track',
    badge: 'hot',
    sku: 'SG-IG-TRK',
    description: 'Extruded Aluminium T-6063 alloy track for securing invisible safety grills. Wall thicknesses from 1.5mm to 3mm with nylon-washered SS-304 bolts.'
  },
  {
    id: '9',
    name: 'Invisible Grill (2mm)',
    price: 90.00,
    imageUrl: '/images/products/invisible_grill_hero.png',
    gallery: [
      '/images/products/invisible_grill_hero.png',
      '/images/products/invisible_grill_thumb.png'
    ],
    category: 'Invisible Grill',
    colors: ['Silver'],
    fabrics: ['Stainless Steel'],
    rating: 5,
    slug: 'invisible-grill-2mm',
    badge: 'new',
    sku: 'SG-IG-2MM',
    description: 'Sleek 2mm stainless steel cable invisible safety grill. Designed for standard apartments and windows looking for fall protection with an unblocked view.'
  },
  {
    id: '10',
    name: 'Security Mesh Window',
    price: 135.00,
    originalPrice: 160.00,
    imageUrl: '/images/products/aluminium_mesh_hero.png',
    gallery: [
      '/images/products/aluminium_mesh_hero.png',
      '/images/products/aluminium_mesh_thumb.png'
    ],
    category: 'Security Mesh',
    colors: ['Black', 'Silver'],
    fabrics: ['Aluminium'],
    rating: 4,
    slug: 'security-mesh-window',
    sku: 'SG-SM-WD',
    description: 'Premium aluminium security mesh window screen. Made from high-grade structural metal for enhanced home security and weather-resistant insect protection.'
  },
  {
    id: '11',
    name: 'Bird Net (Nylon)',
    price: 32.00,
    imageUrl: '/images/products/bird_net_nylon.png',
    gallery: [
      '/images/products/bird_net_nylon.png',
      '/images/products/bird_net_hero.png'
    ],
    category: 'Bird Net',
    colors: ['Black', 'Transparent'],
    fabrics: ['Nylon'],
    rating: 4,
    slug: 'bird-net-nylon',
    sku: 'SG-BN-NYL',
    description: 'Copolymer nylon monofilament bird nets. Translucent or black diamond/square mesh configurations in 25mm and 35mm sizes with 0.6mm twine.'
  },
  {
    id: '12',
    name: 'Manual Zip Screen',
    price: 115.00,
    imageUrl: '/images/products/zip_screen_thumb.png',
    gallery: [
      '/images/products/zip_screen_thumb.png',
      '/images/products/zip_screen_hero.png'
    ],
    category: 'Zip Screen',
    colors: ['Black', 'White', 'Silver'],
    fabrics: ['Polyester'],
    rating: 4,
    slug: 'manual-zip-screen',
    sku: 'SG-ZS-MNL',
    description: 'Manual hand-crank operated zip screen system. Offers weather protection against wind, rain and dust, while keeping insects away from your patio.'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  const norm = category.toLowerCase().replace(/ /g, '-');
  return products.filter(p => p.category.toLowerCase().replace(/ /g, '-') === norm);
};
