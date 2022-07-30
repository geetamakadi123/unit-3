
const api_key="997773fad909098cbbbd785f929eacaf";


// async function getData(){
//         let city=document.getElementById("city").value;
    
//         let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    
//     let res= await fetch(url);
    
//     let data= await res.json()
//     // append(data)
//     console.log(data)
    
//     }


    async function getData(lat, lon) {
        let city = document.getElementById("city").value;
        // Destination
        //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
      
        let res = await fetch(url);
      
        let data = await res.json();
      
        append(data);
      
        console.log(data);
      }
    
    function append(data){

        let container=document.getElementById("container");
        container.innerHTML=""
        let h3=document.createElement("h3")
    
        h3.innerText=data.name;
    
        let p1=document.createElement("p")
    
        p1.innerText=`current temp:${data.main.temp}`
    
        let p2=document.createElement("p")
    
    p2.innerText=`max temp:${data.main.temp_max}`
    
    let p3=document.createElement("p")
    
    p3.innerText=`min temp:${data.main.temp_min}`
    
    container.append(h3,p1,p2,p3)
    
    
    let iframe=document.getElementById("gmap_canvas")
    
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

 }

function getLocationWeather(){
    navigator.geolocation.getCurrentPosition(success);


    function success(position){
        const latitude=position.coords.latitude;

        const longitude=position.coords.longitude

        getData(latitude,longitude)
        console.log(latitude)
        console.log(longitude)
    }
}

getLocationWeather()

    