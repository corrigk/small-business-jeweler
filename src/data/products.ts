// PLACEHOLDER catalog. Names, prices and photos are samples so the client can
// judge each design. Photos are free-to-use Unsplash images, referenced by id.
// When Supabase is added, replace this file with a database query that returns Product[].

export type Category = "engagement" | "wedding" | "mens" | "fashion";
export type Metal = "Yellow Gold" | "White Gold" | "Rose Gold" | "Platinum" | "Sterling Silver";
export type Stone = "Diamond" | "Sapphire" | "Amethyst" | "Garnet" | "Onyx" | "None";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  metal: Metal;
  stone: Stone;
  price: number;
  blurb: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  featured?: boolean;
};

export const categories: { id: Category; label: string; blurb: string; image: string }[] = [
  {
    id: "engagement",
    label: "Engagement Rings",
    blurb: "Solitaires, halos, and three-stone settings",
    image: "photo-1605100804763-247f67b3557e",
  },
  {
    id: "wedding",
    label: "Wedding Bands",
    blurb: "Classic bands and matching sets",
    image: "photo-1622398925373-3f91b1e275f5",
  },
  {
    id: "mens",
    label: "Men's Rings",
    blurb: "Bands, signets, and statement pieces",
    image: "photo-1609821609704-72e503dbb514",
  },
  {
    id: "fashion",
    label: "Fashion Rings",
    blurb: "Gemstones, stackables, and everyday wear",
    image: "photo-1543294001-f7cd5d7fb516",
  },
];

export const metals: Metal[] = ["Yellow Gold", "White Gold", "Rose Gold", "Platinum", "Sterling Silver"];
export const stones: Stone[] = ["Diamond", "Sapphire", "Amethyst", "Garnet", "Onyx", "None"];

const sizing = "Available in sizes 4–13, including half sizes. Free resizing in store.";

