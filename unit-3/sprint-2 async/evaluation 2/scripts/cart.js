

let data=JSON.parse(localStorage.getItem("cart_items"))||[]

display(data);


function display(data){

  var total=0;
  let bucket=document.getElementById("cart")
  cart.innerHTML=null
data.forEach(function(el,i) {
  total+=el.price
  document.getElementById("cart_total").innerText=total;

//  <-----appending part------->
  let div1=document.createElement("div");

let img1=document.createElement("img");
img1.setAttribute("src",el.image);

let name=document.createElement("p")
name.innerText=el.name
let price=document.createElement("p")
price.innerText=el.price;
 
let btn=document.createElement("button");
btn.setAttribute("class","remove");
btn.innerText=" Remove "
btn.addEventListener("click",function(){
  RemoveCart(el,i)
})


div1.append(img1,name,price,btn);

cart.append(div1);



});



}
function RemoveCart(el,i){

 data.splice(i,1);
  
localStorage.setItem("cart_items",JSON.stringify(data));
window.location.reload();

}

function checkout(){
  window.location.href="checkout.html"
}


