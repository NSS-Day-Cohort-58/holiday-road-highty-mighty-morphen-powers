import { setEateries } from "../dataAccess.js"

const eateriesAPI = "http://holidayroad.nss.team/eateries"

// Create API to get eatery data
export const fetchEateries = () => {
    return fetch(eateriesAPI)
    .then(response => response.json())
    .then(eatery => setEateries(eatery))
}