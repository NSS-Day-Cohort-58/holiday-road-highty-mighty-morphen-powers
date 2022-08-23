import { setAttraction } from "../dataAccess.js"

export const attractionSelect = (state) => {
    return `<select id="attractionSelect"><option value=0>Choose Attraction</option>
        ${state.attractions.map(attraction => {return `<option value="${attraction.id}" id="attraction--${attraction.id}" ${attraction.id === state.selectedAttractionId ? "selected" : ""}>${attraction.name}</option>`}).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "attractionSelect") {
            setAttraction(parseInt(event.target.value))
        }
    }
)
