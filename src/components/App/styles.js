import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color:#1f2e40;
    color:#f5f5f5;
    font-family: 'Roboto', sans-serif;
  }
  .banner {
    font-family: 'Lobster Two', cursive;
    font-size: 100px;
  }
`

export const Container = ({ children, styles: globalStyles }) => {
  const ContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
  `
  return (
    <ContainerStyled>
      {children}
      {globalStyles}
    </ContainerStyled>
  )
}