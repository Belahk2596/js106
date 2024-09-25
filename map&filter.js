console.log("map method");//not important

const numbers = [1,2,3,4];//initialize array
//map method
let newNumbers = numbers.map((x) => x * 2); //using the map() method on numbers array
console.log(newNumbers); //logging result of newNumbers
console.log("filter method") //not important
//filter method
function checkNumber(number) { //defines new function 
    return number > 2; //if element is greater than 2 it will return
}
const filterArray = numbers.filter(checkNumber); //filterArray to STORE the result of using the filter() method on the numbers array.
//the filter method PASSES the checkNumber function to iterate through the array.
console.log(filterArray); //logs the newly filtered array to the console
console.log('filter and map')
//filter and map method
const combo = numbers.filter((element) => element % 2 == 0).map((element) => element * element);
console.log(combo);
/*The last part uses both the filter() and map() methods together in ONE statement. If read from left to right:
the 'const combo' STORES the result of the the map() method being used on the filter() method being 
used on the numbers array. And then the whatever the answer of that is, will be logged to the console on line 18.
*/
