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

export const setItineraries = (itineraries) => {
    applicationState.itineraries = itineraries
}
export const setParkDetailsClicked = () => {
    applicationState.parkDetailsClicked = true
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setAttractionDetailsClicked = () => {
    applicationState.attractionDetailsClicked = true
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setEateryDetailsClicked = () => {
    applicationState.eateryDetailsClicked = true
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const clearSelections = () => {
    applicationState.selectedAttractionId = ""
    applicationState.selectedEateryId = ""
    applicationState.selectedParkId = ""
    applicationState.attractionDetailsClicked = false
    applicationState.eateryDetailsClicked = false
    applicationState.parkDetailsClicked = false
}


export const setEatery = (selectedEateryId) => {
    applicationState.selectedEateryId = selectedEateryId
    applicationState.eateryDetailsClicked = false
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setPark = (selectedParkId) => {
    applicationState.selectedParkId = selectedParkId
    applicationState.weather = []
    applicationState.parkDetailsClicked = false
    // mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setAttraction = (selectedAttractionId) => {
    applicationState.selectedAttractionId = selectedAttractionId
    applicationState.attractionDetailsClicked = false
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setWeather= (weatherObj) => {
    let filteredWeather = []
    for (let i=0; i < weatherObj.list.length; i+=8) {
        filteredWeather.push(weatherObj.list[i])
    }
    applicationState.weather = filteredWeather
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

