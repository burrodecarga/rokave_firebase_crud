// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import Constants  from 'expo-constants';
const firebaseConfig = {
  apiKey: "AIzaSyA7AwqFS2Q_jB7fqOMxNKWiXVJyQUfzxrI",
  authDomain: "rokave-crud-firebase-rn.firebaseapp.com",
  projectId: "rokave-crud-firebase-rn",
  storageBucket: "rokave-crud-firebase-rn.appspot.com",
  messagingSenderId: "659653518455",
  appId: "1:659653518455:web:f2e9b751c5d251549c1272",
  measurementId: "G-CCYZ1VKSTR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);