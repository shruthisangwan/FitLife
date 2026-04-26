// Lightweight Firebase configuration helper.
// Replace the REACT_APP_... env vars with your actual Firebase project keys
// or set them in a .env file at the project root (recommended for security).
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1P_J6l8gqDhQNhxuGPr5_b_FW7G2qeFE",
  authDomain: "fitlife-b768d.firebaseapp.com",
  projectId: "fitlife-b768d",
  storageBucket: "fitlife-b768d.firebasestorage.app",
  messagingSenderId: "461237571207",
  appId: "1:461237571207:web:77b55715e6d251e9b93222"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
