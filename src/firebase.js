import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCVvDPcFSxKQ8P5Xhk7tNANhVTCBFNt61A",
    authDomain: "myrestaurant-d873f.firebaseapp.com",
    databaseURL: "https://myrestaurant-d873f.firebaseio.com",
    projectId: "myrestaurant-d873f",
    storageBucket: "myrestaurant-d873f.appspot.com",
    messagingSenderId: "152276403687",
    appId: "1:152276403687:web:b3527fce18952ef94a2942",
    measurementId: "G-2QHTNQV2JY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };