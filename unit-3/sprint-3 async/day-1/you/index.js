//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=AIzaSyDqY9OYUkkVIlWbgN4AiqP4tFq3_A75-hw
  
const API_KEY ="AIzaSyDqY9OYUkkVIlWbgN4AiqP4tFq3_A75-hw"

let search = async() =>{
    let query = document.getElementById("query").value;
    let data = await getData(query);
    append(data);
    
   // getData(query);
}

let getData = async(query) =>{
    let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    
    let res = await fetch(url);
    let data = await res.json();
    //append(data.items);
    console.log(data);
    return data.items;
};

let append = (data) => {
    let container = document.getElementById("container")
    container.innerHTML = null;
    data.forEach((el) => {
        let img = document.createElement("img");
         img.src = el.snippet.thumbnails.medium.url;


         let h3 = document.createElement("h3");
         h3.innerText = el.snippet.title;

         //let div = document.createElement("div");
         
         let div = document.createElement("div");
         div.onclick = ()=>{
            saveVideo(el);
        };

         div.setAttribute("class", "video");

         div.append(img,h3);

         container.append(div);



    });
};

let saveVideo = (data) =>{
    localStorage.setItem("video", JSON.stringify(data));
    window.location.href = "video.html";
}

// let sort = async () =>{
//     let data = await getData(q);
//     data = data.sort((a,b) =>{
//         return b.snippet.title - a.snippet.title;

//     });
//     append(data);
// };

// let filter = async () => {
//     let data = await getData(q);
//     console.log(data);
//     data = data.filter((el) => {
//         return el.snippet.channelId == "UCvC4D8onUfXzvjTOM-dBfEA";

//     });
//     append(data);
// };

// let playVideo =() =>{
//     let video = JSON.parse(localStorage.getItem("video"));
//     console.log(video);
//     let id = video.id.videoId;
//     let play_video = document.getElementById("play_video");
//     play_video.src = `https://www.youtube.com.embed/${id}`;
// }