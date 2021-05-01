import { useFormik } from "formik"
import * as yup from "yup"
import {
    Container,
    Box,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    InputGroup,
    InputLeftAddon,
    InputRightAddon
} from "@chakra-ui/react";

export const Login = () => {
    return (
        <>
            <a href="/">
                <Button>Voltar</Button>
            </a>
            <Container display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">
                <Container fontSize="2rem" display="flex" justifyContent="center">
                    <h1>Você está no login</h1>
                </Container>

                <Container display="flex" alignItems="center">
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input />
                    </FormControl>
                </Container>
                <Container display="flex" alignItems="center">
                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input />
                    </FormControl>
                </Container>

                <Button marginTop="2rem" marginBottom="2rem" colorScheme="blue">Entrar</Button>
            </Container>

        </>
    )
}