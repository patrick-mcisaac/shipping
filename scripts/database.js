const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {
            id: 1,
            name: "Bess",
            dockId: 1
        },
        { 
            id: 2,
            name: "Elena",
            dockId: 3
        },
        { 
            id: 3,
            name: "Kai",
            dockId: 4
        },
        { 
            id: 4,
            name: "Mira",
            dockId: 2
        },
        { 
            id: 5,
            name: "Talon",
            dockId: 1
        }
    ],
    cargoShips: [
        {
            id: 1,
            name: 'Bertha',
            shipId: 3
        },
        {
            id: 2,
            name: 'Titan',
            shipId: 3
        },
        {
            id: 3,
            name: 'Odyssey',
            shipId: 5
        },
        {
            id: 4,
            name: 'Leviathan',
            shipId: 2
        },
        {
            id: 5,
            name: 'Neptune',
            shipId: 4
        },
        {
            id: 6,
            name: 'Goliath',
            shipId: 4
        },
        {
            id: 7,
            name: 'Hercules',
            shipId: 5
        },
        {
            id: 8,
            name: 'Poseidon',
            shipId: 2
        },
        {
            id: 9,
            name: 'Atlas',
            shipId: 3
        },
        {
            id: 10,
            name: 'Mercury',
            shipId: 4
        }
]
}

export const getDocks = () => {
    return structuredClone(database.docks)
}

export const getHaulers = () => {
    return structuredClone(database.haulers)
}

export const getCargoShips = () => {
    return structuredClone(database.cargoShips)
}