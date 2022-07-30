
let data=JSON.parse(localStorage.getItem("cart_items"))||[]

  const url=` https://grocery-masai.herokuapp.com/items`
  getData()
  async function getData(){
try{
let res= await fetch(url);
let smart= await res.json();
appedsfun(smart.data)


} catch(err){
console.log(err)
}
}

function appedsfun(data){
// console.log(data)
let menu=document.getElementById("groceries");
groceries.innerHTML=null;
data.forEach(function(el,i){
  
let div1=document.createElement("div");

let img1=document.createElement("img");
img1.setAttribute("src",el.image);

let name=document.createElement("p")
name.innerText=el.name;
let price=document.createElement("p")
price.innerText=el.price;
 
let btn=document.createElement("button");
btn.setAttribute("class","add_to_cart");
btn.innerText="Add To cart"
btn.addEventListener("click",function(){
  addToCart(el,i)
})


div1.append(img1,name,price,btn);

groceries.append(div1);
});

}




function addToCart(el,i){

data.push(el);
localStorage.setItem("cart_items",JSON.stringify(data))
displayCount()
}

//displayCount()
function displayCount(){
  let count=data.length;
document.getElementById("wallet").innerText=count

}






