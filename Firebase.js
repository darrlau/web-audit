import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "regenerator-runtime/runtime";
import "firebase/storage";

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
export const storage = firebase.storage();

window.firebase = firebase;

// this is to help bring in the additionalData they supplied (displayName, etc) and hook into firebase
export const createUserProfileDocument = async (user, additionalData) => {
  // only call this if someone just signed up and is logged in
  if (!user) return;

  // this is likely the reference of where they're at in the database
  const userRef = firestore.doc(`users/${user.uid}`);

  // go and return the document from that location
  const snapshot = await userRef.get();

  // if it doesn't exist, create it!
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error, "our error creating it!");
    }
  }

  // now go GET that USER document
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;

  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.log(error, "our error getting it!");
  }
};

export default firebaseConfig;
export const auth = firebase.auth();

// for our sign in auth
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// for our sign out
export const signOutAuth = () => auth.signOut();
