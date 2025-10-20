

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

/*
Задание 1
Преобразовать строку 'js' в верхний регистр.*/

let string = 'js';
console.log(string.toUpperCase());

 /*Задание 2
Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, 
содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр 
символов не влияет на результат.*/

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
    let arrayLength = Math.ceil(a/2);

    for (let i = 0; i < array.Length; i++) {
       const rndmNum = Math.ceil(Math.random()*a);
       rndmNum.push(arrayOfNumbers)
    }

    return rndmNum
}
console.log(acceptedNumber(8));



/*Задание 7
Создать функцию, которая принимает два целых числа и возвращает случайное 
число в этом диапазоне.*/

/*Задание 8
Вывести в консоль текущую дату.*/

/*Задание 9
Создать переменную 
currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.*/

/*Задание 10
Написать функцию, которая принимает дату и возвращает ее в формате:
Дата: [число] [месяц на русском] [год] — это [день недели на русском].
Время: [часы]:[минуты]:[секунды]*/


















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