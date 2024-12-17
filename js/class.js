// function getData(dataId, getNextData){
//     setTimeout (() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
//     }

//     getData(1, () =>{
//         console.log("getting data2...");
//         getData(2, () =>{
//             console.log("getting data3...");
//             getData(3, ()=>{
//                 console.log("getting data4..."); 
//                 getData(4);
//             });
//         });
//     });

// function asyncFunc1(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("some data2");
//             resolve("success");
//         },4000);
//     });
// }


// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p1.then((res) => {
//     console.log(res);
// });

// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Sneha";

// function changeText(){
// }

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// })
// let paras = document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click', function(){
//         alert("You have Clicked on para: " + i)
//     })
// }

// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My name is Sneha");
//     }, 1500)
// })

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve("Promise Fulfilled");
//     }else{
//         reject("Promise Rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("The ka message is: " + message);
// }).catch.log((error) => {
//     console.log("Error: " + error);
// })

// async function getData() {
//     setTimeout( fuction() {
//         console.log("I am inside set timeout block")
//     }, 3000);
// }
// getData();

// let name = "Sneha";
// console.log("Original Name:", name);
// name = "Raj";
// console.log("Update Name:", name);
// let name="Sneha";
// console.log("Original Name:", name);
// name="Beauty";
// console.log("Updated Name:", name);
// let name="Bunny";
// console.log("Original Name:", name);
// name="Honey";
// console.log("Updated Name:", name);
// Use const to store the value of π (pi), and try to update its value. Observe what happens. answer it
// const pi = 3.14159;
// console.log("Value of π:", pi);
// pi=3.14;
// Declare a var variable inside a block ({}) and try to access it outside the block. What happens? answer it
// {
//     var message = "Hello, world!";
//     console.log("Inside block:", message);
// }
// console.log("Outside block:", message);
// {
//     var message = "Hello World!";
//     console.log("Inside block:", message);
// }
// console.log("Outside block:", message);
// let bigNumber = 123456789n ;
// console.log(typeof bigNumber);
// let a = 10, b = 5;
// console.log("Addition:", a+b);
// console.log("Subtraction:",a-b);
// console.log("Multiplication:",a*b);
// console.log("Division:",a/b);

// Create an object representing a car with properties like brand, model, and price. Access and modify one of its properties
// const car ={
//     brand:"Toyota",
//     model:"Corolla",
//     price:20000
// };
// console.log("Car Brand:", car.brand);
// console.log("Car Model:", car.model);
// console.log("Car Price:", car.price);
// car.price = 22000;
// console.log("UPdated Car Price:", car.price);

// const numbers = [10,20,30,40,50];
// let sum = 0;
// for(let num of numbers){
//     sum+= num;
// }
// console.log("Sum of the numbers:", sum);
// let average = sum/numbers.length;
// console.log("Average of the numbers:", average);
// const numbers = [10,20,30,40,50];
// let sum = 0;
// for(let num of numbers){
//     sum+= num;
// }console.log("Sum of the number:",sum);
// let average = sum/numbers.length;
// console.log("Average of the numbers:", average);
// const numbers = [10,20,30,40,50];
// let sum = 0;
// for(let num of numbers){
//     sum+= num;
// }console.log("Sum pf numbers:", sum);
// let average = sum/numbers.length;
// console.log("Average of the numbers:", average);
// const numbers = [10,20,30,40,50];
// const sum = numbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
// console.log("Sum of the numbers:", sum);
// const average = sum / numbers.length;
// console.log("Average of the numbers:", average);
// const numbers = [10,20,30,40,50];
// const sum = numbers.reduce((accumulator, currentValue)=> accumulator+currentValue,0);
// console.log("Sum of the numbers:",sum);
// const average = sum/numbers.length;
// console.log("Average of numbers:",average);
// let value = null;
// console.log("Value:", value);
// console.log("Type of value:", typeof value);

// let uninitialized;
// console.log("Uninitialized variable:", uninitialized);
// console.log("Typeof uninititalized variable:", typeof uninitialized);
// let a = 10, b = 5;
// console.log("Addition:", a+b);
// console.log("Subtracton:",a-b);
// console.log("Multiplication:", a*b);
// console.log("Division:", a/b);
// const dividend = 17;
// const divisior = 5;
// const remainder = dividend % divisior;
// console.log(`the remainder when ${dividend} is divided by ${divisior} is: ${remainder}`);
// const num1 = 25;
// const num2 = 30;
// if(num1 == num2){
//     console.log(`${num1} and ${num2} are equal.`);
// }else if(num1 > num2){
//     console.log(`${num1} is greater than ${num2}.`);
// } else{
//     console.log(`${num1} is less than ${num2}.`);
// }

// const number = 8;
// if(number > 0 && number%2 == 0){
//     console.log(`${number} is positive and even.`);
// } else{
//     console.log(`${number} is not both positive and even.`);
// const number = 8;
// if(number > 0 && number%2 == 0){
//     console.log(`${number} is positive and even.`);
// }else{
//     console.log(`${number} is not both positive and even`);
// }
// const number = 4;
// if(number > 0&& number%2 == 0){
// console.log(`${number} is positive and even.`);
// }else{
//     console.log(`${number} is not positive and even`);
// }
// const number = 5;
// if(number > 0 && number%2 ==0){
//     console.log(`${number} is both positive and even`);
// }else{
//     console.log(`${number} is not positive and even`);
// }
// const number = 8;
// if(number > 0 && number%2 == 0){
//     console.log(`${number} is both positive and even.`);
// }else{
//     console.log(`${number} is not positive and even`);
// }
// const text = "HelloWorld!";
// if(text.length === 0 || text.length> 10){
//     console.log(`The string is either empty or has more than 10 character.`);
// }else{
//     console.log(`The string has between 1 and 10 character.`);
// }
// const number = parseFloat(prompt("enter a number: "));
// if(number > 0 && number %2 ===0){
//     console.log(`${number} is positive and even.`);
// }else{
//     console.log(`${number} is not positive and even.`);
// }
// const text= prompt("Enter a string:");
// if(text.length ===0 || text.length > 10){
//     console.log(`The text is either empty or have more than 10 character`);
// }else{
//     console.log(`The string is between 0 to 10`);
// }
// const number = parseFloat(prompt("Enter a number:"));
// if(number > 0 && number%2 == 0){
//     console.log(`${number} is positive and even.`);
// }else{`${number} is not positive and even.`}
// const text = prompt(`Enter a string:`);
// if(text.length ===0 || text.length >10){
//     console.log(`the is either empty or have more than 10 character.`);
// }else{
//     console.log(`the string is between 1 to 10`);
// }
// let a = 20;
// let b = 4;
// a+= 10;
// console.log(`After adding 10, the value of a is: ${a}`);
// b*=5;
// console.log(`After multiplying by 5, the value of b is : ${b}`);
// let a = 60;
// let b= 5;
// console.log(`After adding 10, the value is:${a}`);
// b*=5;
// console.log(`After multiplying by 5, the value of b is: ${b}`);

