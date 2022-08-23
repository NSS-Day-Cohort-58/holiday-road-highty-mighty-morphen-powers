import { attractionDetails } from "./attractions/attractionDetails.js"
import { getApplicationState } from "./dataAccess.js"
import { eateryDetails } from "./eateries/eateryDetails.js"

export const iteneraryPreview = (state) => {



    let parkHeading = ""
    let eateryHeading = ""
    let bizHeading = ""

    if (state.selectedParkId) {
        let foundPark = state.parks.data.find(park => { return park.id === state.selectedParkId })
        parkHeading = foundPark.fullName
    }
    if (state.selectedEateryId) {
        let foundEatery = state.eateries.find(eatery => { return eatery.id === state.selectedEateryId })
        eateryHeading = foundEatery.businessName
    }
    if (state.selectedAttractionId) {
        let foundBiz = state.attractions.find(biz => { return biz.id === state.selectedAttractionId })
        bizHeading = foundBiz.name
    }


    return `<div><h2>Itenerary Preview:</h2></div>
            <div class="parkPreview">
            <h3>${parkHeading}</h3>
            <button type= "button" id="parkDetails" ${state.selectedParkId ? "" : "class = 'hidden'"}>Details</button>
            </div>
            <div class="parkPreview">
            <h3>${eateryHeading}</h3>
            <button type= "button" id="eateryDetails" ${state.selectedEateryId ? "" : "class = 'hidden'"}>Details</button>
            </div>
            <div class="parkPreview">
            <h3>${bizHeading}</h3>
            <button type= "button" id="attractionDetails" ${state.selectedAttractionId ? "" : "class = 'hidden'"}>Details</button>
            </div>`
} 





const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "attractionDetails") {  
        let state = getApplicationState()
        attractionDetails(state)
        mainContainer.dispatchEvent( new CustomEvent("stateChanged"))
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "eateryDetails") {  
        let state = getApplicationState()
        eateryDetails(state)
        mainContainer.dispatchEvent( new CustomEvent("stateChanged"))
    }
})

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "parkDetails") {  
        let state = getApplicationState()
        eateryDetails(state)
        mainContainer.dispatchEvent( new CustomEvent("stateChanged"))
    }
})
