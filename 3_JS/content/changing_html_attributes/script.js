var carImg = document.querySelector("#car");
console.log(carImg);
var carName = document.querySelector(".car-name");
console.log(carName);

function pickHonda(element) {
    carImg.src = "images/2022-honda-civic-hatchback-sport-touring.jpeg";
    carName.innerText = "2022 Honda Civic Hatchback Sport Touring";
}

function pickMazda(element) {
    carImg.src = "images/2021-mazda-3-turbo-awd-sedan.jpeg";
    carName.innerText = "2021 Mazda 3 Turbo AWD Sedan";
}

function pickSubaru(element) {
    carImg.src = "images/2024-subaru-impreza-rs.jpeg";
    carName.innerText = "2024 Subaru Impreza RS";
}

function hoverOver(element) {
    element.classList.add("hover-over");
}

function hoverAway(element) {
    element.classList.remove("hover-over");
}