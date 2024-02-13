
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApNQsmRVcEiCMP6QVrWmQTwhRRRk7QZFM",
  authDomain: "netflixgpt-915.firebaseapp.com",
  projectId: "netflixgpt-915",
  storageBucket: "netflixgpt-915.appspot.com",
  messagingSenderId: "876534054137",
  appId: "1:876534054137:web:5af64c6cfff9920cec3628",
  measurementId: "G-4E17KYKT5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();