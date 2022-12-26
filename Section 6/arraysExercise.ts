// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = []
// const ages: Array<number> = []

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [[]];


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
 name: string,
 price: number
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const productArray: Product[] = []
productArray.push({name: 'coffee mug', price: 11.50})
productArray.push({name: 'coffee mug', price: 11.50})

let sum: number = 0;
const getTotal = (products: Product[]): number => {
 for (let i of products){
  sum+=i.price
 }
 return sum
} 

console.log(getTotal(productArray));