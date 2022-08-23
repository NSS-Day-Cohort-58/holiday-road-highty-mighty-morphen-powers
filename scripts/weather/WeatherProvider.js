import { getApplicationState, setWeather } from "../dataAccess.js"
import { default as api } from "../Settings.js"

export const fetchWeather = () => {
    
    const state = getApplicationState()
    const foundPark = state.parks.data.find(park => park.id === state.selectedParkId)

    const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${foundPark.latitude}&lon=${foundPark.longitude}&appid=${api.weatherKey}`

    return fetch(weatherAPI)
    .then(response => response.json())
    .then(
        (weather) => {
            // Store the external state in application state
            setWeather(weather)
        }
    )
}
