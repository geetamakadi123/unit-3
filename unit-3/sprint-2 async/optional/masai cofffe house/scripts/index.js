// Add the coffee to local storage with key "coffee"


  const url=`https://masai-mock-api.herokuapp.com/coffee/menu`
  getData()
async function getData(){
try{
let res= await fetch(url);
let smart= await res.json();
appedsfun(smart.menu.data)


} catch(err){
console.log(err)
}
}

function appedsfun(data){
// console.log(data)
let menu=document.getElementById("menu");
menu.innerHTML=null;
data.forEach(function(el,i){
  
let div1=document.createElement("div");

let img1=document.createElement("img");
// img1.setAttribute("src",el.image);
img1.src = el.image;

let name=document.createElement("p")
name.innerText=el.title
let price=document.createElement("p")
price.innerText=el.price;
 
let btn=document.createElement("button");
btn.setAttribute("id","add_to_bucket");
btn.innerText="Add To Bucket"
btn.addEventListener("click",function(){
  addToCart(el,i)
})


div1.append(img1,name,price,btn);

menu.append(div1);
});

}


let data=JSON.parse(localStorage.getItem("coffee"))||[]

function addToCart(el,i){

data.push(el);
localStorage.setItem("coffee",JSON.stringify(data))
displayCount()
}

function displayCount(){
  let count=data.length;
document.getElementById("coffee_count").innerText=count

}






