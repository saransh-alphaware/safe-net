export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  gallery: string[];
  category: 'Cabinet' | 'Chair' | 'Lamp' | 'Light' | 'Sofa' | 'Stool' | 'Decor' | 'Furniture';
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
    name: 'Wifi speaker lamp',
    price: 65.00,
    originalPrice: 85.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-08.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-11.jpg.webp'
    ],
    category: 'Stool',
    colors: ['Black', 'Silver', 'Orange'],
    fabrics: ['Crepe fabric', 'Jute fabric'],
    rating: 5,
    slug: 'wifi-speaker-lamp',
    badge: 'new',
    sku: '1204-101',
    description: 'A stylish and versatile lighting solution that blends seamlessly into any interior. Handcrafted with the finest materials, it features high quality Bluetooth acoustics combined with warm glowing adjustable lighting.'
  },
  {
    id: '2',
    name: 'Nordrana basket',
    price: 65.00,
    originalPrice: 85.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp'
    ],
    category: 'Furniture',
    colors: ['Yellow', 'White', 'Silver'],
    fabrics: ['Crepe fabric'],
    rating: 4,
    slug: 'nordrana-basket',
    badge: 'sale',
    sku: '1592-203',
    description: 'Handmade basket that brings natural warmth to your space. Extremely durable, versatile, and spacious, it works perfect as an organic laundry hamper or living room styling storage accessory.'
  },
  {
    id: '3',
    name: 'Earth globe black',
    price: 55.00,
    originalPrice: 65.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-11.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-11.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-08.jpg.webp'
    ],
    category: 'Decor',
    colors: ['Black', 'Silver'],
    fabrics: ['Polyolefin'],
    rating: 5,
    slug: 'earth-globe-black',
    badge: 'sale',
    sku: '8401-442',
    description: 'Classic design earth globe with elegant black matte finish. Excellent accent piece for office styling, study desks, bookshelf settings, or modern lounge shelves.'
  },
  {
    id: '4',
    name: 'Vappeby speaker lamp',
    price: 55.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-08.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-08.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-06.jpg.webp'
    ],
    category: 'Light',
    colors: ['White', 'Blue'],
    fabrics: ['Jute fabric'],
    rating: 5,
    slug: 'vappeby-speaker-lamp',
    badge: 'new',
    sku: '4822-192',
    description: 'Bluetooth speaker and ambient lamp in one portable device. Outdoor rated (IP65) so you can bring premium sound and warm lighting to garden dinners and patio gatherings.'
  },
  {
    id: '5',
    name: 'Modern chair green',
    price: 120.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-02.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-02.jpg.webp',
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp'
    ],
    category: 'Chair',
    colors: ['Green', 'White', 'Black'],
    fabrics: ['Wollen fabric'],
    rating: 4,
    slug: 'modern-chair-green',
    sku: '3819-204',
    description: 'Ergonomically designed for maximum seating comfort. Features premium steel frames supporting high-resilience foam cushions wrapped in breathable organic woolen weave.'
  },
  {
    id: '6',
    name: 'Wooden wall clock',
    price: 45.00,
    originalPrice: 55.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-10.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-10.jpg.webp'
    ],
    category: 'Cabinet',
    colors: ['Black', 'Orange', 'Silver'],
    fabrics: [],
    rating: 5,
    slug: 'wooden-wall-clock',
    badge: 'sale',
    sku: '2941-482',
    description: 'Minimalist silent wall clock made from sustainably sourced birch wood. Fits any modern interior styling with its clean numbers and high precision quartz movement.'
  },
  {
    id: '7',
    name: 'Wooden cabinet',
    price: 23.00,
    originalPrice: 50.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-product-slider-01.png',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-product-slider-01.png'
    ],
    category: 'Cabinet',
    colors: ['Orange', 'Silver', 'Black'],
    fabrics: [],
    rating: 4,
    slug: 'wooden-cabinet',
    badge: 'sale',
    sku: '9201-182',
    description: 'Perfect space-saving storage solution featuring solid wood cabinets with mid-century style tapered legs and soft-close cabinet doors.'
  },
  {
    id: '8',
    name: 'Classic stools',
    price: 38.00,
    originalPrice: 65.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-product-slider-03.png',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-product-slider-03.png'
    ],
    category: 'Stool',
    colors: ['Black', 'White', 'Silver'],
    fabrics: ['Jute fabric'],
    rating: 5,
    slug: 'classic-stools',
    badge: 'sale',
    sku: '7291-304',
    description: 'Functional and simple timber stools. Sturdy enough to be used as extra seating, a quick step, or a beautiful rustic side plant stand in natural lacquer finish.'
  },
  {
    id: '9',
    name: 'Modern chair',
    price: 45.00,
    originalPrice: 80.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-product-slider-02.png',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/04/demo-decor-store-product-slider-02.png'
    ],
    category: 'Chair',
    colors: ['Green', 'Black', 'Yellow'],
    fabrics: ['Wollen fabric'],
    rating: 4,
    slug: 'modern-chair',
    badge: 'sale',
    sku: '8821-209',
    description: 'Premium wooden dining chair with comfortable back support, tapered legs, and cushioned seating for long family dinners.'
  },
  {
    id: '10',
    name: 'Vardande plant pot',
    price: 27.00,
    originalPrice: 35.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp'
    ],
    category: 'Decor',
    colors: ['White', 'Silver'],
    fabrics: [],
    rating: 4,
    slug: 'vardande-plant-pot',
    badge: 'new',
    sku: '5039-109',
    description: 'Handmade ceramic plant pot displaying dynamic organic texture patterns. Perfectly elevates your houseplants on accent tables.'
  },
  {
    id: '11',
    name: 'Wall clock gray pink',
    price: 85.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-10.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-10.jpg.webp'
    ],
    category: 'Decor',
    colors: ['Pink', 'Silver', 'Black'],
    fabrics: [],
    rating: 4,
    slug: 'wall-clock-gray-pink',
    sku: '1049-382',
    description: 'Stylish wall clock with subtle pink numbers on premium matte gray steel background. Operates silently.'
  },
  {
    id: '12',
    name: 'Palm leaf handmade',
    price: 65.00,
    imageUrl: 'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp',
    gallery: [
      'https://crafto.themezaa.com/decor-store/wp-content/uploads/sites/44/2024/07/decor-product-01.jpg.webp'
    ],
    category: 'Decor',
    colors: ['Yellow', 'White'],
    fabrics: [],
    rating: 5,
    slug: 'palm-leaf-handmade',
    sku: '4922-108',
    description: 'Woven decorative palm leaf hanging wall art, meticulously hand made by expert rural artisans using organic natural materials.'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  const norm = category.toLowerCase().replace(/ /g, '-');
  return products.filter(p => p.category.toLowerCase().replace(/ /g, '-') === norm);
};
