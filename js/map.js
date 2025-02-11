let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    )
}else{
    alert("Los servicios de geolocalizacion no estan disponibles")
}



function success(position){
     let latitude = position.coords.latitude;
     let longitude = position.coords.longitude;

     let map = L.map('map',{
        center: [latitude,longitude],
        zoom: 14
     })
     

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'ARCHITECT'}).addTo(map)

     let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude,longitude),
            L.latLng(40.4009579,-3.6906184)
        ],
        language: 'es',
        
        
     }).addTo(map);     
     let nameLatLng = L.latLng(40.4009579, -3.6906184); 

     L.marker(nameLatLng)
        .addTo(map)
        .bindTooltip(`${'ARCHITECH'}<br>${' Paseo de las Delicias, 123'}`).openToolTip();
}

function error(){
    let map = L.map('map',{
        center: [40.4009579,-3.6906184],
        zoom: 14
     })

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'ARCHITECT'}).addTo(map)

     let companyLatLng = L.latLng(40.4009579, -3.6906184); 

     L.marker(companyLatLng)
        .addTo(map)
        .bindPopup(`<b>${'ARCHITECH'}</b><br>${' Paseo de las Delicias, 123'}`);
}