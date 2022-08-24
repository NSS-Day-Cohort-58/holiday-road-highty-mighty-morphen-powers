


export const attractionDetails = (state) => {
    
    let html = "<h4>Attraction Details</h4>"
    if (state.selectedAttractionId && state.attractionDetailsClicked === true) { //if an attraction from the dropdown has been selected AND DETAIL BUTTON CLICKED
        const foundAttraction = state.attractions.find(
            (attraction) => {
                return attraction.id === state.selectedAttractionId //find the attraction object that has been selected
            }
        )
    
    html += `<div>${foundAttraction.description}</div>`
    }
    return html
} 