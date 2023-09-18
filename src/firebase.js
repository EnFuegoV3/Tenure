// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVmyIya6oFyk0QXbQJodbFt4KG-CaPnsQ",
  authDomain: "tenure-5c68a.firebaseapp.com",
  projectId: "tenure-5c68a",
  storageBucket: "tenure-5c68a.appspot.com",
  messagingSenderId: "543722326483",
  appId: "1:543722326483:web:09b17062edb60ce6c7c726",
  measurementId: "G-ZVVN4ED3K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const jobCollection = collection(db, "jobs")