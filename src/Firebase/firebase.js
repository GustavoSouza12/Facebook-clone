import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTqafT_isNRQa6UoOUWjZfP2kYRt80D90",
    authDomain: "fb-clone-763bc.firebaseapp.com",
    projectId: "fb-clone-763bc",
    storageBucket: "fb-clone-763bc.appspot.com",
    messagingSenderId: "411390709640",
    appId: "1:411390709640:web:ae297c246e376babaab43d",
    measurementId: "G-X6EVSKSRLK"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db