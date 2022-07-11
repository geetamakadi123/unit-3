// Store the wallet amount to your local storage with key "amount"
var arr= [];
function addMoney(){
    event.preventDefault();3
    var sum=0;
    var money = document.getElementById("amount").value
  
   arr.push(money)
  
   for(var  i=0;i<arr.length;i++){
    sum = sum + Number(arr[i])
}
var wallet = document.getElementById("wallet");
  wallet.innerText = sum

  localStorage.setItem('amount',(sum))
}