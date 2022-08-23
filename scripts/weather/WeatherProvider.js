import { setWeather } from "../dataAccess.js"
import { default as api } from "../Settings.js"

export const fetchWeather = (parkObj) => {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${parkObj.latitude}&lon=${parkObj.longitude}&appid=${api.weatherKey}`


    return fetch(weatherAPI)
    .then(response => response.json())
    .then(
        (weather) => {
            // Store the external state in application state
            setWeather(weather)
        }
    )
}
