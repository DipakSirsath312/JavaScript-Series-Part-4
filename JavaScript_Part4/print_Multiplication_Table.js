// Print the multiplication table for 5.

// for(let nums = 5; nums <= 50; nums+=5){
//     console.log(nums);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i * 5);
// }   

let n = prompt("Enter a number for table");
n = parseInt(n); 
for(let i=n; i<=n*10 ; i=i+n){  // |output|Dry-Run
    console.log(i);             // |   5  |i = 5 true
}                               // |   10 |i = 10 true 
                                // |   15 |i = 15 true
                                // |   20 |i = 20 true
                                // |   25 |i = 25 true
                                // |   30 |i = 30 true
                                // |   35 |i = 35 true
                                // |   40 |i = 40 true
                                // |   45 |i = 45 true
                                // |   50 |i = 50 true
                                // |      |i = 55 false