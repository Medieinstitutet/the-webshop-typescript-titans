const navBagIcon = document.getElementById('nav-bag-icon') as HTMLElement;
const checkout = document.getElementById('checkout') as HTMLElement;
const closeCartIcon = document.getElementById('closeCartIcon') as HTMLElement;
const goToPayment = document.getElementById('goToPayment') as HTMLElement;


//klickbara ikoner
navBagIcon.addEventListener('click', function() {
    checkout.style.display = 'flex';
});

closeCartIcon.addEventListener('click', function() {
    checkout.style.display = 'none';
});


//Funktion som gör att man skickat vidare till betalningen

goToPayment.addEventListener('click', function() {
   
    window.location.href = 'order.html';
})





// Antal i varukorgen
let cartCount: number = 0;

// Funktion för att uppdatera antalet och visa/dölja det
function updateCartCount(count: number): void {
  cartCount = count;
  const cartCountSpan: HTMLElement | null = document.getElementById('cart-count');

  if (cartCountSpan) {
    // Uppdatera antalet
    cartCountSpan.textContent = cartCount.toString();

    // Visa/dölj antalspännet baserat på om varukorgen är tom eller inte
    cartCountSpan.style.display = cartCount > 0 ? 'block' : 'none';
  }
}


updateCartCount(1)