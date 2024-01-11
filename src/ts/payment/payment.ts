import "../../scss/style.scss";

const paymentSection = document.getElementById('paymentSection') as HTMLElement;
const confirmationOverlay = document.querySelector('.confirmationOverlay') as HTMLElement;
const goToCheckoutBtn = document.getElementById('goToCheckoutBtn') as HTMLElement;


window.onload = function () {
  goToCheckoutBtn.addEventListener("click", function () {
    paymentSection.style.display = "none";
    confirmationOverlay.style.display = "flex";
  });
};

const returnButton = document.getElementById('ReturnButton');

if (returnButton) {
  returnButton.addEventListener('click', function() {
    window.location.href = 'index.html';
  });
}


function validateForm() {
    // Hämta värdet från input-fältet med id "card-holder-name"
    let x = (document.getElementById("card-holder-name") as HTMLInputElement).value;
   
 
    if (x === "") {
      console.log("Kortinnehavarens uppgifter måste fyllas i");
      return false;
    }
 
    
    return true;
  }
 
  // Knyt funktionen till ett fält på fönstret så att den kan nås globalt
  (window as any).validateForm = validateForm;