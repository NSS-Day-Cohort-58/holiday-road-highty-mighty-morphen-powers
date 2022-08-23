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
    applicationState.weather = []
    // mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setAttraction = (selectedAttractionId) => {
    applicationState.selectedAttractionId = selectedAttractionId
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
