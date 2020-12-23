import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDzRMkLXNRDz8BAORzmRhvX5kzo01WWB9I",
  authDomain: "ecomnew-f1564.firebaseapp.com",
  projectId: "ecomnew-f1564",
  storageBucket: "ecomnew-f1564.appspot.com",
  messagingSenderId: "122616659103",
  appId: "1:122616659103:web:2079f5549610e8bc6df6aa"
};

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}


