function validateForm() {
    // Hämta värdet från input-fältet med id "card-holder-name"
    let x = (document.getElementById("card-holder-name") as HTMLInputElement).value;
   
 
    if (x === "") {
      alert("Kortinnehavarens uppgifter måste fyllas i");
      return false;
    }
 
 
    return true;
  }
 
  

  