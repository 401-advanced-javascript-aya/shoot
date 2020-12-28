import * as firebase from 'firebase';
import '@firebase/firestore';
import '@firebase/storage';
var firebaseConfig = {
  apiKey: 'AIzaSyCRaRri7RBRxfRPrtLj8iIwAQ2rqXk-pfA',
  authDomain: 'shoot-malek-aya.firebaseapp.com',
  projectId: 'shoot-malek-aya',
  storageBucket: 'shoot-malek-aya.appspot.com',
  messagingSenderId: '1001583564950',
  appId: '1:1001583564950:web:ac11c4c484703d14368ab7',
  measurementId: 'G-HZLWSNERPH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
