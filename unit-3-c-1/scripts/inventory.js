function show(){
    var data = JSON.parse(localStorage.getItem('products'))
    let pro = document.getElementById('all_products')
    pro.style.display = 'grid'
    pro.style.width = '93%'
    pro.style.height = 'auto'
    pro.style.gridTemplateRows = 'auto'
    pro.style.gridTemplateColumns = 'repeat(4,1fr)'
    
    pro.style.margin = 'auto'
    pro.style.marginTop = '30px'
   
    data.forEach(function(el,index){

        let div = document.createElement('div')
        div.style.height = '500px'
        div.style.width = '250px'
        div.style.marginBottom = '40px'
        div.style.boxShadow = ' rgba(0, 0, 0, 0.35) 0px 5px 15px'
        let img = document.createElement('img')
        img.style.width = '100%'
        img.src = el.image
        let p1 = document.createElement('p')
        p1.innerText = el.type
        p1.style.color = 'red'
        p1.style.textAlign = 'center'
        p1.style.fontWeight = 'bold'
        let p2 = document.createElement('p')
        p2.innerText = el.desc
        p2.style.color = 'brown'
         p2.style.textAlign = 'center'
        p2.style.fontWeight = 'bold'
        let p3 = document.createElement('p')
        p3.innerText = el.price
        p3.style.color = 'green'
        p3.style.textAlign = 'center'
        p3.style.fontWeight = 'bold'
        let bin =  document.createElement('button')
        bin.innerText = 'Remove'
        bin.style.marginLeft = '35%'
        bin.addEventListener('click',function(){
            remove(index)
        })
    
        div.append(img,p1,p2,p3,bin)
        all_products.append(div)
     });
}
show()
function remove(index){
    let data = JSON.parse(localStorage.getItem('products')) || []
   
    let newdata = data.filter(function(el,i){
        if(i===index){
            let trash = JSON.parse(localStorage.getItem('products')) || []
            trash.push(el)
            localStorage.setItem('trash',JSON.stringify(trash))
        }

        else{
            return i!=index;
        }
        return i !== index


    })

    localStorage.setItem('products',JSON.stringify(newdata))

    show()
    window.location.reload()
}