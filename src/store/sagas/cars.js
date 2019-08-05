import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../../services/api'

function* fetchCars() {
  try {
    const result = yield call(() => api.get('cars'))
    const data = result.data
    yield put({ type: 'SET_CARS', cars: data.cars })
  } catch({ message }) {
    yield put({ type: 'FETCH_CARS_FAILED', message })
  }
}

export default function* carsSaga() {
  yield takeEvery('FETCH_CARS', fetchCars)
}