// declaring a variable of a sentence assinging the value to my family
var famString = "Oscar had 3 kids and a beautiful wife named Stella. 2 of the kids" 
+ " were identical twins and the other child was the oldest by 4 years."
// declaring a variable of a sentence assinging the value to my relatives
var relString = "The family had 0 (zero) relatives that lived in the San FrancisCo area,"
+ " but they did have 1 relative who lived about 100 miles away."
// declaring a variable of a sentence assinging the value to our vacations
var vacString = "This summer they plan on traveling to the country to visit as many family"
+ " members as possible."

// printing to console the numbers in the famString by assigning the variable
var firstNumber = famString[famString.indexOf(3)];
console.log(firstNumber);
var secondNumber = famString[famString.indexOf(2)];
console.log(secondNumber);
var thirdNumber = famString[famString.indexOf(4)];
console.log(thirdNumber);

// printing to console the numbers in the relString by assigning the variable
var firstNumberRel = relString[relString.indexOf(0)];
console.log(firstNumberRel);
var secondNumberRel = relString[relString.indexOf(1)];
console.log(secondNumberRel);
// printing 3rd number rel at utilizing concatination 
var thirdNumberRel = relString[relString.lastIndexOf(1)] +
relString[relString.indexOf(0, relString.length/2)] +
relString[relString.lastIndexOf(0)];
console.log(thirdNumberRel);

// splitting 3rd number rel
var thirdNumberRelSplit1 = thirdNumberRel.slice(0, 2);
console.log(thirdNumberRelSplit1);
var thirdNumberRelSplit2 = thirdNumberRel.slice(2, 3);
console.log(thirdNumberRelSplit2);
// adding all numbers and saving into variables sumTotal
var sumTotal = parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber) 
+ parseInt(firstNumberRel) + parseInt(secondNumberRel) + parseInt(thirdNumberRelSplit1) 
+ parseInt(thirdNumberRelSplit2);
console.log(sumTotal);

// extracting San Francisco and store into a variable
var sanFranciscoString = relString.substring(relString.indexOf("San FrancisCo"), relString.indexOf("San FrancisCo")+13)
console.log(sanFranciscoString);
// use replace method to replace the country in vacString with sanFrancisoString to lower case
vacString = vacString.replace("the country", sanFranciscoString.toLowerCase())
console.log(vacString)

// while loop to count number of cars
let numCars = 1;
while (numCars <= 20) {
	console.log('I saw ' + numCars + ' cars on my trip');
  	numCars++;
}
