let num1 = +prompt("Введите первое число: ");
let num2 = +prompt("Введите второе число: ");
let num3

while (num2 > 0) {
    num3 = num1 % num2;
    num1 = num2;
    num2 = num3;
}




console.log(`Наибольший общий делитель равен ${num1} !!!!!`)