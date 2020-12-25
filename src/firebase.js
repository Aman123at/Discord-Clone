import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApMPRF0GttudoVzJBW09D42lI5-82I8uc",
  authDomain: "discord-clone-f0f53.firebaseapp.com",
  databaseURL: "https://discord-clone-f0f53.firebaseio.com",
  projectId: "discord-clone-f0f53",
  storageBucket: "discord-clone-f0f53.appspot.com",
  messagingSenderId: "888604295765",
  appId: "1:888604295765:web:58e270ef86a61fc22d8adc",
  measurementId: "G-N24BVZ5BCL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
