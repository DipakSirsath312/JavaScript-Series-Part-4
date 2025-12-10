// Loops with Arrays.
// Nested Loops with Nested Arrays.
let heros = [
    ['ironman', 'spiderman', 'Thor'],
    ['batman', 'flash', 'superman']
];

for(let i = 0; i < heros.length; i++){
    console.log(`${heros[i]}`);
    for(let j = 0; j < heros[i].length; j++){
        console.log(`${heros[i][j]}`);
    }
}

// | Dry-Run | Output 
// |i=0 true |ironman,spiderman,Thor
// |j=0 true |ironman
// |j=1 true |spiderman
// |j=2 true |Thor
// |j=3 false|
// |i=1 true |batman,flash,superman
// |j=0 true |batman
// |j=1 true |flash
// |j=2 true |superman
// |j=3 false|
// |i=2 false|

let student = [
    ['yogesh', 80], ['ishwar', 79],
    ['chetan', 85], ['shubham', 90]
];

for(let i=0; i < student.length; i++){
    for(let j=0; j < student[i].length; j++){
        console.log(student[i][j]);
    }
}

// | Dry-Run | Output |
// |i=0 true |        |
// |j=0 true | yogesh |
// |j=1 true |   80   |
// |j=2 false|        |
// |         |        |
// |i=1 true |        |
// |j=0 true | ishwar |
// |j=1 true |   79   |
// |j=2 false|        |
// |         |        |
// |i=2 true |        |
// |j=0 true | chetan |
// |j=1 true |   85   |
// |j=2 false|        |
// |         |        |
// |i=3 true |        |
// |j=0 true | shubham|
// |j=1 true |   90   |
// |j=2 false|        |
// |         |        |
// |i=4 false|        |