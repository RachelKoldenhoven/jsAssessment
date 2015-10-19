// 1.  Log your last name to the console.

/*
console.log("Rachel");


// 2.  Declare a variable called "movie" and log it to the console.

var movie = "movie";
console.log(movie);


// 3.  Declare three variables with integer values. Add the first two, then multiply that sum by the third.

var a = 4;
var b = 5;
var c = 8;
var sum = a + b;
console.log(sum * c);



// 4.  Declare two variable with string values. Declare a third varible that concatenates the first two.

var str1 = "Volcanoes";
var str2 = " are awesome!";

var newStr = str1.concat(str2);
console.log(newStr);



// 5.  Prompt a user to enter a number. Multiply that by 100.

var num = prompt("Pick a number!");

console.log(num * 100);



// 6.  Prompt a user to enter his/her name, favorite band, and the year they were born. Log the sentence:
//     "My name is ______, and I'm ___ year old fan of ________."

var name = prompt("What is your name?");
var band = prompt("What is your favorite band?");
var year =  prompt("What year were you born?");
function ageFinder(year) {
    var age = new Date().getFullYear() - year;
    console.log("My name is " + name + ", and I'm " + age + "-year-old fan of " + band + ".");
}
ageFinder(year);




// 7.  Create an alert that uses the response from a prompt.

var food = prompt("What is your favorite food?");

alert("I love " + food);

// 8.  Declare an array with six items. Do this two different ways.

var myStudents = ["Joor", "MiNaiSan", "Misgana", "Abdi", "Yasmine", "Cristian"];
console.log(myStudents);

var myPets = ["Hank", "Wag Wag", "Whiskey"];
myPets.push("Boo", "Sable", "Mork");
console.log(myPets);




// 9.  Add two additional items to the beginning of the array.

myPets.unshift("Hanuman", "Sparky");
console.log(myPets);



// 10. Remove the last two items.

myPets.splice(6,2);
console.log(myPets);


// 11. Add one item between the 2nd and 3rd item.

myPets.splice(2, 0, "Julie");
console.log(myPets);


// 12. Combine all of the elements of the array into a string.

var strPets = myPets.toString();
console.log(strPets);


// 13. Arrange the items alphabetically.
var orderedPets = myPets.sort();
console.log(orderedPets);


// 14. Create and array of three arrays: colors, names, and schools. Each inner array should have three items.

var colors = ["blue", "red", "gold"];
var names = ["Emma", "Annie", "Galya"];
var schools = ["Cherry Creek", "Montbello", "Place"];

var stuff = [colors, names, schools];

console.log(stuff);


// 15. Remove the last item from the second array.

names.pop();
console.log(stuff);


// 16. Declare an object called "car" that describes the make, model, and color of your car.

var car = {
    make: "Subaru",
    model: "Outback",
    color: "burgundy"
};
console.log(car);

// 17. To the car object, add the key/value pair describing the year of your car.

car.year = "1997";

console.log(car);


// 18. The the car object, add a "repairs" key with the value being an array of the last three items you fixed on the car.

car.repairs = ["radiator", "windshield wipers", "tires"];

console.log(car);


// Use the following object for questions 19-25:
guests = {
  "joe": {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue":{
    first_name: "Sue",
    last_name: "Summers",
    preferences: {
      meal: "fish",
      favorite_genres: ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}

// 19. Find Joe's last name.

console.log(guests.joe.last_name);

// 20. Log to the console the first genre each person listed.

console.log(guests.joe.preferences.favorite_genres[0] + guests.sue.preferences.favorite_genres[0]);


// 21. Find the first name of the person sitting next to Joe.

console.log(guests.joe.sitting_next_to);


// 22. Find what meal Sue will be eating.

console.log(guests.sue.preferences.meal);


// 23. Find the date of the first correspondence with Joe.

console.log(guests.joe.correspondence[0].date);

// 24. find the desciption of the last correspondence with Sue.

console.log(guests.sue.correspondence[1].description);
// 25. Create a string uses variables to read:
//     "As of [date of Joe's last correspondence], [Joe's first name] [Joe's last correspondence description].
//      He will be eating [Joe's meal choice] while listening to [Joe's first favorite genre] and [Joe's second favorite genre]
//      and sitting next to [Sue's first name][Sue's last name]."
// 26. Create an object with both Literal Notation and Constructor.

var longStr = "As of " + guests.joe.correspondence[1].date + ", " + guests.joe.first_name + " " + guests.joe.correspondence[1].description
     + ".  He will be eating " + guests.joe.preferences.meal + " while listening to " + guests.joe.preferences.favorite_genres[0]
    + " and " + guests.joe.preferences.favorite_genres[1] + " and sitting next to " + guests.sue.first_name + " " + guests.sue.last_name
     + ".";


console.log(longStr);



// 27. Output each item in the following Array to your console:
var bedroom = ['bed', 'nightstand', 'television', 'Channing Tatum']

console.log(bedroom);


// 28. Log to the console numbers 25 to 85, only in increments of 15.



for (i = 25; i<86; i = i +15) {
    console.log(i);
}

// 29. Write a while loop that logs "This loop is number: ___" to the console 5 times. Use your counter to fill in the blank.

var counter = 1;
while (counter <= 5) {
    console.log("This loop is number: " + counter);
    counter = counter + 1;
}

// 30. Use a for loop to rewrite #29.

for (i = 0; i<5; i++) {
    console.log("This is loop number:" + [i]);
}

// 31. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.

var choice = prompt("Type a number or word.");
if (isNaN(choice)) {
    alert("You chose a word!");
}
else {
    alert("You chose a number!");
}

// 32. Use Math.floor and Math.random to roll two six sided dice for two players. Determine which player wins with the higher roll.

    var playerOne = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

    var playerTwo = Math.floor(Math.random() * ((6 - 1) + 1) + 1);

console.log(playerOne);
console.log(playerTwo);

if(playerOne === playerTwo) {
    console.log("Tie");
}
if(playerOne > playerTwo) {
    console.log("Player One Wins!");
} else {
    console.log("Player Two Wins!");
}



// 33. Define a function called "divideByThree". It should accept one parameter called "number".



function divideByThree(number) {
    var number = prompt("Pick a number");
    var answer = number/3;
    if(number%3 ===0){
        console.log(answer);
    } else {
        alert("Your number sucks!");
    }
}

divideByThree();


//     The function should divide the number by three and output the answer.
//     If the number is not divisible by three with a remainder of zero, alert the user that their number is invalid.
// 34. Write a function that accepts the following array and separates the people into men and women.
//     HINT: The men are even and the women are odd.
       battingLineUp= ["Henry", "Shirley", "Mark", "Tina", "Max", "Sara", "Eric", "Lisa", "Ralph", "Connie", "Drew"]

function twoTeams(battingLineUp) {
    var TeamA = [];
    var TeamB = [];
    for (i = 0; i < battingLineUp.length; i++) {
        var person = battingLineUp[i];
        if (i % 2 === 0) {
            TeamA.push(person);
        } else {
            TeamB.push(person);
        }
    }
    console.log(TeamA);
    console.log(TeamB);
}

twoTeams(battingLineUp);



// 35. Prompt a user to enter their phone number. Write a function that outputs their phone number in a pretty format like:
//     (555) 883-3985
//     Alert the user if they have entered anything except a 10 digit number.

var phoneNum = prompt("Enter ur digits!");


function cleanNum(phoneNum) {
    if(phoneNum.length<10 || phoneNum.length>11) {
        alert("Not a valid number!");
    }
    if (phoneNum.length === 10) {
        return phoneNum;
    }
    if(phoneNum.charAt(0) === "1") {
        return phoneNum.substring(1);
    }
    return undefined;


}
var areaCode = phoneNum.substr(0,3);
var local = phoneNum.substr(3,3);
var localTwo = phoneNum.substr(6,4);
console.log("(" + areaCode + ") " + local + "-" + localTwo);

    cleanNum(phoneNum);



// 36. Write a helpufl tipping function that accepts two parameters, the bill amount and service score based on a scale of 1-10.
//     The output should be the bill, the tip, and the total amount.
//     Service score 1-3 denotes a 10% tip. 4-6 = 15%, 7-9 = 20%, 10 = 50%.


function tipping(bill,service){
    if(service <= 3) {
        var tip = (10/100)*bill;
    }
    if(service <= 6) {
        var tip = (15/100)*bill;
    }
    if(service <= 9){
        var tip = (20/100)*bill;
    } else {
        var tip = (50/100)*bill;
    }
    var total = bill + tip;

    console.log("Bill = $" + bill + " Tip = $" + tip + " Total Amount = $" + total);
}

tipping(12,10);


// 37. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
       arrayOfSchtuff = ["four", 55, {myDog: "Scranton"}, "fifty-one", 21, 398577729, "3,333"]

for (i=0; i<arrayOfSchtuff.length; i++) {
    if (isNaN(arrayOfSchtuff[i])) {
        console.log(arrayOfSchtuff.i + " is not a number");
    }
    else {
        console.log(arrayOfSchtuff.i + " is a number!");
    }
}

 */
