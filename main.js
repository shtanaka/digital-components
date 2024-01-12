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
  const res = await fetch('https://6597ee73668d248edf23ba81.mockapi.io/Product');
  const products = await res.json();
  return products;
}

async function renderProducts(products) {
  const productsContainer = document.querySelector('#productsContainer');
  productsContainer.innerHTML = '';
  for (const product of products) {
    const div = document.createElement('div');
    const imageEl = document.createElement('img')
    const nameEl = document.createElement('div')
    const priceEl = document.createElement('div')

    imageEl.src = product.image;
    nameEl.innerHTML = product.name;
    priceEl.innerHTML = product.price;

    div.appendChild(imageEl);
    div.appendChild(nameEl);
    div.appendChild(priceEl);

    productsContainer.appendChild(div);
  }
}

function renderSumOfProducts(value) {
  const sumOfProductsEl = document.querySelector('#sumOfProducts');
  sumOfProductsEl.innerHTML = `Valor total em estoque: ${value}`
}

function addInputChangeEvent(input, products) {
  input.addEventListener('change', () => {
    renderPage(products, input.value);
  })
}

function renderPage(products, filterValue) {
  const value = Number(filterValue);
  const filteredProducts = products.filter((product) => Number(product.price) < value);
  const sumOfValuesOfFilteredProducts = filteredProducts.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);
  
  renderProducts(filteredProducts);
  renderSumOfProducts(sumOfValuesOfFilteredProducts);
}

async function main() {
  addBurgerMenuEvents();
  renderDropdowns();

  const products = await fetchProducts();
  const inputEl = document.querySelector('#valorAte');
  const value = Number(inputEl.value);
  renderPage(products, value);
  addInputChangeEvent(inputEl, products);
}

main();

