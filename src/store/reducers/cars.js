const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  brands: []
}

export default function carsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return {...state, loading: true}
    case 'FETCH_CARS_FAILDED':
      return {...state, error: action.message, loading: false}
    case 'SET_CARS':
      return {...state, data: action.cars, error: null, loading: false}
    case 'ADD_CAR':
      return {...state, data: [...state.data, action.car]}
    case 'SET_BRANDS':
      return {...state, brands: action.brands}
    default:
      return state
  }
}