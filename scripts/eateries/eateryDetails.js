


export const eateryDetails = (state) => {
    let html = "<h4>Eatery Details</h4>"
    if (state.selectedEateryId && state.eateryDetailsClicked === true) { //if an eatery from the dropdown has been selected AND DETAIL BUTTON CLICKED
        const foundEatery = state.eateries.find(
            (eatery) => {
                return eatery.id === state.selectedEateryId //find the eatery object that has been selected
            }
        )
    
    html += `<div>${foundEatery.description}</div>`
    }
    return html
}