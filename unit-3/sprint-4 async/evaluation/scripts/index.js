
// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
let navbar_box = document.querySelector("#navbar");
navbar_box.innerHTML = navbar();

import { search_inpput_news } from "../components/fetch.js";

let search = (e) => {
  if (e.key === "Enter") {
    let query = document.querySelector("#search_input").value;
    localStorage.setItem("inputQuery", JSON.stringify(query));
    search_inpput_news(query).then((data) => {
      console.log(data);
      window.location.href = "search.html";
    });
  }
};
document.querySelector("#search_input").addEventListener("keydown", search);
// search();

let defaultnews = () => {
  fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=in`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      appendData(data.articles);
    })
    .catch((err) => {
      console.log("myerr:", err);
    });
};
defaultnews();

function trending() {
  //   console.log(this.id);
  fetch(
    `https://masai-api.herokuapp.com/news/top-headlines?country=${this.id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      appendData(data.articles);
    })
    .catch((err) => {
      console.log("err;", err);
    });
}

let countries = document.querySelector("#sidebar").children;
for (let el of countries) {
  //   console.log(el.id);
  el.addEventListener("click", trending);
}

let container = document.querySelector("#results");
let appendData = (data) => {
  container.innerHTML = null;
  data.map(({ description, title, urlToImage }) => {
    let bigdiv = document.createElement("div");
    bigdiv.setAttribute("class", "news");

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
