function playGame(){
    var randomNumberOne=Math.floor(Math.random()*6)+1;
    var randomImageOnePath ="images/"+randomNumberOne+".png"

    var randomNumberTwo=Math.floor(Math.random()*6)+1;
    var randomImageTwoPath ="images/"+randomNumberTwo+".png"

    var randomNumberThree=Math.floor(Math.random()*6)+1;
    var randomImageThreePath ="images/"+randomNumberThree+".png"

    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageOnePath)

    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageTwoPath) 

    var image3=document.querySelectorAll("img")[2];
    image3.setAttribute("src",randomImageThreePath) 

    if(randomImageOnePath>randomImageTwoPath && randomImageOnePath>randomImageThreePath){
        document.querySelector("h1").innerHTML="Player one wins"
        document.querySelector("h1").style.color = 'green';
        
    }
    else  if(randomImageTwoPath>randomImageOnePath && randomImageTwoPath>randomImageThreePath){
       document.querySelector("h1").innerHTML="Player two wins"
       document.querySelector("h1").style.color = 'yellow';
       }
       else  if(randomImageThreePath>randomImageOnePath && randomImageThreePath>randomImageTwoPath){
       document.querySelector("h1").innerHTML="Player three wins"
       document.querySelector("h1").style.color = 'red';
       }

       else{
        document.querySelector("h1").innerHTML ="Draw"
        document.querySelector("h1").style.color = 'blue';
       }
}
document.querySelector("button").addEventListener("click",playGame)