// declaring variable a to accept a value from user
var a = prompt("Please provide a numerical value.");
// turning a from string to number or NaN
var aNumber = Number(a);

// utlilizing a while loop to repeatly check if value of a is data type number
let isNumerical = false;
while(isNumerical == false) {
    if (Number.isNaN(aNumber) == false) {
        isNumerical = true;
    }
    else {
        alert("err entered value is not a number");
        a = prompt("Please provide a numerical value.");
        aNumber = Number(a);
    }
}

// declaring variable b to accept a value from user
var b = prompt("Please provide another numerical value.");
// turning a from string to number or NaN
var bNumber = Number(b);

// utlilizing a while loop to repeatly check if value of b is data type number
isNumerical = false;
while(isNumerical == false) {
    if (Number.isNaN(bNumber) == false) {
        isNumerical = true;
    }
    else {
        alert("err entered value is not a number");
        b = prompt("Please provide a numerical value.");
        bNumber = Number(b);
    }
}

// saving result of multiplication of numbers a and b
var resultOfMultiplication = aNumber * bNumber;
    alert(resultOfMultiplication);

// using modulo to check if aNumber is even and console logging result
if (aNumber % 2 == 0) {
    console.log(aNumber + " is even");
}  
else {
    console.log(aNumber + " is odd");
}  

// using modulo to check if bNumber is even and console logging result
if (bNumber % 2 == 0) {
    console.log(bNumber + " is even");
}  
else {
    console.log(bNumber + " is odd");
}  

// printing the result to the console if the resultOfMultiplication is even or odd
if (resultOfMultiplication % 2 == 0) {
    console.log(resultOfMultiplication + " is even");
}  
else {
    console.log(resultOfMultiplication + " is odd");
}  
