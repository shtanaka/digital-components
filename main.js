import { dropdownArrow } from "./src/components/icons/dropdown-arrow";
import "./style.css";

function getPageDropdowns() {
  return Array.from(document.querySelectorAll(".dropdown"));
}

function closeAllDropdowns() {
  const dropdownEls = getPageDropdowns();
  for (const dropdownEl of dropdownEls) {
    dropdownEl.querySelector(".dropdown-box").classList.remove("active");
  }
}

function addDropdownArrow(dropdownEl) {
  const dropdownButtonEl = dropdownEl.querySelector(".dropdown-button");
  const svgArrowContainerEl = document.createElement("span");
  svgArrowContainerEl.classList.add("dropdown-arrow-container");
  svgArrowContainerEl.innerHTML = dropdownArrow;
  dropdownButtonEl.appendChild(svgArrowContainerEl);
}

function addDropdownHideShowEvent(dropdownEl) {
  const dropdownButtonEl = dropdownEl.querySelector(".dropdown-button");
  const dropdownBox = dropdownEl.querySelector(".dropdown-box");

  dropdownButtonEl.addEventListener("click", () => {
    const isDropdownOpen = dropdownBox.classList.contains("active");
    
    closeAllDropdowns();

    if (isDropdownOpen) {
      dropdownBox.classList.remove("active");
    } else {
      dropdownBox.classList.add("active");
    }
  });
}

function main() {
  const dropdownEls = getPageDropdowns();

  for (const dropdownEl of dropdownEls) {
    addDropdownArrow(dropdownEl);
    addDropdownHideShowEvent(dropdownEl);
  }
}

main();
