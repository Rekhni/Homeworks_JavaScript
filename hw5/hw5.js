// 1 задание

// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 10) {
//         console.log(arr[i]);
//         break;
//     }
//     console.log(arr[i]);
// }

///////////////////////////////////////////

// 2 задание

// const arr = [1, 5, 4, 10, 0, 3];

// console.log(arr.indexOf(4));


///////////////////////////////////////////

// 3 задание

// let arr = [1, 3, 5, 10, 20];

// arr = arr.join(' ');

// console.log(arr);

///////////////////////////////////////////

// 4 задание

// const arr = [];
// const newArr = [];

// for (let i = 0; i <= 10; i++) {
//     arr.push(Math.floor(Math.random() * 10));
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     } 
// }

// console.log(arr);
// console.log(newArr);

///////////////////////////////////////////

// 5 задание

// let bigArr = [];
// num = 0;

// for (let i = 0; i <= 2; i++) {
//         smallArr = [];
//         for (let j = 0; j < 3; j++) {
//             smallArr.push(1);
//         }
//     bigArr.push(smallArr);
// }

// console.log(bigArr);

///////////////////////////////////////////

// 6 задание

// let arr = [1, 1, 1];

// arr.push(2, 2, 2); 
// console.log(arr);

///////////////////////////////////////////

// 7 задание

// let arr = [9, 8, 7, 'a', 6, 5];

// arr = arr.sort();
// arr.pop();

// console.log(arr);

///////////////////////////////////////////

// 8 задание

// let userInput = Number(prompt('Введите число от 1 до 10'));
// let arr = [9, 8, 7, 6, 5];

// let search = arr.includes(userInput);

// console.log(search);

///////////////////////////////////////////

// 9 задание

// string = 'abcdef';

// reversedString = string.split('').reverse().join('');

// console.log(reversedString);

///////////////////////////////////////////

// 10 задание

// let arr = [];
// let sum = 0

// for (let i = 0; i < 6; i++) {
//     randNum = Math.floor(Math.random() * (10 - 1)) + 1;
//     arr.push(randNum);
//     sum += randNum;
// }

// console.log(arr);
// let averageNum = Math.round(sum / arr.length);
// console.log(averageNum);

///////////////////////////////////////////

// 11 задание

// let arr = [[1, 2, 3], [4, 5, 6]];

// console.log(arr.flat());
// let newArr = [];

// for (let minArr of arr) {
//     for (let el of minArr) {
//         newArr.push(el);
//     }
// }

// console.log(newArr);

///////////////////////////////////////////

// 12 задание

// let arr = [];

// for (let i = 0; i < 6; i++) {
//     randNum = Math.floor(Math.random() * (10 - 1)) + 1;
//     arr.push(randNum);
// }
// console.log(arr);

// for (let j = 0; j < arr.length; j++) {
//     sum = arr[j] + arr[j + 1] 
//     if (isNaN(sum)) {
//         continue;
//     } else {
//         console.log(sum);
//     }
// }











