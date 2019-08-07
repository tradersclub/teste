import React from 'react'
import { Container, Content } from './styles'
import Navbar from '../Navbar'

export default ({ children, navbar }) =>
  <Container>
    {navbar && <Navbar/> }
    <Content>
      {children}
    </Content>
  </Container>