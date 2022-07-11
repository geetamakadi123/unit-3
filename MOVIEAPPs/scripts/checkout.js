// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// console.log("helo")

var amnt = JSON.parse(localStorage.getItem("amount"))
var movies = JSON.parse(localStorage.getItem("movie"))

var wallet = document.getElementById("wallet")
wallet.innerHTML = amnt
var display  = document.getElementById("movie");
var img = document.createElement("img")
img.src=movies.Poster;
var title = document.createElement("h4")
title.innerText = movies.Title;

display.append(img,title)
 
function confirmTickets(){
    var seat = document.getElementById('number_of_seats').value;
    var available = seat*100
    if(available<=amnt)
    {
        var rem = amnt - available;
        wallet.innerHTML = rem
        alert("Booking successful!")
       localStorage.setItem('amount',JSON.stringify(rem))

    }
    else if(available>amnt){
        alert("Insufficient Balance!")
        
    }
    else if(amnt==0)
    {
        alert("Insufficient Balance!")
    }
}