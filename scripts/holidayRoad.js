import { parkSelect } from "./parks/parkSelect.js"
import { attractionSelect } from "./attractions/attractionSelect.js"
import { eaterySelect } from "./eateries/eaterySelect.js"

export const holidayRoad = (state) => {
    return `
    <h1>Holiday Road</h1>
    <section id="options">
        <article id="options--parks">
            ${parkSelect(state.parks)}
        </article>
        <article id="options--attractions">
            ${attractionSelect(state.attractions)}
        </article>
        <article id="options--eateries">
            ${eaterySelect(state.eateries)}
        </article>
    </section>
    <section id="itinerary">
        
    </section>
    `
}