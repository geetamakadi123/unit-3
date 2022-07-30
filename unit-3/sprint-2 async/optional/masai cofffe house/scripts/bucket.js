// On clicking remove button the item should be removed from DOM as well as localstorage.

let data=JSON.parse(localStorage.getItem("coffee"))||[]

display(data);

function display(data){

  var total=0;
  let bucket=document.getElementById("bucket")
  bucket.innerHTML=null
data.forEach(function(el,i) {
  total+=el.price
  document.getElementById("total_amount").innerText=total;

//  <-----appending part------->
  let div=document.createElement("div");

let img=document.createElement("img");
img.setAttribute("src",el.image);

let name=document.createElement("p")
name.innerText=el.title
let price=document.createElement("p")
price.innerText=el.price;
 
let btton=document.createElement("button");
btton.setAttribute("id","remove_coffee");
btton.innerText=" Remove "
btton.addEventListener("click",function(){
  RemoveCart(el,i)
})


div.append(img,name,price,btton);

bucket.append(div);


});



}
function RemoveCart(el,i){

 data.splice(i,1);
  
localStorage.setItem("coffee",JSON.stringify(data));
window.location.reload();

}

function checkout(){
  window.location.href="checkout.html"
}


