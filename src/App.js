import React from 'react';
import './App.css';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCMhfB8eGpoy1sF1FLnXb954_ijr-5JaM",
  authDomain: "superchat-4318f.firebaseapp.com",
  projectId: "superchat-4318f",
  storageBucket: "superchat-4318f.appspot.com",
  messagingSenderId: "352933199147",
  appId: "1:352933199147:web:003c86a0f7817ba75bd96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
