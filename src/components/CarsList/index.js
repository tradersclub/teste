import React from 'react'
import { Car } from './styles'
import { Link } from 'react-router-dom'

export default ({ cars }) =>
  cars.map(car =>
    <Car key={car.id}>
      <Link to="/editar-carro">
        <div className="car">
          <div className="left">
            <p className="car-name">Celta azul 2005 Ar e Direção</p>
            <p className="car-description">Celta - Chevrolet - 106.041 KM</p>
          </div>
          <div className="right">
            <p className="car-price">R$ 11.772,22</p>
            <p className="car-year">2005</p>
          </div>
        </div>
      </Link>
    </Car>
  )