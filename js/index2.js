// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.
"use strict";
const countProps = function(obj)
// function countProps(obj) 
{
    let keys = Object.keys(obj);
    return keys.length;
    }












console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3