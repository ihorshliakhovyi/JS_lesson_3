// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
"use strict";

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

console.log(user)

user.mood = 'Happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (let key of keys) {
    console.log(`${key}: ${user[key]}`)
}

