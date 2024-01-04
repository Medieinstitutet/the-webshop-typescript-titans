import { Product } from "../../models/Product";

const testProduct1: Product = new Product(
  "Old School Runescape",
  199,
  "MMORPG",
  ""
);

const testProduct2: Product = new Product(
  "World of Warcraft",
  399,
  "MMORPG",
  ""
);
const testProduct3: Product = new Product("Minecraft", 150, "Adventure", "");

const testProduct4: Product = new Product("Counter-Strike 2", 295, "FPS", "");

export let productList = [
  testProduct1,
  testProduct2,
  testProduct3,
  testProduct4,
];
