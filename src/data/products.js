// data/products.js

import { cloudinaryImage } from "@/lib/cloudinary";


export const products = [
  // =========================
  // REBIRTH THROUGH RUINS
  // =========================

  {
    id: 1,
    sku: "P001",
    slug: "rebirth-through-ruins-regular",

    title: "Album Edition",
    subtitle: "Regular Fit",

    category: "T-Shirt",
    collection: "Rebirth Through Ruins",

    image: cloudinaryImage("dv-deathcore/products/product-001"),
    gallery: [],

    price: 649,
    featured: true,
    newArrival: true,
    inStock: true,

    description:
      "Official Disquietude Vengeance Rebirth Through Ruins regular fit T-shirt.",

    specifications: {
      fit: "Regular",
      fabric: "100% Cotton",
      color: "Black",
      print: "DTF Print",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["tee", "rebirth", "official"],
  },

  {
    id: 2,
    sku: "P002",
    slug: "rebirth-through-ruins-oversized",

    title: "Rebirth Through Ruins Regular Tee",
    subtitle: "Oversized Fit",

    category: "T-Shirt",
    collection: "Rebirth Through Ruins",

    image: cloudinaryImage("dv-deathcore/products/product-002"),
    gallery: [],

    price: 799,
    featured: true,
    newArrival: true,
    inStock: true,

    description:
      "Official oversized edition featuring the Rebirth Through Ruins artwork.",

    specifications: {
      fit: "Oversized",
      fabric: "100% Cotton",
      color: "Black",
      print: "DTF Print",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["oversized", "rebirth"],
  },

  {
    id: 3,
    sku: "P003",
    slug: "rebirth-through-ruins-full-sleeve",

    title: "Rebirth Through Ruins OS Tee",
    subtitle: "Full Sleeve",

    category: "T-Shirt",
    collection: "Rebirth Through Ruins",

    image: cloudinaryImage("dv-deathcore/products/product-003"),
    gallery: [],

    price: 849,

    featured: false,
    newArrival: true,
    inStock: true,

    description: "Official full sleeve Rebirth Through Ruins edition.",

    specifications: {
      fit: "Regular",
      fabric: "100% Cotton",
      color: "Black",
      print: "DTF Print",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["full sleeve"],
  },

  // =========================
  // ALBUM ARTWORK
  // =========================

  {
    id: 4,
    sku: "P004",
    slug: "psycho-sadistic-existence-regular",

    title: "Rebirth Through Ruins Full Sleeve Tee",

    subtitle: "Regular Fit",

    category: "T-Shirt",

    collection: "Album Artwork",

    image: cloudinaryImage("dv-deathcore/products/product-004"),

    gallery: [],

    price: 649,

    featured: true,

    inStock: true,

    description: "Official album artwork regular fit T-shirt.",

    specifications: {
      fit: "Regular",
      fabric: "100% Cotton",
      color: "Black",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["album"],
  },

  {
    id: 5,
    sku: "P005",
    slug: "psycho-sadistic-existence-oversized",

    title: "Legacy White T-Shirt",

    subtitle: "Regular Fit",

    category: "T-Shirt",

    collection: "Album Artwork",

    image: cloudinaryImage("dv-deathcore/products/product-005"),

    gallery: [],

    price: 799,

    featured: false,

    inStock: true,

    description: "Official oversized album artwork edition.",

    specifications: {
      fit: "Oversized",
      fabric: "100% Cotton",
      color: "Black",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["album"],
  },

  // =========================
  // LEGACY COLLECTION
  // =========================

  {
    id: 6,
    sku: "P006",
    slug: "legacy-black-white-logo",

    title: "Legacy Mug",

    subtitle: "White Logo",

    category: "T-Shirt",

    collection: "Legacy",

    image: cloudinaryImage("dv-deathcore/products/product-006"),

    gallery: [],

    price: 649,

    featured: false,

    inStock: true,

    description: "Classic Legacy logo edition.",

    specifications: {
      fit: "Regular",
      fabric: "100% Cotton",
      color: "Black",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["legacy"],
  },

  {
    id: 7,
    sku: "P007",
    slug: "legacy-black-gold-logo",

    title: "Legacy Daw Edition",

    subtitle: "Gold Logo",

    category: "T-Shirt",

    collection: "Legacy",

    image: cloudinaryImage("dv-deathcore/products/product-007"),

    gallery: [],

    price: 649,

    featured: false,

    inStock: true,

    description: "Legacy logo gold edition.",

    specifications: {
      fit: "Regular",
      fabric: "100% Cotton",
      color: "Black",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["legacy"],
  },

  {
    id: 8,
    sku: "P008",
    slug: "legacy-white-red-logo",

    title: "Legacy Black Tee",

    subtitle: "White Logo",

    category: "T-Shirt",

    collection: "Legacy",

    image: cloudinaryImage("dv-deathcore/products/product-008"),

    gallery: [],

    price: 649,

    featured: false,

    inStock: true,

    description: "White Legacy edition featuring the red logo.",

    specifications: {
      fit: "Regular",
      fabric: "100% Cotton",
      color: "Black",
    },

    sizes: ["S", "M", "L", "XL", "XXL"],

    tags: ["legacy"],
  },

  // =========================
  // MUGS
  // =========================

  {
    id: 9,
    sku: "P009",
    slug: "legacy-black-mug",

    title: "Legacy Tee",

    subtitle: "Black",

    category: "Mug",

    collection: "Legacy",

    image: cloudinaryImage("dv-deathcore/products/product-009"),

    gallery: [],

    price: 350,

    featured: false,

    inStock: true,

    description: "Official Legacy black ceramic mug.",

    specifications: {
      color: "Black",
      material: "Ceramic",
    },

    tags: ["mug"],
  },

  {
    id: 10,
    sku: "P010",
    slug: "psycho-sadistic-existence-mug",

    title: "Legacy Badge",

    subtitle: "Black",

    category: "Mug",

    collection: "Album Artwork",

    image: cloudinaryImage("dv-deathcore/products/product-010"),

    gallery: [],

    price: 350,

    featured: false,

    inStock: true,

    description:
      "Black ceramic mug featuring the Psycho Sadistic Existence artwork.",

    specifications: {
      color: "Black",
      material: "Ceramic",
    },

    tags: ["mug"],
  },

  // =========================
  // BADGE
  // =========================

  {
    id: 11,
    sku: "P011",
    slug: "legacy-round-badge",

    title: "Artistry Edition Black OS Tee",

    subtitle: "Black",

    category: "Badge",

    collection: "Legacy",

    image: cloudinaryImage("dv-deathcore/products/product-011"),

    gallery: [],

    price: 30,

    featured: false,

    inStock: true,

    description: "Official Legacy round pin badge.",

    specifications: {
      color: "Black",
      type: "Pin Badge",
    },

    tags: ["badge"],
  },
];