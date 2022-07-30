/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


let userdata=document.getElementById("submit").addEventListener("click",Myfn)


function Myfn()
{
// event.preventDefault()

    let obj={

        image:document.getElementById("user_pic").value,
        email:document.getElementById("user_email").value,
        country:document.getElementById("user_country").value,
        name:document.getElementById("user_name").value,
    }


    localStorage.setItem("user",JSON.stringify(obj));

   window.location.reload()
}