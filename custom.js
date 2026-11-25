// //////////    class-34 (js) //////////////

// // /////////////normal function
// // // function a(name) {
// // //   return "Hello " + name;
// // // }

// // // console.log(a("Abdullah"));

// // // /////////////arrow function
// // // const ad = (name) => {
// // //   return "Hello " + name;
// // // };

// // // console.log(ad("Abdullah"));

// // // const students = ["abdullah", "ahsan", "md anas", "md siddik"];

// // // //students.push("humaid");
// // // students.pop();
// // // console.log(students);

// // // const student = {
// // //   name: "abdullah",
// // //   age: 27,
// // //   address: "cox's bazar",
// // //   phone: "01607578220",
// // //   gmail: "abdullahalmisbah17@gmail.com",
// // //   subject: "web devlopment",
// // // };
// // // student.age = 25;
// // // console.log(student);
// // // console.log(student);

// // // const students = [
// // //   {
// // //     name: "abdullah",
// // //     age: 27,
// // //     address: "cox's bazar",
// // //     phone: "01607578220",
// // //     gmail: "abdullahalmisbah17@gmail.com",
// // //     subject: "web devlopment",
// // //   },
// // //   {
// // //     name: "ahsanullah",
// // //     age: 20,
// // //     address: "cox's bazar",
// // //     phone: "01607578220",
// // //     gmail: "abdullahalmisbah17@gmail.com",
// // //     subject: "web devlopment",
// // //   },
// // //   {
// // //     name: "md anas",
// // //     age: 27,
// // //     address: "cox's bazar",
// // //     phone: "01607578220",
// // //     gmail: "abdullahalmisbah17@gmail.com",
// // //     subject: "web devlopment",
// // //   },
// // // ];
// // // console.log(students[2].name);
// // // console.log(students);

// // // let myObj1 = {
// // //   fName: "abdullah",
// // //   lName: "anas",
// // //   fullName: function () {
// // //     console.log(this.fName + " " + this.lName);
// // //   },
// // //   skill: ["Html", "css", "javascript"],
// // // };
// // // console.log(myObj1);
// // // myObj1.fullName();

// // function newFunction(fName, lName) {
// //   console.log(fName + "" + lName);
// // }

// // newFunction("abdullah ", "anas");

// // function newFunction(name = " anas shaheb") {
// //   console.log("welcome to our house abdullah" + name);
// // }
// // newFunction();

// // function newFunction1(name) {
// //   console.log("abdullah misbah" + name);
// // }
// // newFunction1(" anas welcome to our house");

// // console.log("abdullah anas");

// // ////************class video 34 practice**********************

// // // let result = 95;

// // // if (result > 90) {
// // //   console.log("tahole A+");
// // // } else if (result > 80) {
// // //   console.log("A");
// // // } else if (result > 70) {
// // //   console.log("A-");
// // // } else if (result < 30) {
// // //   console.log("fail");
// // //let a = 100;
// // // if (a <= 100) {
// // //   console.log("tahole milce");
// // // } else {
// // //   console.log("tahole mileni");
// // // }

// // let a = 100;
// // let b = "anas";
// // if (a === 100 && b === "anas") {
// //   console.log("mone koro dunuta milce");
// // }
// // let c = 100;
// // let d = "anas";
// // if (c === 101 || d === "anas") {
// //   console.log("mone koro kuno akta milce");
// // }

// // //********(truthy valus)********************************
// // // 1.string jodi bitore kissu leka take
// // // 2.integer/number 12345
// // // 3.array []
// // // 4.object {}
// // // 5.true
// // // 6.function () => {}

// // // if (!undefined) {
// // //   console.log("ami shottobadi");
// // // }

// // //*********(falsy valus)*******************************
// // // 1.false
// // // 2.null
// // // 3.undefined
// // // 4.faka ""
// // // 5. 0

// // // let price = 100;

// // // if (!"abdullah al misbah") {
// // //   console.log("price ase");
// // // } else {
// // //   console.log("price nai");
// // // }

// // ///////shortcut

// // let userName = "abcd";
// // if (userName == "") {
// //   console.log("price ase");
// // } else {
// //   console.log("price nai");
// // }
// // // console.log("abdullah al misbah");
// // // console.log(10 >= 1);
// // // let userName = "anas";
// // // console.log(userName);

