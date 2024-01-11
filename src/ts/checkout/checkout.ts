import { loadCart } from "../productPage/displayProducts";

const navBagIcon = document.getElementById("nav-bag-icon") as HTMLElement;
const checkout = document.getElementById("checkout") as HTMLElement;
const closeCartIcon = document.getElementById("closeCartIcon") as HTMLElement;
const goToPayment = document.getElementById("goToPayment") as HTMLElement;

//klickbara ikoner
navBagIcon.addEventListener("click", function () {
  checkout.style.display = "flex";
  loadCart();
});

closeCartIcon.addEventListener("click", function () {
  checkout.style.display = "none";
  console.log("HEHEHEHEHEH");
});

// gör så att man skickas vidare till betalningen

goToPayment.addEventListener("click", function () {
  window.location.href = "checkout.html";
});

// //Ikonen uppdateras med en siffra efter man lagt i produkter (vet ej om den funkar då jag ej har några produkter att lägga i )

// // Antal i varukorgen
// let cartCount: number = 0;

// // Funktion för att uppdatera antalet och visa/dölja det
// function updateCartCount(count: number): void {
//   cartCount = count;
//   const cartCountSpan: HTMLElement | null = document.getElementById('cart-count');

//   if (cartCountSpan) {
//     // Uppdatera antalet
//     cartCountSpan.textContent = cartCount.toString();

//     // Visa/dölj antalspännet baserat på om varukorgen är tom eller inte
//     cartCountSpan.style.display = cartCount > 0 ? 'block' : 'none';
//   }
// }

// updateCartCount(1)
