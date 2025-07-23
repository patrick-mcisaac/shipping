import { getDocks, getHaulers } from "./database.js";

export const DockList = () => {
    const docksArr = getDocks()

    const docks = docksArr.sort((a,b) => a.location.toLowerCase().localeCompare(b.location.toLowerCase()))


    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `
        <li data-type="dock"
            data-dock-id="${dock.id}"
            data-location='${dock.location}'
            data-servicing='${dock.servicing}'
            >${dock.location}, can hold ${dock.volume} million tons of cargo</li>
        `
    }
    docksHTML+= "</ul>"
    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        /*
            Your job is to design an algorithm and implement it
        */

        // was dock clicked?
        if(itemClicked.dataset.type === 'dock'){
            // get dock id
            const dockId = itemClicked.dataset.dockId
            const servicing = itemClicked.dataset.servicing
            const servicingToNumber = servicing.split(',').map(Number)
            
            // create empty array to hold hauler names
            let haulersArr = []

            const haulers = getHaulers()
            // loop over haulers
            for (const hauler of haulers) {

                // If dock id matches haulers dockID
                if(hauler.dockId.includes(parseInt(dockId)) && servicingToNumber.includes(hauler.id)){

                        haulersArr.push(hauler.name)
                    }
                    
                }
                // create string for hauler names
            

            let haulerNames = haulersArr.join(', ')
    
            // window alert if no hauler and if hauler(s)
            if(haulersArr.length === 0){
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing`)
            }else {
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${haulerNames}`)
            }
        }
    }
)