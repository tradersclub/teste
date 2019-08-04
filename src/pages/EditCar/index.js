import React from 'react'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'

export default ({ car = {}, editCar, history }) =>
  <Page>
    <CarForm
      car={car}
      handleSubmit={editCar}
      navigate={history.push}
    />
  </Page>