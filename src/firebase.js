import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCJzcIPk6lRHUobePle1u5P3X_PAJwaTMo",
  authDomain: "fir-72bdf.firebaseapp.com",
  projectId: "fir-72bdf",
  storageBucket: "fir-72bdf.appspot.com",
  messagingSenderId: "998291820530",
  appId: "1:998291820530:web:4cea3855c362b59ea6a56b",
  measurementId: "G-KEF161KS0P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
