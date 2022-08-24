import { getApplicationState } from "../dataAccess.js"
import { fetchWeather } from "./WeatherProvider.js"


export const weatherPreview = (state) => {
    let html = ""
    if (state.selectedParkId) {
        const foundPark = state.parks.data.find(park => park.id === state.selectedParkId)
        const applicationState = getApplicationState()
        const listArray = applicationState.weather.map(weather => {
            const convertedTemp = (1.8*(weather.main.temp-273)) + 32
            const covertFeelsLike = (1.8*(weather.main.feels_like-273)) + 32
            const date = new Date(weather.dt_txt)
            return `<h3>5 Day Weather Preview</h3>
            <ul><h4>${date}</h4>
            <li>Temputure: ${Math.round(convertedTemp)} F</li>
            <li>Feels like: ${Math.round(covertFeelsLike)}</li>
            <li>${weather.weather[0].main}</li>
            <p>${weather.weather[0].description.toUpperCase(0)}!!!!</p><hr>
            </ul>
            </section>`
                    
        })
        html += listArray.join("")
    }
    return html
}



// const [dateValues, timeValues] = weather.dt_txt.split("");

// const [month, day, year] = dateValues.split('-');
// const [hours, minutes, seconds] = timeValues.split(':');

// const date = new Date(+year, +month - 1, +day, +hours, +minutes,);







// let [dateValues, timeValues] = weather.dt_txt.split("");

// const [month, day, year] = dateValues.split("-");
// var options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   hour12: true
// };
// var timeString = timeValues.toLocaleString('en-US', options);


// const date = new Date(+year, +month - 1, +day, +timeString);




