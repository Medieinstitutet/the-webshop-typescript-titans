import { addRandomPrices } from "./addRandomPrices";

export async function displayFilter() {
  const filters = await addRandomPrices();
  const filterContainer = document.getElementById("filterContainer");

  for (let i = 0; i < 20; i++) {
    const tags = filters[i];
    const tag: HTMLButtonElement = document.createElement("button");

    tag.textContent = tags.genres[0].name;

    filterContainer?.appendChild(tag);
  }
}
