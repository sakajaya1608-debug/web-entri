// Firebase SDK v10.7.0 (modular, via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPnBWFs2at01ZWWvUQzy2K_PX7_tSxXmU",
  authDomain: "sakajaya-af9d5.firebaseapp.com",
  databaseURL: "https://sakajaya-af9d5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sakajaya-af9d5",
  storageBucket: "sakajaya-af9d5.firebasestorage.app",
  messagingSenderId: "683589995569",
  appId: "1:683589995569:web:c81c6d37c16f4753731910"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
