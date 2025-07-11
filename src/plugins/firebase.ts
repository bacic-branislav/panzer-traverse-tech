// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCYOY0f5zPngKY2VBkwVxMNky4GGcC4DTg",
  authDomain: "panzer-controls.firebaseapp.com",
  projectId: "panzer-controls",
  storageBucket: "panzer-controls.firebasestorage.app",
  messagingSenderId: "711910580898",
  appId: "1:711910580898:web:806a61be5b362cb3fc6dfb",
  measurementId: "G-H3H183449K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);

export { db, auth, analytics };