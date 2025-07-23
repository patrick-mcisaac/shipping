import { getHaulers, getCargoShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        // Was a hauler list item clicked?
        if(itemClicked.dataset.type === 'hauler'){
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.haulerid
            
            // Start a counter variable at 0
            let count = 0
            const ships = getCargoShips()
            
            // Iterate all of the shipping ships
            for (const ship of ships) {
                // Does the haulerId foreign key match the id?
                if(parseInt(haulerId) === ship.shipId){
                    // Increase the counter by 1
                    count++
                } 
            }
            window.alert( 
                count > 1 || count === 0?
                `This hauler is hauling ${count} ships`:
                `This hauler is hauling ${count} ship` )
        }
    }
)

export const HaulersList = () => {
    const haulersObj = getHaulers()
    const haulers = haulersObj.sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLocaleLowerCase()))

    let haulersHTML = '<ul>'

    for (const hauler of haulers) {
        // haulers.push(hauler.name)
        // haulers.sort()
        haulersHTML += `
        <li data-type="hauler" data-haulerid="${hauler.id}">${hauler.name}</li>
        `
    }
    haulersHTML += '</ul>'
    return haulersHTML
}