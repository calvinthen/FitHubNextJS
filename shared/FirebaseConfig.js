// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXpz-4oCAHr7wAmSNakEXhp0MCWqOjSQk",
  authDomain: "omega-pivot-328705.firebaseapp.com",
  projectId: "omega-pivot-328705",
  storageBucket: "omega-pivot-328705.appspot.com",
  messagingSenderId: "510732340533",
  appId: "1:510732340533:web:c8585238a7504f33d5507c",
  measurementId: "G-36Y97NB2DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  // Initialize Firebase Analytics if in a browser environment
  const analytics = getAnalytics(app);
}

export default app;
