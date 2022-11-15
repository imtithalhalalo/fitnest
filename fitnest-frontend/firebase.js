import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBTh_PCzFBAQzWH8U3byxs-EPycVT8R858",
    authDomain: "fitnest-95d00.firebaseapp.com",
    projectId: "fitnest-95d00",
    storageBucket: "fitnest-95d00.appspot.com",
    messagingSenderId: "209270723183",
    appId: "1:209270723183:web:bb8809a9b8e5ee09fef39a",
    measurementId: "G-TNV7QG10JV"
};

const app = initializeApp(firebaseConfig);

//initializing servive
const database = getFirestore(app);

export { database }