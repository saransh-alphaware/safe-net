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
    title: "Wooden table",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-07.jpg",
    count: "04",
    href: "/collections/wooden-table",
  },
  {
    id: 2,
    title: "Table lamp",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-06.jpg",
    count: "04",
    href: "/collections/table-lamp",
  },
  {
    id: 3,
    title: "Table clock",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-03.jpg",
    count: "04",
    href: "/collections/table-clock",
  },
  {
    id: 4,
    title: "Modern chair",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-02.jpg",
    count: "04",
    href: "/collections/modern-chair",
  },
  {
    id: 5,
    title: "Home decor",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-04.jpg",
    count: "04",
    href: "/collections/home-decor",
  },
  {
    id: 6,
    title: "Designer stool",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-01.jpg",
    count: "04",
    href: "/collections/designer-stool",
  },
  {
    id: 7,
    title: "Designer sofa",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-08.jpg",
    count: "04",
    href: "/collections/designer-sofa",
  },
  {
    id: 8,
    title: "Ceramic pots",
    image:
      "https://crafto.themezaa.com/decor-store/images/demo-decor-store-menu-collections-05.jpg",
    count: "04",
    href: "/collections/ceramic-pots",
  },
];