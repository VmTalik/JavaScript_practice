/*
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

showFamily(family)  => 'Семья состоит из: Anton Victor Vitalii Olga'

Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

Пример:

standardizeStrings(favoriteCities)  выведет в консоль
 penza
 rome
 milan
 tokio

Это довольно частая задача в реальности, так как от пользователя нам могут прийти ответы в различных форматах. 
В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.*/



const family = ['Anton', 'Victor', 'Vitalii', 'Olga'];

function showFamily(arr) {
    s = ''
    for (let i = 0; i < family.length; i++){
        s += arr[i] + ' '
    }
    if (arr.length ==0){
        return 'Семья пуста'}
    else {
        return 'Семья состоит из: '+ s
         }
    }

    /* 2-й способ решения 

    function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });

    return str;
}
*/

console.log(showFamily(family))



const favoriteCities = ['Penza', 'ROME', 'miLan', 'Tokio'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}
standardizeStrings(favoriteCities)