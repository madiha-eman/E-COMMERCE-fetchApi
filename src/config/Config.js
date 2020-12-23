// import * as firebase from 'firebase';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCJWb5OG2innyqlbkZ1S8cyeFNqOghSa3A",
    authDomain: "e-commerce-with-react-ced72.firebaseapp.com",
    projectId: "e-commerce-with-react-ced72",
    storageBucket: "e-commerce-with-react-ced72.appspot.com",
    messagingSenderId: "562880193027",
    appId: "1:562880193027:web:35a8ddca8b48589b4ce436",
    measurementId: "G-MH6NNN6BTF"
  };


  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}


