let userdata=JSON.parse(localStorage.getItem("user"));

import {navbar,sidedisplay} from "../components/navbar.js"


let nav=document.getElementById("navbar");

nav.innerHTML=navbar()
  //console.log(userdata)


  let side=document.getElementById("sidebar");

sidedisplay(userdata,side)

 



let desh=userdata.country;

search(desh)

async function search(value)
{
   
    
    try
    {
          let response=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)

          let data=await response.json()
          console.log(data.articles)

          display(data.articles)

    }

    catch(err)
    {
        console.log(err)
    }
}




 let searchbar=document.getElementById("search_box").addEventListener("keydown",result)

 let container=document.getElementById("news_result")

 async function result(e)
{
    if(e.key=="Enter")
    {
    let query=document.getElementById("search_box").value;
    console.log(query)
    try
    {
          let response=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

          let data=await response.json()
          console.log(data.articles)

          display(data.articles)

    }

    catch(err)
    {
        console.log(err)
    }
}
}





 function display(arr)
 {

    container.innerHTML=null
    arr.forEach(function(elem)
    {
        let card=document.createElement("div");
        card.setAttribute("class","news");
        card.addEventListener('click',function()
        {
            cardfunction(elem)
        })

        let image=document.createElement("img");
        image.src=elem.urlToImage;

        let div=document.createElement("div");

        let title=document.createElement("h3");
        title.innerText=elem.title;
        
        let author=document.createElement("p");
         author.innerText=elem.author;
        div.append(title,author);

        card.append(image,div);

          container.append(card)

    })
 }



 function cardfunction(elem)
 {
    localStorage.setItem("newsdata",JSON.stringify(elem))
    window.location.href="news.html"
 }



 let bag=document.querySelector("#navbar>div").children;

 for(let elem of bag)
 {
    elem.addEventListener("click",buttonfn)
 }


 async function buttonfn()
 {
    search(this.id)

 }



 