// // //               assign operator

// // let output = 10;
// // output = 10 ** 3;
// // ///10*10*10 = 1000 tar mani tin ta 10 ke gun korle ja hoi
// // console.log(output);

// // ///          ternary operator    /////////

// // let z = 20;

// // // if (z < 10) {
// // //   z = 20;
// // // } else {
// // //   z = 30;
// // // }

// // // z = z < 10 ? 20 : 36;

// // z = z == 20 ? "tahole thik ase" : "thik nai";
// // console.log(z);

// /////////    class 35   //////////////////////////

// // ///          ternary operator    /////////

// // let a = 20;

// // if (a < 10) {
// //   a = 20;
// // } else {
// //   a = 30;
// // }

// // a = a == 20 ? "tahole thik ase" : "thik nai";

// // a = a < 10 ? 20 : 35;
// // a = a > 10 ? 20 : 40;
// // console.log(a);

// // let day = 1;
// // let output = "";

// // if (day === 1) {
// //   output = "saturday";
// // } else if (day === 2) {
// //   output = "sunday";
// // } else if (day === 3) {
// //   output = "monday";
// // } else if (day === 4) {
// //   output = "tuesday";
// // } else if (day === 5) {
// //   output = "wednesday";
// // } else if (day === 6) {
// //   output = "thursday";
// // } else if (day === 7) {
// //   output = "friday";
// // } else {
// //   output = "Invalid Day";
// // }
// // console.log(output);

// // function getDay(day) {
// //   let output = "";

// //   if (day === 1) {
// //     output = "saturday";
// //   } else if (day === 2) {
// //     output = "sunday";
// //   } else if (day === 3) {
// //     output = "monday";
// //   } else if (day === 4) {
// //     output = "tuesday";
// //   } else if (day === 5) {
// //     output = "wednesday";
// //   } else if (day === 6) {
// //     output = "thursday";
// //   } else if (day === 7) {
// //     output = "friday";
// //   } else {
// //     output = "Invalid Day";
// //   }

// //   return output;
// // }

// // console.log(getDay(6));
// // console.log(getDay(7));

// // function getDay(day) {
// //   output = "";
// //   if (day === 1) {
// //     output = "saturday";
// //   } else if (day === 2) {
// //     output = "sunday";
// //   } else if (day === 3) {
// //     output = "monday";
// //   } else if (day === 4) {
// //     output = "tuesday";
// //   } else if (day === 5) {
// //     output = "wednesday";
// //   } else if (day === 6) {
// //     output = "thursday";
// //   } else if (day === 7) {
// //     output = "friday";
// //   } else {
// //     output = "Invalid Day";
// //   }
// //   return output;
// // }

// // console.log(getDay(6));
// // console.log(getDay(7));
// // console.log(getDay(4));
// // console.log(getDay(5));
// // console.log(getDay(3));
// // console.log(getDay(2));
// // console.log(getDay(8));

// // ///          switch-case    /////////

// // let day = 19;
// // let output = "";

// // switch (day) {
// //   case 1:
// //     output = "saturday";
// //     break;
// //   case 2:
// //     output = "sunday";
// //     break;
// //   case 3:
// //     output = "monday";
// //     break;
// //   case 4:
// //     output = "tuesday";
// //     break;
// //   case 5:
// //     output = "wednesday";
// //     break;
// //   case 6:
// //     output = "thursday";
// //     break;
// //   case 7:
// //     output = "friday";
// //     break;

// //   default:
// //     output = "Invalid Day";
// // }

// // console.log(output);

// ///////////////  loops    /////////////

// // for (let i = 1; i <= 30; i = i + 2) {
// //   console.log(i);
// // }

// // for (let i = 1; i <= 20; i++) {
// //   if (i === 2) {
// //     continue;
// //   }
// //   if (i === 5) {
// //     continue;
// //   }
// //   console.log(i);
// //   if (i === 10) {
// //     break;
// //   }
// // }

// // let arr = [10, 20, 30, 40, 50];
// // for (let num in arr) {
// //   console.log(num);
// // }

