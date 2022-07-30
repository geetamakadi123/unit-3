class Car{

    constructor(n,b){
 
       this.name=n
       this.brand=b
    }
 
    showDetails(){
       console.log(`${this.name} ${this.brand}`)
    }
 }
 var car1 = new SUV('Duster','Renault')
 
 
// Step 1. 
 
 class SUV extends Car{
 
   
 
 }

 //Step 2.


class SUV extends Car{

   constructor(x,y)
 {
    super(x,y)
    
 }
}




//Step 3.


class SUV extends Car{

   constructor(x,y)
 {
    super()
    this.myCar=x
    this.myBrand=y
 }
}



//Step 4.

class SUV extends Car{

   constructor(x,y,b)
 {
    super(x,y)
    this.buyer=b
    
 }
}


//Multilevel Inheritance

class Car {
  constructor(n, b) {
    this.name = n;
    this.brand = b;
  }

  showDetails() {
    console.log(`${this.name} ${this.brand}`);
  }
}

class SUV extends Car {
  constructor(x, y) {
    super(x, y);

    this.buyer = 'swanand';
  }
}

class miniSUV extends SUV {
  constructor(x, y) {
    super(x, y);
    this.type = 'mini-suv';
  }
}

//var car1 = new SUV('duster', 'renault');

//console.log(car1);

var car2 = new miniSUV('duster', 'renault');

console.log(car2);




  class ClassWithPrivateField {
    #privateField;

   
      constructor() {
        this.#privateField = 42;
      }
    }
  
    class SubClass extends ClassWithPrivateField {
      #subPrivateField;
  
      constructor() {
        super();
        this.#subPrivateField = 23;
      }
    }




  //  there is no way to mark a class as abstract in ES6,
//however you can force a class to behave line one by
//	- forcing derived classes to override a method
//	- causing the base class's contructor to throw an error so that it
//			is never used to create instances of the base type*
// *Be careful, as this will cause problems if you do need derived classes
// 	to call super() contructor


class Employee
{
constructor() {
if(this.constructor == Employee){
throw new Error(" Object of Abstract Class cannot be created");
}
}
display(){
throw new Error("Abstract Method has no implementation");
}
}
  
    let x = new ClassWithPrivateField();
    console.log('x:', x.privateField);

    class Manager extends Employee
{
display(){
//super.display();
console.log("I am a Manager");
}
}
//var emp = new Employee;
var mang=new Manager();
mang.display();


//polymorphism

class Vehicle {
    run() {
    console.log( " Vehicle is running " );
    }
    }
    class Car extends Vehicle {
    run() {
    console.log( " Car is running " );
    }
    }
    class Truck extends Vehicle {
    run() {
    console.log( " Truck is running " );
    }
    }
    var v1 = new Vehicle();
    var v2 = new Car();
var v3 = new Truck();
console.log( v1 );
v1.run();
console.log( v2 );
v2.run();
console.log( v3 );
v3.run();
  
       
 