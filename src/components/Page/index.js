import React from 'react'
import { Container, Content } from './styles'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

export default ({ children, navbar }) =>
  <>
    <Sidebar/>
    <Container>
      {navbar && <Navbar/> }
      <Content>
        {children}
      </Content>
    </Container>
  </>