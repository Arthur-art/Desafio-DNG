import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { app } from '../../config/firebase/index'
import {
    Container,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
} from "@chakra-ui/react";

export const Login = ({ back }) => {

    const [newValue, setNewValue] = useState("")
    const [newValuePass, setNewValuePass] = useState("")

    const [values, setValues] = useState({})

    const handleChangeNewValueEmail = ({ target }) => {
        const { value } = target;
        setNewValue(value)
    }
    const handleChangeNewValuePass = ({ target }) => {
        const { value } = target;
        setNewValuePass(value)
    }

    const check = () => {
        try {
            const user = app.auth().signInWithEmailAndPassword(values.email, values.password)
            console.log(user)

        } catch (error) {
            console.log('erro', error)
        }
    }

    const handleSubmit = () => {
        setValues({
            email: String(newValue),
            password: String(newValuePass)
        })
    }

    useEffect(() => {
        check()
    }, [values.email, values.password])



    console.log(values.email)
    return (
        <>

            <Button onClick={() => back()}>Voltar</Button>

            <Container display="flex" gridGap="5" justifyContent="space-around" marginBottom="2rem" flexDirection="column">
                <Container fontSize="2rem" display="flex" justifyContent="center">
                    <h1>Você está no login</h1>
                </Container>
            </Container>

            <Container display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">


                <FormControl isRequired id="email">
                    <FormLabel>E-mail</FormLabel>
                    <Input type="email" value={newValue || ""} onChange={handleChangeNewValueEmail} />

                </FormControl>

                <FormControl isRequired id="password">
                    <FormLabel>Senha</FormLabel>
                    <Input type="password" value={newValuePass || ""} onChange={handleChangeNewValuePass} />

                </FormControl>

                <Button marginTop="2rem" marginBottom="2rem" colorScheme="blue" onClick={handleSubmit} >Entrar</Button>




            </Container>
        </>
    )
}