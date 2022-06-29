// On clicking remove button the item should be removed from DOM as well as localstorage.


function append(){
    let data = JSON.parse(localStorage.getItem("coffee"))
    let menu = document.getElementById('bucket')
    menu.innerHTML = null
    console.log(data)
    data.forEach(function(el,index){
        let box = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image

        let p = document.createElement('p')
        p.innerText = el.title

        let p1 = document.createElement('p')
        p1.innerText = el.price

        let remove_coffee = document.createElement('button')
        remove_coffee.innerText = 'Remove'
        remove_coffee.addEventListener('click',function(){
            remove(index)
        })

        let confirm_checkout = document.createElement('button')
        confirm_checkout.innerText = 'checkout'
        confirm_checkout.addEventListener('click',function(){
            check(el)
        })

        box.append(img,p,p1,remove_coffee,confirm_checkout)
        menu.append(box)
    })
 }
 append()
 function remove(index){
    let data = JSON.parse(localStorage.getItem('coffee')) || []
    let newdata = data.filter(function(el,i){

        if(i==index){
            let trash =  JSON.parse(localStorage.getItem('coffee')) || []
            trash.push(el)
            localStorage.setItem('trash',JSON.stringify(trash))
        }
        else{
            return i!= index
        }
        return i!= index
    })
    localStorage.setItem('coffee',JSON.stringify(newdata))
    append()
 }




 function check(){
     window.location.href = 'checkout.html'
 }