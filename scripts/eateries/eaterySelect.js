import { setEatery } from "../dataAccess.js"

export const eaterySelect = (state) => {
    return `<select id="eaterySelect"><option value=0>Choose Eatery</option>
        ${state.eateries.map(eatery => {return `<option value="${eatery.id}" id="eatery--${eatery.id}" ${eatery.id === state.selectedEateryId ? "selected" : "" }>${eatery.businessName}</option>`}).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "eaterySelect") {
            setEatery(parseInt(event.target.value))
        }
    }
)
