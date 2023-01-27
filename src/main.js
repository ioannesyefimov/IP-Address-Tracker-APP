import './sass/main.scss'
import SearchInput from './SearchInput.js'

document.querySelector('#app').innerHTML = `
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

    
`

SearchInput(document.querySelector('#search-ip'))

