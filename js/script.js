const selectElement = document.querySelector("[data-select]");
console.log(selectElement);

selectElement.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-select-title")) {
    this.querySelector(".main-selector-dropdown").classList.toggle("hidden");
  } else if (event.target.hasAttribute("data-select-item")) {
    const itemTitle = event.target.getAttribute("data-select-item");
    console.log(itemTitle);
    event.target
      .closest("[data-select]")
      .querySelector("[data-select-title]").textContent = itemTitle;
    event.target
      .closest("[data-select]")
      .querySelector(".main-selector-dropdown")
      .classList.toggle("hidden");
  }
});
