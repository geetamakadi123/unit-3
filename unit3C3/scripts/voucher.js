
let purchase = JSON.parse(localStorage.getItem("purchase"))||[]

document.querySelector(".voucher").addEventListener("click",function(){
  window.location.href="purchase.html"
})
let data= JSON.parse(localStorage.getItem("user"));
console.log(data)

let wallet=document.getElementById("wallet_balance")
wallet.innerText=data.wallet



let url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`
let Feactch = async ()=>{
try{
let res= await fetch(url);

let data= await res.json();
// console.log(data[0].vouchers)
append(data[0].vouchers)
} catch (err){
  console.log(err);
} 
}
Feactch()


function append(data){
let v=document.getElementById("voucher_list")
v.innerHTML=null;
data.forEach((el,i) => {
// console.log(el)

let div1=document.createElement("div");
let img1=document.createElement("img");
img1.setAttribute("id","imimage");
img1.src=el.image
let name1=document.createElement("h2");
name1.innerText=el.name
let price1=document.createElement("p");
price1.innerText=el.price;
let btn=document.createElement("button");
btn.innerText="Buy"
btn.setAttribute("class","buy_voucher")
btn.addEventListener("click",function(){
buyVocher(el,i)
})
div1.append(img1,name1,price1,btn)
v.append(div1)


});

}

function buyVocher(el,i){
purchase.push(el)
let remove=el.price
let val=+document.getElementById("wallet_balance").innerText

if(val>remove){
val=val-remove
wallet.innerText=val
data= JSON.parse(localStorage.getItem("user"));
data.wallet=val
localStorage.setItem("user",JSON.stringify(data))

localStorage.setItem("purchase",JSON.stringify(purchase))
alert("Hurray! purchase successful")
}
else{
alert("Sorry! insufficient balance")
}

}

