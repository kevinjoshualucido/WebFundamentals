var count = [0,0,0];
var spanCounters = [
    document.querySelector("#counter-1"),
    document.querySelector(".counter-2"),
    document.querySelector(".counter-3")
]

function increaseLikeCount(cls) {
    count[cls]++;
    spanCounters[cls].innerText = count[cls];
}