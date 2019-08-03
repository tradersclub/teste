import React from 'react'
import { Container } from './styles'

export default function Navbar() {

  const handlerSubmit = event => {
    event.preventDefault()
    const input = document.querySelector('#input-search')
    const value = input.value
    if(!value) return
    alert(value)
  }

  return (
    <Container onSubmit={handlerSubmit}>
      <input
        type="search"
        id="input-search"
        autoComplete="off"
        placeholder="Pesquise por nome"
      />
      <button type="button">
        Cadastrar
      </button>
    </Container>
  )
}