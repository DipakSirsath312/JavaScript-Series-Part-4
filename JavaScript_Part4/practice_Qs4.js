// Print the factorial of number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]

let n = 5;
let factorial = 1;

for(let i = 1; i <= n;  i++){
    fact = factorial *= i;
}

console.log(`factorial of ${n} is ${fact}`);

// Output | Dry-run
//   1    | i = 1
//   2    | i = 2
//   6    | i = 3
//   24   | i = 4
//  120   | i = 5
//        | i = 6 false