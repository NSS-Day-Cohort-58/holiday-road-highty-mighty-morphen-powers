const applicationState = {}

export const getApplicationState = () => {
    return structuredClone(applicationState)
}

export const setParks = (parks) => {
    applicationState.parks = parks
}

export const setEateries = (eateries) => {
    applicationState.eateries = eateries
}