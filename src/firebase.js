import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMOWfEtma2O1uCMhtr6ozADr-h5-9H-2I",
  authDomain: "react-slack-clone-40d0a.firebaseapp.com",
  databaseURL: "https://react-slack-clone-40d0a.firebaseio.com",
  projectId: "react-slack-clone-40d0a",
  storageBucket: "react-slack-clone-40d0a.appspot.com",
  messagingSenderId: "663203630718",
  appId: "1:663203630718:web:daefd2c620e8d0ce93d22f",
  measurementId: "G-9KJJ5WJ2TC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
