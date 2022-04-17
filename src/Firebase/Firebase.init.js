import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBK3ecA9pcjCyiiwiiikOziKoH7Chep8bY",
    authDomain: "silvan-fitness-care.firebaseapp.com",
    projectId: "silvan-fitness-care",
    storageBucket: "silvan-fitness-care.appspot.com",
    messagingSenderId: "663107143339",
    appId: "1:663107143339:web:ea7bb66638cb67ef9d99ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;