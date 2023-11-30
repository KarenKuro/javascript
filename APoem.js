"use strict";  

let poem = prompt("Введите стихотворение: ");

let sumNum = 0;
let countNum = 0;
let lowercaseLetters = 0;
let vowelLetters = 0;                 // гласные
let consonantLetters = 0;             // согласные
let notLettersAndnotNum = 0;                      

function theCounter(str){
    for (let i = 0; i < str.length; i++){
        if (!isNaN(Number(str[i]))) {     // почему не работает (Number(str[i]) != NaN) ?????????? 
            sumNum += Number(str[i]);
            countNum += 1;
        }

        if (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123  ){
            lowercaseLetters += 1;
        }

        let vowe = ['a', 'e', 'i', 'o', 'u','y' ]
        
        if (vowe.includes(str[i].toLowerCase())) {
            vowelLetters += 1;
        }

        if (!vowe.includes(str[i].toLowerCase()) && str[i].toLowerCase().charCodeAt(0) > 96 
        && str[i].toLowerCase().charCodeAt(0) < 123)  {
            consonantLetters += 1;
        }
        notLettersAndnotNum = str.length - (countNum + vowelLetters + consonantLetters);
    }
    return sumNum, lowercaseLetters, vowelLetters, consonantLetters, notLettersAndnotNum;
} 

theCounter(poem);

console.log(poem)
console.log(`Сумма цифр равна: ${sumNum};
Количество прописных букв:  ${lowercaseLetters};
Количество гласных: ${vowelLetters};
Количество согласных: ${consonantLetters};
Количество не букв и не цифр: ${notLettersAndnotNum}`)


