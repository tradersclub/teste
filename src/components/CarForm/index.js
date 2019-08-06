import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Form } from './styles'
import { fetchBrands } from '../../store/actions/cars'

const Input = ({car, handleChange, id, label, type}) => (
  <input
    id={id}
    value={car[id]}
    placeholder={label}
    type={type || 'text'}
    onChange={handleChange}
  />
)

const Controls = ({ car, navigate }) => (
  <div className="controls">
    {car && <button type="button">Remover</button> }
    <button onClick={() => navigate('/')}>Cancelar</button>
    <div className="divider" />
    <button className="primary" type="submit">
      {car ? 'Salvar' : 'Cadastrar'}
    </button>
  </div>
)

export default function CarForm({ car: propsCar, handleSubmit: handleSubmitCar, navigate }) {

  const [car, setCar] = useState({
    brand: '',
    color: '',
    km: '',
    model: '',
    price: '',
    title: '',
    year: ''
  })
  
  const dispatch = useDispatch()
  const brands = useSelector(state => state.brands)
  
  useEffect(() => {
    if(propsCar) setCar(propsCar)
  }, [propsCar])
  useEffect(() => dispatch(fetchBrands()), [dispatch])
  
  const handleChange = ({ target }) =>
    setCar({ ...car, [target.id]: target.value })
  
  const inputProps = {car, handleChange}

  const handleSubmit = event => {
    event.preventDefault()
    handleSubmitCar(car)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        
        <Input {...inputProps} id="title" label="Titulo" />

        <div className="form-inline">
          <Input {...inputProps} id="model" label="Modelo" />
          <Input {...inputProps} id="year" label="Ano" type="number" />
        </div>

        <select value={car.brand || null} id="brand" onChange={handleChange}>
          <option disabled selected>Selcione uma marca</option>
          {brands.map(brand =>
            <option key={brand.id} value={brand.name}>{brand.name}</option>
          )}
        </select>

        <div className="form-inline">
          <Input {...inputProps} id="color" label="Cor" />
          <Input {...inputProps} id="price" label="Preço" type="number" />
        </div>

        <div className="form-inline">
          <Input {...inputProps} id="km" label="Km" type="number" />
        </div>

        <Controls car={car} navigate={navigate} />

      </Form>
    </Container>
  )
}