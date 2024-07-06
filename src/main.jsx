import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2wg2-Lxz9ncv0r_u1BSe4uUv3rUnoWSg",
  authDomain: "proyecto-react-a6739.firebaseapp.com",
  projectId: "proyecto-react-a6739",
  storageBucket: "proyecto-react-a6739.appspot.com",
  messagingSenderId: "866427200728",
  appId: "1:866427200728:web:c6c73a7d85b52fbcdb63ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
