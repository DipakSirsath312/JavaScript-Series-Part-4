// Find the largest number in an array with only positive numbers.
let arr = [1, 5, 10, 25, 15, 20,];
let largest = 0;

for(let i = 0; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i]
    }
}

console.log(largest);

let num = [10, 5, 20, 8, 25, 2];
let max = num[0];   // maan liya pehla number sabse bada hai

for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i];
    }
}

console.log("Largest number is:", max);

// output | Dry-run | num[i] | num[i] > max | max[0] = 10
//   25   | i=1 true| num[5] | 5 > 10 false | 
//        | i=2 true| num[20]| 20 > 10 true | 20
//        | i=3 true| num[8] | 8 > 20 fasle |
//        | i=4 true| num[25]| 25 > 20 true | 25
//        | i=5 true| num[2] | 2 > 25 false |
//        | i=6 false|       |              |