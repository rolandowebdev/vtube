// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtVn8GR1isl17dHZIptDns2NUqSaslyAE',
  authDomain: 'video-dbccc.firebaseapp.com',
  projectId: 'video-dbccc',
  storageBucket: 'video-dbccc.appspot.com',
  messagingSenderId: '427849578856',
  appId: '1:427849578856:web:6ba0b5e29565a630e8fedd'
  //   measurementId: 'G-ZEC559K29F'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
