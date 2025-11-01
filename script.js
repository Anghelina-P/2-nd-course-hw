

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

function RockPaperScissorsGame() {
    const rulesOfGame = {
        'камень':'ножницы',
        'ножницы':'бумага',
        'бумага':'камень'
    }

    do {
        const randomSign = userRightSigns[Math.floor(Math.random() * userRightSigns.length)];

        let userSign;
        do {
            userSign = prompt('Камень, ножницы, бумага?');

            if (userSign === null) {
                alert('пока');
                return;
            }
        
            userSign = userSign.toLowerCase();

        } while (!userRightSigns.includes(userSign));

        if (userSign === randomSign) {
            alert('ничья')
        }
        else if (rulesOfGame[userSign] === randomSign) {
            alert('победа')
        } 
        else {
            alert('поражение')
        }

    } while (true);
}




const colors = ['rgb(255, 0, 0)','rgb(0, 255, 0)','rgb(0, 0, 255)','rgb(255, 192, 203)','rgb(173, 216, 230)','rgb(75, 0, 130)','rgb(238, 130, 238)']

function colorGeneratorGame() {
    const usAnsw = confirm('Хотите поменять фон?')

    const randomColors = colors[Math.floor(Math.random()*colors.length)];


    if (usAnsw === false) {
        alert('пока')
    } else {
        const changeBcgColor = document.querySelector('.section__games')
        changeBcgColor.style.backgroundColor = randomColors
        return
    }
}



