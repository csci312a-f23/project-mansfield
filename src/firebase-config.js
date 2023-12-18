import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "project-mansfield-60c83.firebaseapp.com",
  databaseURL: "https://project-mansfield-60c83-default-rtdb.firebaseio.com",
  projectId: "project-mansfield-60c83",
  storageBucket: "project-mansfield-60c83.appspot.com",
  messagingSenderId: "1046341940001",
  appId: "1:1046341940001:web:6be8196a6a61c6d9458460",
  measurementId: "G-HCXEKCKJT9",
};

const app = initializeApp(firebaseConfig);

export default app;
