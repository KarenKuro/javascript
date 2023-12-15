"use strict"

let countryCapitalObj = {
    Armenia : "Yerevan",
    Russia : "Moscow",
    USA : "Washington",
    Georgia : "Tbilisi",
    France : "Paris",
    GB : "London",
    Germany : "Berlin",
    Spain : "Madrid",
    Italy : "Rome",
    Japan : "Tokio",
    Kazakhstan : "Astana",
    China : "Beijing",
    Austria : "Vien",
    Egypt : "Cairo",
    Poland : "Warshaw",
    Greece : "Athens",
    Norway : "Oslo",
    Finland : "Helsinki",
    Sweden : "Stockholm",
    Lithuania : "Vilnus",
    Estonia : "Talin",
    Latvia : "Riga",
    Ukraine : "Kiev",
    Belarus : "Minsk",
    Chile : "Santiago",
} 


// Квиз до одной ошибки

function playUntilFirstMistake(obj) {
    let correctAnswers = 0;

    alert("Let's play!!!")

    for (let key in obj) {
        let answer = prompt("What is the capital of " + key + "?" );
        
        if (answer == null) {
            alert("Game over, chuvak!!!");
            break;
        }
        
        if (answer.toLowerCase() == obj[key].toLowerCase()){
            correctAnswers++;
        }
        else {
            alert("Your answer was wrong. Game over");
            break;
        }
    }
}


// Квиз с возможностью ошибиться 3 раза

function canBeWrong3Times(obj) {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    alert("Let's play!!! You can be wrong 3 times")

    for (let key in obj) {
        let answer = prompt("What is the capital of " + key + "?" );
        
        if (answer == null) {
            alert("Game over, chuvak!!!");
            break;
        }
        
        if (answer.toLowerCase() == obj[key].toLowerCase()){
            correctAnswers++;
        }
        else {
            wrongAnswers++;
            if (wrongAnswers > 3){
                alert ("Game over, chuvak!!!")
                break;       
            }
            alert(`You answered wrong ${wrongAnswers} times`);
        }
    }
}


// Квиз с ограничением по времени
function withTimeLimit(obj){

    let correctAnswers = 0;
    let executionTime = 0;

    alert("Let's play!!! You have 120 second !")

    for (let key in obj) {
        let startTime = performance.now();

        let answer = prompt("What is the capital of " + key + "?" );
        if (answer == null) {
            alert("Game over, chuvak!!!");
            break;
        }
        
        if (answer.toLowerCase() == obj[key].toLowerCase()){
            correctAnswers++;
        }

        let endTime = performance.now();
        let executionTimeOfOneQwestion = (endTime-startTime)/1000;
        executionTime += executionTimeOfOneQwestion;

        if (executionTime > 120) {
            alert("The time is over");
            break;
        }
    }
    alert(`TOTAL. Correct answers: ${correctAnswers} !!!`)
}



// playUntilFirstMistake(countryCapitalObj);
// canBeWrong3Times(countryCapitalObj);
// withTimeLimit(countryCapitalObj); 