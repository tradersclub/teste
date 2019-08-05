import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import carsReducer from './reducers/cars'
import carsSaga from './sagas/cars'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  carsReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(carsSaga)

export default store