// 38. Use a function to ask a user for a US Dollar amount and converts it to Canadian Dollars.
// 39. Add the option of converting to Euros. First ask the user which currency they want the conversion for, then ask for the dollar amount.
// 40. Write a function that returns an object of duplicate letters in an string.
//     "Baby Aaron" should return {"b":2, "a":3}
// BONUS: Write a function named pluralize that takes 2 arguments, a noun and a number. It returns the number and pluralized form, like "5 cats" or "1 dog".
//        Make it handle a few collective nouns like "sheep" and "geese"
//
// =========================== jQuery =========================
// 41. Add the jQuery CDN script to index.html
$(document).ready(function(){

// 42. Turn the square into a circle.

$(".square").addClass("circle");


// 43. When the 'Fade' button is clicked, have your circle fade in/out with any speed you like.
//     Hint: http://api.jquery.com/fadetoggle/

    $("#fader").click(function(){
        $(".square").fadeToggle();
    });

// 44. Put your name on the page.



// 45. Add some flair to your name when you click the 'Stylize!' button.
//     Feel free to edit the HTML however you see fit.

    $("button").click(function(){
        $("#name").css("color", "rgb(255,0,255)");
        $("#name").css("font-size", "40px");
    });

// 46. Create as many pacman clones as you see fit.

    $("img[src=pacman.png]").click(function(){
        for(i = 0; i<12; i++){
            $(this).clone().insertAfter(this);}
    });


// 47. Add the class 'invisible' to each list item when they are hovered over.

    $("ul").mouseenter(function(){
        $(this).addClass("invisible");
    });

    $("#hoverHide").mouseleave(function(){
        $(this).removeClass("invisible");
    });

// 48. When either square is clicked, have them swap colors.

// 49. When you click the vertical button, the squares above should align vertically.

// 50. Unhide the message.

});