// Program to check if a number is positive, negative, or zero
// const number = parseFloat(prompt(`Enter a number:`));
// if(number >0){
//     console.log(`${number} is positive`);
// }else if(number < 0){
//     console.log(`${number} is negative`);
// }else{
//     console.log(`the number is zero`);
// }
// const score = parseFloat(prompt(`Enter the score:`));
// if(score >= 90){
//     console.log(`Grade: A `);
// }else if(score >=80){
//     console.log(`Grade: B`);
// }else if(score>=70){
//     console.log(`Grade : C`);
// }else if (score >=60){
//     console.log(`Grade: D`);
// }else{
//     console.log(`Grade: F`);
// }
// const dayNumber = parseInt(prompt("Enter a number(1-7) to get the weekday:"));
// switch (dayNumber){
//     case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//             console.log("Wednesday");
//             break;
//             case 4:
//                 console.log("Thursday");
//                 break;
//                 case 5:
//                     console.log("Friday");
//                     break;
//                     case 6:
//                         console.log("Saturday");
//                         break;
//                         case 7:
//                             console.log("Sunday");
//                             break;
//                             default:
//                                 console.log("Invalid input. Please enter a number between 1 and 7.");
// }
// const year = parseInt(prompt("Enter a year:"));
// if((year % 4 === 0 && year %100 !==0 || (year %400 === 0)){
//     console.log(`${year} is a leap year.`);
// }else{
//     console.log(`${year} is ot a leap year`);
// }
// const year = parseInt(prompt("Enter a year:"));
// switch(true){
//     case year%400 === 0:
//         console.log(`${year} is a leap year`);
//         break;
//         case year %100 === 0:
//             console.log(`${year} is not a leap year`);
//             break;
//             case year %4 === 0:
//                 console.log(`{year} is a leap year`);
//                 break;
//                 default:
//                     console.log(`${year} is not a leap year`);
// }
// console.log("Numbers from 1 to 10:");
// for(let i= 1; i<=10; i++){
//     console.log(i);
// }
// let sum = 0;
// for(let i =1; i<=10;i++){
//     sum += i
// }
// console.log(`The sum of the first 10 natural numbers is: ${sum}`);
// console.log("Number from 1 to 10:");
// for(let i = 1; i<=10; i++){
//     console.log(i);
// }
// let sum = 0;
// for(let i =1; i<=10;i++){
//     sum+= i;
// }
// console.log(`The sum of the first 10 natural number is:${sum}`);

// let num = 1;
// console.log("Even numbers from 1 to 20");
// while(num<=20){
//     if(num%2===0){
//         console.log(num);
//     }
//     num++;
// }
// let num = 1;
// console.log("Even number from 1 to 20:");
// while(num<=20){
//     if(num%2===0){
//         console.log(num);
//     }
//     num++;
// }
// let number = parseInt(prompt("Enter a number to reserve:"));
// let reversed = 0;
// while(number>0){
//     let digit = number%10;
//     reversed = reversed*10+digit;
//     number = Math.floor(number/10);
// }
// console.log(`Reversed number: ${reversed}`);
// let number = parseInt(Prompt("Enter a number to reverse:"));
// let reverse = 0;
// while(reverse>0){
//     let digit = number%10;
//     reverse = reverse*10+ digit;
//     number = Math.floor(num/10);
// }
// console.log(`Reverse number: ${reverse}`);
// let num = 10;
// console.log("Number from 1 to 5 using do-while loop:");
// do{
//     console.log(num);
//     num++;
// }while(num<=5);
// let num = 10;
// console.log("Numbers from 1 to 5 usimg do-while loop:");
// do{
//     console.log(num);
//     num++;
// }while(num<=5);
// let num = 20;
// console.log("Number from 1 to 5 using do-while loop:");
// do{
//     console.log(num);
//     num++;
// }while(num<=5);

// const number = parseInt(prompt("Enter a number to print its multiplication table."));
// console.log(`Multiplication Table for ${number}:`);
// for(let i =1; i<=10; i++){
//     console.log(`${number} * ${i} = ${number*i}`);
// }
// const number = parseInt(prompt("Enter a Number to print its multiplication table:"));
// console.log(`Multiplication Table for ${number}:`);
// for(let i =1; i<=10; i++){
//     console.log(`${number} * ${i} = ${number*i}`);
// }
// const strings = ["hello", "world", "javascript", "is", "fun"];
// console.log("String in uppercase:");
// for(const str of strings){
//     console.log(str.toUpperCase());
// }

// const strings = ["hello", "world", "javascript", "is", "fun"];
// console.log("String in uppercase:");
// for(const str of strings){
//     console.log(str.toUpperCase());
// }
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2021,
//     price: 20000
// };
// console.log("Properties of the car objects:");
// for(const property in car){
//     console.log(`${property} : ${car[property]}`);
// }
// const car = {
//     brand:"Toyota",
//     model:"corolla",
//     year:2021,
//     price: 20000
// };
// console.log("Properties of the car object:");
// for(const property in car){
//     console.log(`${property}: ${car[property]}`);
// }
// const number = parseInt(prompr("Enter a number to calculate its factorial:"));
// if(number<0){
//     console.log("Factorial is not defined for negative numbers.");
// }else{
//     let factorial = 1;
//     for(let i =1; i<=number; i++){
//         factorial *=i;
//     }
//     console.log(`The factorial of ${number} is: ${factorial}`);
// }
// const number = parseInt(prompt("Enter a number to calculate a factorial of a number."));
// if(number<0){
//     console.log("Factorial is not defined for negative numbers.");
// }else{
//     let factorial = 1;
//     for(let i = 1; i<=number; i++){
//         factorial*=i;
//     }
//     console.log(`The factorial of ${number} is: ${factorial}`);
// }
// const student ={
//     name: "Sneha Raj",
//     age: 22,
//     marks:{
//         math:95,
//         science: 88,
//         english: 92
//     }
// };
// console.log("Student Details:");
// for(const property in student){
//     console.log(`${property}: ${student[property]}`);
// }
// console.log("\nMarks Details:");
// for(const subject in student.marks){
//     console.log(`${subject}: ${student.marks[subject]}`);
// }
// const student = {
//     name: "Sneha",
//     age: 22,
//     marks:{
//         english: 97,
//         maths: 95,
//         science: 88,
//     }
// };
// console.log("Student Details:");
// for(const property in student){
//     console.log(`${property}: ${student[property]}`);
// }
// console.log("\nMarks Details:");
// for(const subject in student.marks){
//     console.log(`${subject}: ${student.marks[subject]}`);
// }
// const student ={
//     name:"Sneha", 
//     age: 22,
//     marks:{
//         science: 88,
//         maths:95,
//         english: 96
//     }
// };
// console.log("Student Detail");
// for(const property in student){
//     console.log(`${property}: ${student[property]}`);
// }
// console.log("Marks Detail:");
// for(const subject in student.marks){
//     console.log(`${subject}: ${student.marks[subject]}`);
// }
// const number = [2,4,6,10,8];
// console.log("Square of each number:");
// for(let i =0; i<number.length;i++){
//     console.log(`Square of ${number[i]}: ${number[i] **2}`);
// }
// let sum = 0;
// for(const num of number){
//     sum+= num;
// }
// console.log(`\nSum of all number: ${sum}`);

