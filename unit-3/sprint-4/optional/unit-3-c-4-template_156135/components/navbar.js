function navbar()
{
    return `

    <input type="text" id="search_box" placeholder="search box" >
     <div>
      <h3 id="in">India</h3>
      <h3 id="us">USA</h3>
      <h3 id="ch">China</h3>
      <h3 id="uk">UK</h3>
      <h3 id="nz">New Zealand</h3>
     </div>
    
   
    `
}



function sidedisplay(userdata,side)
 {

    let image=document.createElement("img");
    image.src=userdata.image;

    let name=document.createElement("p");
    name.innerText=userdata.name;

    let email=document.createElement("p");
    email.innerText=userdata.email;

    let country=document.createElement("p");
    country.innerText=userdata.country;

    side.append(image,name,email,country)
 }
  



 

export {navbar,sidedisplay}