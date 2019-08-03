import React from 'react'
import { Container } from './styles'
import Sidebar from '../Sidebar'
import Routes from '../../routes'

export default function App() {
  return (
    <Container>
      <Sidebar />
      <Routes />
    </Container>
  )
}