// // let obj = {
// //   name: "abdullah al misbah",
// //   age: 10,
// //   phone: "016075",
// //   addrss: "Dhaka",
// //   "birth day": "12 june 2020",
// // };

// // // console.log(obj);
// // for (const key in obj) {
// //   let output = `my ${key} is ${obj[key]}`;
// //   console.log(output);
// // }

// let obj = {
//   name: "md abdullah al misbah",
//   age: 26,
//   address: "cox's bazar",
//   rull: "204",
//   subject: "web devlopment",
//   institute: "ahmad's education",
//   phone: "014838",
//   gmail: "abdu38@gmail>com",
// };
// console.log(obj);
// for (const key in obj) {
//   let output = `my ${key} is ${obj[key]}`;
//   console.log(output);
// }
// // // console.log(obj);
// // for (const key in obj) {
// //   let output = `my ${key} is ${obj[key]}`;
// //   console.log(output);
// // }

// let name = "abdullah al misbah";
// name = "anas";
// console.log(name);
// const nam = "abdullah al misbah";
// console.log(nam);

// // /////////////     class-36      /////////////////

// ////////      block scope ////////////////
// //1.+
// let a = 10;
// console.log(a);

// //2.+
// let b = 20;
// let fn = () => {
//   console.log(b);
// };
// fn();

// //4.+
// let b = 40;
// let fn = () => {
//   {
//     console.log(b);
//   }
// };
// fn();

// //5. +

// let fn = () => {
//   let b = 40;
//   {
//     console.log(b);
//   }
// };
// fn();

// //3.--
// let fn = () => {
//   {
//     let b = 30;
//   }
//   console.log(b);
// };
// fn();
// // 5.--
// {
//   let a = 10;
// }
// {
//   console.log(a);
// }

// {
//   var a = 10;
// }
// {
//   console.log(a);
// }

////////////   hoistin  ///////
// fn();
// function fn() {
//   console.log("this is function");
// }

// let fnn = function () {
//   console.log("this is a function");
// };
// fnn();

// ////function///
// // declaration();
// // function declaration() {
// //   console.log("this is declaration function");
// // }
// // const expression = function () {
// //   console.log("this is expression function");
// // };
// // expression();
// // const arrow = () => {
// //   console.log("this is arrow function");
// // };
// // arrow();
// // const add = () => console.log("this is shortcut arrow function");
// // add();

// //parameter
// // function parameter(name) {
// //   console.log("Hello " + name);
// // }
// // parameter("parameter");
// // const arrowParameter = (name) => {
// //   console.log("Hello " + name);
// // };
// // arrowParameter("arrow parameter");
// // return
// function add(a, b) {
//   return a + b;
// }
// const result = add(100, 200);
// console.log(result);
// const greet = (a, b) => a + b;
// console.log(greet(120, 230));

///222222222222222222222222222222222222222

// function add() {
//   console.log("abdullah al misbah");
// }
// add();
// function greet(name) {
//   console.log("Hello " + name);
// }
// greet("parameter");

// function gret(a, b) {
//   return a + b;
// }
// const result = (100, 200);
// console.log(result);

// const add = function () {
//   console.log("Hello expression");
// };
// add();

// const add = () => {
//   console.log(" hello arrow function");
// };
// add();
// const greet = (name) => {
//   console.log("hello " + name);
// };
// greet(" abdullah al misbah");

// const gret = (a, b) => {
//   return a + b;
// };
// const result = gret(199, 399);
// console.log(result);
// const ad = (a, b) => a + b;
// console.log(ad(28, 38));

// const gr = () => console.log("hello arrow function");
// gr();

// // let obj = {
// //   name: "abdullah al misbah",
// //   age: 10,
// //   phone: "016075",
// //   addrss: "Dhaka",
// //   "birth day": "12 june 2020",
// // };

// // // console.log(obj);
// // for (const key in obj) {
// //   let output = `my ${key} is ${obj[key]}`;
// //   console.log(output);
// // }

// let name = "abdullah al misbah";
// name = "anas";
// console.log(name);

let name = " abdullah al misbah";
name = "anas";
console.log(name);

let a = 28;
console.log(a);

