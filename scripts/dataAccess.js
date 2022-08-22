const applicationState = {}

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





export const setPark = (selectedParkId) => {
    applicationState.selectedParkId = selectedParkId
}