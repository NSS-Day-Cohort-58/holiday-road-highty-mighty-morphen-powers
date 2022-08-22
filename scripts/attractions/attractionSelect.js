export const attractionSelect = (attractions) => {
    return `<select id="attractionSelect"><option value=0>Choose Attraction</option>
        ${attractions.data.map(attraction => {return `<option value="${attraction.id}" id="attraction--${attraction.id}">${attraction.name}</option>`}).join("")}</select>`
}