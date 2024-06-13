// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjRZFFI_bCvy0IBDKWC5b50fMeOmHQmDs",
  authDomain: "katara-ecb8e.firebaseapp.com",
  projectId: "katara-ecb8e",
  storageBucket: "katara-ecb8e.appspot.com",
  messagingSenderId: "198012666935",
  appId: "1:198012666935:web:c5eca57ed37e9211782bb2",
  measurementId: "G-5RD4DW3WFJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);