 const api_key="AIzaSyDqY9OYUkkVIlWbgN4AiqP4tFq3_A75-hw";
// data on console

let search = async()=>{
    try{
    
    let query=document.getElementById("query").value
    
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
    // console.log(url)
    let res= await fetch(url)

    let data=await res.json();

  // console.log(data)
     append(data.items)
}

catch(err){
    console.log(err)
}

}
 //  append

 let  append=(data)=>{
     let container=document.getElementById("results")

//     console.log(data)

  data.forEach(({id:{videoId},snippet:{title}}) => {

//  console.log(videoId,title)
  let div=document.createElement("div");

    let iframe =document.createElement("iframe");
      iframe.src=`https://www.youtube.com/embed/${videoId}`;


      iframe.allow="fullscreen"
      let h3=document.createElement("h3")

      h3.innerText=title;
      div.append(iframe,h3)
      container.append(div);
 



     let video={
         title,
         videoId,
        }

        div.onclick=()=>{
            playVideo(video)
        }
   
        container.append(div)
   
      });
   
   let playVideo=(video)=>{
   window.localStorage.setItem("video",JSON.stringify(video))
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

/*<iframe width="560" height="315" src="https://www.youtube.com/embed/F08yyFMSn7M"
 title="YouTube video player" frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 </iframe>*/ 