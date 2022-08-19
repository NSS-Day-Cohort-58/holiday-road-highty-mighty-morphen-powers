const mainContainer = document.querySelector("#container")

// const render = () => {
//     .then(
//         () => {
//             let state = getApplicationState()
//             mainContainer.innerHTML = parksWebsite(state)
//         }
//     )
// }

//custom event to re-render html on state change
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

// render()