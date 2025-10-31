

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

/*Генератор случайных цветов
Описание: При каждом клике на кнопку фон страницы меняется на случайный цвет.

Требования: Создайте кнопку, которая при нажатии меняет цвет фона (или другого элемента) на случайный.

Смотри, твоя задача — сделать функцию, которая будет генерить рандомные символы, из которых получиться 
код цвета: # + 6 символов. Например, #e1d4c8. То есть тебе нужно создать строку и 6 раз к ней рандомно
 добавить символы через Math.random(). И выбирать символ из массива подходящих символов. Тут важно помнить, 
 что символы в цвет идут не все, а от 0 до F. То есть цвета 0r3l8x не существует) Это же касается символов -, _ и тд. */


function colorGeneratorGame() {
    
}



