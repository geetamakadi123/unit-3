let data=JSON.parse(localStorage.getItem("cart_items"))||[]

function  main(){
    event.preventDefault()
    

    alert("Your order is confirmed ");
    let x=setTimeout(function(){
      alert(`Your order is being Packed  `)
    },3000);
    let x2=setTimeout(function(){
      alert("Your order is in transit  ")
    },8000);
    
    let x3=setTimeout(function(){
      alert("Your order is out for delivery")
    },10000);
    let x4=setTimeout(function(){
      alert("Order delivered")
      window.location.href="index.html"
     
    },12000);
 }
 
