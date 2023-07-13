import React from 'react'
import {goToHome} from '../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()

  return (
    <div>
      <h1>Ops!</h1>
      <h3> O endereço que você está tentando acessar não existe...</h3>
      <button onClick={()=> goToHome(navigate)}>Voltar à página inicial</button>
    </div>
  )
}

export default ErrorPage
