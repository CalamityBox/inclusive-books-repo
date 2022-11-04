// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoo8oAAEs6rswUoT8YEi-3sHYwsRkIkBo",
  authDomain: "inclusive-books.firebaseapp.com",
  projectId: "inclusive-books",
  storageBucket: "inclusive-books.appspot.com",
  messagingSenderId: "431033050380",
  appId: "1:431033050380:web:24597e1aac6ff5a0ced529",
  measurementId: "G-YNXEFTM5Z2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
const db = getFirestore(app)