/*Задача:
Создать функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Выполнить задачу без применения рекурсии.

Пример:
fib(6) => ''0 1 1 2 3 5"
fib('7') => ''"
fib(1) => "0"
fib(4) => ''0 1 1 2"
fib(0) => ''"
*/

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(6))
