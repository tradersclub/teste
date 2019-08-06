import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'
import Loading from '../../components/Loading'
import { addCar } from '../../store/actions/cars'

export default ({ history }) => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.addCarLoading)

  const handleAddCar = car => {
    dispatch(addCar(car))
  }

  return (
    <Page>
      {loading && <Loading/>}
      <h1>Novo carro</h1>
      <CarForm
        handleSubmit={handleAddCar}
        navigate={history.push}
      />
    </Page>
  )
}