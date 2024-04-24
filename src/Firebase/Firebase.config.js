// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9qkRgggpmMTUQ3kDFvSfRbpjFidsVqGE",
  authDomain: "bdshop-f9c33.firebaseapp.com",
  projectId: "bdshop-f9c33",
  storageBucket: "bdshop-f9c33.appspot.com",
  messagingSenderId: "875159371246",
  appId: "1:875159371246:web:f44a11cdbeca77944822ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
