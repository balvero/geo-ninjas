import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDen9LLH2Z_VFMGuxCuxjZKL1BO_x6BJTw",
  authDomain: "geo-ninjas-ac799.firebaseapp.com",
  databaseURL: "https://geo-ninjas-ac799.firebaseio.com",
  projectId: "geo-ninjas-ac799",
  storageBucket: "geo-ninjas-ac799.appspot.com",
  messagingSenderId: "447146587563"
};

const firebaseApp = firebase.initializeApp(config);

//export firestore database
export default firebaseApp.firestore();
