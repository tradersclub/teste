import React from 'react'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'

export default ({ newCar }) =>
  <Page>
    <CarForm handleSubmit={newCar} />
  </Page>