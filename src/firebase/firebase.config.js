import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3TXmN_VzaGlIeZxwQcn3EbPNeyDywQv4",
  authDomain: "coffeeandcode-222ca.firebaseapp.com",
  projectId: "coffeeandcode-222ca",
  storageBucket: "coffeeandcode-222ca.appspot.com",
  messagingSenderId: "742021310109",
  appId: "1:742021310109:web:8170283fa5eccda4ff5674",
  measurementId: "G-CJ76QJKC3J"
};
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
const analytics = getAnalytics(app);