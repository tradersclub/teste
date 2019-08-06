import React from 'react'
import { Car } from './styles'
import { Link } from 'react-router-dom'

export default ({ cars }) =>
  cars.map(car =>
    <Car key={car.id}>
      <Link to={`/editar-carro/${car.id}`}>
        <div className="car">
          <div className="left">
            <p className="car-name">{car.title}</p>
            <p className="car-description">{car.model} - {car.brand} - {car.km} KM</p>
          </div>
          <div className="right">
            <p className="car-price">R$ {car.price}</p>
            <p className="car-year">{car.year}</p>
          </div>
        </div>
      </Link>
    </Car>
  )