import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-Gd3NiRsil56lC_T9atUefC8Yv4rRzUY",
  authDomain: "softwareii-efe38.firebaseapp.com",
  projectId: "softwareii-efe38",
  storageBucket: "softwareii-efe38.appspot.com",
  messagingSenderId: "494819549074",
  appId: "1:494819549074:web:8a41fa1681b49fe3dfeb4b",
  measurementId: "G-XXDZ8FMPB1",
};
// Initialize Firebase

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
