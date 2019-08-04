import React from 'react'
import { Cars } from './styles'
import { Link } from 'react-router-dom'

const list = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 1, 2, 3, 4, 5, 6, 7, 8
]

export default function CarsList() {
  return (
    list.map(item =>
      <Cars key={item}>
        <li>
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
        </li>
      </Cars>
    )
  )
}