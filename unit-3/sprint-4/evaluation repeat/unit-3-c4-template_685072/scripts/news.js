// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
let navbar_box = document.querySelector("#navbar");
navbar_box.innerHTML = navbar();

import { search_inpput_news, appednnews } from "../components/fetch.js";

let localnews = JSON.parse(localStorage.getItem("news"));
let box = document.querySelector("#detailed_news");
appednnews(localnews, box);

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
