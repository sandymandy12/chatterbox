import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCHirmUEia5eLA5UoqV9UG_0a3fewq_MNo",
  authDomain: "chat-6dfab.firebaseapp.com",
  projectId: "chat-6dfab",
  storageBucket: "chat-6dfab.appspot.com",
  messagingSenderId: "819319722315",
  appId: "1:819319722315:web:5e227c8303cba55c2b58ce",
  measurementId: "G-N03SYT16M3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


export { auth, firestore, analytics }