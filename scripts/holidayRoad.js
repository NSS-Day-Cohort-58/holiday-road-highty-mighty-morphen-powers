import { parkSelect } from "./parks/parkSelect.js"
import { attractionSelect } from "./attractions/attractionSelect.js"
import { eaterySelect } from "./eateries/eaterySelect.js"
import { iteneraryPreview } from "./itineraries/iteneraryPreview.js"
import { weatherPreview } from "./weather/weatherPreview.js"
import {attractionDetails } from "./attractions/attractionDetails.js"
import { eateryDetails } from "./eateries/eateryDetails.js"
import { parkDetails } from "./parks/parkDetails.js"
import { itineraryDisplay } from "./itineraries/itineraryList.js"


export const holidayRoad = (state) => {
    return `
    
    <div id="body1">
    <section id="options">
        <article id="options--parks">
        <h2>Choose Your Trip</h2>
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
        
    </section>
    <section id="details">
        ${parkDetails(state)}
        ${eateryDetails(state)}
        ${attractionDetails(state)}
           
    </section>
   
        <aside>
        
        
            
            ${weatherPreview(state)}
            
        </aside>
        
    </div>

    <div id="body2">
     <section id="itinDis"> 
    ${itineraryDisplay(state)}
    </section>
    </div>
    

    `
}

