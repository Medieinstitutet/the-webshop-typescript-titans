//click function to add object to cart.
const addToCartBtn: HTMLButtonElement = document.createElement("button");

export function addToCart() {
  addToCartBtn.addEventListener("click", () => {
    console.log("button clicked!!!!");
  });
}
