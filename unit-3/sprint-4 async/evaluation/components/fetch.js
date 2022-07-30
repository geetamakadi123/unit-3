let search_inpput_news = async (query) => {
    try {
      let res = await fetch(
        `https://masai-api.herokuapp.com/news?q=${query}`
      );
      let data = await res.json();
      // console.log(data);
      return data;
    } catch (err) {
      console.log("myerr", err);
    }
  };
  
  let appendData = (data, container) => {
    //   container.innerHTML = null;
    data.map(({ description, title, urlToImage, content }) => {
      let bigdiv = document.createElement("div");
      bigdiv.setAttribute("class", "news");
      bigdiv.style.cursor = "pointer";
      bigdiv.addEventListener("click", function () {
        let newsData = {
          title: title,
          image: urlToImage,
          content: content,
        };
        localStorage.setItem("news", JSON.stringify(newsData));
        window.location.href = "news.html";
      });
  
      let img = document.createElement("img");
      img.src = urlToImage;
  
      let div = document.createElement("div");
      div.setAttribute("class", "lines");
  
      let headline = document.createElement("h3");
      headline.innerText = title;
      let desc = document.createElement("p");
      desc.innerText = description;
  
      div.append(headline, desc);
      bigdiv.append(img, div);
      container.append(bigdiv);
    });
  };
  
  let appednnews = (data, box) => {
    let img = document.createElement("img");
    img.src = data.image;
  
    let headline = document.createElement("h3");
    headline.innerText = data.title;
  
    let content = document.createElement("p");
    content.innerText = data.content;
  
    box.append(img, headline, content);
  };
  
  export { search_inpput_news, appendData, appednnews };
  