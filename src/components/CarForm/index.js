import React from 'react'
import { Container, Form } from './styles'

export default function CarForm({ car, handleSubmit, navigate }) {
  
  const FormControls = ({ navigate }) => (
    <div className="controls">
      {car && <button>Remover</button> }
      <button onClick={() => navigate('/')}>Cancelar</button>
      <div className="divider" />
      <button className="primary">
        {car ? 'Salvar' : 'Cadastrar'}
      </button>
    </div>
  )

  const pageTitle = car ? 'Editar carro' : 'Cadastrar carro'

  return (
    <Container>
      <h1>{pageTitle}</h1>
      <Form>
        
        <input placeholder="Titulo" />

        <div className="form-inline">
          <input placeholder="Modelo" />
          <input placeholder="Ano" type="number" />
        </div>

        <select>
          <option>Selcione uma marca</option>
        </select>

        <div className="form-inline">
          <input placeholder="Cor" />
          <input placeholder="Preço" type="number" />
        </div>

        <div className="form-inline">
          <input placeholder="Km" type="number" />
        </div>

        <FormControls navigate={navigate} />

      </Form>
    </Container>
  )
}