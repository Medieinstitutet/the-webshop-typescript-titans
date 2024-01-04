import { productList } from "./productPage";

let categoryFilter: string | null = "all";

export function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  // Tar bort den gamla HTML så det inte blir dubbelt.
  productsContainer!.innerHTML = "";

  for (let i = 0; i < productList.length; i++) {
    const newProduct = productList[i];

    if (categoryFilter === "all" || newProduct.category === categoryFilter) {
      const Title: HTMLHeadingElement = document.createElement("h3");
      const Price: HTMLSpanElement = document.createElement("span");
      const Category: HTMLSpanElement = document.createElement("span");
      const imgUrl: HTMLImageElement = document.createElement("img");
      const ProductCard: HTMLDivElement = document.createElement("div");

      Title.innerHTML = newProduct.title;
      Price.textContent = `${newProduct.price}`;
      Category.innerHTML = newProduct.category;
      imgUrl.src = newProduct.imgUrl;

      productsContainer?.appendChild(ProductCard);
      ProductCard.appendChild(Title);
      ProductCard.appendChild(imgUrl);
      ProductCard.appendChild(Price);
      ProductCard.appendChild(Category);
    }
  }
}

//Kopplar knapparna med categorydata som är satt i HTML.
document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", function (this: HTMLElement) {
    categoryFilter = this.getAttribute("category-data") || "all";
    displayProducts();
  });
});

//Visar alla produkter från början.
displayProducts();
