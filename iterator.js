console.log("hello world")
const arrayHeaven = [1,2,3,4,5,6,7,8,9,10];
//forEach 
const forEachArray = (x) => { //defined an arrow function taking 'x' as a PARAMETER. can be named anything
    console.log(x)
}
arrayHeaven.forEach(forEachArray); //using the forEach() method on the array PASSING the 'forEachArray' arrow function to the method.
//so that means we pass the arrow function we defined on lines 4 and 5 inside the parentheses of the forEach method
console.log('line-break'); //not important
//for of 
for (let num of arrayHeaven) { //standard for loop to iterate over the array.
    console.log(num * 10); // the num is like a placeholder that will be replaced with each element of the array each time the loop runs.
} //the loop should run 10 times, why? because arrayHeaven has 10 elements(values/datatype)
console.log('line-break'); //not important
//for loop 
for(let i = 0; i < arrayHeaven.length; i++) { //let i = 0 is where to start you index of the array. i < arrayHeaven.length is the condition of the loop. And the i++ the incremneter is called the advancement.
    console.log(i * 2); //everytime the loop runs 'i' gets replaced with its index element and multiplied by 2.
}
console.log('line-break'); //not important
//while loop
let c = 0; //initialize counter
while(c < arrayHeaven.length) { //condition of the loop
    console.log(c * 3) //every time the loop runs 'c' gets multiplied by 3
    c++; //c is incremented by 1 to move to the next element of the array
} //should run 10 times because there are 10 elements in the array
console.log('line-break');
//do while 
    let g = 0; //initialize a counter for the loop/the starting point in the array index
    do { //this first part of the do while from lines 29-31 will run before the condition on line 32
        console.log(g * 4); //every time the loop runs 'g' is multiplied by 4
        g++; //g is incremented by 1 to move to the next element in the array index
    } while (g < arrayHeaven.length); //condition. the do while iteration will run at least once even if the condition is FALSE
