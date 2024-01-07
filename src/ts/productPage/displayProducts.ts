import { getAllGames } from "./gameApi";

export function displayProducts() {
  const productsContainer = document.getElementById("productsContainer");

  // Tar bort den gamla HTML så det inte blir dubbelt.
  productsContainer!.innerHTML = "";
}

getAllGames().then((games) => {
  const productsContainer = document.getElementById("productsContainer");

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    console.log(game);

    const productCard: HTMLDivElement = document.createElement("div");
    const Title: HTMLHeadingElement = document.createElement("h3");
    const Genre1: HTMLSpanElement = document.createElement("span");
    const Genre2: HTMLSpanElement = document.createElement("span");

    Title.textContent = game.name;

    if (typeof game.genres === "object") {
      if (game.genres[0] && game.genres[0].name) {
        Genre1.innerHTML = game.genres[0].name;
      }

      if (game.genres[1] && game.genres[1].name) {
        Genre2.innerHTML = game.genres[1].name;
      }
    }

    productCard.appendChild(Title);
    productCard.appendChild(Genre1);
    productCard.appendChild(Genre2);
    productsContainer?.appendChild(productCard);
  }
});

// Visar alla produkter från början.
displayProducts();
