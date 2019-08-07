import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Home from './pages/Home'
import NewCar from './pages/NewCar'
import EditCar from './pages/EditCar'

export default () =>
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/novo-carro" component={NewCar} />
      <Route path="/editar-carro/:id" component={EditCar} />
    </Router>
  </Provider>