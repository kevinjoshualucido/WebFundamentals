// var form = document.querySelector("form");
// console.log(form[1]);

function activeSub(element) {
    element.innerHTML = "You've Subscribed!";
}

var firstName = document.querySelector("#fn");
var lastName = document.querySelector("#ln");
var email = document.querySelector("#email");

function register() {
    var dict = {
        'fn':firstName.value,
        'ln':lastName.value,
        'email':email.value
    }
    var contactInfo = "First Name is: " + dict['fn'] + "\n" + "Last Name is: " + dict['ln'] + "\n" + "Email is: " + dict['email'] + "\n";
    return contactInfo;
}