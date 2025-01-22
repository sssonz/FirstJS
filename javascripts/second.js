document.addEventListener("DOMContentLoaded", function(){

    // = означает присваивание 
    // != означает не 
    // == означает не строгое равенство 
    // === означает строгое равенство (важны типы данных )

    console.log( 2 > 1) // true
    console.log( "2" > 1) // true
    console.log( 2 != 1 ) // true
    console.log( 2 == 1) // false
    console.log( "2" == 2) // true
    console.log( "2" === 2) // false
    console.log("01" == 1 ) // true


    // true = 1, false = 0 (при не строгом равенстве)

    console.log( true == 1 ) // true
    console.log( true === 1 ) // false
    console.log( false == 0 ) // true
    console.log( false == '' ) // true
    console.log( false === 0 ) // false

    let a = 0;
    console.log( Boolean(a) ); // false

    let b = "0";
    console.log( Boolean(b) ); // true

    console.log(a == b); // true
    console.log(a === b); // false

    console.log( null === undefined ); // false
    console.log( null == undefined ); // true

    let k  
    console.log(k)

    console.log( null > 0 ); // false
    console.log( null == 0 ); // false
    console.log( null >= 0 ); // true

    console.log( undefined > 0 ); // false
    console.log( undefined < 0 ); // false
    console.log( undefined == 0 ); // false
    console.log( undefined >= 0 ); // false


    let year_1 = prompt("В каком году была опубликована спецификация ECMAScript-2015?', ")

    if (year_1 == 2015){
        console.log(" все верно ")
    }
    else {
        console.log(" ой не верно  ")
    }

    let yes = prompt(" какого ты года ?", )

    if (yes <= 2004 ){
        console.log(" а ты взрослый!  ")
    }
    else if (yes >= 2006){
        console.log(" а ты наверное еще в школе   ")
    }
    else {
        console.log(" вау ты студент   ")
    }


    let age = prompt('Возраст?', 18);

    if (age < 3) {
        message = 'Здравствуй, малыш!';
    } 
    else if (age < 18) {
        message = 'Привет!';
    } 
    else if (age < 100) {
        message = 'Здравствуйте!';
    } 
    else {
        message = 'Какой необычный возраст!';
    }

    console.log(message)

    // || (ИЛИ), && (И) и ! (НЕ)
    // Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше
    // (a && b) || (c && d)

    console.log( true  && true ); // true
    console.log( false && true ); // false
    console.log( true  && false ); // false
    console.log( false && false ); // false

    console.log( true  || true ); // true
    console.log( false || true ); // true
    console.log( true  || false ); // true
    console.log( false || false ); // false


    let person = {
        name: "Hanna",
        age: 20,
        hobby: "tennis",
        study: "university"
    }
    delete (person.hobby)
    console.log(person.hobby)
    console.log(person.age)


    // Задачи
    // 1
    let age_1 = prompt("Введите свой возраст: ")

    if (age_1 < 65){
        age_message =" Вам ещё рано на пенсию. Гуляйте! "
    }
    else if (age_1 >=  65){
        age_message =" Поздравляем с пенсионным возрастом! "
    }
    console.log(age_message)

    // 3
    let num = prompt(" Введите число: ")

    if (num%2===0){
        num_message =" Число чётное "
    }
    else{
        num_message =" Число не чётное "
    }
    console.log(num_message)

    // 6

    let year = prompt(" Введите год: ");

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        year_message =" Год високосный "
    } else {
        year_message =" Год не високосный "
    }
    console.log(year_message)
});
