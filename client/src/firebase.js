// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webgen-11b68.firebaseapp.com",
  projectId: "webgen-11b68",
  storageBucket: "webgen-11b68.firebasestorage.app",
  messagingSenderId: "431864271786",
  appId: "1:431864271786:web:e6b1d0cfa0b4bcb5f491d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth, provider}