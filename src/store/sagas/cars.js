import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../../services/api'

function* fetchCars(action) {
  try {
    const query = `cars?search=${action.search}`
    const response = yield call(() => api.get(query))
    const { cars } = response.data
    const carsWithId = cars.filter(car => car.id)
    yield put({ type: 'SET_CARS', cars: carsWithId })
  } catch({ message }) {
    yield put({ type: 'FETCH_CARS_FAILED', message })
  }
}

function* fetchBrands() {
  try {
    const response = yield call(() => api.get('brands'))
    const { brands } = response.data
    yield put({ type: 'SET_BRANDS', brands })
  } catch({ message }) {
    yield put({ type: 'FETCH_BRANDS_FAILED', message })
  }
}

export default function* carsSaga() {
  yield takeEvery('FETCH_CARS', fetchCars)
  yield takeEvery('FETCH_BRANDS', fetchBrands)
}