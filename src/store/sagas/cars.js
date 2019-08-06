import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../../services/api'

function* fetchCars(action) {
  try {
    const query = `cars?search=${action.search}`
    const response = yield call(() => api.get(query))
    const { cars } = response.data
    yield put({ type: 'SET_CARS', cars })
  } catch({ message }) {
    yield put({ type: 'FETCH_CARS_FAILED', message })
  }
}

export default function* carsSaga() {
  yield takeEvery('FETCH_CARS', fetchCars)
}