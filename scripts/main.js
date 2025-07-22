import { CargoList } from "./cargoShips.js";
import { HaulersList } from "./haulers.js";
import { DockList } from "./docks.js";

const container = document.querySelector('#main-container')

const cargoHTML = CargoList()
const haulersHTML = HaulersList()
const dockHTML = DockList()

container.innerHTML = `${cargoHTML} ${haulersHTML} ${dockHTML}`