import React from 'react';
import './App.css';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


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
const provider = new GoogleAuthProvider();
const auth = getAuth();


 const firestore = getFirestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Superchat</h1>
      </header>
      <section>
      {user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      })
  }
  return (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}

function ChatRoom() {
  const messageRef = firestore.collection('messages');
  const query = messageRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  return (
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  )
}

function ChatMessage(props){
  const {text, uid} = props.message;
  return <p>{text}</p>
}

export default App;
