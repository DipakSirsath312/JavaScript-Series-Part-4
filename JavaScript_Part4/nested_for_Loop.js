// Nested for loop.
for(let i=1; i<=3 ; i++){       // |output|Dry-Run
    for(let j=1; j<=3; j++){    // |   1  |i = 1 true Outer-Loop
        console.log(j);         // |   2  |
    }                           // |   3  |j = 1 true
}                               // |   1  |j = 2 true
                                // |   2  |j = 3 true 
                                // |   3  |j = 4 false
                                // |   1  |
                                // |   2  |i = 2 true Outer-Loop
                                // |   3  |
                                // |      |j = 1 true
                                // |      |j = 2 true
                                // |      |j = 3 true
                                // |      |j = 4 false
                                // |      |
                                // |      |i = 3 true Outer-Loop
                                // |      |
                                // |      |j = 1 true
                                // |      |j = 2 true
                                // |      |j = 3 true
                                // |      |j = 4 false
                                // |      |
                                // |      |i = 4 false Outer-Loop
