const button = document.querySelector(".button");
const block = document.querySelector(".block");

button.addEventListener("click", button_click);
function button_click(e) {
  block.classList.add("active");
}
