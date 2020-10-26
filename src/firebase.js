import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCILYLOo3gyb2Hl0ESMstVYdX-B7sLD0uM",
  authDomain: "dj-amaz-portfoliyo.firebaseapp.com",
  databaseURL: "https://dj-amaz-portfoliyo.firebaseio.com",
  projectId: "dj-amaz-portfoliyo",
  storageBucket: "dj-amaz-portfoliyo.appspot.com",
  messagingSenderId: "804251511758",
  appId: "1:804251511758:web:ea9e62a20285cb82a3599f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };