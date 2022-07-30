const url = "https://fakestoreapi.com/products";

async function getData(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        append(data);
        console.log(data)


    }catch (err){
        console.log(err);
    }
}

getData();

function append(data){
    let container = document.getElementById("container");

    data.sort(function (a,b){
        return a.price - b.price;
    });
    

    data.forEach(function (el){
        let img = document.createElement("img");
        img.src = el.image;
        img.style.height = "140px";
        img.style.width = "140px";

        let p = document.createElement("p");
        p.innerText = el.title;

        let price = document.createElement("p");
        price.innerText= el.price;

        let div = document.createElement("div");
        div.append(img,p,price);
        container.append(div);
    });
}