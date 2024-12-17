// document.addEventListener("DOMContentLoaded", function(){
    
//     const searchButton = document.getElementById("search-btn");
//     const usernameInput = document.getElementById("user-input");
//     const statsContainer = document.querySelector(".stats-container");
//     const easyProgressCircle = document.querySelector(".easy-progress");
//     const mediumProgressCircle = document.querySelector(".medium-progress");
//     const hardProgressCircle = document.querySelector(".hard-progress");
//     const easyLable = document.getElementById("easy-lable");
//     const mediumLable = document.getElementById("medium-lable");
//     const hardLable = document.getElementById("medium-lable");
//     const cardStatsContainer = document.querySelector(".stats-cards");

//     function validateUsername(username){
//         if(username.trim() === ""){
//             alert("USername should be empty");
//             return false;
//         }
//         const regex = /^[a-zA-Z0-9-]{1,15}$/;
//         const isMatching = regex.test(username);
//         if(!isMatching){
//             alert("Invalid username")
//         }
//         return isMatching;
//     }
//     async function fetchUserDetails(username){
//         const url = `https://leetcode.com/graphql>`
//         try{
//             searchButton.textContainer = "Searching...";
//             searchButton.disabled = true;

//             const response = await fetch(url);
//             if(!response.ok){
//                 throw new Error ("Unable to fetch the user details");
//             }
//             const data = await response.json();
//             console.log("Logging data: ", data);           
//         }
//         catch(error){
//             statsContainer.innerHTML = `<p>No data Found</p>`
//         }
//         finally{
//             searchButton.textContainer = "Search";
//             searchButton.disabled = false;
//         }
//     }
//     searchButton.addEventListener('click', function(){
//         const username = usernameInput.value;
//         console.log("loggin username: ", username);
//         if(validateUsername(username)){
//             fetchUserDetails(username);
//         }
        
//     })
// })

// let obj = {id: "1", name: "user22", age: "26", work: "programmer"};
// console.log(object.key(obj));
// console.log(object.values(obj));
// console.log(object.entries(obj));

// const findVowels = str => {
//     let count = 0
//     const vowel = ['a','e','i','o','u']
//     for(let char of str.toLowerCase()){
//         if(Vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// let view;
// function likeTheVideo(){
//     let called = 0;

//     return function(){
//         if(called > 0){
//             console.log("Already Subcried to Roadside Coder");
//         }else{
//             view = "Roadside Coder";
//             console.log("Subscribe to", view);
//             called++
//         }
//     };
// }
// let isSubscribed = likeTheVideo();

// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

// function once(func, context){
//     let ran;
//     return function (){
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     };
// }
//     const hello = () => console.log("hello");
//     hello();
//     hello();
//     hello();
//     hello();

// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(2,6,1));

// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         };
//     };
// }
// console.log(sum(2)(6)(1));

// function evaluate(operation){
//     return function (a){
//         return function (b){
//             if(operation === "sum") return a+b;
//             else if(operation === "multiply") return a*b;
//             else if(operation === "subtraction") return a-b;
//             else if(operation === "divide") return a/b;
//             else return "Invalid Operation";
//         };
//     };
// }
// const sum = evaluate("sum");
// console.log(sum(4)(2));
// console.log(sum(5)(6));

// const user = {
//     name: "Roadside Coder",
//     age: "24"
// };
// delete user.age;
// console.log(user);

// const property = "firstName";
// const name = "Sneha";
// const user = {
//     [property]: name,
// };
// for(key in user){
//     console.log(user[key]);
// }

// const obj = {
//     a: "one",
//     b: "two",
//     c: "three"
// };
// console.log(obj);

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };
// multiplyByTwo(nums);
// function multiplyByTwo(obj){
//     for (key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] *= 2;
//         }
//     }
// }
// console.log(nums);
// const user ={
//     name: "Sneha",
//     age: 22,
// };
// const strObj = JSON.stringify(user);
// // console.log(strObj);
// console.log(JSON.parse(strObj));
// const user = {name: "sneha", age: 22};
// const admin = {admin: true, ...user};
// console.log(admin);

// const settings ={
//     username: "Sneha",
//     level: 19,
//     health: 60,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// let user = {
//     name: "Sneha",
//     age: 22,
// };
// const name= "Roadside Coder";
// const { name: myName } = user;
// console.log(myName);

// function getItems(fruitList, favFruit, ...args){
//     return [...fruitList, ...args,favFruit];
// }
// console.log(getItems(["banana","apple"],"pear", "orange"));
 
// let c = {greeting: "Hey"};
// let d;
// d = c;
// c.greeting= "Hello";
// console.log(d.greeting);

// console.log({a: 1} == {a: 1});
// console.log({a:1} === {a: 1});
// let person = {name:"Sneha"};
// const members = [person];
// person = null;
// console.log(members);

