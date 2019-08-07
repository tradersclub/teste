import styled from 'styled-components'

const logoTC = require('../../assets/img/logo-tc.png')

export const Container = styled.div`
  width: 250px;
  height: 100%;
  background-color: #0e1823;
  text-align: center;

  > a {
    color: inherit;
    text-decoration: none;
  }

  > a > h1 {
    margin: 30px 0 0;
    display: inline-block;
    background: url(${logoTC}) no-repeat;
    width: 80px;
    height: 80px;
    text-indent: -999em;
  }
`