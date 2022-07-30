
// Why CF

// {
//     name: "",
//     print: function(){
//         console.log(this.name);
//     }
// }

// Traditional way

// function Person(n) {
//   this.name = n;
// }
// Person.prototype.print = function () {
//   console.log(this.name);
// };

// let p1 = new Person("Sanjay");

// console.log(p1);

// class Person {
//   constructor(n) {
//     this.name = n;
//   }

//   print() {
//     console.log(this.name);
//   }
// }

// let p1 = new Person("Anurag");

// console.log(p1);

// 1. Functional programming
// let str = "Pizza";

// function pizza(){
//     return "Pizza";
// }

// let str = pizza();

//Append

// let div = create('div');

// function create(n) {
//   return document.createElement(n);
// }

// 2. Object oriented programming

// let recepie = {
//   items: ["butter", "paneer"],
//   cook: function () {
//     console.log(`cooking ${this.items[0]} ${this.items[1]}`);
//   },
// };

// recepie.cook();

// function items() {
//   return ["Butter", "Paneer"];
// }

// function cook() {
//   let i = items();
//   console.log(`cooking ${i[0]} ${i[1]}`);
// }

// cook();

// CLASS

// WE Problem:-

// Stack :-
// Length, push, pop, peek

// stack = [] length = 0;
// stack[length] = el;

class Stack {
  constructor() {
    this.length = 0;
    this.stack = [];
  }

  push(el) {
    this.stack[this.length] = el;
    this.length++;
  }

  pop() {
    this.stack.pop();
    this.length--;
  }

  peek() {
    return this.stack[this.length - 1];
   }
 }

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(10);

console.log(s1.peek());
s1.pop();
console.log(s1);

// Inheritance

// Object.create(), prototype inheritance

class Mobile {
  // Blueprint
  constructor(b, bt) {
    this.brand = b;
    this.calling = true;
    this.battery = bt;
    //200 properties that are common
  }
}

let m1 = new Mobile("iPhone", 5000);
console.log(m1);

class SmartPhone extends Mobile {
  constructor(b, bt, c, s) {
    super(b, bt);
    this.camera = c;
    this.screeSize = s;
  }
}

let m2 = new SmartPhone("iphone", 5000, "20px", "6inch");
console.log(m2);

// function constructor(a,b){
//     let A = a;
//     let B = b;
// }

// constructor(a,b);
