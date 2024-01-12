import { Games } from "../../models/Games";
import { IGameProduct } from "../../models/IGameProduct";
import { addRandomPrices } from "./addRandomPrices";

export async function displayProducts(searchTerm: string = "") {
  const productsContainer = document.getElementById("productsContainer");

  // Clear existing content
  productsContainer!.innerHTML = "";

  try {
    const Games = await addRandomPrices();

    let gamesToDisplay;

    if (searchTerm.trim() === "") {
      gamesToDisplay = Games;
    } else {
      gamesToDisplay = Games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    for (let i = 0; i < gamesToDisplay.length; i++) {
      const game = gamesToDisplay[i];

      const productCard: HTMLDivElement = document.createElement("div");
      const productTop: HTMLDivElement = document.createElement("div");
      const Title: HTMLHeadingElement = document.createElement("h3");
      const genreContainer: HTMLElement = document.createElement("div");
      const Genre1: HTMLSpanElement = document.createElement("span");
      const Genre2: HTMLSpanElement = document.createElement("span");
      const Price: HTMLParagraphElement = document.createElement("p");
      const addToCartBtn: HTMLButtonElement = document.createElement("button");

      const cartProducts = document.getElementById(
        "cartProducts"
      ) as HTMLElement;

      Title.textContent = game.name;
      Price.textContent = `$${game.price}`;
      Genre1.textContent = game.genres[0]?.name;
      Genre2.textContent = game.genres[1]?.name;
      addToCartBtn.textContent = "Add To Cart";
      genreContainer.classList.add("genreContainer");

      Price.classList.add("price-style");
      productCard.classList.add("product-card");
      productTop.classList.add("productCardTop");
      addToCartBtn.classList.add("addToCartBtn");
      productTop.style.backgroundImage = `url(${game.background_image})`;

      productCard.appendChild(productTop);
      productCard.appendChild(Title);
      productCard.appendChild(genreContainer);
      genreContainer.appendChild(Genre1);
      genreContainer.appendChild(Genre2);
      productCard.appendChild(Price);
      productCard.appendChild(addToCartBtn);
      productsContainer?.appendChild(productCard);

      addToCartBtn.addEventListener("click", () => {
        cartProducts.innerHTML = "";
        addToCart(game);
      });
    }
  } catch (error) {
    console.error("Failed to display products:", error);
  }
}

displayProducts();

function addToCart(game: Games) {
  let cart: IGameProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const index = cart.findIndex((cartItem) => cartItem.product.id === game.id);

  if (index >= 0) {
    const cartProducts = document.getElementById("cartProducts") as HTMLElement;

    cartProducts.innerHTML = "";
    cart[index].quantity++;
    loadCart();
  } else {
    cart.push({ product: game, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    calculateTotal();
  }
}

export function loadCart() {
  const cartJson = localStorage.getItem("cart");
  let cart: IGameProduct[] = cartJson ? JSON.parse(cartJson) : [];

  for (let i = 0; i < cart.length; i++) {
    const addedProduct = cart[i];
    const cartProducts = document.getElementById("cartProducts") as HTMLElement;
    const addedProducts: HTMLElement = document.createElement("div");
    const productPrice: HTMLElement = document.createElement("span");
    const cartTitle: HTMLElement = document.createElement("h3");
    const imageContainer: HTMLElement = document.createElement("div");
    const addProducts: HTMLElement = document.createElement("button");
    const removeProducts: HTMLElement = document.createElement("button");
    const quantity: HTMLElement = document.createElement("span");

    cartTitle.textContent = addedProduct.product.name;
    imageContainer.style.backgroundImage = `url(${addedProduct.product.background_image})`;
    quantity.innerHTML = `${addedProduct.quantity}`;

    imageContainer.classList.add("imageContainer");
    cartTitle.classList.add("cartTitle");
    productPrice.classList.add("productPrice");
    addedProducts.classList.add("productContainer");
    addProducts.classList.add("addProductsBtn");
    removeProducts.classList.add("removeProductsBtn");

    productPrice.textContent = `$${addedProduct.product.price}`;
    addedProducts.appendChild(cartTitle);
    addedProducts.appendChild(imageContainer);
    cartProducts.appendChild(addedProducts);
    addedProducts.appendChild(productPrice);
    addedProducts.appendChild(removeProducts);
    addedProducts.appendChild(addProducts);
    addedProducts.appendChild(quantity);

    addProducts.textContent = "+";
    removeProducts.textContent = "-";

    calculateTotal();

    addProducts.addEventListener("click", () => {
      cartProducts.innerHTML = "";
      cart[i].quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
      updateCartCount();
      calculateTotal();
    });

    removeProducts.addEventListener("click", () => {
      cartProducts.innerHTML = "";

      if (cart[i].quantity == 1) {
        cart.splice(i, 1);
      } else {
        cart[i].quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
      updateCartCount();
      calculateTotal();
    });
  }
}

function updateCartCount() {
  const cart: Games[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartCount: number = cart.length;

  const cartCountElement = document.getElementById("cart-count") as HTMLElement;
  if (cartCountElement) {
    cartCountElement.textContent = cartCount.toString();
  }
}

updateCartCount();

function calculateTotal() {
  const cart: IGameProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].product.price * cart[i].quantity;
  }

  const totalElement = document.getElementById("total-amount") as HTMLElement;
  if (totalElement) {
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  return total;
}
