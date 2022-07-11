




function getData(){
    let city = document.getElementById("query").value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=mamata yaha pe tumhari api key dalana`

    fetch(url)
    .then(function (res){
        return res.json();
        
    })
    .then(function (res){
        console.log(res);
        append(res);
    }).catch(function(err){
        console.log(err);
    })
}


function append(data){
    let url =  `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let container = document.getElementById('container');
    container.innerHTML = null;

    let h2 = document.createElement('h2');
    h2.innerText = data.name;

    let temp = document.createElement('p');
    temp.innerText = `Temp:- ${data.main.temp}`;
    
    let min_temp = document.createElement('p');
    min_temp.innerText = `Min Temp:- ${data.main.temp_min}`;

    let max_temp = document.createElement('p');
    max_temp.innerText = `Mxa Temp:- ${data.main.temp_max}`;

    container.append(h2,temp, min_temp, max_temp);

    let iframe = document.getElementById("gmap_canvas");
    iframe.src = url;

}
//<div class="mapouter"><div class="gmap_canvas">
//<iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=punce&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//<a href="https://123movies-to.org"></a><br>
//<style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embed google map html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>
//</div>

function getLoation(){
    navigator.geolocation.getCurrentPosition(success);

    
}
function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getWeatherOnLocation(crd.latitude, crd.longitude);
  }
  

getLoation();

//let url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=997773fad909098cbbbd785f929eacaf`
function getWeatherOnLocation(lat, lon){
    
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=997773fad909098cbbbd785f929eacaf`

    fetch(url)
    .then(function (res){
        return res.json();
        
    })
    .then(function (res){
        console.log(res);
        append(res);
    }).catch(function(err){
        console.log(err);
    })
}
