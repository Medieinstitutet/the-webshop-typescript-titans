import { loadCart } from "../productPage/displayProducts";

document.addEventListener("DOMContentLoaded", function () {
  const navBagIcon = document.getElementById("nav-bag-icon") as HTMLElement;
  const checkout = document.getElementById("checkout") as HTMLElement;
  const closeCartIcon = document.getElementById("closeCartIcon") as HTMLElement;
  const goToPayment = document.getElementById("goToPayment") as HTMLElement;

  //klickbara ikoner
  navBagIcon.addEventListener("click", function () {
    checkout.style.display = "flex";
    loadCart();
  });

  //stänger cart fönsteret
  if (closeCartIcon) {
    closeCartIcon.addEventListener("click", function () {
      checkout.style.display = "none";
    });
  }
  // gör så att man skickas vidare till betalningen

  goToPayment.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
});

interface Games {
  name: string;
  price: number;
}

function updateCartCount() {
  const cart: Games[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const cartCount: number = cart.length;

  const cartCountElement = document.getElementById("cart-count") as HTMLElement;
  if (cartCountElement) {
    cartCountElement.textContent = cartCount.toString();
    updateCartCount();
  }
}

updateCartCount();
