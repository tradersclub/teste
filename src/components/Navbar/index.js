import React from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchCars } from '../../store/actions/cars'
import { Container } from './styles'

function Navbar({ history }) {
  const dispatch = useDispatch()
  
  const handlerSubmit = event => {
    event.preventDefault()
    const input = document.querySelector('#input-search')
    const value = input.value
    if(!value) return
    dispatch(fetchCars(value))
  }
  
  const addCar = () => history.push('/novo-carro')

  return (
    <Container onSubmit={handlerSubmit}>
      <input
        type="search"
        id="input-search"
        autoComplete="off"
        placeholder="Pesquise por nome"
        title="Pressione enter para pesquisar"
      />
      <button type="button" onClick={addCar}>
        Cadastrar
      </button>
    </Container>
  )
}

export default withRouter(Navbar)