
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

function main() {
  addBurgerMenuEvents();
  renderDropdowns();
}

main();
