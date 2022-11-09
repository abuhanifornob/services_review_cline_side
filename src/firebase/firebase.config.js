// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7XDmsIshvlyNWmYzqFTlGvmQ6Wey_rSQ",
    authDomain: "online-trainer-service.firebaseapp.com",
    projectId: "online-trainer-service",
    storageBucket: "online-trainer-service.appspot.com",
    messagingSenderId: "781989123852",
    appId: "1:781989123852:web:0073c6842960c4e0f39b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;