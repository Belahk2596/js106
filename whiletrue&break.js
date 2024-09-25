console.log('hello world');
//while loop that breaks at 10;
let i = 0;
while(true) { 
    i++; //increments 'i' by 1 every time the loop runs until...
    if (i == 10) { //until the loop runs 10 times or when 'i' eventually becomes 10.
        break;
 //then when the loop runs 10 times or when 'i' becomes 10 then the break will stop iterating
    }
}
console.log(i); //should log 10 to the console.
console.log("line break"); //not important
// do while 
let h = 0;
do {
    h++; //increments 'h' by 1 until..
    if(h == 9) { //until 'h' has looped 9 times or when 'h' becomes 9
        break; //break will stop iterating pass 9. If we didnt break then the loop will continue indefinately
    }
} while (true); //condition 
console.log(h); //should log 9 to the console