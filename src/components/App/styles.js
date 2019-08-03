import { createGlobalStyle } from 'styled-components'

const logoTC = require('../../assets/img/logo-tc.png')

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color:#1f2d40;
    color:#f5f5f5;
    font-family: 'Roboto', sans-serif;
  }
  .menu {
    background-color:#0e1823;
  }
  .menu h1 {
    display:inline-block;
    background: url(${logoTC}) no-repeat;
    width:80px;
    height:80px;
    text-indent:-999em;
  }
  .banner {
    font-family: 'Lobster Two', cursive;
    font-size: 100px;
  }
`