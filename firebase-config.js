// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmn0YA71iVXgyvb8627D-rv1ZVtkCHLF4",
  authDomain: "agenda-dpips.firebaseapp.com",
  projectId: "agenda-dpips",
  storageBucket: "agenda-dpips.firebasestorage.app",
  messagingSenderId: "10526411332",
  appId: "1:10526411332:web:77ef3682a408448bf18a11"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);