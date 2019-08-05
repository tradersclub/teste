const INITIAL_STATE = {
  data: []
}

export default function carsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CARS':
      return {...state, data: action.cars}
    case 'ADD_CAR':
      return {...state, data: [...state.data, action.car]}
    default:
      return state
  }
}