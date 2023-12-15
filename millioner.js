"use strict"

let arrQuestions = [
    "What is the capital of Armenia?Yerevan,Moscow,Washington,Tbilisi",
    "What is the capital of Russia?Moscow,Yerevan,Washington,Tbilisi",
    "What is the capital of USA?Washington,Yerevan,Moscow,Tbilisi",
    "What is the capital of Georgia?Tbilisi,Yerevan,Moscow,Washington",
    "What is the capital of France?Paris,London,Berlin,Madrid",
    "What is the capital of GB?London,Berlin,Madrid,Paris",
    "What is the capital of Germany?Berlin,London,Madrid,Paris",
    "What is the capital of Spain?Madrid,Paris,London,Berlin",
    "What is the capital of Italy?Rome,Tokio,Astana,Beijing",
    "What is the capital of Japan?Tokio,Rome,Astana,Beijing",
    "What is the capital of Kazakhstan?Astana,Tokio,Rome,Beijing",
    "What is the capital of China?Beijing,Astana,Tokio,Rome",
    "What is the capital of Austria?Vien,Cairo,Warshaw,Athens",
    "What is the capital of Egypt?Cairo,Warshaw,Athens,Vien",
    "What is the capital of Poland?Warshaw,Cairo,Athens,Vien",
    "What is the capital of Greece?Athens,Warshaw,Cairo,Vien",
    "What is the capital of Norway?Oslo,Vilnus,Helsinki,Stockholm",
    "What is the capital of Finland?Helsinki,Oslo,Vilnus,Stockholm",
    "What is the capital of Sweden?Stockholm,Helsinki,Oslo,Vilnus",
    "What is the capital of Lithuania?Vilnus,Stockholm,Helsinki,Oslo",
    "What is the capital of Estonia?Talin,Riga,Kiev,Minsk",
    "What is the capital of Latvia?Riga,Talin,Kiev,Minsk",
    "What is the capital of Ukraine?Kiev,Riga,Talin,Minsk",
    "What is the capital of Belarus?Minsk,Kiev,Riga,Talin",
]

// Выбираем рандомные 10 вопросов

function chouseRandomQwest (arr, quantityOfQwest) {
    let finalyArr = [];
    let arrRandomIndex = [];

    for (let i = 0; i < quantityOfQwest; i++ ){
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (arrRandomIndex.includes(randomIndex)){
            i--;
        }
        else {
            arrRandomIndex.push(randomIndex)
        }
    }

    for (let i = 0; i < arrRandomIndex.length; i++){
        finalyArr.push(arr[arrRandomIndex[i]]);
    }

    return finalyArr
}


// Разделяем вопрос и варианты ответов

function sepQwestAndAnswers () {
    let myArr = chouseRandomQwest(arrQuestions, 10);
    let finalyObj = {};

    for (let i = 0; i < myArr.length; i++){
        let splitedQwest = myArr[i].split('?');
        finalyObj[splitedQwest[0] + '?'] = splitedQwest[1].split(',');
    }
return finalyObj
}


// Сам процесс игры

function playTheGame () {
    let qwestAndAnsw = sepQwestAndAnswers();
    let rightAnswers = 0;

    for (let key in qwestAndAnsw) {
        correctAnswer = qwestAndAnsw[key][0];
        let variantOfAnswer = qwestAndAnsw[key];
        let arrRandomIndex = [];
        let arrRandomAnswers = [];
        
        // Создаем массив с рандомными числами, которые станут индексами массива с вариантами ответов 
        
        for (let i = 0; i < variantOfAnswer.length; i++ ){             
            let randomIndex = Math.floor( Math.random() * variantOfAnswer.length);
            
            if (arrRandomIndex.includes(randomIndex)){
                i--;
            }
            else {
                arrRandomIndex.push(randomIndex)
            }
        }
        
        // В пустой массив добавляем варианты ответов, выбирая их по рандомному индексу (arrRandomIndex)
        
         for (let j = 0; j < arrRandomIndex.length; j++ ){
            arrRandomAnswers.push(variantOfAnswer[arrRandomIndex[j]]);
        }

        // Задаем вопрос, сравниваем ответ с правильным ответом и считаем их кол-во

        answer = prompt(`${key} ${arrRandomAnswers.join(", ")}`);
        if (answer == null) {
            break;
        }
        else{
            if (answer.toLowerCase() == correctAnswer.toLowerCase() ) {
                rightAnswers++;
            }
        } 
    }

    alert(`У вас ${rightAnswers} правильных ответов!`)
}


playTheGame()