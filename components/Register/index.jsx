import { useFormik } from "formik";
import * as yup from "yup";
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

export const Register = () => {

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({

        onSubmit: signup,
        validationSchema,
        initialValues: {
            email: "",
            username: "",
            password: "",


        },

    })

    return (
        <>
            <a href="/">
                <Button>Voltar</Button>
            </a>
            <Container display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">
                <Container fontSize="2rem" display="flex" justifyContent="center">
                    <h1>Você está no cadastro</h1>
                </Container>
            </Container>

            <Container display="flex" gridGap="5" justifyContent="space-around" flexDirection="column">


                <FormControl isRequired id="username">
                    <FormLabel>Nome</FormLabel>
                    <Input value={values.username} onChange={handleChange} onBlur={handleBlur} placeholder="User name" />
                    {touched.username && (<FormHelperText textColor="#e74c3c"> {errors.username}</FormHelperText>)}
                </FormControl>


                <FormControl isRequired id="endereco">
                    <FormLabel value={values.endereco} onChange={handleChange} onBlur={handleBlur} placeholder="User name">Endereço</FormLabel>
                    <Input />
                    {touched.username && (<FormHelperText textColor="#e74c3c"> {errors.username}</FormHelperText>)}
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


                <FormControl isRequired id="password">
                    <FormLabel>Confirmação de senha</FormLabel>
                    <Input type="password" />
                    {touched.password && (<FormHelperText textColor="#e74c3c"> {errors.password}</FormHelperText>)}
                </FormControl>


                <FormControl>
                    <FormLabel>Foto de Perfil</FormLabel>
                    <input type="file" name="arquivos" className="btn btn-success" accept="image/png, image/jpeg" multiple />
                </FormControl>

                <Button marginTop="2rem" marginBottom="2rem" colorScheme="blue" onClick={handleSubmit} isLoading={isSubmitting}>Cadastrar</Button>


            </Container>


        </>
    )
}