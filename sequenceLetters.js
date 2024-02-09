"use strict";
let arr1 = ['apple', 'sos', 'good'];
let arr2 = ['floor', 'flowers', 'fly'];

function sequenceLetters(arr) {
    let answer = '';
    let shortestWord = arr[0];
    for (let word of arr) {
        if (word.length < shortestWord.length){
            shortestWord = word;
        }
    }
    for (let i = 0; i < shortestWord.length; i++){
        let mySet = new Set();
        for (let j = 0; j < arr.length; j++){
            mySet.add(arr[j][i]);
        }          
        if (mySet.size == 1){
            answer += shortestWord[i];
        } else break;
    }       
    return answer;
};    

console.log(sequenceLetters(arr1));
console.log(sequenceLetters(arr2));

