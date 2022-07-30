

function Myarray() {
  
    Object.defineProperty(this, "length", {
        value: 0,
        writable: true,
        enumerable: false,
    });

    this.length = arguments.length;

    for (let i = 0; i < this.length; i++) {
        this[i] = arguments[i]
    }

}

// push  function 
Myarray.prototype.push = function (value) {
    var index = this.length;

    this[index] = value;
    this.length++;
    // len
}

// pop  function 
Myarray.prototype.pop = function () {
    var index = this.length - 1;

    delete this[index]
    this.length--;
}

// top   - it will  be return the element at the last index
Myarray.prototype.top = function () {
    var index = this.length - 1;

    return this[index]
}

// printfunction - it will print the elements in a single line (e.g., [1,2,3,4])
Myarray.prototype.print = function () {

    var arr = [];
    for (let i = 0; i < this.length; i++) {
        var elem = this[i];
        arr.push(elem)
    }
    console.log(arr);
}

//printRevers // it will print the elements in a single line in reverse order.
Myarray.prototype.printReverse = function () {
    var arr = [];
    for (let i = this.length - 1; i >= 0; i--) {
        var elem = this[i];
        arr.push(elem);
    }
    console.log(arr)
}

//size // It will return the length of the stack 
Myarray.prototype.size = function () {

    return this.length;
}


var array = new Myarray(1, 2, 3, 4, 5);

console.log('array:', Object.values(array))

array.push(8)
console.log('After Push :', Object.values(array))

array.pop();
console.log('After Pop :', Object.values(array))

console.log("Top element:", array.top())

array.print();

array.printReverse()

console.log("Length of an Array size is", array.size())







