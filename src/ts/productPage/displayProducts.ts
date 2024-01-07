import { addRandomPrices } from './addRandomPrices';

export async function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  // Clear existing content
  productsContainer!.innerHTML = "";

  try {
    const gamesWithPrices = await addRandomPrices();

    gamesWithPrices.forEach(game => {
      const productCard: HTMLDivElement = document.createElement("div");
      const Title: HTMLHeadingElement = document.createElement("h3");
      const Genre1: HTMLSpanElement = document.createElement("span");
      const Genre2: HTMLSpanElement = document.createElement("span");
      const Price: HTMLParagraphElement = document.createElement("p");

      Title.textContent = game.name;
      Price.textContent = `Price: $${game.price}`;


      productCard.appendChild(Title);
      productCard.appendChild(Genre1);
      productCard.appendChild(Genre2);
      productCard.appendChild(Price);
      productsContainer?.appendChild(productCard);
    });
  } catch (error) {
    console.error("Failed to display products:", error);
  }
}

displayProducts();
