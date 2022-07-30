function append(){
    let data = JSON.parse(localStorage.getItem('students')) || []
    let container = document.getElementById('container')
    container.innerHTML = null
     data.forEach(function(el,index){
        let div = document.createElement('div')
       let img = document.createElement('img')
       img.src = el.image;
       let p = document.createElement('p')
       p.innerText = el.name;
       p.style.color = 'green'
       let p1 = document.createElement('p')
       p1.innerText = el.course;
       p1.style.color = 'pink'
       let p2 = document.createElement('p')
       p2.innerText = el.unit;
       p2.style.color = 'brown'
       let p3 = document.createElement('p')
       p3.innerText = el.batch;
       p3.style.color = 'maroon'
       let bin = document.createElement('button')
       bin.innerText = 'Remove'
       bin.addEventListener('click',function(){
           remove(index)
       })
       div.append(img,p,p1,p2,p3,bin)
       container.append(div);
     });
  
}
append();
function remove(index){
    let data = JSON.parse(localStorage.getItem('students')) || []
     let newdata = data.filter(function (el,i){
         if(i===index){
             let trash = JSON.parse(localStorage.getItem('students')) || []
             trash.push(el)
             localStorage.setItem('trash',JSON.stringify(trash))
         }
         else{
             return i!= index;
         }
         return i !== index;
     });

     localStorage.setItem('students',JSON.stringify(newdata))

    append()
}
function calculate(){
    let data = JSON.parse(localStorage.getItem('students')) || []
    let obj = {}
    for(let i = 0; i<data.length; i++){
        if(obj[data[i].batch]==undefined)
        obj[data[i].batch] = 1
        else
        obj[data[i].batch] =obj[data[i].batch] + 1 
    }
    let top = document.getElementById("navbar");
    for(var i in obj){
    let p = document.createElement('p')
    p.append(i,"--",obj[i])
    top.append(p)
     }
}
calculate()
