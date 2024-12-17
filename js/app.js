// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body")

// buttons.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);
//         if(e.target.id == 'grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id == 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id == 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id == 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })

// const form = document.querySelector('.form')
// form.addEventListener('submit',function(e){
//     e.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = (document.querySelector('#results'))

//     if(height === '' || height < 0 || isNaN(height)){
//         results.innerHTML = `Please give a valid height ${height}`;
//     }else if(weight === '' || weight < 0 || isNaN(weight)){
//         results.innerHTML = `Please give a valid height ${height}`;
//     }else{
//         const bmi = (weight/((height*height)/1000)).toFixed(2)
//         results.innerHTML = `<span>${bmi}</span>`
//     }
// });

// const clock = document.getElementById('clock')
// // const clock = document.querySelector('#clock')

// setInterval(function(){
//     let date = new Date()
//     // console.log(date.tolocalTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
// },1000)

// const randomNumber = parseInt(Math.random() * 100 + 1);
// const submit = document.querySelector('#subt')
// const userInput = document.querySelector('#guessField')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }
// console.log(user.username);

// functioncreateUser(username, score){
//     this.username = username
//     this.score = score
// }
// createUser.prototype.increment = function(){
//     this.score++
// }
// const chai = createUser("chai", 25)
// const tea = createUser("tea", 250)

// class user{
//     constructor(username, email, password){
//         this.email = email;
//         this.username = username;
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "snehasinhg2001march@gmail.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// const nums = [1,2,3,4];
// const multiplyThree = nums.map((nums, i, arr) => {
//     return nums * 3 + i;
// });
// console.log(multiplyThree);

// const sum = nums.reduce((acc, curr, i ,arr)=>{
//     return acc + curr;
// },0)
// console.log(sum);

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this)) temp.push(this[i]);
//     }
//     return temp;
// };

// const nums = [1,2,3,4];
// const moreThanTwo = nums.myFilter((nums) => {
//     return nums > 2;
// });

// console.log(moreThanTwo);

// let students = [
//     {name: "Piyush", rollNumber: 31, marks: 80},
//     {name: "Jenny", rollNumber: 15, marks: 69},
//     {name: "kaushal", rollNumber: 16, marks: 35},
//     {name: "Dilpreet", rollNumber: 7, marks: 55},
// ];
// const names = students.map((stu)=> stu.name.toUpperCase());
// console.log(names);

// const details = students.filter((stud) => stud.marks>60);
// console.log(details);
// const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);
// console.log(details);

// const sum = students.reduce((acc,curr)=>acc+curr.marks, 0)
// console.log(sum);

// const names = students.filter((stu) => stu.marks>60).map(stu=> stu.name);
// console.log(names);

// const totalMarks = students
// .map((stu) => {
//     if(stu.marks > 60){
//         stu.marks += 20
//     }
//     return stu;
// })
// .filter((stu) => stu.marks > 60)
// .reduce((acc, curr) => acc + curr.marks, 0);
// console.log(totalMarks);

// function multiply(...nums){
//     console.log(nums);    
// }
// var arr = [5, 6];
// multiply(arr);

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// makeFunc()(5)

// function createBase(num){
//     return function (innerNum){
//         console.log(innerNum + num);
//     }
// }
// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// function find() {
//     let a = [];
//     for(let i = 0; i< 1000000; i++){
//         a[i] = i*i;
//     }
//     return function(index){
//         console.log(a[index]);  
//     };
// }
// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

// var age = 22;
// if(true){
//     console.log(age);
// }

// let a = 20;
// console.log(a);

// let a = 10;
// let b = 5;
// console.log(a+b);

// let age = 5;
// let status = (age> 18) ? 'I can vote' : 'I cannot vote' ;
// console.log(status);

// let ans = (false || false || false);
// console.log(ans);
// let age = 30;
// if(age >= 18){
//     console.log('can vote');
// }

// let number = 5;
// if(number == 1){
//     console.log('A');
// }
// else if(number == 2){
//     console.log('B');
// }
// else if(number == 3){
//     console.log('C');
// }
// else if(number == 4){
//     if(age > 18){
//         console.log('I can vote');
//     }
//     console.log('D');
// }
// else if(number == 5){
//     console.log('E');
// }
// else{
//     console.log('F');
// }

