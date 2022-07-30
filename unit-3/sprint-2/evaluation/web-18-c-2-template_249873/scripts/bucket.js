// On clicking remove button the item should be removed from DOM as well as localstorage.
// Add the coffee to local storage with key "coffee"

// async function coffee(){
//     let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
//     let res = await fetch(url)
//     let data = await res.json ()
// console.log(data)
//      let arr = data.menu.data
//      console.log(arr)
//     // append(arr)
// }
// coffee()

function append(){
    let data = JSON.parse(localStorage.getItem("coffee"))
    var menu =  document.getElementById("bucket")
    //console.log(data)
    var total = 0;
    menu.innerHTML = null;
    data.forEach(function(el,index){

        total= total+el.price
  document.getElementById("total_amount").innerText=total;
        let container = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.image

        let p = document.createElement("p")
        p.innerText = el.title

        let p1 = document.createElement("p")
        p1.innerText = el.price

        let remove_coffee = document.createElement("button")
        remove_coffee.innerText = "Remove"
        remove_coffee.addEventListener("click",function(){
            remove(index)
        })
        let confirm_checkout = document.createElement("button")
        confirm_checkout.innerText = "checkout";
        confirm_checkout.addEventListener("click",function(){
            check(el)
        })


        container.append(img,p,p1,remove_coffee,confirm_checkout);
        menu.append(container);
        
    })
}
append()


function remove(index){
    var data = JSON.parse(localStorage.getItem("coffee")) || []
    let newdata = data.filter(function(el,i){
        if(i==index){
            let trash = JSON.parse(localStorage.getItem("coffee"))
            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash))

        }
        else{
            return i!= index
        }
        return i!= index;
    })
    append()
    localStorage.setItem("coffee",JSON.stringify(newdata))

    
}

function check(el){
    window.location.href = "checkout.html"
}
// function checkout(){
//     window.location.href="checkout.html"
//   }
  