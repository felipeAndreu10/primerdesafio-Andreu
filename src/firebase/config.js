// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "zona-padel-2257c.firebaseapp.com",
  projectId: "zona-padel-2257c",
  storageBucket: "zona-padel-2257c.appspot.com",
  messagingSenderId: "65322081560",
  appId: "1:65322081560:web:33ed0644526d70f6fa526d",
  measurementId: "G-2GG0LX1JNF"
};

// Initialize Firebase
initializeApp(firebaseConfig);
