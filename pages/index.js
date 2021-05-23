import React, { useState } from 'react'
import { Container, Button } from "@chakra-ui/react"
import { Login } from '../components/Login'
import { Register } from '../components/Register'

export default function Home() {

  const [login, setLogin] = useState(false)

  const handleChangeLogin = () => {
    setLogin(true)
  }

  const [register, setRegister] = useState(false)

  const handleChangeRegister = () => {
    setRegister(true)
  }

  const handleBack = () => {
    setRegister(false)
    setLogin(false)
  }

  return (
    <>
      {!login && !register && <>

        <Container display="flex" justifyContent="center">
          <img src="https://dngtransportes.com/wp-content/uploads/2019/03/dngtransportes-logo.jpg" alt="" />
        </Container>
        <Container fontSize="1.5rem" display="flex" justifyContent="center">
          <h1>Bem vindo ao desafio da DNG</h1>
        </Container>
        <Container marginTop="2rem" fontSize="1.5rem" display="flex" justifyContent="space-around">
          <Button onClick={handleChangeLogin}>Acessar Sistema</Button>
          <Button onClick={handleChangeRegister}>Cadastre-se</Button>
        </Container>

      </>}
      {login && <Login back={handleBack} />}
      {register && <Register back={handleBack} />}
    </>
  )
}
