import React from 'react'
import Page from '../../components/Page'
import CarForm from '../../components/CarForm'

export default ({ newCar, history }) =>
  <Page>
    <CarForm
      handleSubmit={newCar}
      navigate={history.push}
    />
  </Page>