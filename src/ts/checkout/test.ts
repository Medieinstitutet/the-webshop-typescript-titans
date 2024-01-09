// Tillhör order.html även denna ska vara på payment branchen (skickas tillbaka till starpage)
const ReturnButton = document.getElementById('ReturnButton') as HTMLElement;

ReturnButton.addEventListener('click', function() {
   
  window.location.href = 'index.html';
  })
  