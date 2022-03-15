// declaring an array called fourItems in relationship to my website
var fourItems = ["Park", "Toys", "Treats", "Walks"];

// declaring an array for each day of the week
var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

// delaring a variable to contain my first name
var firstName = "Julie";

// decalring a variable for the year I was born
var yearBorn = "1971";

// utilizing a tryCatch block to check for any errors
try {
    // utilizing the loop to print array to console by increasing by 2
    for (index = 0; index < fourItems.length;
     index++){
     console.log(fourItems[index]);
    }

    // utilizing the reverse method to reverse the order of the array items 
    daysOfTheWeek.reverse();

    // do-while loop to print the array for the days of the week
    let daysOfTheWeekIndex = 0;
    do {
        console.log(daysOfTheWeek[daysOfTheWeekIndex]);
        daysOfTheWeekIndex++; 
    }
    while (daysOfTheWeekIndex < daysOfTheWeek.length)

    // utilizing the shift method to remove the first item in daysOfTheWeek
    daysOfTheWeek.shift();

    // utilizing the if condition to check if the first value is Sunday
    if (daysOfTheWeek[0] == "Sunday") {
        console.log("First word is Sunday");
    }
    else {
        throw "Sunday should be missing";  
    } 
} 
catch (error) {
    console.log(error);
}
// utilizing finally block to run cod regardless outcome of try
finally {
    // printing to conole the frist value and last value of the daysOfTheWeek array
    console.log(daysOfTheWeek[0]);
    console.log(daysOfTheWeek[daysOfTheWeek.length - 1]);

    // printing to console concatenation of the above variables (firstName) and (yearBorn)
    console.log(firstName + " is always happy because of TGIF since I was born on " + yearBorn);
}
