// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxhgOf7tzO3wwYa63ci_ru1G0tG1iViOU",
  authDomain: "financetracker-1eab5.firebaseapp.com",
  projectId: "financetracker-1eab5",
  storageBucket: "financetracker-1eab5.firebasestorage.app",
  messagingSenderId: "743720796419",
  appId: "1:743720796419:web:ed665d353c1bf81a66a936",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
