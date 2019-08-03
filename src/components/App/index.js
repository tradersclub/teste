import React from 'react'
import Routes from '../../routes'
import GlobalStyles, { Container } from './styles'
import Sidebar from '../Sidebar'

export default function App() {
  return (
    <>
      <Container styles={<GlobalStyles />}>
        <Sidebar />
        <Routes />
      </Container>
    </>
  )
}