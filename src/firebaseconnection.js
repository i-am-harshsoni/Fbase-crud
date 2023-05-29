import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// import { getDatabase } from '@firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyA8YnA3YuLoa7ZnwUD-1TMC7-T1RwzaF6k",
    authDomain: "testdb-71c12.firebaseapp.com",
    databaseURL: "https://testdb-71c12-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testdb-71c12",
    storageBucket: "testdb-71c12.appspot.com",
    messagingSenderId: "751561992587",
    appId: "1:751561992587:web:af4dc2150ffb5a6840a78e",
    measurementId: "G-MTVPT9TFM4"
  };
const app = initializeApp(firebaseConfig);
const DataBase = getFirestore(app);
// const Rtimedb = getDatabase(app);
export default DataBase;
