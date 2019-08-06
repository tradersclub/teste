export const fetchCars = (search) => ({
  type: 'FETCH_CARS',
  search
})

export const setCars = cars => ({
  type: 'SET_CARS',
  cars
})

export const addCar = car => ({
  type: 'ADD_CAR',
  car
})

export const editCar = car => ({
  type: 'EDIT_CAR',
  car
})

export const fetchBrands = () => ({
  type: 'FETCH_BRANDS'
})