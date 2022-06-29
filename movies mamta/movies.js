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
      mamta()
  },1000)
  


  
    }

async function mamta(){

    try{

      var search2 = document.getElementById("search").value;
      
      let res = await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search2}`)
    let data = await res.json();
    console.log("data:",data);
    const movies1 = data.Search;
    append(movies1) 

     
  }catch (err){
      console.log(err);
  
  }

}
function append(data){


  movies_div.innerHTML=null;

    data.forEach(function (el,i){
        let box =creat("div");
        box.id="data"
        let image1 = creat("img");
        image1.src=el.Poster
        // image1.style.height="130px";
        // image1.style.width="130px";

      // photo.append(image1)

let p = creat("p");
p.innerText=el.Title;
let btn=document.createElement("button");
btn.setAttribute("id","add_to_bucket");
btn.innerText="movie"
btn.addEventListener("click",function(){
  addToCart(el,i)
})
        //  p.id="movie_name"
         
         box.append(image1,p,btn);
         movies.append(box);

    //   let data ={
    //       Poster,
    //       Title,

    //   }

    //   let btn1 =get("button1");
    //   btn1.onclick=()=>{
    //      showVideo(data); 
    //   }


    })

   
}

function addToCart(el,i){
// console.log("mamta")
  // data.push(el);
  localStorage.setItem("movie",JSON.stringify(el))
  window.location.href="checkout.html"
  //displayCount()
  }
  // displayCount()
  // function displayCount(){
  //   let count=data.length;
  // document.getElementById("coffee_count").innerText=count

  
  
  // }


// const showVideo = (x)=>{
//   window.location.href="checkout.html"
//   localStorage.setItem("movie",JSON.stringify(x));
//}




