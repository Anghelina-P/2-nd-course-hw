

function guessNumGame(userNum) {

   let attemps = 0;

   let secretNum =  Math.floor(Math.random() * 100) + 1;
   
   do {

      userNum = Number(prompt('Попытайся угадать число от 1 до 100'));
      attemps++;

   if (userNum<secretNum) {
       alert('Твоё число меньше загаданного');
   }
   else if (userNum > secretNum) {
      alert('Твоё число больше загаданного');
   } 
   else {
       alert('Поздравляю, ты угадал');
   }
      
   } while (userNum!==secretNum);
}




function simpleArithmeticGame() {

    let round = 1;

    while (true) {

    const operation = ['+', '-', '/', '*'];

    const num1 = (Math.floor(Math.random()*50)+1);
    const num2 = (Math.floor(Math.random()*50)+1);
    let corrAnsw;
    const simpleArithmetic = operation[Math.floor(Math.random() * operation.length)];

    switch(simpleArithmetic) {
            case '+': corrAnsw = num1 + num2; break;
            case '-': corrAnsw = num1 - num2; break;
            case '*': corrAnsw = num1 * num2; break;
            case '/': corrAnsw = num1 / num2; break; 
        }

     const task = `${num1} ${simpleArithmetic} ${num2}`;

     let userAnsw =(prompt(`Решите задачу : ${task}`));
    
      if (userAnsw === null) {
            alert('пока');
            break;
        }

        userAnsw = Number(userAnsw);

    if (userAnsw===corrAnsw) {
        alert('верный ответ')
    } else {
        alert('ошибка')
    }
 } 
    round ++;
  
}



function reverseTextGame () {

     let userText;
    
    while ((userText = prompt('Введите текст')) !== null) {
    alert(userText.split('').reverse().join(''));
    }

}



       const quiz = [   
           {
               question: "Какой цвет неба?",
               options: ["1. Красный", "2. Синий", "3. Зеленый"],
               correctAnswer: 2  
           },
           {
               question: "Сколько дней в неделе?",
               options: ["1. Шесть", "2. Семь", "3. Восемь"],
               correctAnswer: 2
           },
           {
               question: "Сколько у человека пальцев на одной руке?",
               options: ["1. Четыре", "2. Пять", "3. Шесть"],
               correctAnswer: 2
           }
       ];

function quizGame() {
    let correctAnswers = 0;

    for (const question of quiz) {
        const optionsText = question.options.join('\n');
        
        let userAnswer;
        let validInput = false;

        do {
            const userInput = prompt(`${question.question}\n\n${optionsText}`);
            
            if (userInput === null) {
                alert("Вы вышли из игры");
                return;
            }
            
            userAnswer = parseInt(userInput);
            validInput = [1, 2, 3].includes(userAnswer);

            if (!validInput) { 
                alert("Пожалуйста, введите число 1, 2 или 3");
            }
           
        } while (!validInput); 
        
        if (userAnswer === question.correctAnswer) {
            correctAnswers++;
        }
    }

    alert(`Правильных ответов: ${correctAnswers}`);
}









let string = 'js';
console.log(string.toUpperCase());





function filterStringsOfLetter(array, letter) {
    return array.filter(str => 
        str.toLowerCase().startsWith(letter.toLowerCase())
    );  
}

console.log(filterStringsOfLetter(['облако', 'кокос', 'карамель'], 'к')); 





let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));







console.log(Math.max(52, 53, 49, 77, 21, 32));

console.log(Math.min(52, 53, 49, 77, 21, 32));






function rndm(params) {
   return Math.ceil(Math.random()*10);
}
console.log(rndm());






function acceptedNumber(a) {
    const arrayOfNumbers = []

    for (let i = 0; i < a/2; i++) {
       const rndmNum = Math.ceil(Math.random()*a);
       arrayOfNumbers.push(rndmNum)
    }

    return arrayOfNumbers
}
console.log(acceptedNumber(8));
console.log(acceptedNumber(12));






function twoIntegers(b, c) {
    const casualNumb = []
    for (let index = 0; index < 1; index++) {
        const randomNum = Math.floor(Math.random() * (c - b + 1)) + b;
        casualNumb.push(randomNum)
    }

    return casualNumb
}
console.log(twoIntegers(12, 17));






console.log(new Date);





let currentDate = new Date();
let futureDate = new Date(currentDate.getTime() + 73 * 24 * 60 * 60 * 1000);

console.log(futureDate.toLocaleDateString()); 
console.log(futureDate.toLocaleTimeString()); 




function acceptsDate(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
                    'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 
                       'четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}
Время: ${time}`;
}

 
console.log(acceptsDate(new Date(2025, 5, 17, 14, 30, 45))); 

console.log(acceptsDate(new Date())); 



/*Задание 1
С помощью метода массива 
sort отсортируйте массив people по возрастанию возраста и выведите результат в консоль.*/

const people1 = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
people1.sort((a, b) => a.age - b.age)
console.log(people1);

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
//console.log(people.sort(...));
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]  

/*Задание 2
Реализуйте функцию filter, которая должна работать аналогично методу массива 
filter. Возьмите за основу функцию map, которую мы реализовывали на уроке.Чтобы из функции map сделать 
filter, нужно, в зависимости от результата вызова ruleFunction, принимать решение о том, добавлять в результирующий 
массив очередной элемент или нет.*/

function isPositive(num) {
    return num > 0;
}

function isMale(human) {
    return human.gender === 'male';
}

function filter(arr, ruleFunction) {
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];


console.log(filter(people, isMale));  
console.log(filter([3, -4, 1, 9], isPositive));



/*Задание 3
Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. 
Последней строкой должно выводиться сообщение «30 секунд прошло». */

//let cancelTime;

let stopwatch = setInterval(() => console.log(new Date), 3000)

setTimeout(() => { clearInterval(stopwatch); console.log('30 секунд прошло'); }, 30000);
/*Задание 4
Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
Допишите функцию delayForSecond
 так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   callback();
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})*/ 

/*Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(sayHi('Глеб')) */

