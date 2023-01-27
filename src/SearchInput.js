
 
function SearchInput(element){
    const api_url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_62zPmOu358vpyXyHqxxQ8BQoXQRFa'
    
    
    let submitBtn = document.querySelector('#submit-btn')
    let searchInput = document.querySelector('#search-input');
    let currentIp = document.querySelector('#ip-info')
    let locationInfo = document.querySelector('#location-info')
    let timeZoneInfo = document.querySelector('#timezone-info')
    let ispInfo = document.querySelector('#isp-info')


    let mymap = L.map('map').setView([34.0614, -118.08162], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw'
    }).addTo(mymap);
    let marker = L.marker([34.0614, -118.08162]).addTo(mymap);

    const updateMarker = ([latit, longt]) => {
        mymap.setView([latit,longt], 13);
        marker.setLatLng([latit,longt])
    }
  
  
    updateMarker([34.04915, -118.095462])


    let getGeoLocation = async function(input){
        let url = ''
        let rgxForDomain = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/;
        if(rgxForDomain.test(input)){
            url = `${api_url}&domain=${input}`
        } else {
            url = `${api_url}&ipAddress=${input}`
        }
        try {
            let response = await fetch(url)
            let data = await response.json()
            currentIp.innerHTML = data.ip
            locationInfo.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
            timeZoneInfo.innerHTML = data.location.timezone
            ispInfo.innerHTML = data.isp
            updateMarker([data.location.lat, data.location.lng])

        }
        catch (e){
            console.log(e)

        }
    }

    let throwError = (Boolean) => {
        let headerContainer = document.querySelector('.header')
        let errorDiv = document.createElement('div')
        let errorSvg = `<img src='https://cdn-icons-png.flaticon.com/512/2797/2797387.png' class='error-img' alt='error-image'>`
        errorDiv.innerHTML = `${errorSvg} Please type in valid ip address`
        
        errorDiv.classList.add('error')
        
        if(Boolean && headerContainer.children.length == 2) {
            headerContainer.appendChild(errorDiv)
            headerContainer.setAttribute('is-error', 'true')
        }
        else if(!Boolean && headerContainer.children.length == 3){
            headerContainer.removeChild(headerContainer.children[2])
            headerContainer.setAttribute('is-error', 'false')

        }

    }

    submitBtn.addEventListener('click', e => {
        e.preventDefault()
        if(searchInput.value == '' || searchInput.value == null){
            throwError(true)
        }else {
            getGeoLocation(searchInput.value)
            throwError(false)

        }
    })
   
}


export default SearchInput