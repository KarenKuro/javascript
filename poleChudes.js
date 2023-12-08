"use strict";
let qwestion = alert("What is the capital of France? ");
let answer = ["p", "a", "r", "i", "s"]
let board = [" _ ", " _ ", " _ ", " _ ", " _ "]

while (board.includes(' _ ')){
    alert(board)
    let letter = prompt("Enter the letter: ")
    if (letter == null){
        break;
    }
    letter = letter.toLowerCase();


    if ( answer.includes(letter)){
        let index = answer.indexOf(letter);
        board.splice(index, 1, letter);    
    }
}  

if (!board.includes(' _ ')){
    let finalAnswer = board.join('')
    finalAnswer = finalAnswer[0].toUpperCase() + finalAnswer.slice(1)
    alert(`Thats right, capital of France is ${finalAnswer}`)
}
else {
    alert("You loose!")
}



