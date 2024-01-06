import { getAllGames } from "./gameApi";

let categoryFilter: string | null = "all";

export function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  // Tar bort den gamla HTML så det inte blir dubbelt.
  productsContainer!.innerHTML = "";
}

getAllGames().then((games) => {
  const productsContainer = document.getElementById("productsContainer");

  for (let i = 0; i < games.length; i++) {
    const game = games[i];

    if (categoryFilter === "all" || game.genres[0].name === categoryFilter) {
      const productCard: HTMLDivElement = document.createElement("div");
      const Title: HTMLHeadingElement = document.createElement("h3");
      const Genre1: HTMLSpanElement = document.createElement("span");
      const Genre2: HTMLSpanElement = document.createElement("span");

      Title.innerHTML = game.name;
      Genre1.innerHTML = game.genres[0].name;
      Genre2.innerHTML = game.genres[1].name;

      productCard.appendChild(Title);
      productCard.appendChild(Genre1);
      productCard.appendChild(Genre2);
      productsContainer?.appendChild(productCard);
    }
  }
});

// Kopplar knapparna med categorydata som är satt i HTML.
document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", function (this: HTMLElement) {
    categoryFilter = this.getAttribute("category-data") || "all";
    displayProducts();
  });
});

// Visar alla produkter från början.
displayProducts();
