let data=JSON.parse(localStorage.getItem("coffee"))||[]

function  main(){
    event.preventDefault()
    

    alert("Your order is accepted");
    let x=setTimeout(function(){
      alert(`Your order is being Prepared `)
    },3000);
    let x2=setTimeout(function(){
      alert("Your order is being packed")
    },6000);
    
    let x3=setTimeout(function(){
      alert("Your order is out for delivery ")
    },9000);
    let x4=setTimeout(function(){
      alert("Order delivered")
      window.location.href="index.html"
     
    },12000);
    
    
    }
