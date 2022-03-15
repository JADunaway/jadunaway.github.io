// grab the values from the document uising query selector
var firstName = document.querySelector("#fname");
var lastName = document.querySelector("#lname");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");

var radioPlayWithCooper = document.querySelector("#PlaywithCooper");
var radioReadwithCooper = document.querySelector("#ReadwithCooper");

var combo = document.querySelector(".combo");

var frisbee = document.querySelector("#Frisbee");
var basketball = document.querySelector("#Basketball");
var rope = document.querySelector("#Rope");
var tennisBall = document.querySelector("#TennisBall");

var cancelOrder = document.querySelector("#cancel");
var submit = document.querySelector("#submit");

// adding Event Listner to submit button
submit.addEventListener("click", submitForm)
// writing helper function to pass into submit Event Listner
function submitForm(event) {
    event.preventDefault();
    event.stopPropagation();
// verify result of text check with values firstnasme and lastName
    if(textCheck(firstName.value, lastName.value)) {
        alert("formSubmit");
        console.log(firstName.value);
        console.log(lastName.value);
        console.log("Was frisbee selected?" + frisbee.checked);
        console.log("Was basketball selected?" + basketball.checked);
        console.log("Was rope selected?" + rope.checked);
        console.log("Was tennisBall selected?" + tennisBall.checked);
        console.log("sum of all items selected = " + addPrice());
    }
    else {
        alert("formNotSubmit");
        // checking rather firtName vaule is empty or lastName value is empty
        if(firstName.value == "") {
            alert("required firstName value not entered");
            firstName.focus();
        }
        else  if(lastName.value == "") {
            alert("required lastName value not entered");
            lastName.focus();
        }
    }
}

// adding an Event Listner to the cancel order button
cancelOrder.addEventListener("click", clearForm)
// writing helper function to pass into cancel order Event Listner
function clearForm(event) {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector("#mainform").reset();
}

// helper function to check if two text values are both not empty and returning corresponding booleans
function textCheck(textOption1, textOption2) {
    if (textOption1 !== "" && textOption2 !== "") {
        return true;
    }
    else {
        return false;
    }
}

// helper function to add together price of objects checked by user
function addPrice() {
   let sum = 0
   if (frisbee.checked) {
        sum = sum + Number(frisbee.value);
   }
   if (basketball.checked) {
    sum = sum + Number(basketball.value);
   }
   if (rope.checked) {
    sum = sum + Number(rope.value);
   }   
   if (tennisBall.checked) {
    sum = sum + Number(tennisBall.value);
   }
   return sum
}