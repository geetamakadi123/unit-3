
    async function main(){
        let query = document.getElementById("query").value;
        let data = await getData(query);
        append(data);

        // return data.Search;
    }

    async function getData(query){
        const url = `http://www.omdbapi.com/?apikey=f2f13615&s=${query}`;
        let res = await fetch(url);
        let data = await res.json();
        return data.Search;
    }
    function append(data){
        if(!data){
            return;
        }
        let container = document.getElementById("movies");
        container.innerHTML = null;

        data.forEach(function(el){
            let img = document.createElement("img")
            img.src = el.Poster;

            let p = document.createElement("p");
            p.innerText = el.Title;

            let div=document.createElement("div")
            div.setAttribute("class", "movie");
            div.append(img,p)

            container.append(div)
        });

    }

    let id;

    function debounce(func,delay){
        if(id){
            clearTimeout(id);
        }
        id = setTimeout(function (){
            func ();
        },delay);
    }
