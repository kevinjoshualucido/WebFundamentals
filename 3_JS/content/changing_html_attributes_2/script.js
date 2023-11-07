var title = document.querySelector("h1");
title.innerText = "Switch";

function setDarkMode(element) {
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        element.innerText = "Switch to dark mode";
    } else {
        element.classList.add("dark-mode");
        element.innerText = "Switch to light mode";
    }
}