// let num = 3;
// switch(num){
//     case 1: console.log('A');
//     case 2: console.log('B');
//     case 3: console.log('C');
//     case 4: console.log('D');
//     default: console.log('F');
// }

// for(let i = 1; i<= 10; i++){
//     console.log("babbar");  
// }

// for(let i =5; i>0 ; i--){
//     console.log(i);   
// }

// for(let i = 1; i<=6; i++){
//     if(i == 4){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }
// for(let i = 1; i<=4; i++){
//     if(i == 3){
//         continue;
//     }
//     else
//     console.log(i);
// }

// let i = 1;
// while(i<=10){
//     console.log("sneha");
//     i++;
// }
// let i =1;
// while(i<=6){
//     console.log(i);
//     i++;
// }
// let i =5;
// while(i>0){
//     console.log(i);
//     i--;
// }

// let i =1;
// while(i<5){
//     if(i==3){
//         i++;
//         console.log("inside");
//     }
//     else
//     console.log('Hii');
//     i++;
// }

// let i =5;
// do{
//     console.log(i);
//     i--;
// }while(i>0);

// let firstName = "Love";
// let lastName = "Babbar";
// console.log(typeof(firstName));

// let op1 = 'English';
// let op2 = 'Hindi';
// let finalAns = `${op1} ${op2}`;
// console.log(finalAns);

// console.log(op1.toLowerCase());

// let str = "Babbar";
// console.log(str.substring(2));
// console.log(str.substring(2, 4));

// let sentence = "Hello \"kaise\" ho sare";
// let words = sentence.split(' ');
// console.log(words);

// function sayMyName(){
//     console.log("Love Babbar");
// }
// sayMyName();

// function printCount(){
//     for(let i =1; i<=100; i++){
//         console.log(i);
//     }
// }
// printCount()

// function printNumber(num){
//      console.log("Printing Number:", num);
// }
// printNumber(5);

// function getAverage(num1, num2){
//     let avg = (num1 + num2)/2;
//     console.log("Average: ", avg);
// }
// getAverage(3,6);

// function getSum(a,b,c){
//     let sum = a+ b+c;
//     return sum;
// }
// getSum(1,2,3);
// let ans = getSum(1,2,3);
// console.log("Printing Sum:", ans);

// function getMyName(firstName, lastName){
//     let fullName = firstName +lastName;
//     return fullName; 
// }
// let fullName = getMyName("Love", "Babbar");
// console.log("Full Name:", fullName );

// let fullName = getMyName(7,7);
// console.log("Full Name:", fullName);

// function getMultiplication(a,b){
//     return a*b;
// }
// console.log(getMultiplication(2,10));

// let getExp = (x,y) => {
//     let ans = x**y;
//     return ans;
// }
// console.log(getExp(2,10));

// let obj = {
//     name: "Sneha",
//     age: 22,
//     weight: 50,
//     height: "5ft 3inch",
//     greet: function(){
//         console.log("Hello kaise ho sare");
//     }
// };
// console.log(obj);
// obj.greet();

// let arr = [1,2,3,4,5,6];
// let brr = new Array('love', 1,true);
// brr.push('Babbar');
// brr.pop()
// brr.shift();
// brr.splice(1,2,'kunal')
// console.log(brr);

// let arr = [10,20,30];
// arr.map((number) => {
//     return number*number;
// })

// let arr = [10,20,30,11,21,44,51];
// let ansArray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansArray);
// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })
// let evenArray = arr.filter((number) => {
//     if(number%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(evenArray);

// let arr = [1,2,'love','kunal',null];
// let ans = arr.filter((value) => {
//     if(typeof(value) === 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);

// let arr =[10,20,30,40];
// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// },0)
// console.log(ans);

// let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log(arr);
// let ans = arr.sort((a,b) => b-a)
// console.log(ans);
// console.log(arr.indexOf(4));

// arr.forEach((value, index) => {
//     console.log("Number: ",value, "Index:", index);
// })
// for(let index = 0; index< length; index++){
//     console.log(arr[index]);
// }

// for(let value of arr){
//     console.log(value);
// }

// let fullName = "babbar";
// for(let val of fullName){
//     console.log(val);
// }

// let arr = [10,20,30,40,50];
// let getSum = (arr) => {
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

// console.log(age);
// let age = 25;

// function greetMe(greet, fullName){
//     console.log("Hello", fullName);
//     greet();
    
