// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// const ages: Array<number> = []
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [[]];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var productArray = [];
productArray.push({ name: 'coffee mug', price: 11.50 });
productArray.push({ name: 'coffee mug', price: 11.50 });
var sum = 0;
var getTotal = function (products) {
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var i = products_1[_i];
        sum += i.price;
    }
    return sum;
};
console.log(getTotal(productArray));
