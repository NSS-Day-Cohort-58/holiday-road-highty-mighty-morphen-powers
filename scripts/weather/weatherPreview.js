import { getApplicationState } from "../dataAccess.js"
import { fetchWeather } from "./WeatherProvider.js"


export const weatherPreview = (state) => {
    let html = "<h3>Weather Preview</h3>"
    if (state.selectedParkId) {
        const foundPark = state.parks.data.find(park => park.id === state.selectedParkId)
        const applicationState = getApplicationState()
        const listArray = applicationState.weather.map(weather => {
            const convertedTemp = (1.8*(weather.main.temp-273)) + 32
            return `<li>${Math.round(convertedTemp)} F</li>`
        })
        html += listArray.join("")
    }
    return html
}