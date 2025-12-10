// Write a JS program to find the sum of digits in a number.

let number = 287152;
let sum = 0;

let copy = number;

while(copy > 0){
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
}
console.log(sum);

// output |   copy > 0     | copy % 10     | sum = 0 | copy / 10 |
//        | 287152 > 0 true|2 = 287152 % 10| sum = 2 |   28715   |
//        | 28715  > 0 true|5 = 28715 % 10 | sum = 7 |   2871    |
//        | 2871   > 0 true|1 = 2871 % 10  | sum = 8 |   287     |
//        | 287    > 0 true|7 = 287 % 10   | sum = 15|   28      |
//        | 28     > 0 true|8 = 28 % 10    | sum = 23|   2       |
//        | 2      > 0 true|2 = 2 % 10     | sum = 25|   0       |
//        | 0      > 0 false| --loop stop--|         |           |