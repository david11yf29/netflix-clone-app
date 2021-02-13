import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIOjKMhqMwZOpWrp_xzFEIR0g86Uklq3A",
  authDomain: "netflix-clone-app-b22fe.firebaseapp.com",
  projectId: "netflix-clone-app-b22fe",
  storageBucket: "netflix-clone-app-b22fe.appspot.com",
  messagingSenderId: "1048125490272",
  appId: "1:1048125490272:web:c192502fc90a133239af05",
  measurementId: "G-RTBTS9W3H0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
