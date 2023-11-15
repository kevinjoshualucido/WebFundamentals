var subscribe = document.querySelector(".subscribe");

// index 0, 1
var scoreArray = [
    document.querySelector("#live-score-1"),
    document.querySelector("#live-score-2")
]
console.log(typeof(scoreArray[0]));

// convert string to number
var homePts = parseInt(scoreArray[0].innerHTML);
var awayPts = parseInt(scoreArray[1].innerHTML);

// remove subscribe card on click
function activateSub() {
    subscribe.remove();
}

// add 1 to score
function addPoint(index) {
    if (index == 0) {
        scoreArray[index].innerHTML = homePts;
        homePts++;
    }
    if (index == 1) {
        scoreArray[index].innerHTML = awayPts;
        awayPts++;
    }
}

// timeout
setTimeout(
    function message() {
        alert('The Ninjas have won!');
    }, 13000);