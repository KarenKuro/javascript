let myObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function fromRomeToArabic (str) {
    let arr = str.split('');
    let num = 0;
    for (let i = 0; i < arr.length-1; i++){
        if (myObj[arr[i]] >= myObj[arr[i+1]]) {
            num += myObj[arr[i]];
        } else {
            num -= myObj[arr[i]];
        }
    }
    num += myObj[arr.at(-1)];
    return num;
}

console.log(fromRomeToArabic('MCDLXIII'));
console.log(fromRomeToArabic('MCMLXXII'));
console.log(fromRomeToArabic('CCXXII'));




