import firebaseClient from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAaA4JY0S-T3Z6B3N64x8l_DajGtgCMz2Y",
    authDomain: "desafio-dng.firebaseapp.com",
    projectId: "desafio-dng",
    storageBucket: "desafio-dng.appspot.com",
    messagingSenderId: "672979221102",
    appId: "1:672979221102:web:5c3252aa4b455c1e98847f",
    measurementId: "G-7BE6G37820"
};


//Para evitar que o firebase seja recriado pelo hot reload do next 
const app = firebaseClient.apps.length
    ? firebaseClient.app()
    : firebaseClient.initializeApp(firebaseConfig);

export const persistenceMode = firebaseClient.auth.Auth.Persistence.LOCAL

export default app