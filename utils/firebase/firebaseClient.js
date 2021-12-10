// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCrx-emzAd_PEMlqqHR5NF49wKCkodhZ2s",
  authDomain: "market-maker-lite-322715.firebaseapp.com",
  projectId: "market-maker-lite-322715",
  storageBucket: "market-maker-lite-322715.appspot.com",
  messagingSenderId: "272948767851",
  appId: "1:272948767851:web:f39e50ffaead2106f4552e",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Services

export const auth = getAuth();
