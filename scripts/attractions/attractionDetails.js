


export const attractionDetails = (state) => {
    
    let html = ""
    if (state.selectedAttractionId) { //if an attraction from the dropdown has been selected AND DETAIL BUTTON CLICKED
        const foundAttraction = state.attractions.find(
            (attraction) => {
                return attraction.id === state.selectedAttractionId //find the attraction object that has been selected
            }
        )
    
    html += `<h4>Attraction Details</h4><div>${foundAttraction.description}</div>`
    }
    return html
} 



