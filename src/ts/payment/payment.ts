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