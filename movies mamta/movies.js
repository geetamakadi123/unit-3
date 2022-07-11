// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// helper
let id1;
let data= JSON.parse(localStorage.getItem("movie"))
let read = (id)=>{
    return document.getElementById(id).value
}

let creat = (id)=>{
   return document.createElement(id);
}

let get = (id)=>{
return document.getElementById(id);
}

let display1 = JSON.parse(localStorage.getItem("amount"));
get("wallet").innerText=display1

let movies_div = get("movies");



  async function searchMovies(){
      if(id1){
        clearTimeout(id1)
      }
  id1= setTimeout(()=>{
      picture()
  },1000)
  


  
    }

async function picture(){

    try{

      var search2 = document.getElementById("search").value;
      
      let res = await fetch(`https://www.omdbapi.com/?apikey=f2f13615&s=${search2}`)
    let data = await res.json();
    console.log("data:",data);
    const movies1 = data.Search;
    append(movies1) 

     
  }catch (err){
      console.log(err);
  
  }

}
const append = (videos) =>{


  movies_div.innerHTML=null;

    videos.forEach(({Poster,Title,index}) =>{
        let box =creat("div");
        box.id="data"
        let image1 = creat("img");
        image1.src=Poster
        let title = document.createElement("h4")
        title.innerText = Title;
        let bttn = document.createElement("button")
        bttn.innerText = "BookNow"
        bttn.setAttribute("class","book_now")
     let data = {
      Poster, Title
     }
     bttn.onclick = () =>{
      addToCart(data)
     }

// let para = creat("p");
// para.innerText=Title;
// let bttn=document.createElement("button");
// bttn.setAttribute("class","book_now");
// bttn.innerText="Book now"
// bttn.addEventListener("click",function(){
//   addToCart(el,index)

         
         box.append(image1,title,bttn);
         movies.append(box);

    
    })

   
}

const addToCart = (x) =>{
// console.log("picture")
  // data.push(el);
  localStorage.setItem("movie",JSON.stringify(x))
  window.location.href="checkout.html"
  
  }
 


