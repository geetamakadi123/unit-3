//store the products array in localstorage as "data"
let form=document.getElementById("product_form")

let h2=document.getElementById("h2")

function Product(b,n,p,i){
    this.brand=b
    this.name=n
    this.price=p
    this.image=i
}

function sub(){
    let form=document.getElementById("product_form")
    let brand = form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;

    let pro=new Product(brand,name,price,image)

    let arr = JSON.parse(localStorage.getItem("data")) || []

        arr.push(pro)
        localStorage.setItem("data",JSON.stringify(arr))
        console.log(pro)
    
}


