// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk9VCxivUSzWV6BBzVMnIqOJOP8cqrBzQ",
    authDomain: "reactify-db.firebaseapp.com",
    projectId: "reactify-db",
    storageBucket: "reactify-db.firebasestorage.app",
    messagingSenderId: "747767348150",
    appId: "1:747767348150:web:acb4a1bc13c6cbe9fd5f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// chamando o banco de dados
const db = getFirestore(app);

export { db };