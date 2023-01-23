// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_n5zc3Rd4hGazX0QlciwpeCgk8FH40Nc",
  authDomain: "primera-app-react-a396c.firebaseapp.com",
  projectId: "primera-app-react-a396c",
  storageBucket: "primera-app-react-a396c.appspot.com",
  messagingSenderId: "249726442657",
  appId: "1:249726442657:web:5e1f90bb1a6462f3c864e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
