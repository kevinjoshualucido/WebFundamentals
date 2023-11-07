function hoverOver(element) {
    element.classList.add("shadow");
    element.style.backgroundColor = "lightgoldenrodyellow";
}

function hoverAway(element) {
    element.classList.remove("shadow");
    element.style.backgroundColor = "palegoldenrod";
}