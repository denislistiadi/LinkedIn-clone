import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApI1fGxCL1rS9BjwtMFGV66PnUfC2Xxec",
    authDomain: "linkedin-clone-2fb2c.firebaseapp.com",
    projectId: "linkedin-clone-2fb2c",
    storageBucket: "linkedin-clone-2fb2c.appspot.com",
    messagingSenderId: "534112529452",
    appId: "1:534112529452:web:f75a4d346901cf22617589"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };