// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00_8hPNxIZscl_RZ58yyKSgd5TIuAlPY",
  authDomain: "task-9b380.firebaseapp.com",
  projectId: "task-9b380",
  storageBucket: "task-9b380.appspot.com",
  messagingSenderId: "849131226999",
  appId: "1:849131226999:web:e921dcf92a960cc87b8372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;