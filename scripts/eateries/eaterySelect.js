import { setEatery } from "../dataAccess.js"

export const eaterySelect = (eateries) => {
    return `<select id="eaterySelect"><option value=0>Choose Eatery</option>
        ${eateries.map(eatery => {return `<option value="${eatery.id}" id="attraction--${eatery.id}">${eatery.businessName}</option>`}).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "eaterySelect") {
            setEatery(parseInt(event.target.value))
        }
    }
)