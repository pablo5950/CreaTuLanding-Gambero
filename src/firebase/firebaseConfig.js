import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6wJjhlmT7KF2wAxryZWpw72RTOE48KTY",
  authDomain: "ecommerce-gambero.firebaseapp.com",
  projectId: "ecommerce-gambero",
  storageBucket: "ecommerce-gambero.firebasestorage.app",
  messagingSenderId: "223584866913",
  appId: "1:223584866913:web:2ae0e7123942b5968b5020"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
