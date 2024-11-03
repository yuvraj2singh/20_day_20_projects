const timenow = document.querySelector(".hour-min");
const ampm = document.querySelector(".am-pm");
const daydatemonth = document.querySelector(".time h4")
const input_city_name = document.querySelector(".city_input input");
const city_name = document.querySelector('.city h1');
const country_name = document.querySelector('.city p');
const eleparent = document.querySelector('.eleparent');

const search_button = document.querySelector(".nav button");

const API_KEY = '4a3323d572d104aca6ffaa8e91416c6e';
const montharr = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayarr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const hour_in_12hrs = hour >= 13 ? hour % 12 : hour;
    const Datetoday = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    timenow.innerHTML = (hour_in_12hrs < 10 ? "0" + hour_in_12hrs : hour_in_12hrs) + ":" + (min < 10 ? "0" + min : min);
    daydatemonth.innerHTML = dayarr[day] + ', ' + Datetoday + " " + montharr[month];
}, 1000);

search_button.addEventListener('click', async () => {
    try {
        const success = await get_lat_lon();
        if (success) {
            city_name.innerHTML = input_city_name.value.toUpperCase();
            await getWeatherData(lat, lon);
        } else {
            city_name.innerHTML = "Invalid city name";
            country_name.innerHTML="";
            eleparent.innerHTML = 'Enter a valid city name!';
        }
    } catch (error) {
        console.error("Error in search:", error);
        eleparent.innerHTML = 'Error fetching weather data. Please try again later.';
    }
});

let lat = 0;
let lon = 0;

async function get_lat_lon() {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input_city_name.value}&appid=${API_KEY}`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error('Invalid city name');
        }
        
        lat = data[0].lat;
        lon = data[0].lon;
        country_name.innerHTML=data[0].country.toUpperCase();
        console.log(data);
        return true; 
    } catch (error) {
        console.error("Error in get_lat_lon:", error);
        return false;
    }
}

async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const ans = await response.json();

        console.log(ans);
        
        
        eleparent.innerHTML = `
            <div class="ele">
                <div class="property">Temperature</div>
                <div class="value">${Math.round((ans.main.temp - 273.15))}°C</div>
            </div>
            <div class="ele">
                <div class="property">Pressure</div>
                <div class="value">${ans.main.pressure} hPa</div>
            </div>
            <div class="ele">
                <div class="property">Humidity</div>
                <div class="value">${ans.main.humidity}%</div>
            </div>
            <div class="ele">
                <div class="property">Wind Speed</div>
                <div class="value">${ans.wind.speed} m/s</div>
            </div>
            <div class="ele">
                <div class="property">Sunrise</div>
                <div class="value">${window.moment(ans.sys.sunrise*1000).format('HH:mm a')}</div>
            </div>
            <div class="ele">
                <div class="property">Sunset</div>
                <div class="value"> ${window.moment(ans.sys.sunset*1000).format("HH:mm a")}</div>
            </div>
            `;
    } catch (error) {
        console.error("Error in getWeatherData:", error);
        eleparent.innerHTML = 'Error fetching weather details. Please try again later.';
    }
}