let news=JSON.parse(localStorage.getItem("newsdata"));

let userdata=JSON.parse(localStorage.getItem("user"));


import {sidedisplay} from "../components/navbar.js"

  //console.log(userdata)


  let side=document.getElementById("sidebar");

sidedisplay(userdata,side)

//  function sidedisplay(userdata)
//  {

//     let image=document.createElement("img");
//     image.src=userdata.image;

//     let name=document.createElement("p");
//     name.innerText=userdata.name;

//     let email=document.createElement("p");
//     email.innerText=userdata.email;

//     let country=document.createElement("p");
//     country.innerText=userdata.country;

//     side.append(image,name,email,country)
//  }
  




 let container=document.getElementById("detailed_news")

 function display(news)
 {

  
     
        let image=document.createElement("img");
        image.src=news.urlToImage;


        let title=document.createElement("h3");
        title.innerText=news.title;
        
        let author=document.createElement("h4");
         author.innerText=news.description;
        

       

          container.append(image,title,author)

  
 }


 display(news)