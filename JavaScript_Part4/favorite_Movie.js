let favMovie = '96';
let guess = prompt("guess my favorite movie");

while((guess != favMovie) && (guess != 'quit')){
    guess = prompt("wrong guess. Please try again"); 
}