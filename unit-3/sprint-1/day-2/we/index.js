




// console.log(this);

// function func() {
//   console.log(this);
// }

// func();

// let obj = {
//   team: "csk",
//   print: function () {
//     console.log(this);
//   },
// };

// obj.print();

// this will always refer to an object
// this will refer either to global or window object or custom object which you created;
// this alsways refers to its parent object

// Create a normal function that will return an object

// function nikeProduct(n, b, p) {
//   let obj = {};
//   obj.name = n;
//   obj.brand = b;
//   obj.price = p;

//   return obj;
// }

// console.log(nikeProduct("shoe", "nike", 100));

// function NikeProduct(n, b, p) {
//   this.name = n;
//   this.brand = b;
//   this.price = p;
//   this.print = function () {
//     console.log(this);
//   };
// }

// let p1 = new NikeProduct("shoe", "nike", 1000);
// let p2 = new NikeProduct("sneaker", "nike", 2000);
// console.log(p1.brand);
// p1.print();
// p2.print();

// What does new do?
// It returns the object and points this to the newly created object

// function Product(name, brand, price) {
//   this.name = name;
//   this.brand = brand;
//   this.price = price;
// }

// // Mould for creating object
// // Blueprint for object

// let arr = [];

// function submitProduct(e) {
//   e.preventDefault();

//   let form = document.getElementById("products");
//   let name = form.name.value;
//   let brand = form.brand.value;
//   let price = form.price.value;

//   let p = new Product(name, brand, price);
//   arr.push(p);

//   console.log(arr);
// }

// -------------- CALL, APPLY, BIND -------------->>>>>>>>>>
// DRY ----> Do not repeat yourself;

let bedroom = {
  name: "bedroom",
  purpose: "sleep",
};

let livingRoom = {
  name: "Living Room",
  purpose: "Rest",
};

let storeRoom = {
  name: "Store Room",
  purpose: "Store",
};

function food(food, food2) {
  console.log(`Serving ${food} and ${food2} in ${this.name}`); // String Literal
  // console.log("Serving" + food + "in" + this.name);
}

// food.call(bedroom, "Pizza");
// food.call(livingRoom, "Pizza");
// food.call(storeRoom, "Pizza");

let arr = ["Pizza"];
food.apply(bedroom, arr);
food.apply(livingRoom, ["Pizza"]);
food.apply(storeRoom, ["Pizza"]);

// let f1 = food.bind(bedroom, "Pizza");
// let f2 = food.bind(livingRoom, "Pizza");
// let f3 = food.bind(storeRoom, "Pizza");

// food.call(bedroom, "Pizza", "samosa");

// food.apply(bedroom, ["Burger", "momos"]);

