// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmO2f1nbrMkVP9rvGx0V0Vq02Ktgmqa4U",
  authDomain: "simple-firebase-authenti-e428a.firebaseapp.com",
  projectId: "simple-firebase-authenti-e428a",
  storageBucket: "simple-firebase-authenti-e428a.appspot.com",
  messagingSenderId: "277567136202",
  appId: "1:277567136202:web:9d1d2475c761f6b3de6f33",
  measurementId: "G-6V4L7KT8B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;