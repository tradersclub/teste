import React from 'react'
import { Container, Content, Title } from './styles'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

export default ({ children, navbar, title }) =>
  <>
    <Sidebar/>
    <Container>
      {navbar && <Navbar/> }
      <Content>
        {title && <Title>{title}</Title>}
        {children}
      </Content>
    </Container>
  </>