import { productList } from "./productPage";

export function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  for (let i = 0; i < productList.length; i++) {
    const Title: HTMLHeadingElement = document.createElement("h3");
    const Price: HTMLSpanElement = document.createElement("span");
    const Category: HTMLSpanElement = document.createElement("span");
    const ProductCard: HTMLDivElement = document.createElement("div");

    productsContainer?.appendChild(ProductCard);
    ProductCard.appendChild(Title);
    ProductCard.appendChild(Price);
    ProductCard.appendChild(Category);
  }
  console.log(productList);
}
