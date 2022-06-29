// Add the coffee to local storage with key "coffee"

//var menu = document.getElementById('menu')

async function coffee(){
let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
let res = await fetch(url)
let data = await res.json()


let arr = data.menu.data
console.log(arr)
append(arr)
}
coffee()


function append(data){
    var menu = document.getElementById('menu')
    console.log(data)
    data.forEach(function(el){
        let box = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image

        let p = document.createElement('p')
        p.innerText = el.title

        let p1 = document.createElement('p')
        p1.innerText = el.price
       

        let add_to_bucket = document.createElement('button')
        add_to_bucket.innerText = 'Add to Bucket'
        add_to_bucket.addEventListener('click',function(){
            addb(el)
        })

        box.append(img,p,p1,add_to_bucket)
        menu.append(box)
    })
 }
 function addb(el){
     var arrc = JSON.parse(localStorage.getItem("coffee")) || []
     arrc.push(el)
     localStorage.setItem('coffee',JSON.stringify(arrc))

     var count = document.getElementById('coffee_count')
     count.innerText = arrc.length
 }