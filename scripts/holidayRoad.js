import { parkSelect } from "./parks/parkSelect.js"

export const holidayRoad = (state) => {
    return parkSelect(state.parks)
}