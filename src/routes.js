import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewCar from './pages/NewCar'
import EditCar from './pages/EditCar'

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/novo-carro" component={NewCar} />
      <Route path="/editar-carro" component={EditCar} />
    </Router>
  )
}