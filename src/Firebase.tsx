
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtenVGWKto2JXA7eK_KUaAuH7yIVBzoAc",
  authDomain: "portfolio-810f9.firebaseapp.com",
  projectId: "portfolio-810f9",
  storageBucket: "portfolio-810f9.appspot.com",
  messagingSenderId: "769351585306",
  appId: "1:769351585306:web:8f156497c7c39a6f3c4ba3",
  measurementId: "G-2R4V0ZV2J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
