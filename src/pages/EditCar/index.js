import React from 'react'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'

export default ({ car, editCar }) =>
  <Page>
    <CarForm
      car={car}
      handleSubmit={editCar}
    />
  </Page>