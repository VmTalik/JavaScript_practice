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
    let s = '';

    arr.length === 0 ? s = 'Семья пуста' : s = 'Семья состоит из: ';

    arr.forEach(member => {
        s += `${member} `
    });

    return s;
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

/*
3) Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"*/

const someString = 'This is some strange string';

function reverse(s) {
    if (typeof(s) !== 'string') {
        return "Ошибка!";
    }
    return s.split('').reverse().join('');
}

console.log(reverse(someString))



/*4) Есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

Нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB
Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, 
потом additionalCurrencies по порядку */


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let s = '';
    arr.length === 0 ? s = 'Доступных валют нет' : s = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            s += `${curr}\n`;
        }
    });

    /* 2-й способ
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        s += `${arr[i]}\n`;
    }*/
    return s;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))