import React from 'react'
import Routes from '../../routes'
import GlobalStyles, { Container } from './styles'
import Sidebar from '../Sidebar'

export default function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <Routes />
      </Container>
      <GlobalStyles />
    </>
  )
}
