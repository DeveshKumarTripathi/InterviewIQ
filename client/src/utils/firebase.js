
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "ai-inteview-88566.firebaseapp.com",
  projectId: "ai-inteview-88566",
  storageBucket: "ai-inteview-88566.firebasestorage.app",
  messagingSenderId: "185378774466",
  appId: "1:185378774466:web:a9955eb2dcc3789e0a8a5b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}