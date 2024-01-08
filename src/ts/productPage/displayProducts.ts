import { addRandomPrices } from "./addRandomPrices";

export async function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  // Clear existing content
  productsContainer!.innerHTML = "";

  try {
    const gamesWithPrices = await addRandomPrices();

    gamesWithPrices.forEach((game) => {
      const productCard: HTMLDivElement = document.createElement("div");
      const productTop: HTMLDivElement = document.createElement("div");
      const Title: HTMLHeadingElement = document.createElement("h3");
      const Genre1: HTMLSpanElement = document.createElement("span");
      const Genre2: HTMLSpanElement = document.createElement("span");
      const Price: HTMLParagraphElement = document.createElement("p");
      const addToCartBtn: HTMLButtonElement = document.createElement("button");

      Title.textContent = game.name;
      Price.textContent = `$${game.price}`;
      addToCartBtn.textContent = "Add To Cart";

      Price.classList.add("price-style");
      productCard.classList.add("product-card");
      productTop.classList.add("productCardTop");
      addToCartBtn.classList.add("addToCartBtn");
      productTop.style.backgroundImage = `url(${game.background_image})`;

      productCard.appendChild(productTop);
      productCard.appendChild(Title);
      productCard.appendChild(Genre1);
      productCard.appendChild(Genre2);
      productCard.appendChild(Price);
      productCard.appendChild(addToCartBtn);
      productsContainer?.appendChild(productCard);

      console.log(game);
    });
  } catch (error) {
    console.error("Failed to display products:", error);
  }
}

displayProducts();
