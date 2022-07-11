

  document.getElementById("submit").addEventListener("click",formfun)


  function formfun(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value;
    let user= new NewObject(name,email,address,amount)
   localStorage.setItem("user",JSON.stringify(user));
   window.location.reload();
  }
  
  
  function  NewObject(name,email,address,amount){
    this.name=name;
    this.email=email;
    this.address=address;
    this.wallet=amount;
  }
  