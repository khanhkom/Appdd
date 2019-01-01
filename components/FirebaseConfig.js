import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBc_aDG5wLvmx52C5Rf5pZvC85bZdbOBA8",
    authDomain: "appdinhduong-ce9bd.firebaseapp.com",
    databaseURL: "https://appdinhduong-ce9bd.firebaseio.com",
    projectId: "appdinhduong-ce9bd",
    storageBucket: "appdinhduong-ce9bd.appspot.com",
    messagingSenderId: "903626590020"
  };
 export const firebaseApp=firebase.initializeApp(config);