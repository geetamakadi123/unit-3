
//Destrucuring;

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }
  
//   let box = new Rectangle(12, 13);


// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
  
//     area(){
//       return this.height * this.width;
//     }
  
//   }
  
//   let box = new Rectangle(12, 13);
//   box.area();

// class Person {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(time) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += time
//     }
//     code(time) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= time
//     }
//   }
  

// const sai = new Person('Sai', 15)
// const jay = new Person('Jay', 12)

//Inheritance;

// class Car{
//     constructor(horsePower){
//       this.horsePower = horsePower;
//       this.fuel = 100;
//     }
  
//     consumeFuel(amount){
//       this.fuel -= amount;
//     }
//   }
//   let myCar = new Car(102);


// class Sedan{
//     constructor(name){
//       this.name = name;
//     }
//     printName(){
//       console.log(this.name);
//     }
//   }
//   var mySedan = new Sedan('Civic');


// class Car{
//     constructor(horsePower, name){
//       this.horsePower = horsePower;
//       this.fuel = 100;
//       this.name = name;
//     }
  
//     consumeFuel(amount){
//       this.fuel -= amount;
//     }
//   }
  
//   class Sedan extends Car{
//     printName(){
//       console.log(this.name)
//     }
//   }
  
//   let mySedan = new Sedan(150, 'Civic');
//   mySedan.consumeFuel(10);

//Super
class Car{
    constructor(horsePower, name){
      this.horsePower = horsePower;
      this.fuel = 100;
      this.name = name;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  
  class Sedan extends Car{
    constructor(horsePower, name, numSeats){
      super(horsePower, name);
      this.numSeats = numSeats;
    }
    printName(){
      console.log(this.name);
    }
  
    updateHorsePower(input){
      super.horsePower = input;
    }
  }
//  ---------------------------*******@*******---------------------------------------------------
  class Person {
    constructor(name, energy) {
      this.name = name
      this.energy = energy
    }
    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount
    }
    sleep(time) {
      console.log(`${this.name} is sleeping.`)
      this.energy += time
    }
}
  
class Coder extends Person{
    constructor(name,energy){
        super(name,energy)
    }
    code(time){
        console.log(`${this.name} is coding`)
        this.energy -= time
    }
}


  const sai = new Coder('Sai', 15)
  const jay = new Person('Jay', 12)
  
  sai.code(10)
  jay.sleep(10)