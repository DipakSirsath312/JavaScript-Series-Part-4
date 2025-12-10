// while loop.
// syntax

// while(condition){
    //do something
//}

//Example
let i = 1;          // |output|Dry-Run
while(i <= 5){      // |   1  |i = 1 true     
    console.log(i); // |   2  |i = 2 true
    i++             // |   3  |i = 3 true 
}                   // |   4  |i = 4 true
                    // |   5  |i = 5 true
                    // |      |i = 6 false

console.log("even nummbers:-");
let j = 0;
while(j <= 20){
    console.log(j);
    j = j + 2;
}

console.log("odd nummbers:-");
let k = 1;
while(k <= 20){
    console.log(k);
    k = k+2;
} 