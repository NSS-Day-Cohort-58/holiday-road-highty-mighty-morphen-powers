import { fetchAttractions } from "./attractions/AttractionProvider.js"
import { getApplicationState } from "./dataAccess.js"
import { fetchEateries } from "./eateries/EateryProvider.js"
import { holidayRoad } from "./holidayRoad.js"
import { fetchParks } from "./parks/ParkProvider.js"
import { fetchItineraries } from "./itineraries/itineraryProvider.js"

const mainContainer = document.querySelector("#container")

const renderAPIs = () => {
    fetchParks().then(() =>  fetchAttractions())
    .then(() => fetchEateries())
    .then(() => fetchItineraries())
    .then(
        () => {
            let state = getApplicationState()
            mainContainer.innerHTML = holidayRoad(state)
        }
    )
}

const renderState = () => {
    fetchItineraries().then(() => {    
        let state = getApplicationState()
        mainContainer.innerHTML = holidayRoad(state)
    })
}

renderAPIs()

//custom event to re-render html on state change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderState()
    }
)




