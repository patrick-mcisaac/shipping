import { getCargoShips } from "./database.js";

export const CargoList = () => {
    const cargoShips = getCargoShips()

    let shipHTML = "<ul>"

    for (const ship of cargoShips) {
        shipHTML+= `
        <li>${ship.name}</li>
        `
    }

    shipHTML+= "</ul>"
    return shipHTML
}