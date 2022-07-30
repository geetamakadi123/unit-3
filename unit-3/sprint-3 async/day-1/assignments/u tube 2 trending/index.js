//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyDqY9OYUkkVIlWbgN4AiqP4tFq3_A75-hw
  
const API_KEY ="AIzaSyDqY9OYUkkVIlWbgN4AiqP4tFq3_A75-hw"
async function getData(){
    let urll= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${API_KEY}`;
  
   let ress= await fetch(urll)
   let dd= await ress.json();
   append(dd.items)
}
getData();
let  search= async ()=>{
   var input=document.querySelector(".search-bar").value;
   let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${API_KEY}`
     let res= await fetch(url);
     let data = await res.json();
   //   console.log(data);
   append(data.items)
}

// let search = async() =>{
//     var input=document.querySelector(".search-bar").value;
//     let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
//     let res = await fetch(url);
//     let data = await res.json();
//    // let data = await getData(query);
//     append(data.items);
    
//    // getData(query);
// }

// let getData = async(query) =>{
//     let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    
//     let res = await fetch(url);
//     let data = await res.json();
//     //append(data.items);
//     console.log(data);
//     return data.items;
// };

let append = async(data) =>{
    let box=document.querySelector("#result");
    data.forEach(({id:{videoId},snippet:{title} })=>{
        // console.log(videoId,title)
        var div=document.createElement("div")
        
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.allow="fullscreen";
        let ti=document.createElement("h3");
        ti.innerText=title;
        ti.style.color="white"
        div.append(iframe,ti)
        let video={
             title,
             videoId,
         };
        //  console.log(video)
        // playvideo(video)
        div.onclick= function() {
         playvideo(video);
             };
          box.append(div);
    })
}
     let playvideo= (video)=>{
      localStorage.setItem("video",JSON.stringify(video));
      window.location.href="video.html";
     }

// let append = async(data) => {
//     let box=document.querySelector("#result");
//     //container.innerHTML = null;
//     data.forEach((el) => {
//         let img = document.createElement("img");
//          img.src = el.snippet.thumbnails.medium.url;


//          let h3 = document.createElement("h3");
//          h3.innerText = el.snippet.title;

//          //let div = document.createElement("div");
         
//          let div = document.createElement("div");
//          div.onclick = ()=>{
//             saveVideo(el);
//         };

//          div.setAttribute("class", "video");

//          div.append(img,h3);

//          container.append(div);



//     });
// };

// let saveVideo = (data) =>{
//     localStorage.setItem("video", JSON.stringify(data));
//     window.location.href = "video.html";
// }

// let sort = async () =>{
//     let data = await getData(q);
//     data = data.sort((a,b) =>{
//         return b.snippet.title - a.snippet.title;

//     });
//     append(data);
// };