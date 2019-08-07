import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'
import { editCar, removeCar } from '../../store/actions/cars'
import Loading from '../../components/Loading'

export default ({ history, match }) => {

  const dispatch = useDispatch()
  const cars = useSelector(state => state.data)
  const loadingEdit = useSelector(state => state.editCarLoading)
  const loadingRemove = useSelector(state => state.removeCarLoading)
  const [car, setCar] = useState(null)
  
  useEffect(() => {
    const carId = match.params.id
    const filteredCars = cars.filter(item => item.id === carId)
    setCar(filteredCars[0])
  }, [match, cars])

  const handleEditCar = (carToEdit) => {
    dispatch(editCar(carToEdit))
  }

  const handleRemoveCar = (carId) => {
    dispatch(removeCar(carId))
  }

  return (
    <Page>
      {loadingEdit || loadingRemove && <Loading/>}
      <h1>Editar carro</h1>
      {!car ?
        <p>Carro não encontrado.</p> :
        <CarForm
          car={car}
          handleSubmit={handleEditCar}
          navigate={history.push}
          removeCar={handleRemoveCar}
        />
      }
    </Page>
  )
}