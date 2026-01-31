
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYsfDcHLxydAEMLUTW_oFu52_SMesLdu4",
  authDomain: "maqaseeapp.firebaseapp.com",
  projectId: "maqaseeapp",
  storageBucket: "maqaseeapp.firebasestorage.app",
  messagingSenderId: "733041058542",
  appId: "1:733041058542:web:8a306ea6d6ec50774e89ff",
  measurementId: "G-17WZ2PM4BJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable Offline Persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled in one tab at a time.
    console.warn('Firestore persistence failed: Multiple tabs open');
  } else if (err.code === 'unimplemented') {
    // The current browser does not support all of the features required to enable persistence
    console.warn('Firestore persistence is not supported by this browser');
  }
});