// const number = [2,4,6,8,10];
// for(let i =0; i<number.length;i++){
//     console.log(`Square of ${number[i]}: ${number[i]**2}`);
// }let sum = 0;
// for(const num of number){
//     sum+= num;
// }
// console.log(`\nSum of all number: ${sum}`);

// const number = [2,4,6,8,10];
// for(let i =0; i<number.length; i++){
//     console.log(`Square of the ${number[i]}: ${number[i]**2}`);
// }
// let sum = 0;
// for(const num of number){
//     sum+=num;
// }
// console.log(`Sum of the all the number: ${sum}`);
// const inputString = prompt("Enter a string:");
// const vowels = "aeiouAEIOU";
// let vowel = 0;
// for(let char of inputString){
//     if(vowels.includes(char)){
//         vowelCount++;
//     }
// } 
// console.log(`Number of vowels in "${inputString}":${vowelCount}`);
// let reversedString ="";
// for(let i = inputString.length-1; i>=0; i--){
//     reversedString+= inputString[i]
// }
// console.log(`Reversed string: ${reversedString}`);

// const inputString = prompt("Enter a string:");
// const vowel = "AEIOUaeiou";
// let vowelcount = 0;
// for(let char of inputString){
//     if(vowel.includes(char)){
//         vowelcount++;
//     }
// }
// console.log(`Number of vowel in ${inputString}:${vowelcount}`);
// let reversedString ="";
// for(let i =inputString.length-1; i>=0; i--){
//     reversedString+= inputString[i];
// }
// console.log(`Reversed string: ${reversedString}`);

// const inputString = prompt("Enter a String:");
// const vowel = "aeiouAEIOU";
// let vowelCount=0;
// for(let char of inputString){
//     if(vowel.includes(char)){
//         vowelCount++;
//     }
// }
// console.log(`Number of vowels in ${inputString}:${vowelCount}`);

// let reversedString = "";
// for(let i = inputString-1; i>=0 ; i--){
//     reversedString+= inputString[i];
// }
// console.log(`Reversed string: ${reversedString}`);


// for(let i =1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log("FizzBuzz");
//     }else if(i%3 === 0){
//         console.log("Fizz");
//     }else if(i%5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
// for(let i =1; i<=100; i++){
//     if(i%3 ===0 && i%5 ===0){
//         console.log("FizzBuzz");
//     }else if(i%3 === 0){
//         console.log("Fizz");
//     }else if(i%5 ===0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
// function isPalindrome(input){
//     const str = input.tostring();
//     const reversedStr = str.split("").reverse().join("");
//     if(str === reversedStr){
//         console.log(`${input} is a pallindrome`);
//     } else{
//         console.log(`${input} is not a pallindrome`);
//     }
// }
// isPalindrome("madam");
// isPalindrome("12321");
// isPalindrome("hello");
// isPalindrome("12345")
// function isPalindrome(input){
//     const str = input.toString();
//     const reversedStr = str.split("").reverse().join("");
//     if(str=== reversedStr){
//         console.log(`${input} is a palindrome`);
//     }
// }else{
//     console.log(`${input} is not a palindrome`);   
// }
// function isPrime(number){
//     if(number <2){
//         console.log(`${number} is not a prime`);
//         return false;
//     }
//     for(let i = 2; i<=Math.sqrt(number); i++){
//         if(number%i === 0){
//         console.log(`${number} is not a prime number`);
//         return false;
//     }
// }
// console.log(`${number} is a prime number`);
// return true;
// }
// isPrime(2);
// isPrime(4);
// isPrime(8);
// isPrime(25);
// function isPrime(number){
//     if(number<2){
//         console.log(`${number} is not prime`);
//         return false;
//     } 
//         for(let i =2; i<=Math.sqrt(number); i++){
//             if(number%2===0){
//                 console.log(`${number} is not Prime`);
//                 return false;
//             }
//         }
//         console.log(`${number} is prime`);
//         return true;
//     }
// isPrime(2);
// isPrime(25);
// isPrime(20);

// const rows = 4;
// for(let i = 1; i<= rows; i++){
//     let stars = "";
//     for(let j = 1; j<=i; j++){
//         stars += "*",
//     }
//     console.log(stars);
// } 
// const row = 4;
// for(let i = 1; i<=row; i++){
//     console.log("*".repeat(i));
// }
// const row = 4;
// for(let i =1; i<=row; i++){
//     let stars = "";
//     for(let j =1; j<=i; j++){
//         stars+="*";
//     }
//     console.log(stars);
// }
// const row = 3;
// for(let i = 1; i<=row; i++){
//     let pattern = "";
//     for(let j = 1; j<=row-i; j++){
//         pattern+=" ";
//     }
//     for(let j= 1; j<=i; j++){
//         pattern+=j;
//     }
//     for (let j = i-1; j>=1; j--){
//         pattern+= j;
//     }
//     console.log(pattern);
// }
// const row = 3;
// for(let i =1; i<=row; i++){
//     let pattern = "";
//     for(let j=i; j<=row-1; j++){
//         pattern+= " "
//     }for(let j=1; j<=i;j++){
//         pattern+=j;
//     }for(let j=i-1; j>=1; j--){
//         pattern+=j
//     }
// }
// const row = 3;
// for(let i=1; i<=row; i++){
//     let pattern = "";
// for(let j=i; j<row-1; j++){
//      pattern+= ""
// }for(let j =1; j<=i; j++){
//      pattern+= "j";
// }for(let j =i-1; j>=i; j--){
//      pattern+=j;
// }
// }
// const row = 3;
// for(let i=1; i<row-1; i++){
//     let pattern = "";
//     for(let j=i; j<=1; j++)
// }
// const row = 4;
// for(let i = 1; i<=row; i++){
//     let pattern ="";
// for(let j =1; j<=row-i; j++){
//     pattern+= " ";
// }for(let j = 1; j<=i; j++){
//     pattern+= j;
// }for(let j =i-1; j>=1; j--){
//     pattern+= j;
// }
// console.log(pattern);
// }

// const randomNumber = math.floor(math.random()*100)+1;
// let guess;
// let attempt = 0;
// console.log("I have guess number from 1 to 100. Can you guess it?");
// do{
//     guess = parseInt(prompt("Enter your guess:"), 10);
//     attempt++;
//     if(guess > randomNumber){
//         console.log("Too high! Try again.");
//     }else if(guess< randomNumber){
//         console.log("Too low! Try again.");
//     }
//     else if(guess === randomNumber){
//         console.log(`Congratulations! You guessed the number in ${attempt} attempts.`);
//     }else{
//         console.log("Please enter a valid number");
//     }
// }while (guess !== randomNumber);

