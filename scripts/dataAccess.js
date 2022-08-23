const applicationState = {}
const mainContainer = document.querySelector("#container")
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))


export const getApplicationState = () => {
    return structuredClone(applicationState)
}

export const setParks = (parks) => {
    applicationState.parks = parks
}


export const setAttractions = (attractions) => {
    applicationState.attractions = attractions
}

export const setEateries = (eateries) => {
    applicationState.eateries = eateries
    
}
export const setEatery = (selectedEateryId) => {
    applicationState.selectedEateryId = selectedEateryId
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setPark = (selectedParkId) => {
    applicationState.selectedParkId = selectedParkId
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setAttraction = (selectedAttractionId) => {
    applicationState.selectedAttractionId = selectedAttractionId
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
