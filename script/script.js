const body = document.querySelector("body");
let toggleState = false;
const toggleElement = document.querySelector("#toggle");
const toggleContainerElement = document.querySelector("#toggle-container");

toggleContainerElement.addEventListener("click", toggleTheme);

function toggleTheme() {
    if (toggleState) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        toggleElement.classList.remove("toggle--active");
        toggleState = false;
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        toggleElement.classList.add("toggle--active");
        toggleState = true;
    }
}