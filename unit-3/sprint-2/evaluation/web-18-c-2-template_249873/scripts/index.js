// Add the coffee to local storage with key "coffee"

async function coffee(){
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
    let res = await fetch(url)
    let data = await res.json ()
console.log(data)
     let arr = data.menu.data
     console.log(arr)
     append(arr)
}
coffee()

function append(data){
    var menu =  document.getElementById("menu")
    menu.innerHTML = null;
    console.log(data)

    data.forEach(function(el){
        let container = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.image

        let p = document.createElement("p")
        p.innerText = el.title
        p.style.textAlign = "center"

        let p1 = document.createElement("p")
        p1.innerText = el.price
        p1.style.textAlign = "center"

        let add_to_bucket = document.createElement("button")
        add_to_bucket.setAttribute("id", "add_to_bucket")
        add_to_bucket.innerText = "Add to Bucket"
        add_to_bucket.style.display= "block"
        add_to_bucket.style.margin = "auto"
        add_to_bucket.style.marginBottom = "10px"
        
        add_to_bucket.addEventListener("click",function(){
            add(el)
        })

        container.append(img,p,p1,add_to_bucket);
        menu.append(container);
        
    })
}


function add(el){
    var arrc = JSON.parse(localStorage.getItem("coffee")) || []
    arrc.push(el)
    localStorage.setItem("coffee",JSON.stringify(arrc))

    var count = document.getElementById("coffee_count")
    count.innerText = arrc.length;
}

