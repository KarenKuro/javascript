"use strict";

let words = prompt("Введите слова: ")
let arrWords = words.split(' ');

for (let i = 0; i < arrWords.length-1; i++){
    for (let k = i+1; k < arrWords.length; k++){

    if (arrWords[i].length > arrWords[k].length) {
        let temp = arrWords[i];
        arrWords[i] = arrWords[k]; 
        arrWords[k] = temp; 
    }
  }
}

let sortByLenWords = arrWords.join(' ')

console.log(words);
console.log(arrWords);
console.log(sortByLenWords)
