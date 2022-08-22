import { setPark } from "../dataAccess"

export const parkSelect = (parks) => {
    return `<select id="parkSelect"><option value=0>Choose Park</option>
        ${parks.data.map(park => { return `<option value="${park.id}" id="park--${park.id}">${park.fullName}</option>` }).join("")}</select>`
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "parkSelect") {
            setPark(parseInt(event.target.value))
        }
    }
)