const clonedeep = require('lodash.clonedeep')

export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const buildVehicle = (state, vehicle) => {
    state.gameState.stock[vehicle].partsAmount -= state.gameState.stock[vehicle].partsCost
    state.gameState.garage.vehicles.push(clonedeep(state.gameState.vehicles[vehicle]))
}

export const scrollWindowToVehicle = (state, vehicleToScroll) => {
    document.getElementById(vehicleToScroll).scrollIntoView();
}

export const removeVehicle = (state, index) => {
    state.gameState.garage.vehicles.splice(index, 1)
}

export const replicateVehicleIntoParts = (state, vehicle) => {
    state.gameState.stock[vehicle].amount--
    state.gameState.stock[vehicle].partsAmount += state.gameState.vehicles[vehicle].partsPerVehicle
}

export const mixVehicles = (state, { mainVehicle, secondaryVehicle }) => {

    state.gameState.stock[mainVehicle].amount -= 1
    state.gameState.stock[secondaryVehicle].amount -= 1

    const result = state.gameState.vehicleCombinations[mainVehicle][secondaryVehicle]

    const log = {
        main: state.gameState.vehicles[mainVehicle].label,
        secondary: state.gameState.vehicles[secondaryVehicle].label,
        result
    }

    for (let index = 0; index < state.gameState.vehicleCombinationLog.length; index++) {
        if (state.gameState.vehicleCombinationLog[index].main === log.main && state.gameState.vehicleCombinationLog[index].secondary === log.secondary) {
            return 0
        }
    }

    state.gameState.vehicleCombinationLog.push(log)

    // Checking if there is result for mixture

    if (result != '') {

        // If there is a result

        state.gameState.stock[result].amount += 1

    }
}

export const clearCombinationLog = (state) => {
    state.gameState.vehicleCombinationLog = []
}

export const removeCombinationLogLine = (state, index) => {
    state.gameState.vehicleCombinationLog.splice(index, 1)
}

export const updateGame = (state) => {
    Object.values(state.gameState.garage.vehicles).forEach((vehicle, index) => {
        if (vehicle.buildingTime <= 0) {
            state.gameState.stock[vehicle.name].amount++
            state.gameState.garage.vehicles.splice(index, 1)
        } else {
            vehicle.buildingTime--
        }


    });

    state.gameState.garage.totalSlots = 7,

        Object.values(state.gameState.stock).forEach(vehicle => {
            if (vehicle.found) {
                state.gameState.garage.totalSlots++
            } else if (vehicle.partsAmount > 0 || vehicle.amount > 0) {
                vehicle.found = true
            }
        });


}