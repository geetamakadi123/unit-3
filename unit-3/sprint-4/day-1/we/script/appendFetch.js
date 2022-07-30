let getData =async (url) =>{
// this function fetch the data and return the data
    let res= await fetch(url);
    
    let data= await res.json()
    
    //append(data)
    //console.log(data)

    return data
    
    }


// we need container to append the data but we dont have container so dynamically create container inside function (data container)
    
//what to appen 
//where to append
let append= (data,container) => {

      data.forEach((el)=>{
        let mamta=document.createElement("div")
            let p=document.createElement("p")
        
            let img=document.createElement("img")
        
        
            p.innerText=el.title;
        
        
            img.src=el.image
        
        
        mamta.append(img,p)
        
        container.append(mamta)
        
        
        })
    }

    export {getData,append};








