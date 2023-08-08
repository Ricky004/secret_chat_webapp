// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFUhqL6HIqThcRV38_3E7o1K2NXp_gVY4",
  authDomain: "chat-app-75dea.firebaseapp.com",
  projectId: "chat-app-75dea",
  storageBucket: "chat-app-75dea.appspot.com",
  messagingSenderId: "610259407332",
  appId: "1:610259407332:web:47778b93a04b2038b777f1",
  measurementId: "G-CRGY3TTVYC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()