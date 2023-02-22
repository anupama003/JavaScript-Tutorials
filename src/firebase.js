import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDldxaW-_HbfpvMHi5O6q5vm3RRYfmM1xw",
    authDomain: "contact-form-f642d.firebaseapp.com",
    projectId: "contact-form-f642d",
    storageBucket: "contact-form-f642d.appspot.com",
    messagingSenderId: "820443591143",
    appId: "1:820443591143:web:dd1a2aec3e9199996ccd42"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();