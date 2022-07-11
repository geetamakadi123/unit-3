
let purchase = JSON.parse(localStorage.getItem("purchase"))||[]
append(purchase)
let data= JSON.parse(localStorage.getItem("user"));
console.log(data)

let wallet=document.getElementById("wallet_balance")
wallet.innerText=data.wallet


function append(data){
let v=document.getElementById("purchased_vouchers")
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

div1.append(img1,name1,price1)
v.append(div1)


});

}