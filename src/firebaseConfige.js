// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNr0EXea4EPvIAWbUVcoao4zpxoLoHCT4",
  authDomain: "pr-11-feba0.firebaseapp.com",
  projectId: "pr-11-feba0",
  storageBucket: "pr-11-feba0.appspot.com",
  messagingSenderId: "549070083813",
  appId: "1:549070083813:web:6d131e9f38cf0437cea60c",
  measurementId: "G-JVHGCHMCWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app