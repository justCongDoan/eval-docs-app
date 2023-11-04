// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzq0D9-1P55qCiYHN1C2P_OQby7SWjV-U",
  authDomain: "project2-eval-docs-app-74a2c.firebaseapp.com",
  projectId: "project2-eval-docs-app-74a2c",
  storageBucket: "project2-eval-docs-app-74a2c.appspot.com",
  messagingSenderId: "851176579082",
  appId: "1:851176579082:web:3d6f63dcefe855de7a7ff3",
  measurementId: "G-2BGYP72M4Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);