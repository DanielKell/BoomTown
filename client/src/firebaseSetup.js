  import * as firebase from 'firebase';
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAWffBz_WDtelIh_FUuRZQ_g0NgjieUiHU",
    authDomain: "boomtown-8745c.firebaseapp.com",
    databaseURL: "https://boomtown-8745c.firebaseio.com",
    projectId: "boomtown-8745c",
    storageBucket: "",
    messagingSenderId: "250623409233"
  };
  firebase.initializeApp(config);

  export default firebase;