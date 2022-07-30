// class Student {
//     constructor(n){
//         this.name = n;
//         this.batch = 'web 18';
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }



// let s1 = new Student ('aman');
// console.log(s1);



class Stack {
    constructor() {
        this.length = 0;
        this.stack = [];

    }
    //collect all params in array via spread
    push(...arr){

        //console.log(arr)
        //.access each element so that we can push
        arr.forEach((el) =>{
            //push
            let index = this.length;
            this.stack[index] = el;

            this.length++;
        });
    }
    remove(){

        let index = this.length -1;

        delete this.stack[index];

        this.stack.length--;
        this.length--;


    }
    peek(){
       
        return this.stack[this.length -1];


    }

    isEmpty(){

        //condition ? option1 (when true): option2(when false)

        let value = this.length === 0 ? 'Stack is Empty' : `Stack has ${this.length} value`;
        console.log(value);
    }

}


let s1 = new Stack();
s1.push(1,2,3,4,5,6,7,8,9) //arguments into


s1.remove();

let last = s1.peek();
//console.log(last)
console.log(s1);

s1.isEmpty();

//create a stack and aa a push method on it

//WE Problem :-

//stack :-
//length,push,pop,peek

// class Stack {
//     constructor() {
//         this.length = 0;
//         this.stack = [];
//     }
//     push(el) {
//         this.stack[this.length] = el;
//         this.length++
//     }
//     pop() {
//         this.stack.pop();
//         this.length--;
//     }
//     peek() {
//         return this.stack[this.length - 1];
//     }
// }

// let s1 = new Stack();
// s1.push(1)
// s1.push(2)
// s1.push(10)
// s1.pop();
// console.log(s1.peek());
// console.log(s1);
