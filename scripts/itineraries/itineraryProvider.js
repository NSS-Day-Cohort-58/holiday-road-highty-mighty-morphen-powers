import { setItineraries } from "../dataAccess.js"

const api = "https://oyster-app-2-qmaoo.ondigitalocean.app"

export const sendItinerary = (itineraryObject) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraryObject)
    }

    return fetch(`${api}/itineraries`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        const mainContainer = document.querySelector("#container")
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const fetchItineraries = () => {
    return fetch(`${api}/itineraries`)
    .then(response => response.json())
    .then(
        (itineraries) => {
            setItineraries(itineraries)
        }
    )
}
