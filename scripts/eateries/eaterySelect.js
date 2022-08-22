export const eaterySelect = (eateries) => {
    return `<select id="eaterySelect"><option value=0>Choose Eatery</option>
        ${eateries.data.map(eatery => {return `<option value="${eatery.id}" id="attraction--${eatery.id}">${eatery.businessName}</option>`}).join("")}</select>`
}