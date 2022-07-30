
function show(){
    var data=JSON.parse(localStorage.getItem("data"))

    let pro=document.getElementById("products_data")

    pro.style.display="grid"

    pro.style.width="93%"

    pro.style.height="auto"

    pro.style.gridTemplateColumns="repeat(4,1fr)"

    pro.style.margin="auto"



    data.forEach(function(el,index){

        let div = document.createElement('div')
        div.style.height = '300px'
        div.style.width = '200px'
        let img = document.createElement('img')
        img.style.width = '100%'
        img.src = el.image
        let p1 = document.createElement('p')
        p1.innerText = el.brand
        p1.style.textAlign = 'center'
        p1.style.fontWeight = 'bold'
        let p2 = document.createElement('p')
        p2.innerText = el.name
         p2.style.textAlign = 'center'
        p2.style.fontWeight = 'bold'
        let p3 = document.createElement('p')
        p3.innerText = el.price
        p3.style.textAlign = 'center'
        let bin =  document.createElement('button')
        bin.innerText = 'remove product'

        bin.setAttribute("id","remove_product")
        bin.style.marginLeft = '35%'
        bin.addEventListener('click',function(){
            remove(index)
        })
    
        div.append(img,p1,p2,p3,bin)
        products_data.append(div)
     });
}
show()
function remove(index){
    let data = JSON.parse(localStorage.getItem('data')) || []
   
    let newdata = data.filter(function(el,i){
        if(i===index){
            let trash = JSON.parse(localStorage.getItem('data')) || []
            trash.push(el)
            localStorage.setItem('trash',JSON.stringify(trash))
        }

        else{
            return i!=index;
        }
        return i !== index


    })

    localStorage.setItem('data',JSON.stringify(newdata))

    show()
    window.location.reload()
}

