import React from 'react'
import Page from '../../components/Page'
import { Wellcome } from './styles'

export default function Home() {
  return (
    <Page navbar>
      <Wellcome>
        Pesquisa de veículos do <span>TradersClub</span>
      </Wellcome>
    </Page>
  )
}