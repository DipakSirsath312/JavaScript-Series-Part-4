// Write a JS program to delete all occurrences of element 'num' in a given array.

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);    
    }  
}

console.log(arr);


// Output | Dry-run | arr[i] |   arr[i] == num    | arr.splice |
//   1    |i=0 true | arr[0] | arr[1] == num false|            |            
//   3    |i=1 true | arr[1] | arr[2] == num true |  2 remove  |
//   4    |i=2 true | arr[2] | arr[3] == num false|            |
//   5    |i=3 true | arr[3] | arr[4] == num false|            |
//   6    |i=4 true | arr[4] | arr[5] == num false|            |
//   3    |i=5 true | arr[5] | arr[6] == num false|            |
//        |i=6 true | arr[6] | arr[2] == num true |  2 remove  |
//        |i=7 true | arr[7] | arr[3] == num false|            |
//        |i=8 false|        |                    |            |