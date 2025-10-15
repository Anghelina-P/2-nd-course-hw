
/*
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




function minNum (a, b) {

   if (a<b) {
      return a;
   }
   return b;
}
let result = minNum (8, 4);
console.log(result);
result = minNum (6, 6);
console.log(result);



function evenNum(n) {

   return Number(n) % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
let n = prompt('Введите число');
console.log(evenNum(n));



function squareNum(c) {
   return c*c;
}

console.log(squareNum(3));



let e = prompt('Сколько вам лет?')
function ageUser(e) {

   if (e<0) {
      return 'Вы ввели неправильное значение';
   } 
   else if (e>0 && e<13) {
      return 'Привет, друг!';
   }
   else {
      return 'Добро пожаловать!';
   }
}
console.log(ageUser(e));



function mult(f, g) {
    
   let num1 = Number(f);
   let num2 = Number(g);
   
   return (isNaN(num1) || isNaN(num2)) ? 'Одно или оба значения не являются числом' : num1 * num2;
}

let res = mult(4, 7);
console.log(res);  

res = mult('абвг', 6);
console.log(res);



let h = prompt('Введите число');
function cubedNum(h) {

   let num = Number(h);

   return (isNaN(num)) ? 'Переданный параметр не является числом' : `${num} в кубе равняется ${num*num*num}`;
}
console.log(cubedNum(h));



let circle1 = {
   radius: 20,
   getArea() {
      return `Площадь первого круга равна ${this.radius*this.radius*3.14}`;
   },
   getPerimeter() {
      return `Периметр первого круга равен ${2*3.14*this.radius}`;
   }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());

let circle2 = {
   radius: 15,
   getArea() {
      return `Площадь второго круга равна ${this.radius*this.radius*3.14}`;
   },
   getPerimeter() {
      return `Периметр второго круга равен ${2*3.14*this.radius}`;
   }
   
}
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
*/