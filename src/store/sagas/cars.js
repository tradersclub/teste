import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
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

function* addCar(action) {
  try {
    const car = action.car
    const response = yield call(() => api.post('cars', {car}))
    const data = response.data
    yield put({ type: 'ADD_CAR_SUCCESSFULL', car: data.car })
    alert('Carro cadastrado com sucesso!')
  } catch({ message }) {
    yield put({ type: 'ADD_CAR_FAILED', message })
  }
}

function* editCar(action) {
  try {
    const car = action.car
    const response = yield call(() => api.put(`cars/${car.id}`, {car}))
    const data = response.data
    yield put({ type: 'EDIT_CAR_SUCCESSFULL', car: data.car })
    alert('Carro atualizado com sucesso!')
  } catch({ message }) {
    yield put({ type: 'EDIT_CAR_FAILED', message })
  }
}

function* removeCar(action) {
  try {
    yield call(() => api.delete(`cars/${action.id}`))
    yield put({ type: 'REMOVE_CAR_SUCCESSFULL', id: action.id })
    alert('Carro removido com sucesso!')
  } catch({ message }) {
    yield put({ type: 'REMOVE_CAR_FAILED', message })
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
  yield takeLatest('ADD_CAR', addCar)
  yield takeLatest('EDIT_CAR', editCar)
  yield takeLatest('REMOVE_CAR', removeCar)
  yield takeEvery('FETCH_BRANDS', fetchBrands)
}