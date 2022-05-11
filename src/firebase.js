import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyBLw4HRqTMcQt9ffCJ83yvbKD_QHEgbdNM",
  authDomain: "zeon-store-8ad28.firebaseapp.com",
  projectId: "zeon-store-8ad28",
  storageBucket: "zeon-store-8ad28.appspot.com",
  messagingSenderId: "710160155229",
  appId: "1:710160155229:web:7b9c6521af9c76f5e243b4"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export {firebase, auth, firestore}