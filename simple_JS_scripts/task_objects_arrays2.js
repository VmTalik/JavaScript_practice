/*Задача:
Есть список учеников, которые хотят поиграть в игру:
const students = ['Victor', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Victor', 'Sam', 'Sandra' ],
  'Студенты без команды: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Victor', 'Sam', 'Sandra' ],
  'Студенты без команды: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Victor', 'Sam', 'Sandra' ],
  'Студенты без команды: Takesi, Somebody'
]
Меняется содержимое строки. Все ученики без команды попадают туда.*/

const students = ['Victor', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam']

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], 
    b = [], 
    c = [], 
    d = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            d.push(arr[i]);
        }
    }
    return [a,b,c, `Студенты без команды: ${d.length === 0 ? '-' : d.join(', ')}`]
}

console.log(sortStudentsByGroups(students));