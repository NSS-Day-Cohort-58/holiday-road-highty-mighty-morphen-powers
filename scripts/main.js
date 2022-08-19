import { getApplicationState } from "./dataAccess.js"
import { holidayRoad } from "./holidayRoad.js"
import { fetchParks } from "./parks/ParkProvider.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchParks()
    .then(
        () => {
            let state = getApplicationState()
            mainContainer.innerHTML = holidayRoad(state)
        }
    )
}

//custom event to re-render html on state change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()

