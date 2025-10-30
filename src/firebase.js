import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIEQsRaWFLnvPuBRk9Qy2688HGgYQ4HNw",
    authDomain: "form-ad909.firebaseapp.com",
    databaseURL: "https://form-ad909-default-rtdb.firebaseio.com",
    projectId: "form-ad909",
    storageBucket: "form-ad909.firebasestorage.app",
    messagingSenderId: "174084308689",
    appId: "1:174084308689:web:e3b5de5c8aaba6cb86cff0",
    measurementId: "G-1ZXFN7R91H"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
