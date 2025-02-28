// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDItlto9w4HpeNj_NLjCoE6FwWyRoCs7DU",
  authDomain: "fraudshield-3ace2.firebaseapp.com",
  projectId: "fraudshield-3ace2",
  storageBucket: "fraudshield-3ace2.firebasestorage.app",
  messagingSenderId: "290834797736",
  appId: "1:290834797736:web:008548ea2c850aa7915e9d",
  measurementId: "G-SZ6F42XZNZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);