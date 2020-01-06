import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7h97dbuPCzMtARABZEOyMtzTl-0v2JYI",
  authDomain: "bps-audit-77dbe.firebaseapp.com",
  databaseURL: "https://bps-audit-77dbe.firebaseio.com",
  projectId: "bps-audit-77dbe",
  storageBucket: "bps-audit-77dbe.appspot.com",
  messagingSenderId: "549254952213",
  appId: "1:549254952213:web:f7fcdfe24ed098cf83651c",
  measurementId: "G-QQ9T4LLYNB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebaseConfig;
export const auth = firebase.auth();

// for our sign in auth
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// for our sign out
export const signOutAuth = () => auth.signOut();
