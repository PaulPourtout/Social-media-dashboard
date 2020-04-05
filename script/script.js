const body = document.querySelector("body");
let toggleState = false;
const toggleElement = document.querySelector("#toggle");

toggleElement.addEventListener("click", toggleTheme);

function toggleTheme() {
    if (toggleState) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        toggleState = false;
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        toggleState = true;
    }
}