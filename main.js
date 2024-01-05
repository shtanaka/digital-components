import { addBurgerMenuEvents } from "./src/components/burger";
import { addDropdownArrow, addDropdownHideShowEvent, getPageDropdowns } from "./src/components/dropdown";

import "./style.css";

function renderDropdowns() {
  const dropdownEls = getPageDropdowns();

  for (const dropdownEl of dropdownEls) {
    addDropdownArrow(dropdownEl);
    addDropdownHideShowEvent(dropdownEl);
  }
}

async function fetchProducts() {
  const rawProducts = await fetch("https://6597ee73668d248edf23ba81.mockapi.io/Product");
  const products = await rawProducts.json();
  return products;
}

async function main() {
  addBurgerMenuEvents();
  renderDropdowns();
  const products = await fetchProducts();
  const productsContainerEl = document.querySelector('#productsContainer');

  for (const product of products) {
    const imageEl = document.createElement('img');
    imageEl.src = product.image;
    const productNameEl = document.createElement('div');
    productNameEl.innerHTML = product.name;
    productsContainerEl.appendChild(imageEl);
    productsContainerEl.appendChild(productNameEl);
  }
}

main();

