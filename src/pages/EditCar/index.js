import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'
import { editCar } from '../../store/actions/cars'
import Loading from '../../components/Loading'

export default ({ history, match }) => {

  const dispatch = useDispatch()
  const cars = useSelector(state => state.data)
  const loading = useSelector(state => state.editCarLoading)
  const [car, setCar] = useState(null)
  
  useEffect(() => {
    const carId = match.params.id
    const filteredCars = cars.filter(item => item.id === carId)
    setCar(filteredCars[0])
  }, [match, cars])

  const handleEditCar = (carToEdit) => {
    dispatch(editCar(carToEdit))
  }

  return (
    <Page>
      {loading && <Loading/>}
      <h1>Editar carro</h1>
      {!car ?
        <p>Carro não encontrado.</p> :
        <CarForm
          car={car}
          handleSubmit={handleEditCar}
          navigate={history.push}
        />
      }
    </Page>
  )
}