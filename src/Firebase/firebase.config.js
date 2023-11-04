
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT1N25SOEWzbYxB_wKbKbRNup2OQwM1WU",
  authDomain: "food-donation-community.firebaseapp.com",
  projectId: "food-donation-community",
  storageBucket: "food-donation-community.appspot.com",
  messagingSenderId: "276698203310",
  appId: "1:276698203310:web:b8450eab6e1dcd4a2bd93f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);