// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf8AiHwMtR2s8udO7WSr0UfIuiAsaoF1A",
  authDomain: "pizza-hut-fa110.firebaseapp.com",
  projectId: "pizza-hut-fa110",
  storageBucket: "pizza-hut-fa110.firebasestorage.app",
  messagingSenderId: "161190255592",
  appId: "1:161190255592:web:5f2ee76467f53a5c4aa25d",
  measurementId: "G-DZS63HZ412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);    