// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PROJECT_KEY,
  authDomain: "fern-graphql-tester.firebaseapp.com",
  projectId: "fern-graphql-tester",
  storageBucket: "fern-graphql-tester.appspot.com",
  messagingSenderId: "699366914923",
  appId: "1:699366914923:web:22c26dc2c1791c404c6a2e",
  measurementId: "G-5QMCQXQ0GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);

module.exports = {
  app,
  analytics,
  db,
  auth
}