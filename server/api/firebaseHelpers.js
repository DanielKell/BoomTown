//Move this into correct place

import * as firebase from "firebase";


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWffBz_WDtelIh_FUuRZQ_g0NgjieUiHU",
    authDomain: "boomtown-8745c.firebaseapp.com",
    databaseURL: "https://boomtown-8745c.firebaseio.com",
    projectId: "boomtown-8745c",
    storageBucket: "",
    messagingSenderId: "250623409233"
  };
  firebase.initializeApp(config);
  const firebaseDB = firebase.database();

export const getUser = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
        firebaseDB.ref(`/users/${id}`).once('value')
        .then((snapshot) => {
            console.log(snapshot.val());
            resolve({
                ...snapshot.val(),
                id: id //Is this correct? Match to graphql schema
            });
        })
        .catch(error => console.log(error));
    });
};

export const getUsers = () => (
    new Promise((resolve) => {
        firebaseDB.ref('/users').once('value').then((snapshot) => {
            const userList = [];
            const users = snapshot.val();

            Object.keys(users)
            .forEach(id => userList.push({ ...user[id], id}));

            resolve(userList);
        })
        .catch(error => console.log(error));
    })
);

