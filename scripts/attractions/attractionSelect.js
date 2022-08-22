import { setAttraction } from "../dataAccess.js"

export const attractionSelect = (attractions) => {
    return `<select id="attractionSelect"><option value=0>Choose Attraction</option>
        ${attractions.map(attraction => {return `<option value="${attraction.id}" id="attraction--${attraction.id}">${attraction.name}</option>`}).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "attractionSelect") {
            setAttraction(parseInt(event.target.value))
        }
    }
)