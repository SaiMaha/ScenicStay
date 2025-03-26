// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABkvADxs2BeMvl8zf8IjS5LPDKMB21z1c",
  authDomain: "isai-dcc05.firebaseapp.com",
  projectId: "isai-dcc05",
  storageBucket: "isai-dcc05.firebasestorage.app",
  messagingSenderId: "1042250631394",
  appId: "1:1042250631394:web:18f3a8d4f889a9471336bb"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export let __AUTH=getAuth(firebaseapp);
export let __DB=getFirestore(firebaseapp);
export default firebaseapp;