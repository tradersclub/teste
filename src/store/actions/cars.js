export const fetchCars = (search) => ({
  type: 'FETCH_CARS',
  search
})

export const setCars = cars => ({
  type: 'SET_CARS',
  cars
})