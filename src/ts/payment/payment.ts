import "../../scss/style.scss";
import { IGameProduct } from "../../models/IGameProduct";
document.addEventListener("DOMContentLoaded", function () {
  loadCart();
  const paymentSection = document.getElementById(
    "paymentSection"
  ) as HTMLElement;
  const confirmationOverlay = document.querySelector(
    ".confirmationOverlay"
  ) as HTMLElement;
  const goToCheckoutBtn = document.getElementById(
    "goToCheckoutBtn"
  ) as HTMLElement;

  if (goToCheckoutBtn) {
    goToCheckoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      paymentSection.style.display = "none";
      confirmationOverlay.style.display = "flex";
    });
  }

  const returnButton = document.getElementById("ReturnButton");

  if (returnButton) {
    returnButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});

export function loadCart() {
  const cartJson = localStorage.getItem("cart");
  let cart: IGameProduct[] = cartJson ? JSON.parse(cartJson) : [];
  const shoppingBasketElement = document.querySelector('.shopping-basket') as HTMLElement; 

  // Clear existing content in the shopping basket
  shoppingBasketElement.innerHTML = '';
  const totalPriceElement = document.querySelector('.total-price') as HTMLElement; 

  let total = 0; // Initialize total price

  cart.forEach((cartItem) => {
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.style.backgroundImage = `url(${cartItem.product.background_image})`;

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = cartItem.product.name;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${cartItem.product.price}`;

    productContainer.appendChild(imageContainer);
    productContainer.appendChild(title);
    productContainer.appendChild(price);

    shoppingBasketElement.appendChild(productContainer);

    total += cartItem.product.price * cartItem.quantity;
  });

  if (totalPriceElement) {
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
  }
}