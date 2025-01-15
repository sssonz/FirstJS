document.addEventListener("DOMContentLoaded", function(){

// 1
const str = "abce";
console.log(str[0]);
console.log(str[1]);
console.log(str[3]);

// 2
let num1 = parseInt(prompt("Введите первое число", "Напишите"));
let num2 = parseInt(prompt("Введите второе число", "Напишите"));
console.log(num1 > 0 || num2 > 0);

// 3
let age = parseInt(prompt("Введите свой возраст", "Напишите"));
if (age >= 18){
  console.log("Вы совершеннолетний!");
} else {
  console.log("Вы несовершеннолетний!");
}

// От себя
let userAnswer = prompt("Ваш пол: женский? (да/нет)");
if (userAnswer.toLowerCase() === "да") {
    let age = prompt("Сколько вам лет?", "Напишите");
    let ageNe = 78-age;
    console.log(`Вы умрете в среднем через ${ageNe} лет!`);
} else if (userAnswer === "нет") {
    let age = prompt("Сколько вам лет?", "Напишите");
    let ageNe = 68-age;
    console.log(`Вы умрете в среднем через ${ageNe} лет!`);
} else {
    console.log("Вы не узнаете когда умрете(");
}     
});