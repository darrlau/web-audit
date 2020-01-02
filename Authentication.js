import firebase from "firebase/app";
import "firebase/firestore";

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
firebase.analytics();

export const firestore = firebase.firestore();

export default firebaseConfig;