// function changeAndReference(person){
//     person.age = 25;
//     person ={
//         name: "sneha",
//         age: 22,
//     };
//     return person;
// }
// const personObj1 = {
//     name: "Alex",
//     age: 30,
// };
// const personobj2 = changeAndReference(personObj1);
// console.log(personObj1);
// console.log(personobj2);

// class user{
//     constructor(n){
//         this.name = n;
//     }
//     getName(){
//         console.log(this.name);
//     }
// }
// const User = new user("Sneha");
// User.getName();

// var obj = { name: "Sneha"};
// function sayHello(age, profession){
//     return " Hello " + this.name + " is " + age + " and is an " + profession;
// }
// console.log(sayHello.call(obj,24,"Software Developer"));

// const person = { name: "Sneha"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }
// console.log(sayHi.call(person,24));
// console.log(sayHi.bind(person, 24));

// const animals = [
//     { species: "Lion", name: "King"},
//     {species: "Whale", name: "Queen"},
// ];
// function printAnimals(i){
//     this.print = function(){
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
// }
// for(let i = 0; i<animals.length; i++){
//     printAnimals.call(animals[i], i)
// }
// const age = 10;
// var person ={
//     name: "Sneha",
//     age: 20,
//     getAgeArrow: () => console.log(this.age),
//     getAge: function(){
//         console.log(this.age);  
//     },
// };
// var person2 = {age: 24};
// person.getAgeArrow.call(person2);
// person.getAge.call(person2);

// let car1= {
//     color: "Red",
//     company: "Ferrari",
// };
// function purchaseCar(currency, price){
//     console.log(`I Have ${this.color} - ${this.company} car for ${currency}${price}`);
// }
// // purchaseCar.call(car1, "₹", 5000000);
// Function.prototype.myCall = function(context = {}, ...args){
//     if(typeof this !== "function"){
//         throw new Error(this + "It's not Callable");
//     }
//     context.fn = this;
//     context.fn(...args);
// };
// console.log("start");
// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = false;
//         if(result) resolve("Subscribe to Roadside Coder");
//         else reject (new Error("Why aren't you subscribed to Roadside Coder? "))
//     }, 2000)
// });
// sub.then((res) => {
//     console.log(res);
// }).catch((err) =>  {
//     console.error(err);
// });
// console.log("stop");

// console.log("start");
// const promise1 = new Promise((resolve, reject) =>{
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });
// promise1.then((res) => {
//     console.log(res);
// });
// console.log("end");

// function job(state){
//     return new Promise(function (resolve, reject){
//         if(state){
//             resolve("success");
//         }else{
//             reject("error")
//         }
//     });
// }
// let promise = job(true);
// promise
// .then(function(data){
//     console.log(data);
//     return job(false)
// })
// .catch(function(error){
//     console.log(error);
//     return "Error caught";
// })
// .then(function(){
//     console.log(data);
//     return job (true);
// })
// .catch(function(){
//     console.log(error);
// })

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_passed");
// const count = document.querySelector("increment_count");

// var pressedCount = 0;
// var triggeredCount = 0;

// btn.addEventListener('click',()=>{
//     btnPress.innerHTML = ++pressedCount;
// })

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", func);
// button.addEventListener("click",func);
// form.addEventListener("click",func);

// function func(event){
//     alert("currentTarget = " + event.currentTarget.tagName + ", target = " + event.target.tagName);
// }

// Array.map((num, i ,arr) => { })
// Array.prototype.myMap = function (cb){
//     let temp =[];
//     for (let i = 0; i < this.length; i++) {
//        temp.push(cb(this[i], i, this))
//     }
//     return temp;
// };

// const nums = [1,2,3,4];
// const multiplyThree = nums.myMap((num, i , arr) => {
//     return num*3;
// });
// console.log(multiplyThree);

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this))  temp.push(this[i]);
//     }
//     return temp;
// };
// const nums = [1,2,3,4];
// const moreThanTwo = nums.filter((num) => {
//     return num> 2;
// });
// console.log(moreThanTwo);

// Array.prototype.myReduce = function(cb,initialValue){
//     var accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//       accumulator = accumulator? cb(accumulator,this[i],i,this): this[i];
//     }
//     return accumulator;
// }
// const nums =[1,2,3,4];
// const sum = nums.myReduce((acc, curr, i, arr) => {
//     return acc+ curr;
// },0);
// console.log(sum);

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };
// function purchaseCar(currency, price){
//     console.log(`I have ${this.color} - ${this.company} car for ${currency}${price}`);
// }
// Function.prototype.myCall = function(context = {}, ...args){
//     if(typeof this !== "function"){
//         throw new Error(this + "It's not a callable");
//     }
//     context.fn = this;
//     context.fn(...args);
// };
// purchaseCar.myCall(car1, "rupees", 500000);

