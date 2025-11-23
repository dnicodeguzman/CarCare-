import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDO7oLIwZJtxk_YhaV3UZuhMtpqr7aJzq8",
  authDomain: "fireproject-9e55a.firebaseapp.com",
  databaseURL: "https://fireproject-9e55a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fireproject-9e55a",
  storageBucket: "fireproject-9e55a.firebasestorage.app",
  messagingSenderId: "1011901116858",
  appId: "1:1011901116858:web:b412695b7256ec9a996d83"
};



const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
