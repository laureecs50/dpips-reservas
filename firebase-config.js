// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfb6qslnV0Hr015QACJFZpyj8eTVYrfII",
  authDomain: "dpips-f9b0f.firebaseapp.com",
  projectId: "dpips-f9b0f",
  storageBucket: "dpips-f9b0f.firebasestorage.app",
  messagingSenderId: "578993170008",
  appId: "1:578993170008:web:bbfcc16f96d18abfb24c2d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);