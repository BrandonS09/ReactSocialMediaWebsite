// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//Datebase starts here
import { getFirestore } from "firebase/firestore"
//Auth starts here
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmmvmalrnwPeR_JypRtn7Kk8vgU-0QMog",
  authDomain: "reactfirebaselearn-8152d.firebaseapp.com",
  projectId: "reactfirebaselearn-8152d",
  storageBucket: "reactfirebaselearn-8152d.appspot.com",
  messagingSenderId: "221343280705",
  appId: "1:221343280705:web:11632f61cf09eb614960c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth init
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//db init
export const db = getFirestore(app);