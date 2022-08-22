import { setEatery } from "../dataAccess"

export const eaterySelect = (eateries) => {
    return `<select id="eaterySelect"><option value=0>Choose Eatery</option>
        ${eateries.data.map(eatery => {return `<option value="${eatery.id}" id="eatery--${eatery.id}">${eatery.businessName}</option>`}).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "eaterySelect") {
            setEatery(parseInt(event.target.value))
        }
    }
)