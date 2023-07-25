// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirstore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARH10PaDu2ifn1kSJDO9ERRG-7RCwlvAk",
  authDomain: "house-marketplace-8774b.firebaseapp.com",
  projectId: "house-marketplace-8774b",
  storageBucket: "house-marketplace-8774b.appspot.com",
  messagingSenderId: "191200197474",
  appId: "1:191200197474:web:6f73d58333f42866ae4a3b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirstore();
