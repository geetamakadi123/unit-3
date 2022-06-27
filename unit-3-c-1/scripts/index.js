//store the products array in localstorage as "products"

let form = document.getElementById("products")
form.style.width = '230px'
form.style.height = 'auto'
form.style.margin = 'auto'
form.style.border = '3px solid green'

let h2 = document.getElementById("h2")
h2.style.color = 'blue'
h2.style.textAlign = 'center'

function products(t,d,p,i){
    this.type = t
    this.desc = d
    this.price = p
    this.image = i
}

function sub(){
    let form = document.getElementById("products")
   
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value
    let image = form.image.value

    var pro = new products(type,desc,price,image)

    var arr = JSON.parse(localStorage.getItem('products')) || []
    arr.push(pro)
    localStorage.setItem('products',JSON.stringify(arr))
   console.log(pro)

}
