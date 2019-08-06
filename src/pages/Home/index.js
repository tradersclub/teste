import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../../components/Page'
import CarsList from '../../components/CarsList'
import { Wellcome } from './styles'

const Loading = () =>
  <img
    src={require('../../assets/img/loading-icon.svg')}
    alt="loading"
  />

export default () => {
  const { data: cars, loading, error } = useSelector(state => state)
  return (
    <Page navbar>
      {error && <p>{error}</p>}
      {loading && <Loading />}
      {cars.length ?
        <CarsList cars={cars} />
      :
        <Wellcome>
          Pesquisa de veículos do <span>TradersClub</span>
        </Wellcome>
      }
    </Page>
  )
}