/*
Разработчик хотел бы написать часть функционала, но ему не хватает некоторых навыков. Помогите ему сделать часть заданий.

Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:
showExperience(personalPlanPeter) => '1 month'
Желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект с данными о прогрессе в изучении языков 
программирования и возвращать строку в нужном виде.

Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 25% Язык python изучен на 90%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 32 и я владею языками: RU ENG' */



const personalPlanAnton = {
    name: "Anton",
    age: "34",
    skills: {
        languages: ['ru', 'eng','bg'],
        programmingLangs: {
            js: '25%',
            python: '90%'
        },
        exp: '26 month',
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanAnton.showAgeAndLangs(personalPlanAnton));


function showExperience(plan) {
    const {exp} = plan.skills ; // деструктуризация
    return exp;
}

console.log(showExperience(personalPlanAnton));



function showProgrammingLangs(plan){
    let str = '';
    const {programmingLangs} = plan.skills; // деструктуризация
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanAnton));

