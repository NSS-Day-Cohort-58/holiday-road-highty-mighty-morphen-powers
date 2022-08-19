import { setParks } from "../dataAccess.js"
import { default as api } from "../Settings.js"

const parksApi = `https://developer.nps.gov/api/v1/parks?api_key=${api.npsKey}&limit=467`

//create api call to grab retailers
export const fetchParks = () => {
    return fetch(`${parksApi}`)
    .then(response => response.json())
    .then(
        (parks) => {
            // Store the external state in application state
            setParks(parks)
        }
    )
}