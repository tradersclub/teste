import React from 'react'
import Page from '../../components/Page'
import CarsList from '../../components/CarsList'
import { Wellcome } from './styles'

export default ({ cars }) =>
  <Page navbar>
    {cars && cars.length ?
      <CarsList cars={cars} />
    :
      <Wellcome>
        Pesquisa de veículos do <span>TradersClub</span>
      </Wellcome>
    }
  </Page>