// }
// function greet(){
//     console.log("Greeting for the day");
// }
// greetMe(greet, "Babbar");

// const arr= [
//     function(a,b){
//         return a+b; 
//     },
//     function(a,b){
//         return a-b; 
//     },
//     function(a,b){
//         return a*b; 
//     },
// ];
// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);

// let obj = {
//     age: 25,
//     wt: 36,
//     ht: 180,
//     greet: () => {
//         console.log("Hello World");
//     }
// }
// console.log(obj.age);
// obj.greet();
// greet();
// let greet = function(){
//     console.log("Hello World");
// }

// var age = 25;
// console.log(age);

// function getAge(){
//     return 190;
// }
// function utility (name ="Love", age = getAge()){
//     console.log(name, " ", age);
// }
// utility();

// let curr = new Date();
// console.log(curr);

// let src = {
//     age: 12,
//     wt: 50,
//     ht: 160
// };
// let dest ={...src};
// console.log("src: ",src);
// console.log("dest: ",dest);

// function greet(name, callback){
//     console.log("Hello " + name);
//     callback();
// }
// function sayGoodBye(){
//     console.log("GoodBye!");
// }
// greet("Sneha", sayGoodBye);

// function fetchData(callback){
//     setTimeout(()=>{
//         const error = Math.random() > 0.5 ? new Error("Something went wrong!") : null;
//         const data = error ? null : {id: 1, name: "John Doe"};
//         callback(error, data);
//     }, 1000);
// }
// fetchData((error, data) => {
//     if(error){
//         console.log("Error:", error.message);
//     } else{
//         console.log("Data", data);
//     }
// });

// const fulfilledPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Operation was successful!");
//     }, 1000);
// });
// fulfilledPromise
// .then((result) => console.log(result))
// .catch((error) => console.error(error));

// const rejectedPromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         reject("Operation failed!");
//     },1000);
// });
// rejectedPromise
// .then((result) => console.log(result))
// .catch((error) => console.error(error));

// function fetchUserData(userId){
//     return new Promise((resolve, reject) => {
//         if(userId === 1){
//             resolve({id:1, name:"John Doe"});
//         }else{
//             reject(new Error("User not found"));
//         }
//     });
// }
// fetchUserData(1)
// .then((data) => console.log("User Data:", data))
// .catch((error) => console.log("Error:", error.message));

// fetchUserData(2)
// .then((data) => console.log("User Data:", data))
// .catch((error) => console.error("Error:", error.message));

// const promise1 = Promise.resolve(10);
// const promise2 = new Promise((resolve) => setTimeout(()=>resolve(20), 1000));
// const promise3 = Promise.resolve(30);

// Promise.all([promise1, promise2, promise3])
// .then((results) => {
//     console.log(results);
// })
// .catch((error) => {
//     console.log("One of the promises failed:", error);
// });
// async function fetchData(){
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//     try{
//         const response = await fetch(apiUrl);
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Fetched Data:", data);
//     } catch(error){
//         console.error("Error fetching data:", error);
//     }
// }
// fetchData();

// function fetchData(){
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//     fetch(apiUrl)
//     .then((response) => {
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Fetched Data:", data);
//     })
//     .catch((error) =>{
//         console.error("Error fetching data:", error);
//     });
// }
// fetchData();

// function checkEvenOdd(number){
//     return new Promise((resolve, reject)=>{
//         if(typeof number !== 'number'){
//             reject(new Error("Input is not a number:"));
//         }else if(number%2===0){
//             resolve(`${number} is even`);
//         }else{
//             reject(`${number} is odd`)
//         }
//     });
// }
// checkEvenOdd(4)
// .then((message)=> console.log("Success:", message))
// .catch((error)=> console.log("Error:", error));

// checkEvenOdd(5)
// .then((message)=> console.log("Success:", message))
// .catch((error) => console.log("Error:", error));

// async function fetchDataFromAPI(){
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//     try{
//         const response = await fetch(apiUrl);

//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log("Fetch Data:", data);
//     }catch (error){
//         console.error("An error occurred");
//     }
// }
// fetchDataFromAPI();

async function fetchAndLogPosttitles(){
    const apiUrl= "https://jsonplaceholder.typicode.com/posts";

    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        posts.forEach((post) => {
            console.log(post.title);
        });
    } catch (error){
        console.error("An error occurred:", error.message);
    }
}
fetchAndLogPosttitles();