// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей. Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.


// let numberOfPositiveNumbers = 0;
// let numberOfNegativeNumbers = 0;
// let numberOfZeroes = 0;

// while (true) {
//     let n = (Number(prompt("Please enter number")));

//     if (n === null) {
//         break;
// }

// let numberOfAttempts = n;

// if (Number(numberOfAttempts > 0)) {
//     numberOfPositiveNumbers +=1;

// }
// else if (Number(numberOfAttempts < 0)) {
//     numberOfNegativeNumbers +=1;
// }
// else {
//     numberOfZeroes +=1;
// }
// }

// console.log(numberOfPositiveNumbers);
// console.log(numberOfNegativeNumbers);
// console.log(numberOfZeroes);






   

// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем каждое последующее число должно быть больше предыдущего, иначе вывести текст ошибка! в консоль и прекратить ввод.

// let firstNumber = prompt('Please enter number');
// for (let i = 0; i < 5; i++) {
//     let secondNumber = prompt('Please enter another number');
//     if (secondNumber <= firstNumber) {
//         console.log('Error');
//         break;
//     }
// }



// Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==

// let startString = 'param';
// let randomNumber = Number(prompt('Please enter number'));
// for (let i = 0; i < randomNumber; i++) {
// startString += 'pam';
// }
// console.log(startString);