// function extractProperties(obj){
//     const {name, age, city} = obj;
//     console.log(name,age, city);
// }
// const person = {
//     name: "Alice",
//     age: 30,
//     city: "New York",
//     country: "USA"
// };
// extractProperties(person);

// function extractProperties(obj){
//     const {name = "unknown", age = 0, city = "unknown"} = obj;
//     console.log(name, age, city);
// }
// const name= "Alice";
// const age = 30;
// const hobby = "reading";
// const sentence = `${name} is ${age} year old and love ${hobby}`;
// console.log(sentence);

// function checkEvenOdd(number){
//     return new Promise ((resolve, reject) => {
//         if(typeof number !== 'number'){
//             reject("Input must be a number.");
//         }else if (number%2 === 0){
//             resolve (`${number} is even`);
//         }else{
//             reject(`${number} is odd`);
//         }
//     });
// }
// checkEvenOdd(4)
//    .then((message) => console.log("Resolved:", message))
//    .catch((error) => console.log("Rejected:", error));

//    checkEvenOdd(5)
//    .then((message) => console.log("Rejected:", message))
//    .catch((error) => console.log("Rejected:", error));

// async function fetchData(apiUrl){
//     try{
//         const response = await fetch(apiUrl);
//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.log("Data fetched successfully:", data);
//     } catch (error){
//         console.error("An error occurred:", error.message);
//     }
// }

// const apiURL = "https://jsonplaceholder.typicode.com/posts";
// fetchData(apiURL);
   
// async function fetchPosts(){
//     const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//     const postList = document.getElementById("post-list");

//     try{
//         const response= await fetch(apiUrl);

//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
//         }
//         const posts = await response.json();

//         posts.forEach((post) => {
//             const listItem = document.createElement("li");
//             listItem.textContent = post.title;
//             postList.appendChild(listItem);
//         });
//     } catch(error){
//         console.error("Error fetching posts:", error.message);
//         const errorMessage = document.createElement("li");
//         errorMessage.textContent = "Failed to load posts. Please try again later";
//         errorMessage.style.color = "red";
//         postList.appendChild(errorMessage);
//     }
// }

// fetchPosts();
   
// const waitAndResolve = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success: The promise has been resolved!");
//     }, 3000);
// });
// waitAndResolve
// .then((message) => console.log(message))
// .catch((error) => console.error("error"));

// async function fetchRandomJoke() {
//     const apiUrl = "https://official-joke-api.appspot.com/random_joke";

//     try{
//         const response = await fetch(apiUrl);
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`)
//         }
//         const joke = await response.json();
//         console.log("Here's a random joke:");
//         console.log(`${joke.setup} - ${joke.punchline}`);
//     } catch(error){
//         console.error("Failed to fetch the joke:", error.message);
//     }
// }
// fetchRandomJoke();

// function createCounter(){
//     let count= 0;
//     return function(){
//         count++;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function createBankAccount(){
//     let balance = 0;
//     return{
//         deposit(amount){
//             if(amount > 0) balance += amount;
//             else console.error("Deposit must be positive");
//         }, withdraw(amount){
//             if(amount > 0 && amount <= balance) balance -= amount;
//             else console.error("Invalid withdrawal amount");
//         },
//         getbalance(){
//             return balance;
//         },
//     };
// }
// const account = createBankAccount();
// account.deposit(100);
// account.withdraw(50);
// console.log(account.getbalance());

// function Book(title, author, price){
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }
// Book.prototype.calculateDiscount = function(percentage){
//     return this.price - (this.price * percentage) / 100;
// };
// const book = new Book("JAVAScript", "John Doe", 500);
// console.log(book.calculateDiscount(10));

// function divide(a, b){
//     if(b === 0){
//         throw new Error("Cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//     console.log(divide(10,2));
//     console.log(divide(10,0));
// } catch(error){
//     console.error(error.message);
// }

// function validateAge(age){
//     if(isNaN(age)){
//         throw new Error("Invalid input: Age must be a number");
//     }
//     if(age<0){
//         throw new Error("Age must be +ve number");
//     }
//     return `Valid age: ${age}`;
// }
// try{
//     const age = prompt("Enter your age:");
//     const result = validateAge(Number(age));
//     console.log(result);
// } catch(error){
//     console.error(error.message);
// }

// class Product{
//     constructor(name, price, taxRate){
//         this.name = name;
//         this.price = price;
//         this.taxRate = taxRate;
//     }
//     calulateTotalPrice(){
//         const taxAmount = (this.price * this.taxRate) / 100;
//         return this.price + taxAmount;
//     }
//     displayDetails(){
//         console.log(`Product:, ${this.name}`);
//         console.log(`Price:, `);
//     }
// }
 