
//const url ="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=997773fad909098cbbbd785f929eacaf";


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



function getLocation() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(pos) {
      const crd = pos.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      getWeatherOnLocation(crd.latitude, crd.longitude);
    }
  }
  
  function getWeatherOnLocation(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=997773fad909098cbbbd785f929eacaf`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        append(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }