
let box=document.querySelector("#hotels_list");


async function getdata(){
    let s=document.getElementById("query").value;
    
    fetcdata(s)
    let n=await fetcdata(s)
   
    append(n);
    }

async function fetcdata(s){
    const url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${s}`;
    let x=await fetch(url);
    let y=await x.json()
    console.log(y.hotels);
    return y.hotels;
    
}

function append(data){
    if(!data){
    return;
}
    box.innerHTML=null;

    data.forEach(function(elem){
             let div=document.createElement("div");
             div.setAttribute("id","hotel")
            let img=document.createElement("img");
            img.src=elem.Images.one;
            let p=document.createElement("p");
            p.innerText=elem.Title;
            let p1=document.createElement("p");
            p1.innerText=`RS. ${elem.Price}`;
            let p2=document.createElement("p");
            if(elem.Ac){
            
            p2.innerText="AC";
            }else{
                p2.innerText="Non-AC";
            }
            let p3=document.createElement("p");
        p3.innerText=`Rating: ${elem.Rating}`;
        let btn=document.createElement("button");
        btn.innerText="Book Now";
        btn.addEventListener("click",function(){
            addData(elem);
        })
            
            div.append(img,p,p1,p2,p3,btn);
            box.append(div);
    })
}

let addData=(elem)=>{

    localStorage.setItem("book",JSON.stringify(elem));
    window.location.href="checkout.html";
}

let id;
function debounce(func,delay){
    if(id) clearTimeout(id);
    id=setTimeout(function(){
        func();
    },delay);
}

