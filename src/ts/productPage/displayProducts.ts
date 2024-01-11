import { addRandomPrices, GamesWithPrice } from "./addRandomPrices";

export async function displayProducts(searchTerm: string = "") {
  const productsContainer = document.getElementById("productsContainer");
  loadCart();
  
  function addToCart(game: GamesWithPrice) {
    
    let cart: GamesWithPrice[] = JSON.parse(localStorage.getItem('cart') || '[]');

    cart.push(game);
    localStorage.setItem('cart', JSON.stringify(cart));

  }
  function loadCart() {
   
    const cartJson = localStorage.getItem('cart');
    let cart: GamesWithPrice[] = cartJson ? JSON.parse(cartJson) : [];
  
  }
  // Clear existing content
  productsContainer!.innerHTML = "";

  try {
    const gamesWithPrices = await addRandomPrices();

    let gamesToDisplay;

    if (searchTerm.trim() === "") {
      gamesToDisplay = gamesWithPrices;
    } else {
      gamesToDisplay = gamesWithPrices.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

  
    for (let i = 0; i < gamesToDisplay.length; i++) {
      const game = gamesToDisplay[i];

      const productCard: HTMLDivElement = document.createElement("div");
      const productTop: HTMLDivElement = document.createElement("div");
      const Title: HTMLHeadingElement = document.createElement("h3");
      const Genre1: HTMLSpanElement = document.createElement("span");
      const Genre2: HTMLSpanElement = document.createElement("span");
      const Price: HTMLParagraphElement = document.createElement("p");
      const addToCartBtn: HTMLButtonElement = document.createElement("button");

    
      
      addToCartBtn.addEventListener('click', () => addToCart(game));


      Title.textContent = game.name;
      Price.textContent = `$${game.price}`;
      Genre1.textContent = game.genres[0]?.name;
      Genre2.textContent = game.genres[1]?.name;
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
    }
  } catch (error) {
    console.error("Failed to display products:", error);
  }
}

displayProducts();
