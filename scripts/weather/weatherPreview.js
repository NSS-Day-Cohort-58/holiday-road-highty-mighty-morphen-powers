import { getApplicationState } from "../dataAccess.js"
import { fetchWeather } from "./WeatherProvider.js"


export const weatherPreview = (state) => {
    if (state.selectedParkId) {
        const foundPark = state.parks.data.find(park => park.id === state.selectedParkId)
        fetchWeather(foundPark).then(() => {
            const applicationState = getApplicationState()
            return `${applicationState.weather.map(weather => {
                return `<li>${weather.main.temp}</li>`}
                ).join("")}`
            })
    } else {
        return `<h3>Weather Preview</h3>`
    }
}