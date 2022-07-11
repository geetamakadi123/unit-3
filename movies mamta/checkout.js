// let data= JSON.parse(localStorage.getItem("movie"))||[]
let data= JSON.parse(localStorage.getItem("movie"))

// console.log(data)

display1(data)

function display1({Poster,Title}){
    let movies=document.getElementById("movie")
    
            let box =document.createElement("div");
            box.id="data"
            let image1 =document.createElement("img");
            image1.src=Poster
            let para =document.createElement("p");
            para.innerText=Title; 
            box.append(image1,para);
             
   
            movies.append(box);
       
          
}


// <---append ended--->


// <----wallet start--->
let display = JSON.parse(localStorage.getItem("amount"));
let navbar=document.getElementById("navbar")
let htag=document.createElement("h1")
htag.setAttribute("id","wallet")
htag.innerText=display
navbar.append(htag);
// <---Wallent End--->



let confirm=document.getElementById("confirm").addEventListener("click",confirmm)

function confirmm(){
    let tickets=document.getElementById("number_of_seats").value;
    let numtickets=tickets*100;
    if(numtickets<=display){
        console.log(numtickets,typeof(display))
        let amount=display-numtickets;
        localStorage.setItem("amount",JSON.stringify(amount));
        alert("Booking Successful!")
        window.location.reload();
    }
    else{
        alert("Insufficient Balance!")
        window.location.reload();

    }

}