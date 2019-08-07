const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  brands: [],
  addCarLoading: false,
  editCarLoading: false,
  removeCarLoading: false
}

const findAndUpdate = (car, cars) => {
  let list = []
  cars.map(item => {
    item.id === car.id ? list.push(car) : list.push(item)
    return item
  })
  return list
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CARS':
      return {...state, loading: true}
    case 'FETCH_CARS_FAILDED':
      return {...state, error: action.message, loading: false}
    case 'SET_CARS':
      return {...state, data: action.cars, error: null, loading: false}
    case 'ADD_CAR':
      return {...state, addCarLoading: true}
    case 'ADD_CAR_SUCCESSFULL':
      return {...state, addCarLoading: false}
    case 'ADD_CAR_FAILED':
      return {...state, addCarLoading: false}
    case 'EDIT_CAR':
      return {...state, editCarLoading: true}
    case 'EDIT_CAR_SUCCESSFULL':
      return {...state, data: findAndUpdate(action.car, state.data), editCarLoading: false}
    case 'EDIT_CAR_FAILED':
      return {...state, editCarLoading: false}
    case 'REMOVE_CAR':
      return {...state, removeCarLoading: true}
    case 'REMOVE_CAR_SUCCESSFULL':
      return {...state, removeCarLoading: false}
    case 'REMOVE_CAR_FAILED':
      return {...state, removeCarLoading: false}
    case 'SET_BRANDS':
      return {...state, brands: action.brands}
    default:
      return state
  }
}