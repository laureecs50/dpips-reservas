// firebase-config.js
// Configuração única do Firebase para todo o projeto
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfb6qslnV0Hr015QACJFZpyj8eTVYrfII",
  authDomain: "dpips-f9b0f.firebaseapp.com",
  projectId: "dpips-f9b0f",
  storageBucket: "dpips-f9b0f.appspot.com",
  messagingSenderId: "578993170008",
  appId: "1:578993170008:web:bbfcc16f96d18abfb24c2d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // ⚠️ LIBERA TUDO - SÓ PARA TESTE!
    }
  }
}