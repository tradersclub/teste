import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../../components/Page'
import CarsList from '../../components/CarsList'
import { Wellcome } from './styles'

export default () => {
  const cars = useSelector(state => state.data)
  return (
    <Page navbar>
      {cars && cars.length ?
        <CarsList cars={cars} />
      :
        <Wellcome>
          Pesquisa de veículos do <span>TradersClub</span>
        </Wellcome>
      }
    </Page>
  )
}