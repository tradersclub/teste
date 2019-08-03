import React from 'react'
import { Container, Content } from './styles'
import Navbar from '../Navbar'

export default function Page({ children, navbar }) {
  return (
    <Container>
      {navbar && <Navbar/> }
      <Content>
        {children}
      </Content>
    </Container>
  )
}