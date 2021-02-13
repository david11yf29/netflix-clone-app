import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1B1CJOen_wpU7RdsSkBBVmPxJfQvb_V0",
  authDomain: "netflix-clone-yt-4bdfa.firebaseapp.com",
  projectId: "netflix-clone-yt-4bdfa",
  storageBucket: "netflix-clone-yt-4bdfa.appspot.com",
  messagingSenderId: "889054173176",
  appId: "1:889054173176:web:2f2cb536aca9c5145ea80d",
  measurementId: "G-ZE9FTQ8QHH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
