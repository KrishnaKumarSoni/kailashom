import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

function clean(value: string | undefined, fallback?: string) {
  if (typeof value !== 'string') return fallback;
  return value.replace(/\\r?\\n/g, '').trim() || fallback;
}

const firebaseConfig = {
  apiKey: clean(import.meta.env.VITE_FIREBASE_API_KEY, 'AIzaSyBHiiLY7dTSaT3crd2fJE9WoLomhsHMfcs'),
  authDomain: clean(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, 'kailashom-e0493.firebaseapp.com'),
  projectId: clean(import.meta.env.VITE_FIREBASE_PROJECT_ID, 'kailashom-e0493'),
  storageBucket: clean(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, 'kailashom-e0493.firebasestorage.app'),
  messagingSenderId: clean(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, '941575571443'),
  appId: clean(import.meta.env.VITE_FIREBASE_APP_ID, '1:941575571443:web:47de7c961d3ea157a4b486'),
};

// Basic runtime validation to catch stray newlines or empty projectId early
if (!firebaseConfig.projectId || /\\s/.test(firebaseConfig.projectId)) {
  // eslint-disable-next-line no-console
  console.error('Invalid Firebase projectId in client configuration:', JSON.stringify(firebaseConfig.projectId));
  throw new Error('Invalid Firebase projectId in client configuration. Check VITE_FIREBASE_PROJECT_ID value.');
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
