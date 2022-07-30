//store the products array in localstorage as "products"

let form = document.getElementById("products")
form.style.width = "300px"
form.style.height = "400px"
form.style.margin = "auto"
form.style.marginLeft ="20px"
form.style.padding ="20px"
form.style.border = "1px solid black"

let h2 = document.getElementById("h2")
h2.style.backgroundColor ="blue"
h2.style.color="white"
h2.style.textAlign = "center"



function products(typ,des,pric,image){
    this.type = typ
    this.desc = des
    this.price = pric
    this.image = image
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
