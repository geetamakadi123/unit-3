// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { search_inpput_news, appendData } from "../components/fetch.js";

import { navbar } from "../components/navbar.js";

let navbar_box = document.querySelector("#navbar");
navbar_box.innerHTML = navbar();

let container = document.querySelector("#results");

let localNews = JSON.parse(localStorage.getItem("inputQuery"));
search_inpput_news(localNews).then((data) => {
  console.log(data.articles);
  container.innerHTML = null;
  appendData(data.articles, container);
});

// console.log(localNews);

let search = (e) => {
  if (e.key === "Enter") {
    let query = document.querySelector("#search_input").value;
    search_inpput_news(query).then((data) => {
      //   console.log(data);

      container.innerHTML = null;
      appendData(data.articles, container);
    });
  }
};
document.querySelector("#search_input").addEventListener("keydown", search);
