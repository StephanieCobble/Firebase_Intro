import { getAnalytics } from "firebase/analytics";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';  
//'firebase/app'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'; 
//'firebase/auth'
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp ({
    apiKey: "AIzaSyCl9d8Vz-7q_yEvLQx_jvs4xhy0vlZKbks",
    authDomain: "firebasics-325f4.firebaseapp.com",
    projectId: "firebasics-325f4",
    storageBucket: "firebasics-325f4.appspot.com",
    messagingSenderId: "33488874167",
    appId: "1:33488874167:web:221e78c0aaeb49e543bb32",
    measurementId: "G-ZS672YYR4L"
  });

  const auth = getAuth(firebaseApp);
//   const db = getFirestore(firebaseApp); 
//   const todosCol = collection(db, 'todos');
//   const snapshot = await getDocs(todosCol)

  //Detect auth state 
  onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!')
    } else {
        console.log('No user')
    }
  })