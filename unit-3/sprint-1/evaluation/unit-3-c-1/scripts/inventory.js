function show(){
    var data = JSON.parse(localStorage.getItem('products'))
    let pro = document.getElementById('all_products')
    pro.style.display = 'grid'
    pro.style.width = '95%'
    pro.style.height = 'auto'
    pro.style.gridTemplateRows = 'auto'
    pro.style.gridTemplateColumns = 'repeat(4,1fr)'
    
    pro.style.margin = 'auto'
    pro.style.marginTop = '30px'
   
    data.forEach(function(elem,index){

        let div = document.createElement('div')
        div.style.height = '500px'
        div.style.width = '250px'
        div.style.marginBottom = '40px'
        div.style.boxShadow = ' rgba(0, 0, 0, 0.35) 0px 5px 15px'
        let img = document.createElement('img')
        img.style.width = '100%'
        img.src = elem.image
        let p1 = document.createElement('p')
        p1.innerText = elem.type
        p1.style.textAlign = 'center'
        p1.style.fontWeight = 'bold'
        p1.style.padding ='20px'
        let p2 = document.createElement('p')
        p2.innerText = elem.desc
         p2.style.textAlign = 'center'
        p2.style.fontWeight = 'bold'
        p2.style.padding ='20px'
        let p3 = document.createElement('p')
        p3.innerText = elem.price
        p3.style.textAlign = 'center'
        p3.style.fontWeight = 'bold'
        p3.style.padding ='20px'
        let btn =  document.createElement('button')
        btn.innerText = 'Remove'
        btn.style.marginLeft = '35%'
        btn.addEventListener('click',function(){
            remove(index)
        })
    
        div.append(img,p1,p2,p3,btn)
        all_products.append(div)
     });
}
show()
function remove(index){
    let data = JSON.parse(localStorage.getItem('products')) || []
   
    let newdata = data.filter(function(elem,i){
        if(i===index){
            let trash = JSON.parse(localStorage.getItem('products')) || []
            trash.push(elem)
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