//store the products array in localstorage as "products"

let form = document.getElementById("form")
form.style.width = "300px"
form.style.height = "400px"
form.style.margin = "auto"
form.style.marginLeft ="20px"
form.style.padding ="20px"
form.style.border = "1px solid black"





function form(name,email,address,amount){
    this.names = name
    this.emails = email
    this.addresse = address
    this.amounts = amount
}

function Submit(){
    let form = document.getElementById("form")
   
    let names = form.name.value;
    let emails = form.email.value;
    let addresse = form.address.value
    let amounts = form.amount.value

    var fro = new form(names,emails,addresse,amounts)

    var arr = JSON.parse(localStorage.getItem('user')) || []
    arr.push(fro)
    localStorage.setItem('user',JSON.stringify(arr))
   console.log(fro)

}
