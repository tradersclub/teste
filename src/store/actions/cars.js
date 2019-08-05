export const fetchCars = () => ({
  type: 'FETCH_CARS'
})

export const setCars = cars => ({
  type: 'SET_CARS',
  cars
})