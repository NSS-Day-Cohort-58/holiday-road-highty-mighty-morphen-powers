import { fetchAttractions } from "./attractions/AttractionProvider.js"
import { getApplicationState } from "./dataAccess.js"
import { fetchEateries } from "./eateries/EateryProvider.js"
import { holidayRoad } from "./holidayRoad.js"
import { fetchParks } from "./parks/ParkProvider.js"

const mainContainer = document.querySelector("#container")

const renderAPIs = () => {
    fetchParks().then(
        () =>  fetchAttractions()
    )
    .then(
        () => fetchEateries()
    )
    .then(
        () => {
            let state = getApplicationState()
            mainContainer.innerHTML = holidayRoad(state)
        }
    )
}

const renderState = () => {
    let state = getApplicationState()
    mainContainer.innerHTML = holidayRoad(state)
}

renderAPIs()

//custom event to re-render html on state change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderState()
    }
)




