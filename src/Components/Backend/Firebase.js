// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkDsnO3WuWKJ9SWaY4Ognwg29ixWhC1Mo",
  authDomain: "scenicstay.firebaseapp.com",
  projectId: "scenicstay",
  storageBucket: "scenicstay.firebasestorage.app",
  messagingSenderId: "446668234400",
  appId: "1:446668234400:web:06ecd398e091cb3de7b3c5"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export let __AUTH=getAuth(firebaseapp)
export let __DB=getFirestore(firebaseapp)
export default firebaseapp;