import { setPark } from "../dataAccess.js"
import { fetchWeather } from "../weather/WeatherProvider.js"

export const parkSelect = (state) => {
    return `<select id="parkSelect"><option value="">Choose Park</option>
        ${state.parks.data.map(park => { return `<option value="${park.id}" id="park--${park.id}"${park.id === state.selectedParkId ? "selected" : "" }>${park.fullName}</option>` }).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "parkSelect") {
            setPark(event.target.value)
            fetchWeather()
        }
    }
)