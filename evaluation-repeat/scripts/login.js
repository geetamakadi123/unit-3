let data=JSON.parse(localStorage.getItem("users")) ||[];


document.querySelector("form").addEventListener("submit",getdata)

function getdata(evemt){
    event.preventDefault();
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;


if(password=="") alert("Wrong credentials")
else if(email==""){
    alert("User doesn't exist, Sign Up")
}else{
       if(checkmail(email,password)==true){
       alert("Login successful!")
    }else{
        alert("Alredy Have an Account")
    }
   
}
}
let checkmail=(mail,pass)=>{
    let f=data.filter((elem)=>{
        return mail===elem.email && pass==elem.password;
    });
    if(f.length>0) return true;
    else return false;
}