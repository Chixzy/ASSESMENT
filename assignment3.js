let num = 3;
let multiples = 0;
let sum = 0
let finalSum = 0
do {
    if (multiples % num == 0){
        sum = multiples;
        finalSum = finalSum + sum;
    }multiples++
} while (multiples < 101);
console.log(finalSum);

let num1 = 5;
let multiples1 = 0;
let sum1 = 0;
let finalSum1 = 0;
do {
    if (multiples1 % num1 == 0){
        sum1 = multiples1;
        finalSum1 = finalSum1 + sum1;
    }multiples1++
} while (multiples1 < 101);
console.log(finalSum1);
