var count = 0;
var countElement = document.querySelector(".counter");
console.log(countElement);

function increaseLikeCount() {
    count++;
    countElement.innerText = count;
}