import "../../scss/style.scss";

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

  const goToCheckoutBtn = document.getElementById('goToCheckoutBtn') as HTMLElement;





//Funktion som gör att man skickat vidare till betalningen men just nu går det till orderbekräftelse sidan, 
// även denna funktion behövs i payment branchen

goToCheckoutBtn.addEventListener('click', function() {
   
    window.location.href = 'order.html';
})