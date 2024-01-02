const navBagIcon = document.getElementById('nav-bag-icon') as HTMLElement;
const checkout = document.getElementById('checkout') as HTMLElement;
const closeCartIcon = document.getElementById('closeCartIcon') as HTMLElement;

navBagIcon.addEventListener('click', function() {
    checkout.style.display = 'flex';
});

closeCartIcon.addEventListener('click', function() {
    checkout.style.display = 'none';
});
