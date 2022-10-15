/* Задание на урок:

1) Вопросы пользователю про фильмы из предыдущей задачи оформить в виде функций

2) Создать функцию showMyDB, проверяющая свойство privat. Если находится в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на
вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается
в массив данных genres
*/

'use strict';

let numberOfFilms

function start(){
    numberOfFilms = +prompt("Сколько фильмов Вы уже смотрели?", '');
    while (numberOfFilms =="" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов Вы уже смотрели?", '');
    }

}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms(){
    for (let i=0; i<2; i++) {
        const a = prompt("Последний из просмотренных фильмов?", ''),
              b = prompt("На сколько оцените его?", '');
        if (a != '' && b != ''&& a != null && b != null && a.length < 50 && b.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('Успех!');
        }  else {
            console.log('Ошибка!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.console < 30){
        console.log("Вы классический зритель")
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман!')
    } else {
        console.log('Ошибка');
    }

}

detectPersonalLevel()

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres(){
    for (let i=1; i<4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();