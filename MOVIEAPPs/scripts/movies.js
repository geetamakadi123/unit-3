// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://www.omdbapi.com/?apikey=6a41ddca&s=${query}
// http://www.omdbapi.com/?apikey=a2ef4ed9

// const url=`http://www.omdbapi.com/?i=tt3896198&apikey=a2ef4ed9`

// fetch(url)
// .then(function(res){
//     console.log(res)
//     return res.json();
// }).then(function(res){
//     console.log(res)
// })

var amnt = JSON.parse(localStorage.getItem('amount'))

var wallet = document.getElementById('wallet');
wallet.innerText = amnt;

const search = async() =>{
    try{
      let s = document.getElementById('search').value;
      let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a2ef4ed9&s=${s}`);
      
      let data = await res.json();
    //   console.log(data.Search)
    append(data.Search)
    }
    catch(err){
        console.log(err)
        
    }
}

const append = (videos)=>{
    let movies = document.getElementById('movies');
    movies.innerHTML = null; 
    videos.forEach(({Poster,Title})=>{
        let div = document.createElement("div");

        let img = document.createElement("img")
        img.src = Poster;;
        let title = document.createElement("h4")
        title.innerText = Title;
        let btn = document.createElement("button")
        btn.innerText = "BookNow"
        btn.setAttribute("class","book_now")
       
        let data = {
            Poster , Title
        }
        btn.onclick = ()=>{
            BookOurMovie(data)
        }
        div.append(img,title,btn)
         movies.append(div)
    })
}

const BookOurMovie = (x) =>{
    // console.log("it's working!!");
    window.location = "checkout.html"
    localStorage.setItem('movie',JSON.stringify(x))
}