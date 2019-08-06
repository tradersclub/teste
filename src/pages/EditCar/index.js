import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'

export default ({ editCar, history, match }) => {

  const cars = useSelector(state => state.data)
  const [car, setCar] = useState(null)
  
  useEffect(() => {
    const carId = match.params.id
    const filteredCars = cars.filter(item => item.id === carId)
    setCar(filteredCars[0])
  }, [match, cars])

  return (
    <Page>
      <h1>Editar carro</h1>
      {!car ?
        <p>Carro não encontrado.</p> :
        <CarForm
          car={car}
          handleSubmit={editCar}
          navigate={history.push}
        />
      }
    </Page>
  )
}