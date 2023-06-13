import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCmv06UabPZtx9904skgw1vLRkZgo08Ef4",
  authDomain: "cars-swh.firebaseapp.com",
  projectId: "cars-swh",
  storageBucket: "cars-swh.appspot.com",
  messagingSenderId: "845055439939",
  appId: "1:845055439939:web:0bd7fd0917a9e1178010f6",
  measurementId: "G-F466M28JMZ",
};

const app = initializeApp(firebaseConfig);
export default app;