// function generateFibonacci(n){
//     if(n<=0){
//         console.log("Please enter a positive integer greater than 0");
//         return;
//     }
//     let a =0 , b=1;
//     console.log("Fibonacci Sequence:");
//     for(let i = 1; i<=n; i++){
//         console.log(a);
//         let next = a+b;
//         a = b;
//         b= next;
//     }
// }
// generateFibonacci(10);
// const book = {
//     title: "The Art of Programming",
//     author: "John Doe",
//     review: [
//         {user: "Alice", rating:5, comment: "A must-read for developer!"},
//         {user: "Bob", rating:6, comment: "Great Content, but a bit dense."},
//         {user: "Charlie", rating:5, comment:"Loved the examples and clarity!"}
//     ]
// };
// console.log(`Title: ${book.title}`);
// console.log(`Author : ${book.author}`);
// console.log("Review");

// for(const review of book.review){
//     console.log(`-User: ${review.user}`);
//     console.log(`rating: ${review.rating}`);
//     console.log(`comment: ${review.comment}`);
//     console.log("----------------");
// }

// const book = {
//     title: "The Art of Programming",
//     author: "John Doe",
//     review:[
//         {user: "Alice", rating:5, comment: "A must-read for developer!"},
//         {user: "Bob", rating: 6, comment: "Great content, but a bit dense."},
//         {user: "Charlie", rating: 7, comment: "Loved the example and clarity"}
//     ]
// };
// console.log(`Title: ${book.title}`);
// console.log(`Author: ${book.author}`);
// console.log("Review");
// for(const review of book.review){
//     console.log(`user: ${review.user}`);
//     console.log(`rating: ${review.rating}`);
//     console.log(`comment: ${review.comment}`);
//     console.log("--------------");
// }

// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log("Matrix elements row by row:");
// for(let row = 0; row<matrix.length; row++){
//     console.log(`Row ${row+1}:`, matrix[row].join(" "));
// }
// let sum = 0;
// for(let row = 0; row<matrix.length; row++){
//     for(let col = 0; col<matrix[row].length; col++){
//         sum += matrix[row][col];
//     }
// }
// console.log(`Sum of all elements: ${sum}`);

// function flattendArray(arr){
//     let result = [];
//     for(let element of arr){
//         if(Array.isArray(element)){
//             result = result.concat(flattendArray(element));
//         }else{
//             result.push(element);
//         }
//     }
//     return result;
// }
// const nestedArray = [1,[2,[3,4]], 5];
// const flattendArray = flattendArray(nestedArray);
// console.log(flattendArray);

// function swapNumber(a, b){
//     console.log(`Before swapping: a =${a}, b=${b}`);
//     a = a+b;
//     b= a-b;
//     a = a-b;
//     console.log(`After swapping: a=${a}, b=${b}`);
// }
// let num1 = 5, num2= 10;
// swapNumber(num1, num2); 

// function checkEvenOrOdd(number){
//     if(number%2 === 0){
//         console.log(`${number} is Even`);
//     }else{
//         console.log(`${number} is odd`);
//     }
// }
// checkEvenOrOdd(7);
// checkEvenOrOdd(10);
// function checkEvenOrOdd(number){
//     console.log(`${number} is ${number%2 === 0 ? "even":"odd"}`);
// }
// checkEvenOrOdd(7);
// checkEvenOrOdd(16);

// function findLarget(a,b,c){
//     if(a>=b && a>=c){
//         console.log(`the larget number: ${a}`);
//     }else if(b>=a && b>=c){
//         console.log(`The larget number: ${b}`);
//     }else{
//         console.log(`the largest number: ${c}`);
//     }
// }
// findLarget(10,20,30,);
// function findLargest(a,b,c){
//     const largest = Math.max(a,b,c);
//     console.log(`The largest number:${largest}`);
// }
// findLargest(10,20,30)
// function celsiusToFarenheight(celsius){
//     const fahrenheit = (celsius*9/5) + 32;
//     console.log(`${celsius} is equal to ${fahrenheight}`);
// }
// celsiusToFarenheight(0);
// celsiusToFarenheight(25);

// function calculator(num1, num2, operator){
//     if(operator === '+'){
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     } else if(operator === '-'){
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     }else if(operator === '*'){
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     }else if(operator === '/'){
//         if(num2 === 0){
//             console.log("Error: Division by zero is not allowed");
//         }else{
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         }
//     }else{
//         console.log("Invalid operator. Please use +, - , *, or /");
//     }
// }
// calculator(10,5,'+');
// calculator(10,5,'-');
// calculator(10,5,'*');
// calculator(10,5,'/');

// function calcultor(num1, num2, operator){
//     if(operator === '+'){
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     }else if(operator === '-'){
//         console.log(`${num1} - ${num2} = ${num1-num2}`);
//     }else if(operator === "*"){
//         console.log(`${num1} * ${num2} = ${num1*num2}`);
//     }else if(operator === '/'){
//         if(num2 === 0){
//             console.log("Error: Division is not possible");
//         }else{
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//         }
//     }
//     else{
//         console.log("Please enter a valid operator like +,-,*,/");
//     }
// }
// calcultor(10,5,'+');
// calcultor(10,5,'-');

// function calculator(num1,num2, operator){
//     switch(operator){
//         case '+':
//             console.log(`${num1} + ${num2} = ${num1 + num2}`);
//             break;
//             case '-':
//                 console.log(`${num1} - ${num2} = ${num1 - num2}`);
//                 break;
//                 case '*':
//                     console.log(`${num1} * ${num2} =${num1 - num2}`);
//                     break;
//                     case '/':
//                         if(num2 === 0){
//                             console.log("Error : Division is not possible");
//                         }else{
//                             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//                         }
//                         break;
//                         default:
//                             console.log("Invalid operator. Please use +,-,*,/");
//     }
// }
// calculator(10,5,"+");
// calculator(10,5,"-");

// function printPattern(row){
//     for(let i = 1; i<=row; i++){
//         let row = "";
//         for(let j = 1; j<=i; j++){
//            row+= "*";
//         }
//         console.log(row);
//     }
// }
// printPattern(9);

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     price: 20000,
// };
// console.log("Car brand:", car.brand);
// console.log("Car PRice:", car.price);
// console.log("Car Model:", car.model);
// car.price = 22200;
// console.log("Updated Car Price:", car.price);

// const number = [10,20,30,40,50];
// let sum = 0;
// for(let num of number){
//     sum+= num;
// }
// console.log("Sum of the number:", sum);
// let average = sum/number.length;
// console.log("Average of the number:", average);
// const number = [10,20,30,40,50];
// const sum = number.reduce((accumulator, currentValue) => accumulator+currentValue,0);
// console.log("Sum of the number:", sum);
// let average = sum/number.length;
// console.log("Average of number:", average);
// const divided = 17;
// const divisior = 5;
// const remainder = divided/divisior;
// console.log(`The remainder when ${divided} is divided by ${divisior} is: ${remainder}`);
// const num1 = 25;
// const num2 = 30;
// if(num1 === num2){
//     console.log(`${num1} and ${num2} are equal`);
// }else if(num1 > num2){
//     console.log(`${num1} is greater than ${num2}`);
// }else{
//     console.log(`${num1} is less than ${num2}`);
// }
// const number = 8;
// if(number%2===0 && num>0){
//     console.log(`${number} is positive and even`);
// }else{
//     console.log(`${number} is not positive and even`);
// }
// const text = "HelloWorld!";
// if(text.length===0 || text.length>10){
//     console.log("The string is either empty or has more than 10 character");
// }else{
//     console.log("The string has between 0 to 10 character");
// }
// const number = parseFloat(prompt("Enter a number:"));
// if(number > 0 && number%2 ===0){
//     console.log(`${number} is both positive and even`);
// }else{
//     console.log(`${number} is not both positive and even`);
// }
// const text = prompt("Enter a string:");
// if(text.length === 0 || text.length>10){
//     console.log("The string is either empty or has more than 10 character");
// }else{
//     console.log("The string have character between 1 to 10");
// }

// let a = 20;
// let b=4;
// a+=10;
// console.log(`after adding value 10, the value of a is: ${a}`);
// b*=5;
// console.log(`after multplying by 4, the value of b is: ${b}`);

// const number = parseFloat(prompt("Enter a number:"));
// if(number>0){
//     console.log(`${number} is positive`);
// }else if(number<0){
//     console.log(`${number} is negative`);
// }else{
//     console.log(`${number} is zero`);
// }
// let num = 1;
// console.log(("Even number from 1 to 20"));
// while(num<=20){
//     if(num%2===0){
//         console.log(num);
//     }
//     num++;
// }
// let number = parseInt(prompt("Enter a number to reversed:"));
// let reversed = 0;
// while(number>0){
//     let digit = num%10;
//     reversed = reversed*0+digit;
//     number = Math.floor(number/10);
// }
// console.log(`Reversed number: ${reversed}`);

// let num = 10;
// console.log("Number from 1 to 5 using do-while loop:");
// do{
//     console.log(num);
//     num++;
// }while(num<=5);

// const number = parseInt(prompt("Enter a number for its multiplication table:"));
// console.log(`Multiplication table for ${number}`);
// for(let i = 1; i<=10; i++){
//     console.log(`${number}*{i} = ${number*i}`);
// }

// const string = ["hello", "world", "Javascript", "is"];
// console.log("Strings in uppercase:");
// for(const str of string){
//     console.log(str.toUpperCase());
// }

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     price: 20000
// };
// console.log("Properties of the car object");
// for(const property in car){
//     console.log(`${property} : ${car[property]}`);
// }

// const number = parseInt(prompt("Enter a number:"));
// if(number<0){
//     console.log("Factorial of a number is not defined");
// }else{
//     let factorial = 1;
//     for(let i =1; i<=number; i++){
//         factorial*=i;
//     }
//     console.log(`The factorial of ${number} is: ${factorial}`);
// }

// const student ={
//     name: "Sneha Raj",
//     age: 22,
//     marks: {
//         maths:95,
//         science: 88,
//         english: 96
//     }
// };
// console.log("Student Details");
// for(const property in student){
//     console.log(`${property}: ${student[property]}`);
// }
// console.log("\nMarks Details:");
// for(const subject of student.marks){
//     console.log(`${subject} : ${student.marks[subject]}`);
// }

// const numbers= [2,4,6,8,10];
// console.log("Square of each number:");
// for(let i =0; i<numbers.length; i++){
//     console.log(`Square of ${number[i]} :${number[i]**2}`);
// }
// let sum = 0;
// for(const num of number){
//     sum+=num;
// }
// console.log(`\nSum of all number: ${sum}`);

// function isPalindrome(input){
//     const str= input.toString();
//     const reversedString = str.split("").reverse().join("");
//     if(str === reversedString){
//         console.log(`${input} is a palindrome`);
//     }else{
//         console.log(`${input} is not a palindrome`);
//     }
// }
// isPalindrome("madam");
// isPalindrome(12321);

// function isPrime(number){
//     if(number<2){
//         console.log(`${number} is not a prime number`);
//         return false;
//     }
//     for(let i = 2; i<=Math.sqrt(number); i++){
//         if(number%2===0){
//             console.log(`${number} is not a prime number`);
//             return false;
//         }
//     }
//     console.log(`${number} is a prime number`);
//     return true;
// }
// isPrime(2);
// isPrime(4);
// isPrime(25);    

// const row = 4;
// for(let i=1; i<=row; i++){
//     let star ="";
// for(let j=1; j<=i ; j++){
//     star+="*";
// }
// console.log(star);
// }

// const row = 3;
// for(let i =1;i<=row; i++){
//     let pattern ="";
//     for(let i=1; i<=row-1;i++){
//         pattern+=" ";
//     }for(let j = 1; j<=i; j++){
//         pattern+= j;
//     }
//     for(let j = i-1; j<=i; j--){
//         pattern+= j;
//     }
//     console.log(pattern);
// }

// const randomNumber = Math.floor(Math.random()*100) + 1;
// let guess;
// let attempt = 0;
// console.log(`I Have selected a number between 1 to 10. Can you guess it?`);
// do{
//     guess = parseInt(prompt("Enter your guess:"),10);
//     attempt++;

//     if(guess > randomNumber){
//         console.log("Too high! Try again");
//     }else if(guess< randomNumber){
//         console.log("Too low! Try again");
//     }else if(guess===0){
//         console.log("Please enter a valid number");
//     }
// }while(guess!==randomNumber);
// function generateFibonnaci(n){
//     if(n<0){
//         console.log("Please enter a positive integer greater than 0");
//     }
//     let a =0, b=1;
//     console.log("Fibonacci Sequence:");
//     for(let i=1; i<=n; i++){
//         console.log(a);
//         let next = a+b;
//         a=b;
//         b=next;
//     }
// }
// generateFibonnaci(10);

// const book ={
//     title: "The Art of book", 
//     author: "Sneha",
//     review: [
//         {user: "Alice", rating: 4, comment:"Must-read"},
//         {user: "Beauty", rating: 6, comment:"great content"},
//         {user: "Riya", rating: 5, comment:"Loved this"},
//     ]
// };
// console.log(`Title: ${book.title}`);
// console.log(`Author: ${book.author}`);
// console.log("Review");

// for(const review of book.review){
//     console.log(`USer: ${review.user}`);
//     console.log(`Rating: ${review.rating}`);
//     console.log(`Comment: ${review.comment}`);
//     console.log("------------");
// }

// const matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log("Matrix element row by row:");
// for(let row = 0; row<matrix.length; row++){
//     console.log(`row ${row+1} is:`,matrix[row].join(" "));
// }
// let sum =0;
// for(let row = 0; row<matrix.length; row++){
//     for(let col=0; col<matrix[row].length;col++){
//         sum+= matrix[row][col];
//     }
// }
// console.log(`Sum of all the number:, ${sum}`);

// function swappingNumber(a,b){
//     console.log(`Before swapping : a=${a}, b=${b}`);
//     a=a+b;
//     b=a-b;
//     a=a-b;
//     console.log(`After swappng number: a=${a}, b=${b}`);
// }
// let num1 = 5, num2=10;
// swappingNumber(num1,num2)

// function checkEvenOrOdd(number){
//     if(number%2===0){
//         console.log(`${number} is Even`);
//     }else{
//         console.log(`${number} is Odd`);
//     }
// }
// checkEvenOrOdd(4);

// function checkEvenOrOdd(number){
//     console.log(`${number} is ${number % 2 === 0 ? "Even" : "odd"}`);
// }
// function findLargest(a,b,c){
//     if(a>=b && a>=c){
//         console.log(`The largest number is: ${a}`);
//     }else if(b>=a && c>=a){
//         console.log(`The largest of number is: ${b}`);
//     }else{
//         console.log(`The largest of number is: ${c}`);
//     }
// }
// findLargest(10,20,35);
// findLargest(40,60,90);
// function factorial(num){
//     let result = 1;
//     for(let i =1; i<=num; i++){
//         result*= i;
//     }
//     return result;
// }
// console.log(factorial(5));
// function factorial(number){
//     let result = 1;
//     for(let i =1; i<=number; i++){
//         result*= i;
//     }
//     return result;
// }
// console.log(factorial(5));
// function sumArray(arr){
//     return arr.reduce((sum, num) => sum+num,0);
// }
// console.log(sumArray([1,2,3,4,5]));

// function sumArray(arr){
//     return arr.reduce((sum,num)=> sum+num,0)
// }
// console.log(sumArray([1,2,3,4]));
// function findMax(arr){
//     return Math.max(...arr)
// }
// console.log(findMax([1,2,8,40,63]));
// let arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// let arr = [1,2,3,4]
// arr.pop();
// console.log(arr);
// let arr= [1,2,3,4];
// let squared = arr.map(num => num**2);
// console.log(squared);
// let arr =[1,2,3,4];
// let evenNumber = arr.filter(num => num%2 === 0);
// console.log(evenNumber);
// let arr= [1,2,3,4];
// let sum = arr.reduce((acc, num) => acc+num, 0);
// console.log(sum);
// let arr= [1,2,3];
// arr.forEach(num => console.log(num*2));
// let numbers =[1,2,3,45,6];
// let evenNumber = numbers.filter(num => num%2===0);
// console.log(evenNumber);
// let numbers= [1,2,3,4,5,6];
// let sum = numbers.reduce((acc,num) => acc+num,0);
// console.log(sum);
// let student = {
//     name:"Sneha",
//     age:22,
//     marks:95,
// };
// console.log(student.name);

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     start: function(){
//         console.log(`${this.brand} ${this.model} is starting`);
//     },
// };
// car.start();

// let student={
//     name: "Sneha",
//     age:22,
//     marks: 95,
// };
// for(let key in student){
//     console.log(`${key}:${student[key]}`);
// }

// let book ={
//     title: "The ARt of Programming",
//     author: "Sneha",
//     review: [
//         {user: "Alice", rating: 6, comment:"Student must-read"},
//         {user: "Bob", rating: 4, comment:"Insight"},
//         {user: "Dog", rating: 5, comment:"Go through it"},
//     ],
// };
// for(let review of book.review){
//     console.log(`${review.user} gave rating of ${review.rating}`);
// function isPalindrome(str){
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// console.log((isPalindrome("madam")));
// function gcd(a,b){
//     while(b!==0){
//         let temp = b;
//         b=a%b;
//         a = temp;
//     } return a;
// }
// console.log(gcd(15,25));
// function isPalindrome(str){
//     const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//     const reversedString = cleanedString.split("").reverse().join("");
//     return cleanedString === reversedString
// }
// console.log(isPalindrome("Hello"));
// function gcd(a,b){
//     a = Math.abs(a);
//     b= Math.abs(b);
//     while(b!==0){
//         let temp = b;
//         b=a%b;
//         a = temp;
//     }return a;
// }
// console.log(gcd(56,85));
// function applyCallback(arr, callback){
//     let result = [];
//     for(let i =0; i<arr.length; i++){
//         result.push(callback(arr[i]))
//     }
//     return result;
// }
// function square(num){
//     return num*num;
// }
// function double(num){
//     return num*2;
// }
// const number = [1,2,3,4,5];
// console.log(applyCallback(number,square));
// console.log(applyCallback(number, double));
// console.log(applyCallback(number,(num)=>num+10));
// function applyCallback(arr, callback){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         result.push(callback(arr[i]));
//     }
//     return result;
// }function square(num){
//     return num*num;
// }function double(num){
//     return num*2;
// }
// const number = [1,2,3,4,5];
// console.log(applyCallback(number, square));
// console.log(applyCallback(number, double));
// console.log(applyCallback(number, (num) => num+10));

// function applyCallback(arr, callback) {
//    return arr.map(callback);
// }
// console.log(applyCallback([1,2,3,4,5], (num) => num*num));
// function applyCallback(arr, callback){
//     return arr.map(callback);
// }
// console.log(applyCallback([1,2,3,4,5], (num) => num*num));
// console.log(applyCallback([1,2,3,4,5], (num) => num+10));

// function countWordFrequency(str){
//     const word = str.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
//     const countWordFrequency ={};
//     for(const words of word){
//         if(word){
//              wordFrequency[word] = (wordFrequency[word] || 0) + 1;
//         }
//     }
//     return countWordFrequency;
// }
// const text = "Hello World! Hello again, world. This is a test. Test the world.";
// console.log(countWordFrequency(text));
// function countWordFrequency(str){
//     const word = str.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/);
//     const wordFrequency={};
//     for(const words of word){
//         if(word){
//             wordFrequency[word] = (wordFrequency[word] || 0)+1;
//         }
//     }return wordFrequency;
// }
// const text = "Hello World! Hello World , again World.";
// console.log(countWordFrequency(text));
// function fibonacci(n){
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// function generateFibonacciSeq(n){
//     const Sequence =[];
//     for(let i =0; i<=n; i++){
//         Sequence.push(fibonacci(i));
//     }return Sequence;
// }
// function fibonacci(n){
//     if(n===0) return 0;
//     if(n===1) return 1;
//     return fibonacci(n-1) +fibonacci(n-2);
// }
// function generateFibonacci(n){
//     const Sequence ={};
//     for(let i =0; i<n; i++){
//         Sequence.push(fibonacci(i));
//     }return Sequence;
// }
// const n=10;
// console.log(`Fibonnaci sequence upto ${n} terms:`, generateFibonacci(n));

// function mergedremoveArray(arr1, arr2){
//     const mergedArray = [...arr1, ...arr2];
//     const uniqueArray= [...new Set(mergedArray)];
//     return uniqueArray;
// }
// const array1 = [1,2,3,4,5];
// const array2 = [4,6,9,7,2,8]
// const result = mergedremoveArray(array1, array2);
// console.log("Merge and Unique array:", result);

// function mergedremoveArray(arr1, arr2){
//     const mergeArray = [...arr1, ...arr2];
//     const uniqueArray = [...new Set(mergeArray)];
//     return uniqueArray;
// }
// const array1 = [1,2,3,4,5];
// const array2 = [4,8,6,3,9];
// const result = mergedremoveArray(array1, array2);
// console.log("Merge and unique array:",result);
// function mergeAndemove(arr1, arr2){
//     const mergeArray = [...arr1, arr2];
//     const unique = mergeArray.filter((value, index) => mergeArray.indexOf(value) === index);
//     return unique;
// }
// const array1 = [1,2,3,4,5];
// const array2 = [5,6,7,8];
// console.log("Merge and unique array:",mergeAndemove(array1,array2));
// function mergeAndemove(arr1, arr2){
//     const mergeArray = [...arr1, ...arr2];
//     const uniqueArray = mergeArray.filter((value, index) => mergeArray.indexOf(value) === index);
//     return uniqueArray;
// }
// const array1 = [1,2,3,4];
// const array2 = [4,5,8,9];
// console.log("Merge and Unique array", mergeAndemove(array1, array2));

// function findSecondLargest(arr){
//     if(arr.length <2){
//         return "Array must have atleast two element"
//     }
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for(const num of arr){
//         if(num > largest){
//             secondLargest = largest;
//             largest = num;
//         }else if(num> secondLargest && num<largest){
//             secondLargest = num;
//         }
//     }
//     return secondLargest === -Infinity
//     ? "No second-largest element (all elements are same)": secondLargest;
// }
// const arr1 = [10,20,30,40,50];
// const arr2= [7,7,7,7];
// const arr3 = [5];
// console.log("Secondlargest in arr1:", findSecondLargest(arr1));
// console.log("Secondlargest in arr1:", findSecondLargest(arr2));
// console.log("Secondlargest in arr1:", findSecondLargest(arr3));
// function rotateArrayLeft(arr, n){
//     if(arr.length === 0){
//         return "Array is empty";
//     }
//     n = n%arr.length;
//     const rotatePArt = arr.slice(0,n);
//     const result = arr.slice(n).concat(rotatePArt);
//     return result;
// }
// const array = [1,2,3,4,5];
// const position = 2;
// console.log("Original Array:", array);
// console.log("Array after rotating left by", position, "position:",rotateArrayLeft(array,position));
// function arrayLeft(arr, n){
//     if(arr.length ===0){
//         return "Array is empty";
//     }
//     n= n % arr.length;
//     for(let i =0;i<n;i++){
//         arr.push(arr.shift());
//     }
//     return arr;
// }
// console.log(arrayLeft([1,2,3,4,5],2));
// function flattendArray(arr){
//     let result = [];
//     for(const element of arr){
//         if(Array.isArray(element)){
//             result = result.concat(flattendArray(element));
//         }else{
//             result.push(element)
//         }
//     }
//     return result;
// }
// const nestedArray = [1,[2,[3,[4,[5]]]],6];
// console.log("FlattendArray:", flattendArray(nestedArray));
// function flattendArray(arr){
//     let result =[];
//     for(const element of arr){
//         if(Array.isArray(element)){
//             result = result.concat(flattendArray(element));
//         }else{
//             result.push(element)
//         }
//     }return result;
// }const nestedArray = [1,[2,[3,[4,[5]]]],6];
// console.log("FlattendArray:",flattendArray(nestedArray));

// function groupByDataType(arr){
//     const grouped = {};
//     for(const element of arr){
//         const dataType = typeof element;
//         if(!grouped[dataType]){
//             grouped[dataType] = [];
//         }
//         grouped[dataType].push(element);
//     } 
//     return grouped;
// }
// const mixedArray = [1,"hello",true, null,undefined,42,{name:"Alice"},[1,2,3], ()=>{}];
// const groupedElements = groupByDataType(mixedArray);
// console.log("Grouped Element by Data type:", groupedElements);

// function groupByDataType(arr){
//     const grouped={};
//     for(const number of arr){
//         const dataType = typeof Element;
//         if(!grouped[dataType]){
//             grouped[dataType].push(Element);
//         }
//         return grouped;
//     }
//     const mixedArray = [1,"Hello", true, null, undefined, 42, {name:"Alice"}, [1,2,3], ()=>{}];
//     const groupedElements = groupByDataType(mixedArray);
//     console.log("Grouped Elements by Data Type:", groupedElements);
// }
const library = {
    fiction: [
        {title: "To kill", author: "Sneha"},
        {title: "To hill", author: "Neha"},
    ],
    nonfiction: [
        {title: "Sapiens", author: "Yuval Noah Harari"},
        {title: "Educated", author: "Tara Westover"},
    ],
    mystery: [
        {title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson"},
        {title: "Gone Girl", author: "Gillian Flynn"},
    ],
    fantasy: [
        {title: "Harry Potter and the Sorcerer's", author: "J.K. Rowling"},
        {title: "The Hobbit", author: "J.R.R. Tolkien"},
    ],
};
// function getBookByGenre(library, genre){
//     if(library[genre]){
//         return library[genre];
//     }else{
//         return `Genre "${genre}" not found in the library`;
//     }
// }
// console.log("Fiction Book:", getBookByGenre(library, "fiction"));
// console.log("Fantasy Book:", getBookByGenre(library, "fantasy"));
// console.log("Sci-Fi Book:", getBookByGenre(library, "scifi"));

// function getBookByGenre(library, genre){
//     if(library[genre]){
//         return library[genre]
//     }else{
//         return `Genre "${genre}" is not found in the library`;
//     }
// }
// console.log("Fiction-book:", getBookByGenre(library,"fiction"));
// console.log("Fantasy-book:", getBookByGenre(library,"fantasy"));
// console.log("Sci-Fi book:", getBookByGenre(library,"scifi"));
// function areObjectsEqual(obj1, obj2){
//     if(typeof obj1!== "object" || typeof obj2!=="object" || obj1===null || obj2===null){
//         return obj1===obj2;
//     }
//     const keys1 = object.keys(obj1);
//     const keys2 = object.keys(obj2);
//     if(keys1.length !== keys2.length){
//         return false;
//     }
//     for(let key of keys1){
//         if(!keys2.include(key) || areObjectsEqual(obj1[key], obj2[key])){
//             return false;
//         }
//     }
//     return true;
// }
// const obj1={
//     name: "Alice",
//     age: 22,
//     address: {
//         city: "New York",
//         zip: 10001,
//     },
// };
// const obj2 ={
//     name: "Alice",
//     age: 22,
//     address: {
//         city: "New York",
//         zip: 10001,
//     },
// };
// console.log(areObjectsEqual(obj1, obj2));
// console.log(areObjectsEqual(obj1, obj2));

// function modifyObject(obj, action, key, value= null){
//     if(action === "add"){
//         obj[key] = value;
//     }else if(action === "remove"){
//         delete obj[key];
//     }else{
//         console.log("Invalid action. Use 'add' or 'remove'");
//     }
// }
// const person= {
//     name: "John",
//     age: 14,
// };
// console.log("Original Objet:", person);
// modifyObject(person, "add", "address", "123 main St");
// console.log("After Adding address:",person);
// modifyObject(person, "add", "age",22);
// console.log("After Adding age:",person);
// modifyObject(person, "remove", "name");
// console.log("After Removing name:", person);
// modifyObject(person,"update","job", "developer")
// function mergeObject(obj1, obj2){
//     return {...obj1, ...obj2};
// }
// const object1={
//     name: "Sneha",
//     age:22,
//     city :"New York",
// };
// const object2={
//     age:30,
//     city: "San-Francisco", 
//     professio: "Engineer",
// };
// const mergedObject= mergeObject(object1, object2);
// console.log("Merged Object:", mergedObject);

// const rectangle = {
//     length : 0,
//     width: 0,
//     setDimension: function(length, width){
//         this.length = length;
//         this.width = width;
//     },
//     calculateArea: function(){
//         return this.length*this.width;
//     },
//     calculatePerimeter: function(){
//         return 2*(this.length+this.width)
//     },
// };
// rectangle.setDimension(10,5);
// console.log("Length:",rectangle.length);
// console.log("width:", rectangle.width);
// console.log("Area:",rectangle.calculateArea());
// console.log("Perimeter:",rectangle.calculatePerimeter());
// const rectangle ={
//     length:0,
//     width:0,
//     setDimension: function(length, width){
//         this.length = length;
//         this.width = width;
//     },
//     calculateArea: function(){
//         return this.length*this.width
//     },
//     calculatePerimeter: function(){
//         return 2*(this.length+this.width)
//     },
// };
// rectangle.setDimension(10,5);
// console.log("Length:",rectangle.length);
// console.log("width:",rectangle.width);
// console.log("Area:",rectangle.calculateArea());
// console.log("Perimeter",rectangle.calculatePerimeter());
// function Rectangle(length, width){
//     this.length = length;
//     this.width = width;
//     this.calculateArea = function() {
//         return this.length*this.width;
//     };
//     this.calculatePerimeter = functon() {
//         return 2*(this.length+this.width);
//     };
// }
// const myReact = new Rectangle(10,5);
// console.log("Area:",myReact.calculateArea());
// console.log("Perimeter:",myReact.calculatePerimeter());

// function greet(name, callback){
//     const message = `Hello, ${name}!`;
//     callback(message);
// }
// greet("Sneha", function(msg){
//     console.log(msg);
// });
// function multiplier(factor){
//     return function (number){
//         return number*factor;
//     };
// }
// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5));
// console.log(triple(5));
// const number = [1,2,3,4,5];
// const double = number.map(function(num){
//     return num*2;
// });
// console.log(double);
// function executeTask(taskName, onSuccess, onFailure){
//     if(taskName === "Completed"){
//         onSuccess("Task Completed Successfully!");
//     }else{
//         onFailure("Task failed");
//     }
// }
// executeTask(
//     "Completed",
//     (message) => console.log(message),
//     (error)=> console.error(error)
// );
// function myFunction(){
//     var message = "Hello World";
//     console.log(message);
// }
// console.log(message);
// {
//     let blockScoped = "I'm block scoped!";
//     console.log(blockScoped);
// }
// console.log(blockscoped);
// function example(){
//     if(true){
//         var functionScoped = "I am function scoped!";
//         let blockScoped = "I am block Scoped!";
//     }
//     console.log(functionScoped);
//     console.log(blockScoped);
// }
// example();
// const number= [1,2,3];
// number.forEach((num) => {
//     console.log(num*2);
// });
// console.log(number);

// const numbers = [1,2,3];
// const doubled = numbers.map((num) => num*2);
// console.log(doubled);
// console.log(numbers);
// const number = [1,2,3,4];
// let sum = 0;
// number.forEach((num) => {
//     sum+= num;
// });
// console.log(sum);
// const number = [1,2,3,4];
// const squared = number.map((num) => num ** 2);
// console.log(squared);
// const number = [1,2,3,4,5];
// const evenNumber = number.filter((num)=> num%2 ===0);
// console.log(evenNumber);
// console.log(number);
// const number = [1,2,3,4,5];
// const sum = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// },0);
// console.log(sum);
// console.log(number);
// const people = [
//     {name: "Alice", age: 25},
//     {name: "Bob", age: 17},
//     {name: "Charlie", age: 30},
// ];
// const adults = people.filter((person) => person.age >=18);
// console.log(adults);
// const people = [
//     {name: "Alice", age: 17},
//     {name: "Bob", age:25},
// ];
// const totalAge = people.reduce((total,person) => total+person.age, 0);
// console.log(totalAge);
// const arr= [10,5,100,3];
// arr.sort((a,b) => a-b);
// console.log(arr);
// const people = [
//     {name: "Alice", age: 25},
//     {name: "Bob", age:16},
// ];
// people.sort((a,b) => a.age - b.age);
// console.log(people);
// const arr = [1,2,{key: 'value'}];
// const shallowcopy = [...arr];
// const arr = [1,2,{key: 'value'}];
// const shallowcopy = arr.slice();
// const obj = {
//     name: "Alice",
//     age: 22,
//     greet: function(){
//         console.log("Hello!");
//     }
// };
// obj.greet();

// const prototype ={
//     greet(){
//         console.log("Hello");
//     }
// };
// const obj = Object.create(prototype);
// obj.greet();

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// const person = new Person("Alice", 25);
// console.log(person.name);

// const obj = {name:"Alice", age: 22, city: "Wonderland"};
// const entries = Object.entries(obj);
// console.log(entries);
// const obj = {name: "Alice", age: 22};
// Object.entries(obj).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// })
// const obj = {name: "Alice", details: {age:25}};
// const shallowCopy = {...obj};
// shallowCopy.details.age = 30;
// console.log(obj.details.age);
// const obj = {name: "Alice"};
// function greet(greeting, punctuation){
//     console.log(`${greeting}, ${this.name}${punctuation}`);
// }
// const boundGreet = greet.bind(obj,"Hey");
// boundGreet("!");
// const obj ={
//     name: "Alice",
//     greet(){
//         console.log(`Hello, ${this.name}`);
//     }
// };
// const button = document.createElement("button");
// button.textContent = "Click Me";
// document.body.appendChild(button);
// button.addEventListener("click", obj.greet.bind(obj));
// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// function removeDuplicates(arr){
//     let uniqueArr = [];
//     for(let i = 0; i<arr.length; i++){
//         let isDuplicate = false;
//         for(let j = 0; j<arr.length; j++){
//             if(arr[i] === uniqueArr[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// const originalArray = [1,2,3,4,5];
// const result = removeDuplicates(originalArray);
// console.log(result);
// const car = {make: 'Toyota', model: 'Corolla'};
// Object.freeze(car);
// car.make = 'Honda';
// console.log(car.make);
// car.year = 2020;
// console.log(car.year);
// delete car.model;
// console.log(car.model);
const car = {make: "toyota", model: "Corolla"};
Object.seal(car);
car.make = "Honda";
console.log(car.model);
car.year = 2020;
console.log(car.year);
delete car.model;
console.log(car.model);




















































