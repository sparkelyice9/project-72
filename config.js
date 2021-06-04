import  firebase from 'firebase'
require('@firebase/firestore')

  const firebaseConfig = {
  apiKey: "AIzaSyCTzi5X9D0Nwr39Rm6mZ9jrReC9v4wumUY",
  authDomain: "project-71-398d6.firebaseapp.com",
  projectId: "project-71-398d6",
  storageBucket: "project-71-398d6.appspot.com",
  messagingSenderId: "439273044443",
  appId: "1:439273044443:web:603f62b94c0ad8155acffe"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
  