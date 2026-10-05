// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.
import { items } from "./items.js";

export function renderItems(list) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  list.forEach((item) => {
    const row = document.createElement("li");
    row.classList.add("row");
    row.textContent = `${item.name} (${item.category})`;
    container.appendChild(row);
  });
}

export function matching() {
  return items.filter((item) => item.inStock);
}

export function start() {
  renderItems(items);

  document.getElementById("filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}
