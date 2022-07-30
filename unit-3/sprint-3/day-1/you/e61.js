

// let append = (data) => {
//   let container = document.getElementById("results");

//   // console.log(data);
//   // data.forEach((el) => { el.id.videoId/ el.snippet.title
//   data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
//     let div = document.createElement("div");
//     let iframe = document.createElement("iframe");
//     iframe.src = `https://www.youtube.com/embed/${videoId}`;
//     iframe.allow = "fullscreen";
//     let h3 = document.createElement("h3");
//     h3.innerText = title;

//     div.append(iframe, h3);

//     let video = {
//       title,
//       videoId,
//     };

//     div.onclick = () => {
//       playVideo(video);
//     };

//     container.append(div);
//   });
// };

// let playVideo = (video) => {
//  localStorage.setItem("video", JSON.stringify(video));
//   window.location.href = "video.html";
// };


//     console.log(data)
//data.forEach(ele)=>{ele.id.videoId/ele.snippet.title