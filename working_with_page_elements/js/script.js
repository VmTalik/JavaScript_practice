"use strict"

// Получаем элементы со страницы
const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      heart = wrapper.querySelector('.heart');

/*
hearts.forEach(element => {
    console.log(element);
});
*/

// Получение сведений об елементе (элемент в качестве объекта), его свойства, методы и т.д. 
//console.dir(box);

/*
Изменяем свойства стилей элемента первым способом

box.style.backgroundColor = 'green';
box.style.height = '350px';
box.style.width = '250px';
buttons[3].style.borderRadius = '50%';
*/

// Также можно изменить свойства стилей элемента вторым способом через css
box.style.cssText = 'background-color: green; height: 350px; width: 250px';
buttons[3].style.cssText = 'border-radius: 50%';

// Перебираем элементы и изменяем свойства стилей у каждого
hearts.forEach(element => {
    element.style.backgroundColor = 'yellow';
});


// Создаем елемент (пока он только в js скрипте)
const div = document.createElement('div');

//Добавим css класс к элементу
div.classList.add('black');

//Добавим элемент на страницу в конец body
//document.body.append(div);

//Добавим элемент на страницу в конец wrapper
//wrapper.append(div);

//Добавим элемент на страницу в начало wrapper
//wrapper.prepend(div);

//Добавим элемент на страницу перед вторым heart
hearts[1].before(div);

//Добавим элемент на страницу после второго heart
hearts[1].after(div);


/* Удаление элементов */
//box.remove();

/* Замена элементов */
// Заменяем элемент коробки на элемент второго круга
box.replaceWith(circles[1]);


//Добавление html или текста к элементу 
div.innerHTML = '<h3>Wonderful life</h3>';

//Добавление текста к элементу
//div.innerText = 'Who are you?';

//Вставка html кода после элемента
div.insertAdjacentHTML('afterend', 'hello');