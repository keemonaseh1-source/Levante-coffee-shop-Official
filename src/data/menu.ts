export type SizedItem = { name: string; prices: (string | null)[] };

export const drinkSizes = ["12 oz", "16 oz", "20 oz"] as const;

export const hotIcedDrinks: SizedItem[] = [
  { name: "Americano", prices: ["$3.50", "$3.70", "$4.00"] },
  { name: "Latte", prices: ["$4.90", "$5.30", "$5.70"] },
  { name: "Cappuccino", prices: ["$4.90", "$5.30", "$5.70"] },
  { name: "Macchiato", prices: ["$4.90", "$5.30", "$5.70"] },
  { name: "Matcha / Spirulina", prices: ["$5.75", "$6.40", "$7.20"] },
  { name: "Chai Latte", prices: ["$5.65", "$5.95", "$6.40"] },
  { name: "Mocha", prices: ["$5.75", "$6.40", "$7.20"] },
  { name: "Taro Latte", prices: ["$5.65", "$5.95", "$6.40"] },
  { name: "Karak Tea", prices: ["$4.25", "$4.60", "$4.95"] },
  { name: "Green Tea", prices: ["$4.25", "$4.60", "$4.95"] },
  { name: "Black Tea", prices: ["$4.25", "$4.60", "$4.95"] },
  { name: "Jasmine Tea", prices: ["$4.25", "$4.60", "$4.95"] },
  { name: "Gold Tea", prices: ["$4.25", "$4.60", "$4.95"] },
  { name: "Hot Chocolate", prices: ["$4.25", "$4.60", "$5.00"] },
  { name: "Cortado", prices: ["$4.00", null, null] },
];

export const singleSizeDrinks = [
  { name: "Italian Soda", price: "$4.50" },
  { name: "Dirty Soda", price: "$4.50" },
  { name: "Boosters", price: "$5.00" },
  { name: "Turkish Coffee (8 oz)", price: "$3.50" },
  { name: "Espresso (8 oz)", price: "$3.00" },
  { name: "Ethiopian / Arabic Coffee", price: "$5.00" },
];

export const extras = [
  "Espresso 2 Shots",
  "Blended",
  "Almond / Soy / Coconut / Oat / Half & Half Milk",
  "24 oz iced upgrade",
  "Syrups",
];

export const syrups = [
  "Banana", "Blue Raspberry", "Blue Raspberry SF", "Brown Sugar Cinnamon",
  "Caramel", "Caramel SF", "Chocolate", "French Vanilla", "Hazelnut",
  "Hazelnut SF", "Lavender", "Mango", "Mango SF", "Peach", "Peach SF",
  "Peppermint", "Pistachio", "Salted Caramel", "Strawberry", "Strawberry SF",
  "Toasted Marshmallow", "Vanilla", "Vanilla SF", "Watermelon",
];

export const bakery = [
  { name: "Gingerbread", price: "" },
  { name: "Pumpkin Spice", price: "" },
  { name: "Pumpkin Pie", price: "" },
  { name: "Muffins", price: "$3.00" },
  { name: "Sweet Pie (Apple, Cherry, Pecan, Strawberry)", price: "$1.95" },
  { name: "Zaatar Pie", price: "$6.00" },
  { name: "Cheese Pie", price: "$6.00" },
  { name: "Cheese / Zaatar Pie Mix", price: "$7.00" },
];

export type Specialty = { name: string; desc: string; img?: string };

export const specialtySizes = ["16 oz", "20 oz", "24 oz (iced)"] as const;
export const specialtyPrices = ["$9.25", "$10.25", "$11.25"] as const;

import mangoBlast from "@/assets/mango-blast-matcha.png";
import peachBlossom from "@/assets/peach-blossom-matcha.png";
import coconutHarmony from "@/assets/coconut-harmony-macchiato.png";
import specialtyTrio from "@/assets/specialty-trio.png";

export const specialties: Specialty[] = [
  { name: "Banana Pudding Matcha Dream", desc: "Banana crème syrup-infused oat milk topped with smoothly whisked matcha, whipped cream, banana pudding, a vanilla wafer, and caramel drizzle.", img: specialtyTrio },
  { name: "Banana Pudding Macchiato", desc: "Banana crème syrup-infused oat milk topped with smoothly extracted espresso, whipped cream, banana pudding, a vanilla wafer, and caramel drizzle." },
  { name: "Mango Blast Matcha", desc: "Natural mango fruit nectar topped with mango syrup-infused oat milk and a top layer of smoothly whisked matcha.", img: mangoBlast },
  { name: "Mango Blast Macchiato", desc: "Natural mango fruit nectar topped with mango syrup-infused oat milk and a top layer of smoothly extracted espresso." },
  { name: "Dubai Chocolate Matcha", desc: "Pistachio syrup-infused oat milk mixed with chocolate and pistachio nuts, topped with whisked matcha, whipped cream, pistachios, and chocolate sauce." },
  { name: "MatchTaro", desc: "Taro tea prepped with oat milk and vanilla syrup, topped with smoothly whisked matcha, whipped cream, and taro sprinkles." },
  { name: "Guava Matcha Cloud", desc: "Natural guava nectar base, guava syrup-infused oat milk topped with whisked matcha, whipped cream, and guava fruit paste." },
  { name: "Guava Macchiato Cloud", desc: "Natural guava nectar base, guava syrup-infused oat milk topped with smoothly extracted espresso, whipped cream, and guava fruit paste." },
  { name: "Peach Blossom Matcha", desc: "Natural peach nectar topped with peach syrup-infused oat milk, smoothly whisked matcha, whipped cream, and peach fruit.", img: peachBlossom },
  { name: "Peach Blossom Macchiato", desc: "Natural peach nectar topped with peach syrup-infused oat milk, smoothly extracted espresso, whipped cream, and peach fruit." },
  { name: "Oreo Fusion Matcha", desc: "Crushed Oreo cookies with chocolate and vanilla milk, topped with whisked matcha, whipped cream, a whole Oreo, and chocolate sauce." },
  { name: "Oreo Fusion Macchiato", desc: "Crushed Oreo cookies with chocolate and vanilla milk, topped with smoothly extracted espresso, whipped cream, a whole Oreo, and chocolate sauce." },
  { name: "Toasted Matchamallow", desc: "Marshmallow base topped with toasted marshmallow syrup-infused oat milk, smoothly whisked matcha, whipped cream, and marshmallow." },
  { name: "Pomegranate Pearl Matcha", desc: "Natural pomegranate nectar topped with pomegranate syrup-infused oat milk, whisked matcha, whipped cream, and pomegranate seeds." },
  { name: "Pomegranate Pearl Macchiato", desc: "Natural pomegranate nectar topped with pomegranate syrup-infused oat milk, smoothly extracted espresso, whipped cream, and pomegranate seeds." },
  { name: "Coconut Harmony Matcha", desc: "Organic coconut shreds in coconut syrup-infused milk topped with whisked matcha, whipped cream, and coconut shreds." },
  { name: "Coconut Harmony Macchiato", desc: "Organic coconut shreds in coconut syrup-infused milk topped with smoothly extracted espresso, whipped cream, and coconut shreds.", img: coconutHarmony },
];
