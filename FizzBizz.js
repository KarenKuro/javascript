"use strict";

let n = +prompt("Введите начальное число: ");
let m = +prompt("Введите конечное число: ");

function fizzBizz(start, end){
    if (end < start){
        return console.log("Конечное число должно быть не меньше чем начальное!!!!") ;
    } 
    for (let i = start; i < end +1; i++ ){
        if (i % 15 == 0) {
            console.log("FizzBizz");
        } else if (i % 5 == 0){
            console.log("Buzz");
        } else if (i % 3 == 0){
            console.log("Fizz");
        } else console.log(i);
    }
}

fizzBizz(n,m);

