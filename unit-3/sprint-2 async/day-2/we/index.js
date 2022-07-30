// tool = fetch;
// address = url;
// destination = server

//API :-

// let x= fetch(); // function

// takes time
// rejected or fulfilled or pending



const url = "https://reqres.in/api/users?page=2";

fetch(url)
.then(function(res)
{
    return res.json();  // collect
    //console.log(data);
})
.then(function(res){
   
    console.log(res)
    append(res.data);
})
.catch(function(err){
    console.log(err);
});

function append(data){
    let container = document.getElementById("container");
    data.forEach(function(el){
        let img = document.createElement("img");
        img.src = el.avatar;
        let p1 = document.createElement('p')
        p1.innerText = el.email;
        let p = document.createElement('p')
        p.innerText = `${el.first_name} ${el.last_name}`;
        

        let div = document.createElement("div");
        div.append(img, p);
        container.append(div);
        
    })
}