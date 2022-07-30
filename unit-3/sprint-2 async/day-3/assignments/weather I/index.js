const key="997773fad909098cbbbd785f929eacaf";
async function getdata(){

            let city =document.getElementById("city").value;
            
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            let res= await fetch(url)
             let data = await res.json()
            append(data); 
            console.log(data)
            
    }
    
    function append(data){
    
                        let container=document.getElementById("container");
                        container.innerHTML=null; 
                        let h2=document.createElement("h2");
                            h2.innerText=data.name;
                            h2.style.color="Black";

                        let p1=document.createElement("p") 
                        p1.innerText= `current temp: ${Math.round(data.main.temp-273)+"°C"}`;

                        p1.style.color="black";
                        
                        let p2=document.createElement("p")
                        p2.innerText=`max temp : ${Math.round(data.main.temp_max-273)+"°C"}`;
                        p2.style.color="black";

                        let p3=document.createElement("p") 
                        p3.innerText= `Min temp: ${Math.round(data.main.temp-273)+"°C"}`;
                        p3.style.color="black";
                        

                        let p4=document.createElement("p")
                        p4.innerText=`Wind Speed : ${data.wind.speed}`;
                        p4.style.color="black";

                        let p5=document.createElement("p")
                        p5.innerText=`Clouds : ${data.clouds.all}`;
                        p5.style.color="black";
                        
                        let p6=document.createElement("p") 
                        p6.innerText=`Sunrise : ${data.sys.sunrise}`;
                        p6.style.color="black";
                        
                        let p7=document.createElement("p")
                        p7.innerText=`Sunset : ${data.sys.sunset}`;
                        p7.style.color="black";

                        
            container.append(h2, p1, p2, p3, p4, p5, p6, p7);

            let iframe= document.getElementById('gmap_canvas');
            iframe.src= `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}

function getLocationWeather() {

    navigator.geolocation.getCurrentPosition(success);
 }
    function success(position) {
    const latitude=position.coords.latitude; 
    const longitude= position.coords.longitude;
    console.log(latitude);
    console.log(longitude);

} 

getLocationWeather()