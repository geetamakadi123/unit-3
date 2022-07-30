let data=JSON.parse(localStorage.getItem("book")) || [];

let box=document.getElementById("hotel_details");


append(data);
function append(data){
    box.innerHTML=null;

    data.forEach(function(elem){
             let div=document.createElement("div");
            let img=document.createElement("img");
            img.src=elem.Images.one;
            let p=document.createElement("p");
            p.innerText=elem.Title;
            let p1=document.createElement("p");
            p1.innerText=`RS. ${elem.Price}`;

            
            div.append(img,p,p1);
            box.append(div);
    })
}