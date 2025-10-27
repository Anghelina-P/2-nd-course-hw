

function guessNumGame() {

   let attemps = 0;

   let userNum;

   let secretNum =  Math.floor(Math.random() * 100) + 1;

   do {

      userNum = prompt('Попытайся угадать число от 1 до 100');
      
      if (userNum === null) {
         alert('пока');
         return;
      }
      
      userNum = Number(userNum);
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




const userRightSigns = ['камень','ножницы','бумага']

function RockPaperScissorsGame(params) {
    const rulesOfGame = {
        'камень':'ножницы',
        'ножницы':'бумага',
        'бумага':'камень'
    }

    const randomSign = userRightSigns[Math.floor(Math.random() * userRightSigns.length)];

    let userSign;
    do {
        userSign = prompt('Камень, ножницы, бумага?');

        if (userSign === null) {
            alert('пока');
            return
        }
    
        userSign = userSign.toLowerCase();

    } while (userSign && !userRightSigns.includes(userSign));

    if (userSign === randomSign) {
        alert('ничья')
    }
    else if (rulesOfGame[userSign] === randomSign) {
        alert('победа')
    } 
    else {
        alert('поражение')
    }
    
    
}







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
 так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.*/ 

function delayForSecond(callback) {
   setTimeout(() => {
   callback();
   }, 1000);
  
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

/*Задание 5
Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
*/
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
delayForSecond(() => sayHi('Глеб'))

