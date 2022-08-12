import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const buildVehicle = (context, vehicle) => context.commit('buildVehicle', vehicle)

export const scrollWindowToVehicle = (context, vehicleToScroll) => context.commit('scrollWindowToVehicle', vehicleToScroll)

export const removeVehicle = (context, index) => context.commit('removeVehicle', index)

export const replicateVehicleIntoParts = (context, vehicle) => context.commit('replicateVehicleIntoParts', vehicle)

export const mixVehicles = (context, { mainVehicle, secondaryVehicle }) => context.commit('mixVehicles', { mainVehicle, secondaryVehicle })

export const clearCombinationLog = (context) => context.commit('clearCombinationLog')

export const removeCombinationLogLine = (context, index) => context.commit('removeCombinationLogLine', index)

export const updateGame = (context) => context.commit('updateGame')