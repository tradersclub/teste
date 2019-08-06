import React from 'react'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'

export default ({ newCar, history }) =>
  <Page>
    <h1>Novo carro</h1>
    <CarForm
      handleSubmit={newCar}
      navigate={history.push}
    />
  </Page>