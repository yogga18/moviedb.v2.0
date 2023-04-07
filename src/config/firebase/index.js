import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'; // for analytics tracking
import { getAuth, GoogleAuthProvider } from 'firebase/auth'; // for authentication
import { getDatabase } from 'firebase/database'; // for realtime database
import { getFirestore } from 'firebase/firestore'; // for cloud firestore

const firebaseConfig = {
  apiKey: 'AIzaSyCnfwEemkYrsxdLybUqPiRHm0M-SMEK2gU',
  authDomain: 'moviedb-v2-e9d6a.firebaseapp.com',
  projectId: 'moviedb-v2-e9d6a',
  storageBucket: 'moviedb-v2-e9d6a.appspot.com',
  messagingSenderId: '641847897245',
  appId: '1:641847897245:web:d0dad5e3ba3d19ffcaf874',
  measurementId: 'G-041KXMVMQR',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
