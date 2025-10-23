

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

/*
Игра «Викторина»
Описание создайте простую викторину с несколькими вопросами и вариантами ответов.
Требования:
Сайт предлагает несколько вопросов и вариантов ответов.
Запрашивает у пользователя ответы на каждый вопрос.
Подсчитывает и выводит количество правильных ответов.
Последовательность создания игры Викторина:
Используйте предоставленный массив вопросов:
Массив 
quiz
 содержит три вопроса с вариантами ответов и правильными ответами.*/

/*Запросите у пользователя ответы. Используйте функцию 
prompt()
 для получения ответа пользователя на каждый вопрос.
Проверьте ответы и подсчитайте правильные:
Сравните ответ пользователя с правильным ответом и увеличьте счетчик правильных ответов, если 
ответ верный.
Выведите результат:
В конце игры выведите количество правильных ответов с помощью 
alert()
.*/


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
            userAnswer = parseInt(prompt(`${question.question}\n\n${optionsText}`));
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







/*
Задание 1
Преобразовать строку 'js' в верхний регистр.*/

let string = 'js';
console.log(string.toUpperCase());

 /*Задание 2
Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, 
содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр 
символов не влияет на результат.*/


function filterStringsOfLetter(array, letter) {
    return array.filter(str => 
        str.toLowerCase().startsWith(letter.toLowerCase())
    );  
}

console.log(filterStringsOfLetter(['облако', 'кокос', 'карамель'], 'к')); 


/*Задание 3
Округлить число 32.58884:
До меньшего целого.
До большего целого.
До ближайшего целого.*/

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

/*Задание 4
Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их 
в консоль.*/

console.log(Math.max(52, 53, 49, 77, 21, 32));

console.log(Math.min(52, 53, 49, 77, 21, 32));

/*Задание 5
Создать функцию, которая выводит в консоль случайное число от 1 до 10.*/

function rndm(params) {
   return Math.ceil(Math.random()*10);
}
console.log(rndm());

/*Задание 6
Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 
до этого числа. Длина массива должна быть в два раза меньше переданного числа.*/

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


/*Задание 7
Создать функцию, которая принимает два целых числа и возвращает случайное 
число в этом диапазоне.*/

function twoIntegers(b, c) {
    const casualNumb = []
    for (let index = 0; index < 1; index++) {
        const randomNum = Math.floor(Math.random() * (c - b + 1)) + b;
        casualNumb.push(randomNum)
    }

    return casualNumb
}
console.log(twoIntegers(12, 17));

/*Задание 8
Вывести в консоль текущую дату.*/

console.log(new Date);

/*Задание 9
Создать переменную 
currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.*/

let currentDate = new Date();
let futureDate = new Date(currentDate.getTime() + 73 * 24 * 60 * 60 * 1000);

console.log(futureDate.toLocaleDateString()); 
console.log(futureDate.toLocaleTimeString()); 

/*Задание 10
Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]*/

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














/*
const num = [1, 5, 4, 10, 0, 3]
for (let a = 0; a < num.length; a++){

   console.log(num[a]);
   if (num[a] === 10) break;
}
 




const numb = [1, 5, 4, 10, 0, 3]

const findIndex = numb.indexOf(4)
console.log(findIndex);






const number = [1, 3, 5, 10, 20]

let join = number.join(' ');
console.log(join);






const result = [];
for (let i = 0; i < 3; i++) {
    const row = [];

    for (let j = 0; j < 3; j++) {
        row.push(1);  
    }
        result.push(row);  
}
console.log(result);




const taskFive = [1, 1, 1];
taskFive.push(2,2,2);
console.log(taskFive);





const taskSix = [9, 8, 7, 'a', 6, 5];
taskSix.sort()
taskSix.pop()
console.log(taskSix);






let userAnswer = Number(prompt('Введите число'));
const taskSeven = [9, 8, 7, 6, 5];
let search = taskSeven.includes(userAnswer);
search ? alert('Угадал') : alert('Не угадал'); 




  


const taskEight = 'abcdef';
let revers = taskEight.split('').reverse().join('');
console.log(revers);






const taskNine = [[1, 2, 3],
                  [4, 5, 6]]
let flatNine = taskNine.flat()
console.log(flatNine);






const taskTen = [3, 6, 5, 1, 2, 8, 9, 4, 7];
console.log(taskTen);
for (let h = 0; h < taskTen.length - 1; h++) {
    const sum = taskTen[h] + taskTen[h + 1];
    console.log(sum);
}







function taskElleven(numbers) {
    const squares = []
    for (k = 0; k<numbers.length; k++){
        let square = numbers[k] * numbers[k];
        squares.push(square)
    }
    return squares
}
const outcome = taskElleven([2, 3, 5]);
console.log(outcome);






function taskTwelve(words) {
    const wordLength = []
    for (l=0; l<words.length; l++){
        wordLength.push(words[l].length);
    }
    return wordLength
}
const outcoms = taskTwelve(['вода','огонь','земля']);
console.log(outcoms);





function taskThirteen(integers) {
    const negativeNumbers = []
    for (m=0;m<integers.length;m++){
        if (integers[m]<0) {
              negativeNumbers.push(integers[m])
        }    
    }
    return negativeNumbers
}
const outcomes = taskThirteen([5, -3, -2, 6]);
console.log(outcomes);

 



const allNum = []
const evenNum = []
for (n=0;n<10;n++){
    allNum.push(Math.floor(Math.random()*11));
}
for (p=0;p<allNum.length;p++){
    if (allNum[p]%2===0) {
        evenNum.push(allNum[p])
    }
}
console.log(allNum);
console.log(evenNum);


   


const taskFifteen = []

for (r=0;r<6;r++){
    taskFifteen.push(Math.floor(Math.random()*10)+1);
}
let sum = 0;
for (let s = 0; s < taskFifteen.length; s++) {
    sum += taskFifteen[s];  
}

const arithmMean = sum / taskFifteen.length;

console.log(taskFifteen);
console.log(arithmMean);
*/