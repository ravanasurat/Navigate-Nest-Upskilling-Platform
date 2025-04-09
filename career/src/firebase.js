import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAowU-m44wLjkkaylw2saUdLaIH34t1bHY",
  authDomain: "navigator-nest.firebaseapp.com",
  projectId: "navigator-nest",
  storageBucket: "navigator-nest.firebasestorage.app",
  messagingSenderId: "845846815980",
  appId: "1:845846815980:web:ffbbf8e24219d7a04f31c9",
  measurementId: "G-ZT62Q5QRSC"
};
const app = initializeApp(firebaseConfig);

export default app;