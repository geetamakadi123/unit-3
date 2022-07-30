var arr= JSON.parse(localStorage.getItem("Products"))||[];
function submitProduct(event){
    event.preventDefault();
   let form=document.getElementById("products");
  
    let name=form.name.value;
    let category =form.category.value;
    let  image=form.image.value;
    let  price=form.price.value;
    let gender=form.gender.value;
    let sold=form.sold.value;
let p=new SubmitProduct(name,category,image,price,gender,sold)
arr.push(p);
localStorage.setItem("Products",JSON.stringify(arr));
window.location.href="products.html";
}

function  SubmitProduct(name,category,image,price,gender,sold){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;
}
let form = document.getElementById("products")
    form.style.width = "300px"
    form.style.height = "400px"
    form.style.margin = "auto"
    form.style.marginLeft ="470px"
    form.style.paddingLeft ="90px"
    form.style.paddingTop ="30px"
    form.style.border = "1px solid black"
    form.style.backgroundColor = "pink"
    form.style.display = "block"
