// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxFmBRfLY2FfcP1-709eGkXkulD35bfac",
  authDomain: "boast-net-2ca91.firebaseapp.com",
  projectId: "boast-net-2ca91",
  storageBucket: "boast-net-2ca91.appspot.com",
  messagingSenderId: "468186154340",
  appId: "1:468186154340:web:714cf75bef8bbf1d376671",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
