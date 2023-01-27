(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();function g(f){const a="https://geo.ipify.org/api/v2/country,city?apiKey=at_62zPmOu358vpyXyHqxxQ8BQoXQRFa";let d=document.querySelector("#submit-btn"),n=document.querySelector("#search-input"),e=document.querySelector("#ip-info"),r=document.querySelector("#location-info"),s=document.querySelector("#timezone-info"),h=document.querySelector("#isp-info"),p=L.map("map").setView([34.0614,-118.08162],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw"}).addTo(p);let y=L.marker([34.0614,-118.08162]).addTo(p);const u=([o,t])=>{p.setView([o,t],13),y.setLatLng([o,t])};u([34.04915,-118.095462]);let v=async function(o){let t="";/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(o)?t=`${a}&domain=${o}`:t=`${a}&ipAddress=${o}`;try{let i=await(await fetch(t)).json();e.innerHTML=i.ip,r.innerHTML=`${i.location.city} ${i.location.country} ${i.location.postalCode}`,s.innerHTML=i.location.timezone,h.innerHTML=i.isp,u([i.location.lat,i.location.lng])}catch(l){console.log(l)}},m=o=>{let t=document.querySelector(".header"),c=document.createElement("div"),l="<img src='https://cdn-icons-png.flaticon.com/512/2797/2797387.png' class='error-img' alt='error-image'>";c.innerHTML=`${l} Please type in valid ip address`,c.classList.add("error"),o&&t.children.length==2?(t.appendChild(c),t.setAttribute("is-error","true")):!o&&t.children.length==3&&(t.removeChild(t.children[2]),t.setAttribute("is-error","false"))};d.addEventListener("click",o=>{o.preventDefault(),n.value==""||n.value==null?m(!0):(v(n.value),m(!1))})}document.querySelector("#app").innerHTML=`
    <header class='header'>
    
      <div class='wrapper-header'>
       <h1>IP Address Tracker</h1>
        <form method="post" id="search-ip">
          <input type="text" id="search-input" class="search-input" placeholder='Search for any IP address or domain'>
          <button type='submit' class='search-btn' id="submit-btn"><img src="./icon-arrow.svg" alt='arrow-svg'</button>
        </form>
      </div>

      <div class='location-info-cont '>
        <div class='wrapper '>
          <p  id='ip-addrs'>Ip address</p>
          <h3  id="ip-info">192.212.174.101</h3>
        </div>
        <div class='wrapper '>
          <p id='location-text'>Location</p>
          <h3 id='location-info'>Brooklyn, NY 10001</h3>
        </div>
        <div class='wrapper '>
          <p id='timezone-text'>Timezone</p>
          <div class='flex-wrapper'>
           <span>UTC</span>
           <h3 id='timezone-info'>- 05:00 </h3>
          </div>
        </div>
        <div class='wrapper '>
          <p id='isp-text'>isp</p>
          <h3 id='isp-info'>SpaceX Starlink</h3>
        </div>
      </div>
    </header>
    <div id="map"></div>

    
`;g(document.querySelector("#search-ip"));
