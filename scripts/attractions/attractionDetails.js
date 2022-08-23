/*
-click events for the details buttons
-when the button is clicked, call htmlfunction for detail box and rerender html (announce state changed)


htmlfunction 
-loop through array that is in state and grab details that you want displayed and then display them 

 */


export const attractionDetails = (state) => {
    let html = "<h4>Attraction Details</h4>"
    if (state.selectedAttractionId) { //if an attraction from the dropdown has been selected AND DETAIL BUTTON CLICKED
        const foundAttraction = state.attractions.find(
            (attraction) => {
                return attraction.id === state.selectedAttractionId //find the attraction object that has been selected
            }
        )
    
    html += `<div>${foundAttraction.description}</div>`
    }
    return html
}