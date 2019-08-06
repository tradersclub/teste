import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Form } from './styles'
import { fetchBrands } from '../../store/actions/cars'

export default function CarForm({ car: propsCar, handleSubmit, navigate }) {

  const dispatch = useDispatch()
  
  const [car, setCar] = useState({
    id: '',
    brand: '',
    color: '',
    km: '',
    model: '',
    price: '',
    title: '',
    year: ''
  })
  
  useEffect(() => {
    if(propsCar) setCar(propsCar)
  }, [propsCar])
  
  useEffect(() => {
    dispatch(fetchBrands())
  }, [])
  
  const brands = useSelector(state => state.brands)

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

  return (
    <Container>
      <Form>
        
        <input value={car.title} placeholder="Titulo" />

        <div className="form-inline">
          <input value={car.model} placeholder="Modelo" />
          <input value={car.year} placeholder="Ano" type="number" />
        </div>

        <select value={car.brand}>
          <option>Selcione uma marca</option>
          {brands.map(brand =>
            <option key={brand.id} value={brand.name}>{brand.name}</option>
          )}
        </select>

        <div className="form-inline">
          <input value={car.color} placeholder="Cor" />
          <input value={car.price} placeholder="Preço" type="number" />
        </div>

        <div className="form-inline">
          <input value={car.km} placeholder="Km" type="number" />
        </div>

        <FormControls navigate={navigate} />

      </Form>
    </Container>
  )
}