// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
var stuff;
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors;
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (person) {
    if (typeof person === 'string') {
        console.log("Hello ".concat(person));
        return;
    }
    for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
        var i = person_1[_i];
        console.log("Hello ".concat(i));
    }
};
greet(['Absar', 'Janant', 'Sazim']);