export const products: Product[] = [
  {
    slug: "round-brilliant-solitaire",
    name: "Round Brilliant Solitaire",
    category: "engagement",
    metal: "White Gold",
    stone: "Diamond",
    price: 3850,
    blurb: "A timeless four-prong solitaire.",
    description:
      "The classic. A round brilliant diamond lifted in a slim four-prong setting so the stone does all the talking. Stop in and we will show you stones at several sizes and budgets.",
    images: ["photo-1605100804763-247f67b3557e", "photo-1607703829739-c05b7beddf60", "photo-1589674781759-c21c37956a44"],
    specs: [
      { label: "Center stone", value: "Round brilliant diamond, 0.75 ct" },
      { label: "Metal", value: "14k white gold" },
      { label: "Setting", value: "Four-prong solitaire" },
      { label: "Sizing", value: sizing },
    ],
    featured: true,
  },
  {
    slug: "cushion-halo",
    name: "Cushion Halo",
    category: "engagement",
    metal: "Platinum",
    stone: "Diamond",
    price: 5200,
    blurb: "Soft cushion shape with a pavé halo.",
    description:
      "A cushion-cut center stone surrounded by a delicate halo of pavé diamonds and a pavé-lined band for extra sparkle from every angle.",
    images: ["photo-1607703829739-c05b7beddf60", "photo-1613945407943-59cd755fd69e", "photo-1605100804763-247f67b3557e"],
    specs: [
      { label: "Center stone", value: "Cushion-cut diamond, 1.0 ct" },
      { label: "Metal", value: "Platinum" },
      { label: "Setting", value: "Pavé halo" },
      { label: "Sizing", value: sizing },
    ],
    featured: true,
  },
  {
    slug: "vintage-three-stone",
    name: "Vintage Three-Stone",
    category: "engagement",
    metal: "Yellow Gold",
    stone: "Diamond",
    price: 4600,
    blurb: "Past, present, and future in warm gold.",
    description:
      "Three diamonds in a warm yellow gold setting with a hand-engraved band. A romantic nod to the heirloom rings our customers bring in to be restored.",
    images: ["photo-1611955167811-4711904bb9f8", "photo-1589674668791-4889d2bba4c6", "photo-1613945407943-59cd755fd69e"],
    specs: [
      { label: "Stones", value: "Three diamonds, 1.2 ct total weight" },
      { label: "Metal", value: "18k yellow gold" },
      { label: "Setting", value: "Three-stone, engraved shank" },
      { label: "Sizing", value: sizing },
    ],
    featured: true,
  },
  {
    slug: "pave-band-solitaire",
    name: "Pavé Band Solitaire",
    category: "engagement",
    metal: "White Gold",
    stone: "Diamond",
    price: 3200,
    blurb: "A solitaire with a sparkling diamond band.",
    description:
      "A modest center stone sits on a band set with small diamonds that catch the light as you move. Elegant on its own and easy to pair with a plain wedding band.",
    images: ["photo-1589674668791-4889d2bba4c6", "photo-1586104195538-050b9f74f58e", "photo-1589674781759-c21c37956a44"],
    specs: [
      { label: "Center stone", value: "Round diamond, 0.5 ct" },
      { label: "Metal", value: "14k white gold" },
      { label: "Setting", value: "Pavé band" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "comfort-fit-gold-band",
    name: "Comfort-Fit Gold Band",
    category: "wedding",
    metal: "Yellow Gold",
    stone: "None",
    price: 620,
    blurb: "A smooth, everyday classic.",
    description:
      "A domed, comfort-fit band in polished yellow gold. Simple, durable, and made to be worn every day for a lifetime.",
    images: ["photo-1606800052052-a08af7148866", "photo-1627293509201-cd0c780043e6", "photo-1553915632-175f60dd8e36"],
    specs: [
      { label: "Width", value: "4 mm" },
      { label: "Metal", value: "14k yellow gold" },
      { label: "Finish", value: "Polished" },
      { label: "Sizing", value: sizing },
    ],
    featured: true,
  },
  {
    slug: "interlocking-duo",
    name: "Interlocking Duo",
    category: "wedding",
    metal: "Yellow Gold",
    stone: "None",
    price: 1150,
    blurb: "A matched pair, made to nest together.",
    description:
      "Two slim bands designed as a pair. Wear them together or on their own. A thoughtful choice for couples who want something a little different.",
    images: ["photo-1622398925373-3f91b1e275f5", "photo-1654699643507-3047b3e07045", "photo-1637616919953-5943e10bd4bf"],
    specs: [
      { label: "Width", value: "2.5 mm each" },
      { label: "Metal", value: "14k yellow gold" },
      { label: "Finish", value: "Polished and satin" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "diamond-eternity-band",
    name: "Diamond Eternity Band",
    category: "wedding",
    metal: "White Gold",
    stone: "Diamond",
    price: 2400,
    blurb: "Diamonds all the way around.",
    description:
      "A continuous line of round diamonds set in white gold. A beautiful anniversary gift or a statement wedding band.",
    images: ["photo-1628926379972-9843ad139a8c", "photo-1606800052052-a08af7148866", "photo-1586104195538-050b9f74f58e"],
    specs: [
      { label: "Stones", value: "Round diamonds, 1.0 ct total weight" },
      { label: "Metal", value: "14k white gold" },
      { label: "Setting", value: "Shared prong, full eternity" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "rose-gold-stackers",
    name: "Rose Gold Stackers",
    category: "wedding",
    metal: "Rose Gold",
    stone: "None",
    price: 780,
    blurb: "Slim bands made for stacking.",
    description:
      "A pair of slim rose gold bands in a soft, warm tone. Wear one, wear both, or stack them with your engagement ring.",
    images: ["photo-1553915632-175f60dd8e36", "photo-1554047310-ab6170fc7b10", "photo-1605089315599-ca966e96b56a"],
    specs: [
      { label: "Width", value: "2 mm each" },
      { label: "Metal", value: "14k rose gold" },
      { label: "Finish", value: "Polished" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "sterling-signet",
    name: "Sterling Signet",
    category: "mens",
    metal: "Sterling Silver",
    stone: "None",
    price: 240,
    blurb: "A plain, weighty signet ring.",
    description:
      "A clean, solid signet in sterling silver with a flat face that can be engraved with initials or a crest.",
    images: ["photo-1609821609704-72e503dbb514", "photo-1651752090085-50375d90bf8b", "photo-1578632307646-44afb788f005"],
    specs: [
      { label: "Width", value: "10 mm face" },
      { label: "Metal", value: "Sterling silver" },
      { label: "Finish", value: "Polished, engravable" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "onyx-gold-signet",
    name: "Onyx Gold Signet",
    category: "mens",
    metal: "Yellow Gold",
    stone: "Onyx",
    price: 1450,
    blurb: "A bold black onyx in yellow gold.",
    description:
      "A substantial ring with a polished black onyx center in a heavy yellow gold setting. A statement piece with real presence.",
    images: ["photo-1689287428894-9b52d1534a25", "photo-1705326455036-0fab8ecba04d", "photo-1651752090085-50375d90bf8b"],
    specs: [
      { label: "Stone", value: "Black onyx, 12 × 10 mm" },
      { label: "Metal", value: "10k yellow gold" },
      { label: "Style", value: "Signet with tapered shank" },
      { label: "Sizing", value: sizing },
    ],
    featured: true,
  },
  {
    slug: "silver-stack-set",
    name: "Silver Stack Set",
    category: "mens",
    metal: "Sterling Silver",
    stone: "None",
    price: 180,
    blurb: "Three simple bands, worn together or apart.",
    description:
      "A trio of understated sterling silver bands in different finishes. Easy everyday style.",
    images: ["photo-1578632307646-44afb788f005", "photo-1609821609704-72e503dbb514", "photo-1760088348194-a5ac70a8aa9f"],
    specs: [
      { label: "Width", value: "3 mm each" },
      { label: "Metal", value: "Sterling silver" },
      { label: "Finish", value: "Polished, brushed, hammered" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "amethyst-cocktail-ring",
    name: "Amethyst Cocktail Ring",
    category: "fashion",
    metal: "Yellow Gold",
    stone: "Amethyst",
    price: 890,
    blurb: "A rich purple stone with real sparkle.",
    description:
      "A generous oval amethyst framed in yellow gold. A bold ring for a special night out or a birthday gift (amethyst is February's birthstone).",
    images: ["photo-1603561596973-8166e9e089d1", "photo-1598560917807-1bae44bd2be8", "photo-1567523977592-7959bc5df51e"],
    specs: [
      { label: "Stone", value: "Oval amethyst, 3 ct" },
      { label: "Metal", value: "14k yellow gold" },
      { label: "Style", value: "Bezel-framed cocktail ring" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "gold-stackable-trio",
    name: "Gold Stackable Trio",
    category: "fashion",
    metal: "Yellow Gold",
    stone: "Diamond",
    price: 1100,
    blurb: "Three gold bands with diamond accents.",
    description:
      "Three slim gold rings set with tiny diamonds, designed to be worn in any combination.",
    images: ["photo-1543294001-f7cd5d7fb516", "photo-1674465992629-f8f81a8fb6d9", "photo-1598560917807-1bae44bd2be8"],
    specs: [
      { label: "Stones", value: "Small round diamonds, 0.15 ct total" },
      { label: "Metal", value: "14k yellow gold" },
      { label: "Style", value: "Set of three" },
      { label: "Sizing", value: sizing },
    ],
    featured: true,
  },
  {
    slug: "garnet-dome-ring",
    name: "Garnet Dome Ring",
    category: "fashion",
    metal: "Rose Gold",
    stone: "Garnet",
    price: 640,
    blurb: "Deep red garnet in warm rose gold.",
    description:
      "A smooth domed garnet in rose gold. Rich color that works with everything from denim to dresses.",
    images: ["photo-1699169734958-c3f005cf1aec", "photo-1567523977592-7959bc5df51e", "photo-1705326455036-0fab8ecba04d"],
    specs: [
      { label: "Stone", value: "Garnet cabochon, 8 mm" },
      { label: "Metal", value: "14k rose gold" },
      { label: "Style", value: "Domed solitaire" },
      { label: "Sizing", value: sizing },
    ],
  },
  {
    slug: "polished-gold-signet-band",
    name: "Polished Gold Band",
    category: "fashion",
    metal: "Yellow Gold",
    stone: "None",
    price: 520,
    blurb: "A simple band for everyday wear.",
    description:
      "A smooth, wide band in polished gold. Wear it alone or layer it with other rings.",
    images: ["photo-1598560917807-1bae44bd2be8", "photo-1567523977592-7959bc5df51e", "photo-1726256677740-dfd61fa1af26"],
    specs: [
      { label: "Width", value: "6 mm" },
      { label: "Metal", value: "14k yellow gold" },
      { label: "Finish", value: "High polish" },
      { label: "Sizing", value: sizing },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const featuredProducts = () => products.filter((p) => p.featured);
export const categoryLabel = (c: Category) => categories.find((x) => x.id === c)!.label;
export const formatPrice = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

// Extra photos used on non-product pages (about / hero / etc.)
export const photos = {
  heroRing: "photo-1605100804763-247f67b3557e",
  heroGold: "photo-1543294001-f7cd5d7fb516",
  heroBands: "photo-1622398925373-3f91b1e275f5",
  bench: "photo-1786840320410-a7bec09c393c",
  bench2: "photo-1764760214881-69e2a3198c11",
  showcase: "photo-1677045419454-e8b201856472",
  couple: "photo-1529634806980-85c3dd6d34ac",
  pinkRoses: "photo-1515934751635-c81c6bc9a2d8",
};
