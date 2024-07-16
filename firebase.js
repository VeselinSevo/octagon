import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDo5CtsGj954niiRLFY9x6bmBMDia9Q4gE",
    authDomain: "hexagon-69216.firebaseapp.com",
    projectId: "hexagon-69216",
    storageBucket: "hexagon-69216.appspot.com",
    messagingSenderId: "464703559580",
    appId: "1:464703559580:web:09f4cc37aa83301bd91a59",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
