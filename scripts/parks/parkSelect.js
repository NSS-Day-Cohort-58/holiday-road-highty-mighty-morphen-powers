export const parkSelect = (parks) => {
    return `<select id="parkSelect"><option value=0>Choose Park</option>
        ${parks.data.map(park => {return `<option value="${park.id}" id="park--${park.id}">${park.fullName}</option>`}).join("")}</select>`
}