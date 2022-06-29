// Store the wallet amount to your local storage with key "amount"
// helper
let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}

get("add_to_wallet").addEventListener("click",add)



function add(){
   let amount1= read("amount");

  //console.log(amount1)
const money = localStorage.getItem('amount') || 0;
  localStorage.setItem("amount",Number(amount1)+Number(money));
     //console.log(Number(amount1)+Number(money))


let display = JSON.parse(localStorage.getItem("amount"));

console.log(display)
get("wallet").innerText=display;
}