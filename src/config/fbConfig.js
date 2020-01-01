import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCzl4N4kkOS72_D_2HdPrh-8rNkaVQFn00',
  authDomain: 'twitter-ee5a2.firebaseapp.com',
  databaseURL: 'https://twitter-ee5a2.firebaseio.com',
  projectId: 'twitter-ee5a2',
  storageBucket: 'twitter-ee5a2.appspot.com',
  messagingSenderId: '476813097810',
  appId: '1:476813097810:web:c86397f31b67fdd8fcd88b',
  measurementId: 'G-ZCD90L6YDE'
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
