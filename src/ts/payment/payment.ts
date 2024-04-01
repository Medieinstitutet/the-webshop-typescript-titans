import "../../scss/style.scss";
import { IGameProduct } from "../../models/IGameProduct";

document.addEventListener("DOMContentLoaded", function () {
  loadCheckoutCart();
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

export function loadCheckoutCart() {
  const cartJson = localStorage.getItem("cart");
  let cart: IGameProduct[] = cartJson ? JSON.parse(cartJson) : [];
  const shoppingBasketElement = document.querySelector(
    ".shopping-basket"
  ) as HTMLElement;

  // Clear existing content in the shopping basket
  shoppingBasketElement.innerHTML = "";

  function calculateTotal() {
    const cart: IGameProduct[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].product.price * cart[i].quantity;
    }

    const totalElement = document.createElement("span") as HTMLElement;
    totalElement.classList.add("total-amount1");
    if (totalElement) {
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
      shoppingBasketElement.appendChild(totalElement);
    }

    return total;
  }

  calculateTotal();

  cart.forEach((cartItem, index) => {
    const productContainer = document.createElement("div");
    productContainer.className = "product-container1";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container1";
    imageContainer.style.backgroundImage = `url(${cartItem.product.background_image})`;

    const title = document.createElement("h3");
    title.className = "title";
    title.textContent = cartItem.product.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${cartItem.product.price}`;

    const addProducts = document.createElement("button");
    addProducts.className = "add-products-btn";
    addProducts.textContent = "+";
    addProducts.addEventListener("click", () => {
      cart[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCheckoutCart();
    });

    const removeProducts = document.createElement("button");
    removeProducts.className = "remove-products-btn";
    removeProducts.textContent = "-";
    removeProducts.addEventListener("click", () => {
      if (cart[index].quantity == 1) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCheckoutCart();
    });

    const quantity = document.createElement("span");
    quantity.textContent = `${cartItem.quantity}`;

    productContainer.appendChild(imageContainer);
    productContainer.appendChild(title);
    productContainer.appendChild(price);
    productContainer.appendChild(addProducts);
    productContainer.appendChild(removeProducts);
    productContainer.appendChild(quantity);

    shoppingBasketElement.appendChild(productContainer);
  });
}
