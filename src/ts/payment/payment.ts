import "../../scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const paymentSection = document.getElementById(
    "paymentSection"
  ) as HTMLElement;
  const confirmationOverlay = document.querySelector(
    ".confirmationOverlay"
  ) as HTMLElement;
  const goToCheckoutBtn = document.getElementById(
    "goToCheckoutBtn"
  ) as HTMLElement;

  if (goToCheckoutBtn) {
    goToCheckoutBtn.addEventListener("click", function () {
      paymentSection.style.display = "none";
      confirmationOverlay.style.display = "flex";
    });
  }

  const returnButton = document.getElementById("ReturnButton");

  if (returnButton) {
    returnButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});
