// Write a Javascript program to find the no of digits in a number.

let number = 287152;
let count = 0;

let copy = number;

while(copy > 0){
    count++;
    copy = Math.floor(copy / 10);
}

console.log(count); //6

// output |      dry-run    | count | copy value | copy / 10 |
//   6    | 287152 > 0 true |count=1|   28715    |  28715.2  |
//        | 28715  > 0 true |count=2|   2871     |  2871.5   |
//        | 2871   > 0 true |count=3|   287      |  287.1    |
//        | 287    > 0 true |count=4|   28       |  28.7     |
//        | 28     > 0 true |count=5|   2        |  2.8      |
//        | 2      > 0 true |count=6|   0        |  0.2      |
//        | 0      > 0 false|       |            |           |