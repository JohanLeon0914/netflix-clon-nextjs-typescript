// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtGTOKowJGZmS9xpaGW2BiHB8FG2uwmtk",
  authDomain: "netflix-clone-a683e.firebaseapp.com",
  projectId: "netflix-clone-a683e",
  storageBucket: "netflix-clone-a683e.appspot.com",
  messagingSenderId: "202363031553",
  appId: "1:202363031553:web:55f2714f7d93486627f000"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }