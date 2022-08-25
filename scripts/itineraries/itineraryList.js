

export const itineraryDisplay = (state) => {
    return `${state.itineraries.map(itinerary => {
        let foundPark = state.parks.data.find(park => {return park.id === itinerary.parkId})
        let foundEatery = state.eateries.find(eatery => {return eatery.id === itinerary.eateryId})
        let foundAttraction = state.attractions.find(att => {return att.id === itinerary.attractionId})
        return `<article id="itinArt">
        <h4>Itinerary ${itinerary.id}</h4>
            
                <p>${foundPark.fullName}</p>
                <p>${foundEatery.businessName}</p>
                <p>${foundAttraction.name}</p>
                </article>`
    }).join("")}`
}