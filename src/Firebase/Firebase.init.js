import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCk3il-_3BMGgytGvprLmaZzpXNMGDG4EA",
    authDomain: "remake-yourself.firebaseapp.com",
    projectId: "remake-yourself",
    storageBucket: "remake-yourself.appspot.com",
    messagingSenderId: "760289402757",
    appId: "1:760289402757:web:74985a817a61ceba0ceeec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;