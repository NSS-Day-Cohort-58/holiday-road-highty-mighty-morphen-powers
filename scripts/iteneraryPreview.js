
export const iteneraryPreview = (state) => {
    let foundPark = state.parks.find(park => {return park.id === state.selectedParkId})
    let foundEatery = state.eateries.find(eatery => {return eatery.id === state.selectedEateryId})
    let foundBiz = state.bizarreries.find(biz => {return biz.id === state.selectedBizId})
    if(foundPark && foundEatery && foundBiz){
            return `<div><h2>Itenerary Preview:</h2></div>
            <div class="parkPreview">
            <h3>${foundPark.fullName}</h3>
            <button type= "button" id="parkDetails" value="${foundPark.id}">Details</button>
            </div>
            <div class="parkPreview">
            <h3>${foundEatery.name}</h3>
            <button type= "button" id="eateryDetails" value="${foundEatery.id}">Details</button>
            </div>
            <div class="parkPreview">
            <h3>${foundBiz.name}</h3>
            <button type= "button" id="parkDetails" value="${foundBiz.id}">Details</button>
            </div>`
    } else {
        return `<div><h2><h2>Itenerary Preview:</h2></div>`
    }
}