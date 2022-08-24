


export const parkDetails = (state) => {

    let html = "<h4>Park Details</h4>"
    if (state.selectedParkId && state.parkDetailsClicked === true) { //if a park from the dropdown has been selected AND DETAILS BUTTON CLICKED

        const foundPark = state.parks.data.find(
            (park) => {
                return park.id === state.selectedParkId //find the park object that has been selected
            }
        )
    
    html += `<h4>Park Details</h4><div>${foundPark.description}</div>`
    }
    return html
}