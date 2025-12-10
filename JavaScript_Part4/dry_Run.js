// for loop.
// Dry Run

//          (1)      (2)   (4)    |output|Dry-Run|
//           |        |     |     |   1  |i = 1 true
//           |        |     |     |   2  |i = 2 true
for(let i = 1; i <= 5; i++){    //|   3  |i = 3 true
                                //|   4  |i = 4 true 
     console.log(i);            //|   5  |i = 5 true
//               |                |      |i = 6 false
//               |                     
//              (3)             
}                              

// Backword Print
for(let i = 10; i >= 1; i--){     //|output|Dry-Run|
     console.log(i);              //|  10  |i = 10 true
}                                 //|  9   |i = 9 true
//                                  |  8   |i = 8 true
//                                  |  7   |i = 7 true
//                                  |  6   |i = 6 true
//                                  |  5   |i = 5 true
//                                  |  4   |i = 4 true
//                                  |  3   |i = 3 true
//                                  |  2   |i = 2 true
//                                  |  1   |i = 1 true
//                                  |      |i = 0 false