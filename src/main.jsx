import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAaYszeyqjqXSpwlovU9RrvOKCbd1wFWoc",
    authDomain: "trashpandagarage-4abd6.firebaseapp.com",
    databaseURL: "https://trashpandagarage-4abd6-default-rtdb.firebaseio.com",
    projectId: "trashpandagarage-4abd6",
    storageBucket: "trashpandagarage-4abd6.appspot.com",
    messagingSenderId: "1010689914185",
    appId: "1:1010689914185:web:ccaea182f9c8aff4179698"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
