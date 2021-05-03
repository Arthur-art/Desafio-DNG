import { Button } from "@chakra-ui/button"
import { Container } from "@chakra-ui/layout"
import firebase from '../../config/firebase/index'

export const Profile = () => {
    const logout = () => firebase.auth().signOut()
    return (

        <>

            <Button onClick={logout}>Sair</Button>


            <Container display="flex" justifyContent="center">
                <img src="https://dngtransportes.com/wp-content/uploads/2019/03/dngtransportes-logo.jpg" alt="" />
            </Container>
            <Container fontSize="1.5rem" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <h1>Bem vindo ao desafio da DNG</h1><br />
                <h2>Você está logado no sistema</h2>
            </Container>

        </>
    )
}