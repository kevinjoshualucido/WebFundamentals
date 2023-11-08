console.log("page loaded...");

var nameElement = document.querySelector("#name");
console.log(nameElement);

// index [0,1]
var spanConnection = [
    document.querySelector("#connection-1"),
    document.querySelector("#connection-2")
]
console.log(spanConnection);

var badgeRequestNum = spanConnection.length;
console.log(badgeRequestNum);

// badge for requests
var badgeElement = document.querySelector(".badge#requests");
console.log(badgeElement);

// badge for connections
var connectedBadgeElement = document.querySelector(".badge#connected");
console.log(typeof (connectedBadgeElement));

var connectedNum = parseInt(connectedBadgeElement.innerHTML);
console.log(connectedNum);

function nameChange() {
    nameElement.innerHTML = "Kevin James";
}

function removeConnection(index) {
    spanConnection[index].remove();
}

function reduceRequest() {
    badgeElement.innerHTML = badgeRequestNum;
    badgeRequestNum--;
}

function addConnection() {
    connectedBadgeElement.innerHTML = connectedNum;
    connectedNum++;
}

addConnection();
reduceRequest();