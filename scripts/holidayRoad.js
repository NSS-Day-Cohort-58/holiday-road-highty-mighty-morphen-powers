import { parkSelect } from "./parks/parkSelect.js"
import { attractionSelect } from "./attractions/attractionSelect.js"
import { eaterySelect } from "./eateries/eaterySelect.js"
import { iteneraryPreview } from "./itineraries/iteneraryPreview.js"
import { weatherPreview } from "./weather/weatherPreview.js"
<<<<<<< HEAD
import {attractionDetails } from "./attractions/attractionDetails.js"
import { eateryDetails } from "./eateries/eateryDetails.js"
import { parkDetails } from "./parks/parkDetails.js"
=======
import { itineraryDisplay } from "./itineraries/itineraryList.js"

>>>>>>> main

export const holidayRoad = (state) => {
    return `
    <h1>Holiday Road</h1>
    <section id="options">
        <article id="options--parks">
            ${parkSelect(state)}
        </article>
        <article id="options--attractions">
            ${eaterySelect(state)}
        </article>
        <article id="options--eateries">
            ${attractionSelect(state)}
        </article>
    </section>
    <section id="itinerary">
     ${iteneraryPreview(state)}
        <aside>
            ${weatherPreview(state)}
        </aside>
    </section>
<<<<<<< HEAD
    
    <section id="details">
        ${attractionDetails(state)}
        ${eateryDetails(state)}
        ${parkDetails(state)}
    </section>
=======
    ${itineraryDisplay(state)}
>>>>>>> main
    `
}

