const navBagIcon = document.getElementById('nav-bag-icon') as HTMLElement;
const checkout = document.getElementById('checkout') as HTMLElement;
const closeCartIcon = document.getElementById('closeCartIcon') as HTMLElement;
const goToPayment = document.getElementById('goToPayment') as HTMLElement;



navBagIcon.addEventListener('click', function() {
    checkout.style.display = 'flex';
});

closeCartIcon.addEventListener('click', function() {
    checkout.style.display = 'none';
});




goToPayment.addEventListener('click', function() {
    // Byt ut "ny-sida.html" med den faktiska sidan du vill navigera till.
    window.location.href = 'payment.html';
})