// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd8mAVer4PTdtukqeimpehEOm2ULcUDf0",
  authDomain: "fir-login-reacap.firebaseapp.com",
  projectId: "fir-login-reacap",
  storageBucket: "fir-login-reacap.appspot.com",
  messagingSenderId: "692410328832",
  appId: "1:692410328832:web:e779d771b53529d41d75e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;