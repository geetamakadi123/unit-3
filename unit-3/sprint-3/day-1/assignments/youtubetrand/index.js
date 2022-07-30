

api_key="AIzaSyDqY9OYUkkVIlWbgN4AiqP4tFq3_A75-hw";
// data on console

let Search = async()=>{
    try{
    
    let query=document.getElementById("query").value
    
//let url=`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=${api_key}`
    
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=tranding&key=${api_key}`
     //console.log(url)
    let res= await fetch(url)

    let data=await res.json();

  console.log(data.items)
   append(data.items)
}

catch(err){
     console.log(err)
}

}

// //  append

let  append=(data)=>{
    let container=document.getElementById("result")

    //console.log(data)
data.forEach(({id:{videoId},snippet:{title}}) => {

  //console.log(videoId,title)
 let div=document.createElement("div")

   let iframe =document.createElement("iframe")

     iframe.src=`https://www.youtube.com/embed/nBk7SIMIg7A/${videoId}`


      iframe.allow="fullscreen"
     let h3=document.createElement("h3")

    h3.innerText=title;
     div.append(iframe,h3)


    let video={
         title,
         videoId,
     }

    div.onclick=()=>{
         playVideo(video)
     }

    container.append(div)

})

let playVideo=(video)=>{

    console.log(video)
localStorage.setItem("video",JSON.stringify(video))

window.location.href="video.html"
}

}


// catch (err){
//     console.log(err)
// };


/* <iframe 
width="560" 
height="315" 
src="https://www.youtube.com/embed/TQ9IxBL5mLc" 
title="YouTube video player"
 frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

</iframe> */