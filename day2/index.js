//simple funciton using obj

function nikeProduct(n,t,p){
    let obj= {};
    obj.name = n;
    obj.type =t;
    obj.price = p;
    return obj
}

let x = nikeProduct('shoe','sneaker', 3000)
//console.log("x:",x);

//constructor function

function nikeProductCF(n,t,p){
   
    this.name = n;
    this.type =t;
    this.price = p;
    
}
let y = new nikeProductCF('T-shirt','sport','1997')
console.log("y:",y)
//new->return
//this ->{}

