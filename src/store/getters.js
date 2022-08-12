export const getGarage = (state) => state.gameState.garage

export const getVehicles = (state) => state.gameState.vehicles

export const getStock = (state) => state.gameState.stock

export const getTotalFoundVehicles = (state) => {

    let totalFoundVehicles = 0

    Object.values(state.gameState.stock).forEach(vehicle => {
        if (vehicle.found) {
            totalFoundVehicles++
        }
    });

    return totalFoundVehicles
}

export const getVehicleCombinationLog = (state) => state.gameState.vehicleCombinationLog