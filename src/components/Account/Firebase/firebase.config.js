import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const API_KEY = import.meta.env.VITE_FIREBASE_KEY;
const API_ID = import.meta.env.VITE_API_ID;
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;
const SENDER_ID = import.meta.env.VITE_SENDER_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "neogn-ce89c.firebaseapp.com",
  projectId: "neogn-ce89c",
  storageBucket: "neogn-ce89c.appspot.com",
  messagingSenderId: SENDER_ID,
  appId: API_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
