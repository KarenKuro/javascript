"use strict";

let words = prompt("Введите слова: ")
let arrWords = words.split(' ');

for (let i = 0; i < arrWords.length; i++) {
    let arrLettersInWord = arrWords[i].split('');
    arrLettersInWord.reverse();
    arrWords[i] = arrLettersInWord.join('');
}


let reversedWords = arrWords.join(' ')

console.log(words);
console.log(reversedWords);