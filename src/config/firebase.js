// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk9sKuuBGXXd3FmDXJzB57RT7tEUaeWvc",
  authDomain: "asovepabapuma-68f0e.firebaseapp.com",
  projectId: "asovepabapuma-68f0e",
  storageBucket: "asovepabapuma-68f0e.appspot.com",
  messagingSenderId: "836540036367",
  appId: "1:836540036367:web:47da736bb60d49c886fa7a",
  measurementId: "G-L5ML5BH6TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth


export const auth = getAuth(app);
