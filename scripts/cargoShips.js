import { getCargoShips, getHaulers } from "./database.js";

export const CargoList = () => {
    const cargoShips = getCargoShips()

    let shipHTML = "<ul>"

    for (const ship of cargoShips) {
        shipHTML+= `
        <li data-type="cargo-ship"
            data-hauler-id="${ship.shipId}"
            data-ship-name="${ship.name}">${ship.name}</li>
        `
    }

    shipHTML+= "</ul>"
    return shipHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if(itemClicked.dataset.type === 'cargo-ship'){
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerId

            // Define a default object for the found hauler
            let haulingShip = { name: '' }

            // Iterate the array of hauler objects
            const haulers = getHaulers()
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if(parseInt(haulerId) === hauler.id){
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip.name = hauler.name
                }
            }
            // Show an alert to the user with this format...
            window.alert(`${itemClicked.dataset.shipName} is being hauled by ${haulingShip.name}`)
    
    
        }




    }
)