import { useFormik } from "formik";
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


const validationSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Não foi preenchido"),
    password: yup.string().required("Não foi preenchido"),
    username: yup.string().required("Não foi preenchido"),
    endereco: yup.string().required("Não foi preenchido")
});


export const Register = ({ back }) => {

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting } = useFormik({

            onSubmit: async (values, form) => {
                console.log(values)
                try {
                    const user = await app.auth().createUserWithEmailAndPassword(values.email, values.password)
                    console.log(user)

                } catch (error) {
                    console.log('erro', error)
                }
            },
            validationSchema,
            initialValues: {
                email: '',
                username: '',
                password: '',
                endereco: ''
            },

        })

    return (
        <>

            <Button onClick={() => back()}>Voltar</Button>

            <Container display="flex" gridGap="5" justifyContent="space-around" marginBottom="2rem" flexDirection="column">
                <Container fontSize="2rem" display="flex" justifyContent="center">
                    <h1>Você está no cadastro</h1>
                </Container>
            </Container>
            <Container marginBottom="2rem" display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">
                <FormLabel>Foto de Perfil</FormLabel>
                <input type="file" name="arquivos" className="btn btn-success" accept="image/png, image/jpeg" multiple />
            </Container>

            <Container display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">

                <FormControl isRequired id="username">
                    <FormLabel>Nome</FormLabel>
                    <Input value={values.username} onChange={handleChange} onBlur={handleBlur} placeholder="User name" />
                    {touched.username && (<FormHelperText textColor="#e74c3c"> {errors.username}</FormHelperText>)}
                </FormControl>

                <FormControl isRequired id="endereco">
                    <FormLabel>Endereço</FormLabel>
                    <Input value={values.endereco} onChange={handleChange} onBlur={handleBlur} placeholder="Endereço" />
                    {touched.endereco && (<FormHelperText textColor="#e74c3c"> {errors.endereco}</FormHelperText>)}
                </FormControl>

                <FormControl isRequired id="email">
                    <FormLabel>E-mail</FormLabel>
                    <Input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    {touched.email && (<FormHelperText textColor="#e74c3c"> {errors.email}</FormHelperText>)}
                </FormControl>

                <FormControl isRequired id="password">
                    <FormLabel>Senha</FormLabel>
                    <Input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    {touched.password && (<FormHelperText textColor="#e74c3c"> {errors.password}</FormHelperText>)}
                </FormControl>

                <Button marginTop="2rem" marginBottom="2rem" colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting}>Cadastrar</Button>
                {/*<div>
                <FormLabel>Confirmação de senha</FormLabel>
                <Input type="password" />
                </div>*/}




            </Container>
        </>
    )
}