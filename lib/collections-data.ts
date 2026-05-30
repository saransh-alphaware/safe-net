// lib/collections-data.ts

export interface CollectionItem {
  id: number;
  title: string;
  image: string;
  count: string;
  href: string;
}

export const collectionsData: CollectionItem[] = [
  {
    id: 1,
    title: "Invisible Grill",
    image: "/images/products/invisible_grill_hero.png",
    count: "04",
    href: "/product-category/invisible-grill",
  },
  {
    id: 2,
    title: "Bird Net",
    image: "/images/products/bird_net_hero.png",
    count: "03",
    href: "/product-category/bird-net",
  },
  {
    id: 3,
    title: "Mosquito Net",
    image: "/images/products/mosquito_net_hero.png",
    count: "02",
    href: "/product-category/mosquito-net",
  },
  {
    id: 4,
    title: "Security Mesh",
    image: "/images/products/aluminium_mesh_hero.png",
    count: "02",
    href: "/product-category/security-mesh",
  },
  {
    id: 5,
    title: "Zip Screen",
    image: "/images/products/zip_screen_hero.png",
    count: "02",
    href: "/product-category/zip-screen",
  },
];